import * as THREE from "three";
import {GLTFLoader} from "jsm/loaders/GLTFLoader.js";
import {OrbitControls} from "jsm/controls/OrbitControls.js";
import {TextGeometry} from "jsm/geometries/TextGeometry.js";
import {FontLoader} from "jsm/loaders/FontLoader.js";

// IK / input helpers
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
var headBone = null;
var leftHandBone = null;
var rightHandBone = null;
var leftUpperArm = null;
var leftForeArm = null;
var rightUpperArm = null;
var rightForeArm = null;
var leftUpperDefault = null;
var rightUpperDefault = null;
const ikSlerp = 0.25; // smoothing factor for bone rotation


const aboutMeText = "Hi, I'm Artem - game designer, programmer and a gamer."
+ "\nI feel like you can't make games without playing them. And just as much you can't keep playing cool indie titles without getting an itch to make something of your own"
+ "\nif you have any questions, want to chat about game development or just want to say hi, feel free to reach out";

function applyLookAtToBone(bone, targetWorld, slerpFactor = 1.0, correctionAngle = 0) {
    if (!bone || !targetWorld) return;
    const boneWorldPos = new THREE.Vector3();
    bone.getWorldPosition(boneWorldPos);

    const parent = bone.parent;
    if (!parent) return;

    // Build a lookAt matrix in world-space where the bone position is the eye.
    const m = new THREE.Matrix4();
    // Use parent's up if available so the rotation is consistent with parent orientation.
    const parentUp = parent.up ? parent.up : new THREE.Vector3(0, -1, 0);
    m.lookAt(boneWorldPos, targetWorld, parentUp);
    const targetQuatWorld = new THREE.Quaternion().setFromRotationMatrix(m);

    // Some rigs have the bone 'forward' along a different local axis than Three.js' -Z used by lookAt.
    // If the bone appears to face the opposite direction, flip around the bone's up axis (in world space).
    // Compute bone.up in world space using parent's world rotation.
    const parentWorldQuat = new THREE.Quaternion();
    parent.getWorldQuaternion(parentWorldQuat);
    const boneUpWorld = bone.up.clone().applyQuaternion(parentWorldQuat).normalize();
    const flipQuat = new THREE.Quaternion().setFromAxisAngle(boneUpWorld, Math.PI);
    targetQuatWorld.multiply(flipQuat);

    // Convert world-space target quaternion into the bone's local space
    parentWorldQuat.invert();
    const localQuat = parentWorldQuat.multiply(targetQuatWorld);

    // apply small local-space rotation correction if requested (to match rig's forward axis)
    if (correctionAngle && correctionAngle !== 0) {
        const extra = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), correctionAngle);
        localQuat.multiply(extra);
    }

    bone.quaternion.slerp(localQuat, slerpFactor);
}

window.addEventListener('mousemove', (ev) => {
    mouse.x = (ev.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(ev.clientY / window.innerHeight) * 2 + 1;
});

// Click handler (spheres + modal)
window.addEventListener('click', () => {
    // If modal is active, allow it to handle clicks first
    if (modalVisible && modalGroup) {
        raycaster.setFromCamera(mouse, camera);

        // If modal is open, allow clicking the "Random Cool Game" sphere to regenerate the game.

        const hits = raycaster.intersectObjects([modalPlane], true);
        if (hits.length === 0) {
            // Clicked outside modal, ignore other scene clicks
            return;
        }

        const hit = hits[0];
        if (hit.object === modalPlane) {
            // Determine where on the modal the click occurred (button region only)
            const uv = hit.uv;
            if (uv) {
                const px = uv.x * modalCanvas.width;
                const py = (1 - uv.y) * modalCanvas.height; // invert Y (canvas is top-down)
                const buttonRect = { x: 50, y: 400, w: 240, h: 60 };
                if (px >= buttonRect.x && px <= buttonRect.x + buttonRect.w && py >= buttonRect.y && py <= buttonRect.y + buttonRect.h) {
                    if (modalUrl) window.open(modalUrl, '_blank');
                    return; // keep modal open if link clicked
                }
            }
            // clicking anywhere else on the modal closes it
            hide3DModal();
            return;
        }
    }

    if (!hoveredSphere) return;

    const index = spheres.indexOf(hoveredSphere);
    console.log('Clicked on sphere:', sphereNames[index]);

    switch (sphereNames[index]) {
        case 'About ME':
            show3DModal('Artem \'Zuit\' Timofeev', aboutMeText, "https://mailto:zootziot@gmail.com", "email me!", null);
            break;
        case 'Contact ME':
            window.open('https://mailto:zootziot@gmail.com', '_blank');
            break;
        case 'MY Projects':
            window.open('https://zuitsuit.itch.io/', '_blank');
            break;
        case 'Idea Fix':
            window.open('https://store.steampowered.com/app/3023620/Idea_Fix/', '_blank');
            break;
        case 'Random Cool Game':
            const game = getRandomSteamGame();
            show3DModal(game.name, game.description, game.url, game.image);
            break;
        case 'FAQ':
            // TODO: show FAQ modal
            break;
        default:
            break;
    }
});

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1);
const w = window.innerWidth;
const h = window.innerHeight;

