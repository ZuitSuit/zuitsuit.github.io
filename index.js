import * as THREE from "three";
import {GLTFLoader} from "jsm/loaders/GLTFLoader.js";
import {OrbitControls} from "jsm/controls/OrbitControls.js";

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

const geo = new THREE.IcosahedronGeometry(1.0, 2);
const mat = new THREE.MeshStandardMaterial
(
    {color: "white"}
);

const loader = new GLTFLoader();
var model = null;
var childMesh = null;
var rotTarget = null;
var controls = null;
//add loading bar
loader.load(
    "zuit_model.glb",
    (gltf) => {
        console.log(gltf);
        model = gltf.scene || (gltf.scenes && gltf.scenes[0]);
        if (!model) {
            console.error('No scene found in GLTF:', gltf);
            return;
        }

            const texLoader = new THREE.TextureLoader();
            const albedoTex = texLoader.load('zuit_albedo.jpg');
            const normalTex = texLoader.load('zuit_normal.png', undefined, undefined, () => { /* ignore */ });

            // GLTF UVs expect no vertical flip for externally-loaded textures
            albedoTex.flipY = false;
            albedoTex.encoding = THREE.sRGBEncoding;
            if (normalTex) normalTex.flipY = false;

        // Attempt to load a normal map; if it exists, apply it later.
       /* texLoader.load(
            'zuit_normal.png',
            (normalTex) => {
                model.traverse((child) => {
                    if (child.isMesh && child.material) {
                        child.material.normalMap = normalTex;
                        child.material.needsUpdate = true;
                    }
                });
            },
            undefined,
            () => console.warn('No normal map found at zuit_normal.jpg')
        );*/

        model.traverse((child) => {
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
        model.scale.setScalar(0.5);

        // Debug: print discovered bone assignments to help diagnose missing arms
        console.log('Bone assignment:', {
            head: headBone ? headBone.name : null,
            leftUpperArm: leftUpperArm ? leftUpperArm.name : null,
            leftForeArm: leftForeArm ? leftForeArm.name : null,
            leftHand: leftHandBone ? leftHandBone.name : null,
            rightUpperArm: rightUpperArm ? rightUpperArm.name : null,
            rightForeArm: rightForeArm ? rightForeArm.name : null,
            rightHand: rightHandBone ? rightHandBone.name : null
        });

        // store defaults for arm rest pose
        if (leftUpperArm) leftUpperDefault = leftUpperArm.quaternion.clone();
        if (rightUpperArm) rightUpperDefault = rightUpperArm.quaternion.clone();

        scene.add(model);
        // rotate the whole model for predictable behavior
        // set initial camera to frame the model
        const box = new THREE.Box3().setFromObject(model);
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
    },
    undefined,
    (err) => console.error('GLTF load error:', err)
);

// Use THREE.Clock to get delta time in seconds (framerate independent)
const clock = new THREE.Clock();

const light = new THREE.HemisphereLight("green", "purple", 1.0);
scene.add(light);

const mesh = new THREE.Mesh(geo, mat);
//scene.add(mesh);


function animate(){
    requestAnimationFrame(animate);
    const delta = clock.getDelta(); // seconds since last frame
    const rotationSpeed = 1.0; // radians per second

    // rotate the loaded model (if any)
    if (rotTarget) {
        //rotTarget.rotation.y += delta * rotationSpeed;
        // optional pulsate on first child
        if (childMesh) childMesh.scale.setScalar(1.0 + 0.1 * Math.sin(clock.elapsedTime * 4.0));

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
                if (!leftBone && !rightBone) console.log('Arms idle but no bones found');
                else console.log('Arms idle:', { left: leftBone ? leftBone.name : null, right: rightBone ? rightBone.name : null });
            } else {
                // Both arms move: primary on side of target, secondary moves softly toward a softened target
                const primaryIsLeft = dx > 0;
                const primaryBone = primaryIsLeft ? leftBone : rightBone;
                const secondaryBone = primaryIsLeft ? rightBone : leftBone;

                if (primaryBone) {
                    applyLookAtToBone(primaryBone, targetPoint, ikSlerp, 90);
                }

                if (secondaryBone) {
                    const sPos = secondaryBone.getWorldPosition(new THREE.Vector3());
                    const down = sPos.clone().add(new THREE.Vector3(0, -1, 0));
                    const softTarget = down.clone().lerp(targetPoint, 0.25);
                    const corr2 = (secondaryBone === leftUpperArm) ? -Math.PI/2 : (secondaryBone === rightUpperArm ? Math.PI/2 : 0);
                    //applyLookAtToBone(secondaryBone, softTarget, ikSlerp * 0.5, corr2);
                }
                // debug active targeting
                console.log('Arms targeting', { dx, primary: primaryBone ? primaryBone.name : null, secondary: secondaryBone ? secondaryBone.name : null });
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