const FOV = 75;
const aspect = w/h;
const near = .5;
const far = 1000;

renderer.setSize(w, h);

document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(FOV, aspect, near, far);
camera.position.z = 50
const scene = new THREE.Scene();

const geo = new THREE.IcosahedronGeometry(6.0, 1);
const mat = new THREE.MeshToonMaterial
(
    {color: "green", wireframe: true}
);

const loader = new GLTFLoader();
var model = null;
var childMesh = null;
var rotTarget = null;
var controls = null;
var spheres = [];
var hoveredSphere = null;
var headText = null;
var sphereText = null;
var font = null;
var fontLoader = null;
const sphereNames = ['About ME', 'Contact ME', 'MY Projects', 'Idea Fix', 'Random Cool Game', 'FAQ'];

// Random Steam game list (name + link + custom description)
const steamGames = [
    {
        name: 'Hades',
        url: 'https://store.steampowered.com/app/1145360/Hades/',
        description: 'A fast-paced rogue-like dungeon crawler where you battle out of the Underworld.',
        image: null
    },
    {
        name: 'Return of the Obra Dinn',
        url: 'https://store.steampowered.com/app/653530/Return_of_the_Obra_Dinn/',
        description: 'A mystery where you reconstruct events on a lost ship using deduction and a unique 1-bit art style.',
        image: null
    },
];

function getRandomSteamGame() {
    if (!steamGames || steamGames.length === 0) return null;
    const idx = Math.floor(Math.random() * steamGames.length);
    return steamGames[idx];
}


// 3D modal in the Three.js scene
var modalGroup = null;
var modalCanvas = null;
var modalTexture = null;
var modalPlane = null;
var modalOutline = null;
var modalUrl = '';
var modalVisible = false;
var modalImageUrl = null;
var modalImage = null;
var modalHideTime = 0;
var modalFlying = false;
var modalTargetPos = new THREE.Vector3();
var modalStartPos = new THREE.Vector3();
var modalVelocity = new THREE.Vector3();

function create3DModal() {
    if (modalGroup) return;

    modalCanvas = document.createElement('canvas');
    modalCanvas.width = 1024;
    modalCanvas.height = 512;
    const ctx = modalCanvas.getContext('2d');

    modalTexture = new THREE.CanvasTexture(modalCanvas);
    modalTexture.minFilter = THREE.LinearFilter;
    modalTexture.generateMipmaps = false;

    const planeGeom = new THREE.PlaneGeometry(6, 3);
    const planeMat = new THREE.MeshBasicMaterial({ map: modalTexture, transparent: true, opacity: 0.95 });
    modalPlane = new THREE.Mesh(planeGeom, planeMat);
    modalPlane.position.set(0, 0, 0);

    const outlineGeom = new THREE.PlaneGeometry(6.25, 3.25);
    const outlineMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.15 });
    modalOutline = new THREE.Mesh(outlineGeom, outlineMat);
    modalOutline.position.set(0, 0, 0.02);
    // Prevent the outline from capturing click raycasts
    modalOutline.raycast = () => {};

    modalGroup = new THREE.Group();
    modalGroup.add(modalPlane);
    modalGroup.add(modalOutline);
    modalGroup.visible = false;
    scene.add(modalGroup);

    updateModalCanvas('empty modal', 'empty modal', 'empty modal', 'empty modal', null, true);
}

function updateModalCanvas(title, description, url, urlText, imageUrl = null, init = false) {
    if (!modalCanvas) return;
    const ctx = modalCanvas.getContext('2d');
    ctx.clearRect(0, 0, modalCanvas.width, modalCanvas.height);

    // background
    ctx.fillStyle = 'rgba(10, 10, 10, 0.95)';
    ctx.fillRect(0, 0, modalCanvas.width, modalCanvas.height);

    // glass-style background + subtle border
    ctx.save();
    ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.lineWidth = 4;
    ctx.beginPath();
    const r = 24;
    const w = modalCanvas.width;
    const h = modalCanvas.height;
    ctx.moveTo(16 + r, 16);
    ctx.lineTo(w - 16 - r, 16);
    ctx.quadraticCurveTo(w - 16, 16, w - 16, 16 + r);
    ctx.lineTo(w - 16, h - 16 - r);
    ctx.quadraticCurveTo(w - 16, h - 16, w - 16 - r, h - 16);
    ctx.lineTo(16 + r, h - 16);
    ctx.quadraticCurveTo(16, h - 16, 16, h - 16 - r);
    ctx.lineTo(16, 16 + r);
    ctx.quadraticCurveTo(16, 16, 16 + r, 16);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    // draw capsule image if available
    if (imageUrl) {
        if (!modalImage || modalImageUrl !== imageUrl) {
            modalImageUrl = imageUrl;
            modalImage = new Image();
            modalImage.crossOrigin = 'Anonymous';
            modalImage.onload = () => {
                updateModalCanvas(title, description, url, urlText, imageUrl, init);
            };
            modalImage.src = imageUrl;
        }
        if (modalImage && modalImage.complete) {
            const iw = 360;
            const ih = 240;
            ctx.drawImage(modalImage, 50, 80, iw, ih);
        }
    }

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 60px system-ui';
    ctx.fillText(title, 50, 70);

    ctx.font = '28px system-ui';
    const textX = imageUrl ? 450 : 50;
    const maxWidth = imageUrl ? 520 : 900;
    const lines = wrapText(ctx, description, maxWidth);
    lines.forEach((line, i) => ctx.fillText(line, textX, 150 + i * 36));

    // draw button area
    ctx.fillStyle = '#5e1281';
    ctx.fillRect(50, 400, 240, 60);
    ctx.fillStyle = '#ffffff';
    ctx.font = '28px system-ui';
    ctx.fillText(urlText, 70, 442);

    modalTexture.needsUpdate = true;

    modalUrl = url;
}


function wrapText(ctx, text, maxWidth) {
    //const words = text.split(' ');
    const lines = [];
    let line = '';

    const words = text.split(' ');

    for (const word of words) {
        
        const testLine = line + word + ' ';
        const metrics = ctx.measureText(testLine);
        if (metrics.width > maxWidth && line !== '') {
            lines.push(line);
            line = word + ' ';
        } else {
            line = testLine;
        }
    }
    if (line) lines.push(line);
    return lines;
}

async function show3DModal(title, description, url, urlText, imageUrl = null) {
    create3DModal();
    modalUrl = url;

    // start with modal content
    updateModalCanvas(title, description, url, urlText, imageUrl, true);
    modalGroup.visible = true;
    modalVisible = true;

    // position in front of camera
    const dir = new THREE.Vector3();
    camera.getWorldDirection(dir);
    modalGroup.position.copy(camera.position).add(dir.multiplyScalar(5));
    modalGroup.quaternion.copy(camera.quaternion);

    // set up hide timer
    modalHideTime = performance.now() + 20000;
    modalFlying = false;
}

function hide3DModal() {
    if (!modalGroup) return;
    modalGroup.visible = false;
    modalVisible = false;
}


function loadEverything() {
  return Promise.all([
  loader.loadAsync('zuit_model.glb'),
  loader.loadAsync('tornadoBall.glb'),
  loader.loadAsync('questionmark.glb'),
  loader.loadAsync('ifThing.glb'),
]).then((results) => {
  // here the models are returned in deterministic order
  const [zuit, tornadoBall, questionMark,ifThing] = results;
        
        const zuitModel = zuit.scene;
        const questionMarkModel = questionMark.scene;
        const tornadoBallModel = tornadoBall.scene;
        const ifThingModel = ifThing.scene;

ifThingModel.scale.setScalar(0.15);

        //scene.add(questionMarkModel);
        //scene.add(tornadoBallModel);
        //scene.add(ifThingModel);


        
        /*questionMarkModel.traverse((child) => 
            {
                if (child.isMesh) {
                    child.material = new THREE.MeshStandardMaterial({ color: "yellow" });
                    child.castShadow = false;
                    child.receiveShadow = false;
                    child.position.set(-5, 0, 0);    
                }
            }); */
    

//create materials and apply to meshes


        if (!zuitModel) {
            console.error('No scene found in GLTF:', zuit);
            return;
        }

            const texLoader = new THREE.TextureLoader();
            const albedoTex = texLoader.load('zuit_albedo.jpg');
            const normalTex = texLoader.load('zuit_normal.png', undefined, undefined, () => { /* ignore */ });

            // GLTF UVs expect no vertical flip for externally-loaded textures
            albedoTex.flipY = false;
            albedoTex.encoding = THREE.sRGBEncoding;
            if (normalTex) normalTex.flipY = true;

        zuitModel.traverse((child) => {
            // collect bones (Bone nodes) and skeleton bones
            if (child.type === 'Bone' || child.isBone) {
                const lname = (child.name || '').toLowerCase();
                if (lname.includes('head') && !headBone) headBone = child;

                // Hardcoded shoulder ids to avoid mis-detection (common mixamo names)
                const leftShoulderIds = ['mixamorigleftshoulder', 'mixamorigleftarm', 'leftshoulder', 'shoulder_l', 'shoulder.l', 'left_shoulder', 'l_shoulder'];
                const rightShoulderIds = ['mixamorigrightshoulder', 'mixamorigrightarm', 'rightshoulder', 'shoulder_r', 'shoulder.r', 'right_shoulder', 'r_shoulder'];

                if (leftShoulderIds.includes(lname) && !leftUpperArm) leftUpperArm = child;
                if (rightShoulderIds.includes(lname) && !rightUpperArm) rightUpperArm = child;

                // safer left/right detection: check explicit tokens rather than single trailing letters
                const isLeft = lname.includes('left') || lname.includes('_l') || lname.includes('.l') || lname.includes('-l') || lname === 'l_arm' || lname === 'l';
                const isRight = lname.includes('right') || lname.includes('_r') || lname.includes('.r') || lname.includes('-r') || lname === 'r_arm' || lname === 'r';

                if (isLeft) {
                    if ((lname.includes('upperarm') || lname.includes('upper_arm') || lname.includes('shoulder') || lname.includes('clavicle') || lname === 'l_arm') && !leftUpperArm) leftUpperArm = child;
                    if ((lname.includes('forearm') || lname.includes('lowerarm') || lname.includes('lower_arm')) && !leftForeArm) leftForeArm = child;
                    if ((lname.includes('hand') || lname.includes('wrist')) && !leftHandBone) leftHandBone = child;
                }

                if (isRight) {
                    if ((lname.includes('upperarm') || lname.includes('upper_arm') || lname.includes('shoulder') || lname.includes('clavicle') || lname === 'r_arm') && !rightUpperArm) rightUpperArm = child;
                    if ((lname.includes('forearm') || lname.includes('lowerarm') || lname.includes('lower_arm')) && !rightForeArm) rightForeArm = child;
                    if ((lname.includes('hand') || lname.includes('wrist')) && !rightHandBone) rightHandBone = child;
                }
            }

            if (child.isSkinnedMesh && child.skeleton) {
                child.skeleton.bones.forEach(b => {
                    const lname = (b.name || '').toLowerCase();
                    if (lname.includes('head') && !headBone) headBone = b;

                    const leftShoulderIds = ['mixamorigleftshoulder', 'mixamorigleftarm', 'leftshoulder', 'shoulder_l', 'shoulder.l', 'left_shoulder', 'l_shoulder'];
                    const rightShoulderIds = ['mixamorigrightshoulder', 'mixamorigrightarm', 'rightshoulder', 'shoulder_r', 'shoulder.r', 'right_shoulder', 'r_shoulder'];

                    if (leftShoulderIds.includes(lname) && !leftUpperArm) leftUpperArm = b;
                    if (rightShoulderIds.includes(lname) && !rightUpperArm) rightUpperArm = b;

                    const isLeft = lname.includes('left') || lname.includes('_l') || lname.includes('.l') || lname.includes('-l') || lname === 'l_arm' || lname === 'l';
                    const isRight = lname.includes('right') || lname.includes('_r') || lname.includes('.r') || lname.includes('-r') || lname === 'r_arm' || lname === 'r';

                    if (isLeft) {
                        if ((lname.includes('upperarm') || lname.includes('upper_arm') || lname.includes('shoulder') || lname.includes('clavicle') || lname === 'l_arm') && !leftUpperArm) leftUpperArm = b;
                        if ((lname.includes('forearm') || lname.includes('lowerarm') || lname.includes('lower_arm')) && !leftForeArm) leftForeArm = b;
                        if ((lname.includes('hand') || lname.includes('wrist')) && !leftHandBone) leftHandBone = b;
                    }

                    if (isRight) {
                        if ((lname.includes('upperarm') || lname.includes('upper_arm') || lname.includes('shoulder') || lname.includes('clavicle') || lname === 'r_arm') && !rightUpperArm) rightUpperArm = b;
                        if ((lname.includes('forearm') || lname.includes('lowerarm') || lname.includes('lower_arm')) && !rightForeArm) rightForeArm = b;
                        if ((lname.includes('hand') || lname.includes('wrist')) && !rightHandBone) rightHandBone = b;
                    }
                });
            }

            if (child.isMesh) {
                console.log('Found a mesh:', child.name);
                if (!childMesh) childMesh = child;
                const newMaterial = new THREE.MeshStandardMaterial({ map: albedoTex, normalMap: normalTex });
                child.material = newMaterial;
                child.castShadow = true;
                child.receiveShadow = true;
            }
        });

        // make model smaller
        zuitModel.scale.setScalar(0.5);

        // store defaults for arm rest pose
        if (leftUpperArm) leftUpperDefault = leftUpperArm.quaternion.clone();
        if (rightUpperArm) rightUpperDefault = rightUpperArm.quaternion.clone();

        scene.add(zuitModel);

        // Create 6 spheres around the model at the targeting plane level
        const sphereGeometry = new THREE.SphereGeometry(0.5, 16, 16);
        const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const sphereBox = new THREE.Box3().setFromObject(zuitModel);
        const ssize = sphereBox.getSize(new THREE.Vector3()).length();
        const scenter = sphereBox.getCenter(new THREE.Vector3());
        const radius = ssize * 1.5; // spread around the model
        const planeZ = scenter.z + 2; // same as targeting plane

        for (let i = 0; i < 6; i++) {
            const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial.clone());
            const side = (i % 2) ? 1 : -1;
            sphere.position.set(side * 3 , parseInt(i/2)*2, 2);
            spheres.push(sphere);
            scene.add(sphere);
        }
        fontLoader = new FontLoader();

        fontLoader.load(
            'https://threejs.org/examples/fonts/helvetiker_regular.typeface.json',
            (loadedFont) => {
                font = loadedFont;
                // Create text above head
                const headTextGeometry = new TextGeometry('Z U I T', {
                    font: font,
                    size: 0.5,
                    height: 0.1,
                    curveSegments: 12,
                    bevelEnabled: false
                });

                const headTextMaterial = new THREE.MeshStandardMaterial({ color: "red" });
                headText = new THREE.Mesh(headTextGeometry, headTextMaterial);

                if (headBone) {
                    const headPos = new THREE.Vector3();
                    headBone.getWorldPosition(headPos);
                    headText.position.copy(headPos).add(new THREE.Vector3(-1, 2, 0));
                    headBone.add(headText);
                }
                scene.add(headText);

                // Create hidden text for spheres
                const sphereTextGeometry = new TextGeometry('', {
                    font: font,
                    size: 0.3,
                    height: 0.05,
                    curveSegments: 12,
                    bevelEnabled: false
                });
                const sphereTextMaterial = new THREE.MeshStandardMaterial({ color: "red" });
                sphereText = new THREE.Mesh(sphereTextGeometry, sphereTextMaterial);
                sphereText.visible = false;
                scene.add(sphereText);
            }
        );

        // rotate the whole model for predictable behavior
        // set initial camera to frame the model
        const box = new THREE.Box3().setFromObject(zuitModel);
        const size = box.getSize(new THREE.Vector3()).length();
        const center = box.getCenter(new THREE.Vector3());
        camera.position.copy(center.clone().add(new THREE.Vector3(0, 0, size * 5.5)));
        camera.lookAt(center);

        // OrbitControls to look around the scene
        controls = new OrbitControls(camera, renderer.domElement);
        controls.target.copy(center);
        controls.update();

        // expose rotTarget for animation
        rotTarget = model;
        animate();
}).catch((err) => {
  console.log(err);
});
}

loadEverything();

//add loading bar


// Use THREE.Clock to get delta time in seconds (framerate independent)
const clock = new THREE.Clock();

const light = new THREE.HemisphereLight("purple", "green", 6.0);
scene.add(light);

const mesh = new THREE.Mesh(geo, mat);
scene.add(mesh);
mesh.position.set(0, 2, 0);

function animate(){
    requestAnimationFrame(animate);
    const delta = clock.getDelta(); // seconds since last frame
    const rotationSpeed = 0.05; // radians per second
    rotTarget = mesh;
    // rotate the loaded model (if any)
    if (rotTarget) {
        rotTarget.rotation.y += delta * rotationSpeed;
        // optional pulsate on first child
        if (childMesh) childMesh.scale.setScalar(1.0 + 0.1 * Math.sin(clock.elapsedTime * 1.0));

        // compute a target point in front of the model based on mouse
        const box = new THREE.Box3().setFromObject(rotTarget);
        const center = box.getCenter(new THREE.Vector3());
        center.z += 2;
        //camera.getWorldDirection(camDir);
        //const normalVector = camDir.clone().negate();
        //normalVector.y *= -1; // invert X to match typical UV orientation
        const plane = new THREE.Plane().setFromNormalAndCoplanarPoint(new THREE.Vector3(0, 0, 1), center);
        raycaster.setFromCamera(mouse, camera);
        const targetPoint = new THREE.Vector3();
        if (raycaster.ray.intersectPlane(plane, targetPoint)) {
            // Check for sphere hover
            const intersects = raycaster.intersectObjects(spheres);
            let newHovered = null;
            if (intersects.length > 0) {
                newHovered = intersects[0].object;
            }
            if (newHovered !== hoveredSphere) {
                if (hoveredSphere) {
                    hoveredSphere.material.color.setHex(0xffffff); // back to white
                }
                if (newHovered) {
                    newHovered.material.color.setHex(0xff0000); // red
                    // Update text
                    const index = spheres.indexOf(newHovered);
                    if (sphereText && font) {
                        sphereText.geometry.dispose();
                        sphereText.geometry = new TextGeometry(sphereNames[index], {
                            font: font,
                            size: 0.3,
                            height: 0.05,
                            curveSegments: 12,
                            bevelEnabled: false
                        });
                    }
                }
                hoveredSphere = newHovered;
            }

            // Update sphere text position
            if (sphereText) {
                if (hoveredSphere) {
                    sphereText.position.copy(hoveredSphere.position).add(new THREE.Vector3(0, 1, 0));
                    sphereText.visible = true;
                } else {
                    sphereText.visible = false;
                    // Reset text to empty
                    if (font) {
                        sphereText.geometry.dispose();
                        sphereText.geometry = new TextGeometry('', {
                            font: font,
                            size: 0.3,
                            height: 0.05,
                            curveSegments: 12,
                            bevelEnabled: false
                        });
                    }
                }
            }

            // head follows cursor smoothly
            if (headBone) applyLookAtToBone(headBone, targetPoint, ikSlerp);

            // arms: decide aiming based on target's world X relative to model center, with a dead zone
            const sizeVec = box.getSize(new THREE.Vector3());
            const worldDeadZone = 1;
            const dx = targetPoint.x - center.x;
            const inDeadZone = Math.abs(dx) <= worldDeadZone;

            const leftBone = leftUpperArm || leftHandBone;
            const rightBone = rightUpperArm || rightHandBone;

            if (inDeadZone) {
                // idle: both arms point down along the sides
                if (leftBone) {
                    const shoulderPos = leftBone.getWorldPosition(new THREE.Vector3());
                    const downTarget = shoulderPos.clone().add(new THREE.Vector3(5, -2, 0));
                    applyLookAtToBone(leftBone, downTarget, ikSlerp, 90);
                }
                if (rightBone) {
                    const shoulderPos = rightBone.getWorldPosition(new THREE.Vector3());
                    const downTarget = shoulderPos.clone().add(new THREE.Vector3(-5, -2, 0));
                    applyLookAtToBone(rightBone, downTarget, ikSlerp, 90);
                }
                // debug idle state
                //if (!leftBone && !rightBone) console.log('Arms idle but no bones found');
                //else console.log('Arms idle:', { left: leftBone ? leftBone.name : null, right: rightBone ? rightBone.name : null });
            } else {
                // Both arms move: primary on side of target, secondary moves softly toward a softened target
                const primaryIsLeft = dx > 0;
                const primaryBone = primaryIsLeft ? leftBone : rightBone;
                const secondaryBone = primaryIsLeft ? rightBone : leftBone;

                if (primaryBone) {
                    const offsetPoint = targetPoint.clone().add(new THREE.Vector3(0, 1, 0)); 
                    applyLookAtToBone(primaryBone, offsetPoint, ikSlerp, 90);
                }

                if (secondaryBone) {
                    const sPos = secondaryBone.getWorldPosition(new THREE.Vector3());
                    const down = sPos.clone().add(new THREE.Vector3(0, -1, 0));
                    const softTarget = down.clone().lerp(targetPoint, 0.25);
                    const corr2 = (secondaryBone === leftUpperArm) ? -Math.PI/2 : (secondaryBone === rightUpperArm ? Math.PI/2 : 0);
                    //applyLookAtToBone(secondaryBone, softTarget, ikSlerp * 0.5, corr2);
                }
                // debug active targeting
                //console.log('Arms targeting', { dx, primary: primaryBone ? primaryBone.name : null, secondary: secondaryBone ? secondaryBone.name : null });
            }
        }
    }

    // Make texts face camera
    if (headText) headText.lookAt(camera.position);
    if (sphereText && sphereText.visible) sphereText.lookAt(camera.position);

    // Modal auto-hide + fly away logic
    if (modalVisible && modalGroup) {
        // wobble effect to sell depth
        if (!modalFlying) {
            const wobbleAmt = 0.01; // radians
            const t = clock.elapsedTime * 2.0;
            const wobbleQuat = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 0, 1), Math.sin(t) * wobbleAmt);
            modalGroup.quaternion.copy(camera.quaternion).multiply(wobbleQuat);
        }

        const now = performance.now();
        if (!modalFlying && modalHideTime > 0 && now > modalHideTime) {
            modalFlying = true;
            modalStartPos.copy(modalGroup.position);
            modalVelocity.set(0, 0, 0);

            // fly up from current modal position (based on camera up) and set a target farther up
            const upDir = camera.up.clone().normalize();
            const flyDistance = 20; // distance to fly up
            modalTargetPos.copy(modalGroup.position).add(upDir.multiplyScalar(flyDistance));
        }

        if (modalFlying) {
            // spring / damping toward target position (faster + smoother)
            const stiffness = 260; // higher = faster spring
            const damping = 24;   // higher = more damped
            const toTarget = modalTargetPos.clone().sub(modalGroup.position);
            const accel = toTarget.multiplyScalar(stiffness).sub(modalVelocity.clone().multiplyScalar(damping));
            modalVelocity.add(accel.multiplyScalar(delta));
            modalGroup.position.add(modalVelocity.clone().multiplyScalar(delta));

            if (modalGroup.position.distanceTo(modalTargetPos) < 0.2 && modalVelocity.length() < 0.1) {
                hide3DModal();
            }
        }
    }

    if (controls) controls.update();
    renderer.render(scene, camera);
}

// Handle window resize
window.addEventListener('resize', () => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
});

