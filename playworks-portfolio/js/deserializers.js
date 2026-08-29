var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i652 = root || request.c( 'UnityEngine.JointSpring' )
  var i653 = data
  i652.spring = i653[0]
  i652.damper = i653[1]
  i652.targetPosition = i653[2]
  return i652
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i654 = root || request.c( 'UnityEngine.JointMotor' )
  var i655 = data
  i654.m_TargetVelocity = i655[0]
  i654.m_Force = i655[1]
  i654.m_FreeSpin = i655[2]
  return i654
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i656 = root || request.c( 'UnityEngine.JointLimits' )
  var i657 = data
  i656.m_Min = i657[0]
  i656.m_Max = i657[1]
  i656.m_Bounciness = i657[2]
  i656.m_BounceMinVelocity = i657[3]
  i656.m_ContactDistance = i657[4]
  i656.minBounce = i657[5]
  i656.maxBounce = i657[6]
  return i656
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i658 = root || request.c( 'UnityEngine.JointDrive' )
  var i659 = data
  i658.m_PositionSpring = i659[0]
  i658.m_PositionDamper = i659[1]
  i658.m_MaximumForce = i659[2]
  i658.m_UseAcceleration = i659[3]
  return i658
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i660 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i661 = data
  i660.m_Spring = i661[0]
  i660.m_Damper = i661[1]
  return i660
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i662 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i663 = data
  i662.m_Limit = i663[0]
  i662.m_Bounciness = i663[1]
  i662.m_ContactDistance = i663[2]
  return i662
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i664 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i665 = data
  i664.m_ExtremumSlip = i665[0]
  i664.m_ExtremumValue = i665[1]
  i664.m_AsymptoteSlip = i665[2]
  i664.m_AsymptoteValue = i665[3]
  i664.m_Stiffness = i665[4]
  return i664
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i666 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i667 = data
  i666.m_LowerAngle = i667[0]
  i666.m_UpperAngle = i667[1]
  return i666
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i668 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i669 = data
  i668.m_MotorSpeed = i669[0]
  i668.m_MaximumMotorTorque = i669[1]
  return i668
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i670 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i671 = data
  i670.m_DampingRatio = i671[0]
  i670.m_Frequency = i671[1]
  i670.m_Angle = i671[2]
  return i670
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i672 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i673 = data
  i672.m_LowerTranslation = i673[0]
  i672.m_UpperTranslation = i673[1]
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i675 = data
  i674.name = i675[0]
  i674.halfPrecision = !!i675[1]
  i674.useSimplification = !!i675[2]
  i674.useUInt32IndexFormat = !!i675[3]
  i674.vertexCount = i675[4]
  i674.aabb = i675[5]
  var i677 = i675[6]
  var i676 = []
  for(var i = 0; i < i677.length; i += 1) {
    i676.push( !!i677[i + 0] );
  }
  i674.streams = i676
  i674.vertices = i675[7]
  var i679 = i675[8]
  var i678 = []
  for(var i = 0; i < i679.length; i += 1) {
    i678.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i679[i + 0]) );
  }
  i674.subMeshes = i678
  var i681 = i675[9]
  var i680 = []
  for(var i = 0; i < i681.length; i += 16) {
    i680.push( new pc.Mat4().setData(i681[i + 0], i681[i + 1], i681[i + 2], i681[i + 3],  i681[i + 4], i681[i + 5], i681[i + 6], i681[i + 7],  i681[i + 8], i681[i + 9], i681[i + 10], i681[i + 11],  i681[i + 12], i681[i + 13], i681[i + 14], i681[i + 15]) );
  }
  i674.bindposes = i680
  var i683 = i675[10]
  var i682 = []
  for(var i = 0; i < i683.length; i += 1) {
    i682.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i683[i + 0]) );
  }
  i674.blendShapes = i682
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i689 = data
  i688.triangles = i689[0]
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i695 = data
  i694.name = i695[0]
  var i697 = i695[1]
  var i696 = []
  for(var i = 0; i < i697.length; i += 1) {
    i696.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i697[i + 0]) );
  }
  i694.frames = i696
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i698 = root || new pc.UnityMaterial()
  var i699 = data
  i698.name = i699[0]
  request.r(i699[1], i699[2], 0, i698, 'shader')
  i698.renderQueue = i699[3]
  i698.enableInstancing = !!i699[4]
  var i701 = i699[5]
  var i700 = []
  for(var i = 0; i < i701.length; i += 1) {
    i700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i701[i + 0]) );
  }
  i698.floatParameters = i700
  var i703 = i699[6]
  var i702 = []
  for(var i = 0; i < i703.length; i += 1) {
    i702.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i703[i + 0]) );
  }
  i698.colorParameters = i702
  var i705 = i699[7]
  var i704 = []
  for(var i = 0; i < i705.length; i += 1) {
    i704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i705[i + 0]) );
  }
  i698.vectorParameters = i704
  var i707 = i699[8]
  var i706 = []
  for(var i = 0; i < i707.length; i += 1) {
    i706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i707[i + 0]) );
  }
  i698.textureParameters = i706
  var i709 = i699[9]
  var i708 = []
  for(var i = 0; i < i709.length; i += 1) {
    i708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i709[i + 0]) );
  }
  i698.materialFlags = i708
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i713 = data
  i712.name = i713[0]
  i712.value = i713[1]
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i717 = data
  i716.name = i717[0]
  i716.value = new pc.Color(i717[1], i717[2], i717[3], i717[4])
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i721 = data
  i720.name = i721[0]
  i720.value = new pc.Vec4( i721[1], i721[2], i721[3], i721[4] )
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i725 = data
  i724.name = i725[0]
  request.r(i725[1], i725[2], 0, i724, 'value')
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i729 = data
  i728.name = i729[0]
  i728.enabled = !!i729[1]
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i731 = data
  i730.name = i731[0]
  i730.width = i731[1]
  i730.height = i731[2]
  i730.mipmapCount = i731[3]
  i730.anisoLevel = i731[4]
  i730.filterMode = i731[5]
  i730.hdr = !!i731[6]
  i730.format = i731[7]
  i730.wrapMode = i731[8]
  i730.alphaIsTransparency = !!i731[9]
  i730.alphaSource = i731[10]
  i730.graphicsFormat = i731[11]
  i730.sRGBTexture = !!i731[12]
  i730.desiredColorSpace = i731[13]
  i730.wrapU = i731[14]
  i730.wrapV = i731[15]
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i733 = data
  i732.name = i733[0]
  i732.atlasId = i733[1]
  i732.mipmapCount = i733[2]
  i732.hdr = !!i733[3]
  i732.size = i733[4]
  i732.anisoLevel = i733[5]
  i732.filterMode = i733[6]
  var i735 = i733[7]
  var i734 = []
  for(var i = 0; i < i735.length; i += 4) {
    i734.push( UnityEngine.Rect.MinMaxRect(i735[i + 0], i735[i + 1], i735[i + 2], i735[i + 3]) );
  }
  i732.rects = i734
  i732.wrapU = i733[8]
  i732.wrapV = i733[9]
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i739 = data
  i738.name = i739[0]
  i738.index = i739[1]
  i738.startup = !!i739[2]
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i741 = data
  request.r(i741[0], i741[1], 0, i740, 'sharedMesh')
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i743 = data
  i742.center = new pc.Vec3( i743[0], i743[1], i743[2] )
  i742.size = new pc.Vec3( i743[3], i743[4], i743[5] )
  i742.enabled = !!i743[6]
  i742.isTrigger = !!i743[7]
  request.r(i743[8], i743[9], 0, i742, 'material')
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i745 = data
  request.r(i745[0], i745[1], 0, i744, 'additionalVertexStreams')
  i744.enabled = !!i745[2]
  request.r(i745[3], i745[4], 0, i744, 'sharedMaterial')
  var i747 = i745[5]
  var i746 = []
  for(var i = 0; i < i747.length; i += 2) {
  request.r(i747[i + 0], i747[i + 1], 2, i746, '')
  }
  i744.sharedMaterials = i746
  i744.receiveShadows = !!i745[6]
  i744.shadowCastingMode = i745[7]
  i744.sortingLayerID = i745[8]
  i744.sortingOrder = i745[9]
  i744.lightmapIndex = i745[10]
  i744.lightmapSceneIndex = i745[11]
  i744.lightmapScaleOffset = new pc.Vec4( i745[12], i745[13], i745[14], i745[15] )
  i744.lightProbeUsage = i745[16]
  i744.reflectionProbeUsage = i745[17]
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i751 = data
  i750.name = i751[0]
  i750.tagId = i751[1]
  i750.enabled = !!i751[2]
  i750.isStatic = !!i751[3]
  i750.layer = i751[4]
  return i750
}

Deserializers["Portfolio.Playables.IsometricPortfolio.IsometricInteractable"] = function (request, data, root) {
  var i752 = root || request.c( 'Portfolio.Playables.IsometricPortfolio.IsometricInteractable' )
  var i753 = data
  request.r(i753[0], i753[1], 0, i752, 'solidCollider')
  request.r(i753[2], i753[3], 0, i752, 'focusPoint')
  request.r(i753[4], i753[5], 0, i752, 'temporaryObjects')
  request.r(i753[6], i753[7], 0, i752, 'musicToggle')
  i752.approachClearance = i753[8]
  return i752
}

Deserializers["Portfolio.Playables.IsometricPortfolio.FaceMainCamera"] = function (request, data, root) {
  var i754 = root || request.c( 'Portfolio.Playables.IsometricPortfolio.FaceMainCamera' )
  var i755 = data
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i757 = data
  i756.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i757[0], i756.main)
  i756.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i757[1], i756.colorBySpeed)
  i756.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i757[2], i756.colorOverLifetime)
  i756.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i757[3], i756.emission)
  i756.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i757[4], i756.rotationBySpeed)
  i756.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i757[5], i756.rotationOverLifetime)
  i756.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i757[6], i756.shape)
  i756.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i757[7], i756.sizeBySpeed)
  i756.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i757[8], i756.sizeOverLifetime)
  i756.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i757[9], i756.textureSheetAnimation)
  i756.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i757[10], i756.velocityOverLifetime)
  i756.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i757[11], i756.noise)
  i756.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i757[12], i756.inheritVelocity)
  i756.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i757[13], i756.forceOverLifetime)
  i756.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i757[14], i756.limitVelocityOverLifetime)
  i756.useAutoRandomSeed = !!i757[15]
  i756.randomSeed = i757[16]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i758 = root || new pc.ParticleSystemMain()
  var i759 = data
  i758.duration = i759[0]
  i758.loop = !!i759[1]
  i758.prewarm = !!i759[2]
  i758.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[3], i758.startDelay)
  i758.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[4], i758.startLifetime)
  i758.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[5], i758.startSpeed)
  i758.startSize3D = !!i759[6]
  i758.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[7], i758.startSizeX)
  i758.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[8], i758.startSizeY)
  i758.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[9], i758.startSizeZ)
  i758.startRotation3D = !!i759[10]
  i758.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[11], i758.startRotationX)
  i758.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[12], i758.startRotationY)
  i758.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[13], i758.startRotationZ)
  i758.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i759[14], i758.startColor)
  i758.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[15], i758.gravityModifier)
  i758.simulationSpace = i759[16]
  request.r(i759[17], i759[18], 0, i758, 'customSimulationSpace')
  i758.simulationSpeed = i759[19]
  i758.useUnscaledTime = !!i759[20]
  i758.scalingMode = i759[21]
  i758.playOnAwake = !!i759[22]
  i758.maxParticles = i759[23]
  i758.emitterVelocityMode = i759[24]
  i758.stopAction = i759[25]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i760 = root || new pc.MinMaxCurve()
  var i761 = data
  i760.mode = i761[0]
  i760.curveMin = new pc.AnimationCurve( { keys_flow: i761[1] } )
  i760.curveMax = new pc.AnimationCurve( { keys_flow: i761[2] } )
  i760.curveMultiplier = i761[3]
  i760.constantMin = i761[4]
  i760.constantMax = i761[5]
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i762 = root || new pc.MinMaxGradient()
  var i763 = data
  i762.mode = i763[0]
  i762.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i763[1], i762.gradientMin)
  i762.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i763[2], i762.gradientMax)
  i762.colorMin = new pc.Color(i763[3], i763[4], i763[5], i763[6])
  i762.colorMax = new pc.Color(i763[7], i763[8], i763[9], i763[10])
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i765 = data
  i764.mode = i765[0]
  var i767 = i765[1]
  var i766 = []
  for(var i = 0; i < i767.length; i += 1) {
    i766.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i767[i + 0]) );
  }
  i764.colorKeys = i766
  var i769 = i765[2]
  var i768 = []
  for(var i = 0; i < i769.length; i += 1) {
    i768.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i769[i + 0]) );
  }
  i764.alphaKeys = i768
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i770 = root || new pc.ParticleSystemColorBySpeed()
  var i771 = data
  i770.enabled = !!i771[0]
  i770.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i771[1], i770.color)
  i770.range = new pc.Vec2( i771[2], i771[3] )
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i775 = data
  i774.color = new pc.Color(i775[0], i775[1], i775[2], i775[3])
  i774.time = i775[4]
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i779 = data
  i778.alpha = i779[0]
  i778.time = i779[1]
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i780 = root || new pc.ParticleSystemColorOverLifetime()
  var i781 = data
  i780.enabled = !!i781[0]
  i780.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i781[1], i780.color)
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i782 = root || new pc.ParticleSystemEmitter()
  var i783 = data
  i782.enabled = !!i783[0]
  i782.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[1], i782.rateOverTime)
  i782.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[2], i782.rateOverDistance)
  var i785 = i783[3]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i785[i + 0]) );
  }
  i782.bursts = i784
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i788 = root || new pc.ParticleSystemBurst()
  var i789 = data
  i788.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[0], i788.count)
  i788.cycleCount = i789[1]
  i788.minCount = i789[2]
  i788.maxCount = i789[3]
  i788.repeatInterval = i789[4]
  i788.time = i789[5]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i790 = root || new pc.ParticleSystemRotationBySpeed()
  var i791 = data
  i790.enabled = !!i791[0]
  i790.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[1], i790.x)
  i790.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[2], i790.y)
  i790.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[3], i790.z)
  i790.separateAxes = !!i791[4]
  i790.range = new pc.Vec2( i791[5], i791[6] )
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i792 = root || new pc.ParticleSystemRotationOverLifetime()
  var i793 = data
  i792.enabled = !!i793[0]
  i792.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[1], i792.x)
  i792.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[2], i792.y)
  i792.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[3], i792.z)
  i792.separateAxes = !!i793[4]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i794 = root || new pc.ParticleSystemShape()
  var i795 = data
  i794.enabled = !!i795[0]
  i794.shapeType = i795[1]
  i794.randomDirectionAmount = i795[2]
  i794.sphericalDirectionAmount = i795[3]
  i794.randomPositionAmount = i795[4]
  i794.alignToDirection = !!i795[5]
  i794.radius = i795[6]
  i794.radiusMode = i795[7]
  i794.radiusSpread = i795[8]
  i794.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[9], i794.radiusSpeed)
  i794.radiusThickness = i795[10]
  i794.angle = i795[11]
  i794.length = i795[12]
  i794.boxThickness = new pc.Vec3( i795[13], i795[14], i795[15] )
  i794.meshShapeType = i795[16]
  request.r(i795[17], i795[18], 0, i794, 'mesh')
  request.r(i795[19], i795[20], 0, i794, 'meshRenderer')
  request.r(i795[21], i795[22], 0, i794, 'skinnedMeshRenderer')
  i794.useMeshMaterialIndex = !!i795[23]
  i794.meshMaterialIndex = i795[24]
  i794.useMeshColors = !!i795[25]
  i794.normalOffset = i795[26]
  i794.arc = i795[27]
  i794.arcMode = i795[28]
  i794.arcSpread = i795[29]
  i794.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[30], i794.arcSpeed)
  i794.donutRadius = i795[31]
  i794.position = new pc.Vec3( i795[32], i795[33], i795[34] )
  i794.rotation = new pc.Vec3( i795[35], i795[36], i795[37] )
  i794.scale = new pc.Vec3( i795[38], i795[39], i795[40] )
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i796 = root || new pc.ParticleSystemSizeBySpeed()
  var i797 = data
  i796.enabled = !!i797[0]
  i796.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[1], i796.x)
  i796.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[2], i796.y)
  i796.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[3], i796.z)
  i796.separateAxes = !!i797[4]
  i796.range = new pc.Vec2( i797[5], i797[6] )
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i798 = root || new pc.ParticleSystemSizeOverLifetime()
  var i799 = data
  i798.enabled = !!i799[0]
  i798.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[1], i798.x)
  i798.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[2], i798.y)
  i798.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[3], i798.z)
  i798.separateAxes = !!i799[4]
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i800 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i801 = data
  i800.enabled = !!i801[0]
  i800.mode = i801[1]
  i800.animation = i801[2]
  i800.numTilesX = i801[3]
  i800.numTilesY = i801[4]
  i800.useRandomRow = !!i801[5]
  i800.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[6], i800.frameOverTime)
  i800.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[7], i800.startFrame)
  i800.cycleCount = i801[8]
  i800.rowIndex = i801[9]
  i800.flipU = i801[10]
  i800.flipV = i801[11]
  i800.spriteCount = i801[12]
  var i803 = i801[13]
  var i802 = []
  for(var i = 0; i < i803.length; i += 2) {
  request.r(i803[i + 0], i803[i + 1], 2, i802, '')
  }
  i800.sprites = i802
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i806 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i807 = data
  i806.enabled = !!i807[0]
  i806.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[1], i806.x)
  i806.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[2], i806.y)
  i806.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[3], i806.z)
  i806.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[4], i806.radial)
  i806.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[5], i806.speedModifier)
  i806.space = i807[6]
  i806.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[7], i806.orbitalX)
  i806.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[8], i806.orbitalY)
  i806.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[9], i806.orbitalZ)
  i806.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[10], i806.orbitalOffsetX)
  i806.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[11], i806.orbitalOffsetY)
  i806.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[12], i806.orbitalOffsetZ)
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i808 = root || new pc.ParticleSystemNoise()
  var i809 = data
  i808.enabled = !!i809[0]
  i808.separateAxes = !!i809[1]
  i808.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[2], i808.strengthX)
  i808.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[3], i808.strengthY)
  i808.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[4], i808.strengthZ)
  i808.frequency = i809[5]
  i808.damping = !!i809[6]
  i808.octaveCount = i809[7]
  i808.octaveMultiplier = i809[8]
  i808.octaveScale = i809[9]
  i808.quality = i809[10]
  i808.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[11], i808.scrollSpeed)
  i808.scrollSpeedMultiplier = i809[12]
  i808.remapEnabled = !!i809[13]
  i808.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[14], i808.remapX)
  i808.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[15], i808.remapY)
  i808.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[16], i808.remapZ)
  i808.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[17], i808.positionAmount)
  i808.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[18], i808.rotationAmount)
  i808.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[19], i808.sizeAmount)
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i810 = root || new pc.ParticleSystemInheritVelocity()
  var i811 = data
  i810.enabled = !!i811[0]
  i810.mode = i811[1]
  i810.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[2], i810.curve)
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i812 = root || new pc.ParticleSystemForceOverLifetime()
  var i813 = data
  i812.enabled = !!i813[0]
  i812.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[1], i812.x)
  i812.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[2], i812.y)
  i812.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[3], i812.z)
  i812.space = i813[4]
  i812.randomized = !!i813[5]
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i814 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i815 = data
  i814.enabled = !!i815[0]
  i814.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[1], i814.limit)
  i814.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[2], i814.limitX)
  i814.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[3], i814.limitY)
  i814.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[4], i814.limitZ)
  i814.dampen = i815[5]
  i814.separateAxes = !!i815[6]
  i814.space = i815[7]
  i814.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[8], i814.drag)
  i814.multiplyDragByParticleSize = !!i815[9]
  i814.multiplyDragByParticleVelocity = !!i815[10]
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i817 = data
  request.r(i817[0], i817[1], 0, i816, 'mesh')
  i816.meshCount = i817[2]
  i816.activeVertexStreamsCount = i817[3]
  i816.alignment = i817[4]
  i816.renderMode = i817[5]
  i816.sortMode = i817[6]
  i816.lengthScale = i817[7]
  i816.velocityScale = i817[8]
  i816.cameraVelocityScale = i817[9]
  i816.normalDirection = i817[10]
  i816.sortingFudge = i817[11]
  i816.minParticleSize = i817[12]
  i816.maxParticleSize = i817[13]
  i816.pivot = new pc.Vec3( i817[14], i817[15], i817[16] )
  request.r(i817[17], i817[18], 0, i816, 'trailMaterial')
  i816.applyActiveColorSpace = !!i817[19]
  i816.enabled = !!i817[20]
  request.r(i817[21], i817[22], 0, i816, 'sharedMaterial')
  var i819 = i817[23]
  var i818 = []
  for(var i = 0; i < i819.length; i += 2) {
  request.r(i819[i + 0], i819[i + 1], 2, i818, '')
  }
  i816.sharedMaterials = i818
  i816.receiveShadows = !!i817[24]
  i816.shadowCastingMode = i817[25]
  i816.sortingLayerID = i817[26]
  i816.sortingOrder = i817[27]
  i816.lightmapIndex = i817[28]
  i816.lightmapSceneIndex = i817[29]
  i816.lightmapScaleOffset = new pc.Vec4( i817[30], i817[31], i817[32], i817[33] )
  i816.lightProbeUsage = i817[34]
  i816.reflectionProbeUsage = i817[35]
  return i816
}

Deserializers["Portfolio.Playables.IsometricPortfolio.TakeoffExhibitMotion"] = function (request, data, root) {
  var i820 = root || request.c( 'Portfolio.Playables.IsometricPortfolio.TakeoffExhibitMotion' )
  var i821 = data
  i820.bobHeight = i821[0]
  i820.frequency = i821[1]
  i820.pitchDegrees = i821[2]
  return i820
}

Deserializers["Portfolio.Playables.IsometricPortfolio.TelepathyParticleMotion"] = function (request, data, root) {
  var i822 = root || request.c( 'Portfolio.Playables.IsometricPortfolio.TelepathyParticleMotion' )
  var i823 = data
  request.r(i823[0], i823[1], 0, i822, 'firstHead')
  request.r(i823[2], i823[3], 0, i822, 'secondHead')
  i822.oneWayDuration = i823[4]
  i822.arcHeight = i823[5]
  return i822
}

Deserializers["Portfolio.Playables.IsometricPortfolio.AirSwimmingMotion"] = function (request, data, root) {
  var i824 = root || request.c( 'Portfolio.Playables.IsometricPortfolio.AirSwimmingMotion' )
  var i825 = data
  request.r(i825[0], i825[1], 0, i824, 'animator')
  i824.swimState = i825[2]
  i824.cycleSpeed = i825[3]
  i824.travel = new pc.Vec3( i825[4], i825[5], i825[6] )
  i824.rotationAmount = new pc.Vec3( i825[7], i825[8], i825[9] )
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i827 = data
  request.r(i827[0], i827[1], 0, i826, 'animatorController')
  request.r(i827[2], i827[3], 0, i826, 'avatar')
  i826.updateMode = i827[4]
  i826.hasTransformHierarchy = !!i827[5]
  i826.applyRootMotion = !!i827[6]
  var i829 = i827[7]
  var i828 = []
  for(var i = 0; i < i829.length; i += 2) {
  request.r(i829[i + 0], i829[i + 1], 2, i828, '')
  }
  i826.humanBones = i828
  i826.enabled = !!i827[8]
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i833 = data
  request.r(i833[0], i833[1], 0, i832, 'clip')
  request.r(i833[2], i833[3], 0, i832, 'outputAudioMixerGroup')
  i832.playOnAwake = !!i833[4]
  i832.loop = !!i833[5]
  i832.time = i833[6]
  i832.volume = i833[7]
  i832.pitch = i833[8]
  i832.enabled = !!i833[9]
  return i832
}

Deserializers["Portfolio.Playables.IsometricPortfolio.GramophoneMusicToggle"] = function (request, data, root) {
  var i834 = root || request.c( 'Portfolio.Playables.IsometricPortfolio.GramophoneMusicToggle' )
  var i835 = data
  request.r(i835[0], i835[1], 0, i834, 'musicSource')
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i837 = data
  i836.pivot = new pc.Vec2( i837[0], i837[1] )
  i836.anchorMin = new pc.Vec2( i837[2], i837[3] )
  i836.anchorMax = new pc.Vec2( i837[4], i837[5] )
  i836.sizeDelta = new pc.Vec2( i837[6], i837[7] )
  i836.anchoredPosition3D = new pc.Vec3( i837[8], i837[9], i837[10] )
  i836.rotation = new pc.Quat(i837[11], i837[12], i837[13], i837[14])
  i836.scale = new pc.Vec3( i837[15], i837[16], i837[17] )
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i839 = data
  i838.planeDistance = i839[0]
  i838.referencePixelsPerUnit = i839[1]
  i838.isFallbackOverlay = !!i839[2]
  i838.renderMode = i839[3]
  i838.renderOrder = i839[4]
  i838.sortingLayerName = i839[5]
  i838.sortingOrder = i839[6]
  i838.scaleFactor = i839[7]
  request.r(i839[8], i839[9], 0, i838, 'worldCamera')
  i838.overrideSorting = !!i839[10]
  i838.pixelPerfect = !!i839[11]
  i838.targetDisplay = i839[12]
  i838.overridePixelPerfect = !!i839[13]
  i838.enabled = !!i839[14]
  return i838
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i840 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i841 = data
  i840.m_UiScaleMode = i841[0]
  i840.m_ReferencePixelsPerUnit = i841[1]
  i840.m_ScaleFactor = i841[2]
  i840.m_ReferenceResolution = new pc.Vec2( i841[3], i841[4] )
  i840.m_ScreenMatchMode = i841[5]
  i840.m_MatchWidthOrHeight = i841[6]
  i840.m_PhysicalUnit = i841[7]
  i840.m_FallbackScreenDPI = i841[8]
  i840.m_DefaultSpriteDPI = i841[9]
  i840.m_DynamicPixelsPerUnit = i841[10]
  i840.m_PresetInfoIsWorld = !!i841[11]
  return i840
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i842 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i843 = data
  i842.m_IgnoreReversedGraphics = !!i843[0]
  i842.m_BlockingObjects = i843[1]
  i842.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i843[2] )
  return i842
}

Deserializers["Portfolio.Playables.IsometricPortfolio.ResponsiveWorkModal"] = function (request, data, root) {
  var i844 = root || request.c( 'Portfolio.Playables.IsometricPortfolio.ResponsiveWorkModal' )
  var i845 = data
  request.r(i845[0], i845[1], 0, i844, 'card')
  request.r(i845[2], i845[3], 0, i844, 'title')
  request.r(i845[4], i845[5], 0, i844, 'kicker')
  request.r(i845[6], i845[7], 0, i844, 'body')
  var i847 = i845[8]
  var i846 = []
  for(var i = 0; i < i847.length; i += 2) {
  request.r(i847[i + 0], i847[i + 1], 2, i846, '')
  }
  i844.links = i846
  request.r(i845[9], i845[10], 0, i844, 'closeHint')
  i844.widePreferredHeight = i845[11]
  i844.portraitMinimumHeight = i845[12]
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i851 = data
  i850.cullTransparentMesh = !!i851[0]
  return i850
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i852 = root || request.c( 'UnityEngine.UI.Image' )
  var i853 = data
  request.r(i853[0], i853[1], 0, i852, 'm_Sprite')
  i852.m_Type = i853[2]
  i852.m_PreserveAspect = !!i853[3]
  i852.m_FillCenter = !!i853[4]
  i852.m_FillMethod = i853[5]
  i852.m_FillAmount = i853[6]
  i852.m_FillClockwise = !!i853[7]
  i852.m_FillOrigin = i853[8]
  i852.m_UseSpriteMesh = !!i853[9]
  i852.m_PixelsPerUnitMultiplier = i853[10]
  request.r(i853[11], i853[12], 0, i852, 'm_Material')
  i852.m_Maskable = !!i853[13]
  i852.m_Color = new pc.Color(i853[14], i853[15], i853[16], i853[17])
  i852.m_RaycastTarget = !!i853[18]
  i852.m_RaycastPadding = new pc.Vec4( i853[19], i853[20], i853[21], i853[22] )
  return i852
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i854 = root || request.c( 'UnityEngine.UI.Button' )
  var i855 = data
  i854.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i855[0], i854.m_OnClick)
  i854.m_Navigation = request.d('UnityEngine.UI.Navigation', i855[1], i854.m_Navigation)
  i854.m_Transition = i855[2]
  i854.m_Colors = request.d('UnityEngine.UI.ColorBlock', i855[3], i854.m_Colors)
  i854.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i855[4], i854.m_SpriteState)
  i854.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i855[5], i854.m_AnimationTriggers)
  i854.m_Interactable = !!i855[6]
  request.r(i855[7], i855[8], 0, i854, 'm_TargetGraphic')
  return i854
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i856 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i857 = data
  i856.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i857[0], i856.m_PersistentCalls)
  return i856
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i858 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i859 = data
  var i861 = i859[0]
  var i860 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i861.length; i += 1) {
    i860.add(request.d('UnityEngine.Events.PersistentCall', i861[i + 0]));
  }
  i858.m_Calls = i860
  return i858
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i864 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i865 = data
  request.r(i865[0], i865[1], 0, i864, 'm_Target')
  i864.m_TargetAssemblyTypeName = i865[2]
  i864.m_MethodName = i865[3]
  i864.m_Mode = i865[4]
  i864.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i865[5], i864.m_Arguments)
  i864.m_CallState = i865[6]
  return i864
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i866 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i867 = data
  i866.m_Mode = i867[0]
  i866.m_WrapAround = !!i867[1]
  request.r(i867[2], i867[3], 0, i866, 'm_SelectOnUp')
  request.r(i867[4], i867[5], 0, i866, 'm_SelectOnDown')
  request.r(i867[6], i867[7], 0, i866, 'm_SelectOnLeft')
  request.r(i867[8], i867[9], 0, i866, 'm_SelectOnRight')
  return i866
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i868 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i869 = data
  i868.m_NormalColor = new pc.Color(i869[0], i869[1], i869[2], i869[3])
  i868.m_HighlightedColor = new pc.Color(i869[4], i869[5], i869[6], i869[7])
  i868.m_PressedColor = new pc.Color(i869[8], i869[9], i869[10], i869[11])
  i868.m_SelectedColor = new pc.Color(i869[12], i869[13], i869[14], i869[15])
  i868.m_DisabledColor = new pc.Color(i869[16], i869[17], i869[18], i869[19])
  i868.m_ColorMultiplier = i869[20]
  i868.m_FadeDuration = i869[21]
  return i868
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i870 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i871 = data
  request.r(i871[0], i871[1], 0, i870, 'm_HighlightedSprite')
  request.r(i871[2], i871[3], 0, i870, 'm_PressedSprite')
  request.r(i871[4], i871[5], 0, i870, 'm_SelectedSprite')
  request.r(i871[6], i871[7], 0, i870, 'm_DisabledSprite')
  return i870
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i872 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i873 = data
  i872.m_NormalTrigger = i873[0]
  i872.m_HighlightedTrigger = i873[1]
  i872.m_PressedTrigger = i873[2]
  i872.m_SelectedTrigger = i873[3]
  i872.m_DisabledTrigger = i873[4]
  return i872
}

Deserializers["Portfolio.Playables.IsometricPortfolio.ModalCloseButton"] = function (request, data, root) {
  var i874 = root || request.c( 'Portfolio.Playables.IsometricPortfolio.ModalCloseButton' )
  var i875 = data
  request.r(i875[0], i875[1], 0, i874, 'interactions')
  request.r(i875[2], i875[3], 0, i874, 'aboutSection')
  i874.closesAbout = !!i875[4]
  return i874
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i876 = root || request.c( 'UnityEngine.UI.Text' )
  var i877 = data
  i876.m_FontData = request.d('UnityEngine.UI.FontData', i877[0], i876.m_FontData)
  i876.m_Text = i877[1]
  request.r(i877[2], i877[3], 0, i876, 'm_Material')
  i876.m_Maskable = !!i877[4]
  i876.m_Color = new pc.Color(i877[5], i877[6], i877[7], i877[8])
  i876.m_RaycastTarget = !!i877[9]
  i876.m_RaycastPadding = new pc.Vec4( i877[10], i877[11], i877[12], i877[13] )
  return i876
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i878 = root || request.c( 'UnityEngine.UI.FontData' )
  var i879 = data
  request.r(i879[0], i879[1], 0, i878, 'm_Font')
  i878.m_FontSize = i879[2]
  i878.m_FontStyle = i879[3]
  i878.m_BestFit = !!i879[4]
  i878.m_MinSize = i879[5]
  i878.m_MaxSize = i879[6]
  i878.m_Alignment = i879[7]
  i878.m_AlignByGeometry = !!i879[8]
  i878.m_RichText = !!i879[9]
  i878.m_HorizontalOverflow = i879[10]
  i878.m_VerticalOverflow = i879[11]
  i878.m_LineSpacing = i879[12]
  return i878
}

Deserializers["Portfolio.Playables.IsometricPortfolio.ResponsiveModalCard"] = function (request, data, root) {
  var i880 = root || request.c( 'Portfolio.Playables.IsometricPortfolio.ResponsiveModalCard' )
  var i881 = data
  request.r(i881[0], i881[1], 0, i880, 'card')
  i880.preferredSize = new pc.Vec2( i881[2], i881[3] )
  i880.portraitPreferredHeight = i881[4]
  i880.alignRightOnWideScreens = !!i881[5]
  request.r(i881[6], i881[7], 0, i880, 'primaryButton')
  i880.wideButtonHeight = i881[8]
  i880.wideButtonFontSize = i881[9]
  return i880
}

Deserializers["Portfolio.Playables.IsometricPortfolio.ExternalUrlButton"] = function (request, data, root) {
  var i882 = root || request.c( 'Portfolio.Playables.IsometricPortfolio.ExternalUrlButton' )
  var i883 = data
  i882.url = i883[0]
  return i882
}

Deserializers["Portfolio.Playables.IsometricPortfolio.ResponsiveLifeModal"] = function (request, data, root) {
  var i884 = root || request.c( 'Portfolio.Playables.IsometricPortfolio.ResponsiveLifeModal' )
  var i885 = data
  request.r(i885[0], i885[1], 0, i884, 'card')
  request.r(i885[2], i885[3], 0, i884, 'photo')
  request.r(i885[4], i885[5], 0, i884, 'title')
  request.r(i885[6], i885[7], 0, i884, 'kicker')
  request.r(i885[8], i885[9], 0, i884, 'body')
  request.r(i885[10], i885[11], 0, i884, 'closeHint')
  request.r(i885[12], i885[13], 0, i884, 'titleText')
  request.r(i885[14], i885[15], 0, i884, 'bodyText')
  return i884
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i886 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i887 = data
  request.r(i887[0], i887[1], 0, i886, 'm_Texture')
  i886.m_UVRect = UnityEngine.Rect.MinMaxRect(i887[2], i887[3], i887[4], i887[5])
  request.r(i887[6], i887[7], 0, i886, 'm_Material')
  i886.m_Maskable = !!i887[8]
  i886.m_Color = new pc.Color(i887[9], i887[10], i887[11], i887[12])
  i886.m_RaycastTarget = !!i887[13]
  i886.m_RaycastPadding = new pc.Vec4( i887[14], i887[15], i887[16], i887[17] )
  return i886
}

Deserializers["Portfolio.Playables.IsometricPortfolio.ResponsiveRecommendationsModal"] = function (request, data, root) {
  var i888 = root || request.c( 'Portfolio.Playables.IsometricPortfolio.ResponsiveRecommendationsModal' )
  var i889 = data
  request.r(i889[0], i889[1], 0, i888, 'card')
  request.r(i889[2], i889[3], 0, i888, 'listPanel')
  request.r(i889[4], i889[5], 0, i888, 'descriptionPanel')
  request.r(i889[6], i889[7], 0, i888, 'descriptionTitle')
  request.r(i889[8], i889[9], 0, i888, 'descriptionBody')
  request.r(i889[10], i889[11], 0, i888, 'selectedGameButton')
  var i891 = i889[12]
  var i890 = []
  for(var i = 0; i < i891.length; i += 2) {
  request.r(i891[i + 0], i891[i + 1], 2, i890, '')
  }
  i888.rows = i890
  return i888
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i894 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i895 = data
  request.r(i895[0], i895[1], 0, i894, 'm_Content')
  i894.m_Horizontal = !!i895[2]
  i894.m_Vertical = !!i895[3]
  i894.m_MovementType = i895[4]
  i894.m_Elasticity = i895[5]
  i894.m_Inertia = !!i895[6]
  i894.m_DecelerationRate = i895[7]
  i894.m_ScrollSensitivity = i895[8]
  request.r(i895[9], i895[10], 0, i894, 'm_Viewport')
  request.r(i895[11], i895[12], 0, i894, 'm_HorizontalScrollbar')
  request.r(i895[13], i895[14], 0, i894, 'm_VerticalScrollbar')
  i894.m_HorizontalScrollbarVisibility = i895[15]
  i894.m_VerticalScrollbarVisibility = i895[16]
  i894.m_HorizontalScrollbarSpacing = i895[17]
  i894.m_VerticalScrollbarSpacing = i895[18]
  i894.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i895[19], i894.m_OnValueChanged)
  return i894
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i896 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i897 = data
  i896.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i897[0], i896.m_PersistentCalls)
  return i896
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i898 = root || request.c( 'UnityEngine.UI.Mask' )
  var i899 = data
  i898.m_ShowMaskGraphic = !!i899[0]
  return i898
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i900 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i901 = data
  i900.m_Spacing = i901[0]
  i900.m_ChildForceExpandWidth = !!i901[1]
  i900.m_ChildForceExpandHeight = !!i901[2]
  i900.m_ChildControlWidth = !!i901[3]
  i900.m_ChildControlHeight = !!i901[4]
  i900.m_ChildScaleWidth = !!i901[5]
  i900.m_ChildScaleHeight = !!i901[6]
  i900.m_ReverseArrangement = !!i901[7]
  i900.m_Padding = UnityEngine.RectOffset.FromPaddings(i901[8], i901[9], i901[10], i901[11])
  i900.m_ChildAlignment = i901[12]
  return i900
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i902 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i903 = data
  i902.m_HorizontalFit = i903[0]
  i902.m_VerticalFit = i903[1]
  return i902
}

Deserializers["UnityEngine.UI.LayoutElement"] = function (request, data, root) {
  var i904 = root || request.c( 'UnityEngine.UI.LayoutElement' )
  var i905 = data
  i904.m_IgnoreLayout = !!i905[0]
  i904.m_MinWidth = i905[1]
  i904.m_MinHeight = i905[2]
  i904.m_PreferredWidth = i905[3]
  i904.m_PreferredHeight = i905[4]
  i904.m_FlexibleWidth = i905[5]
  i904.m_FlexibleHeight = i905[6]
  i904.m_LayoutPriority = i905[7]
  return i904
}

Deserializers["Portfolio.Playables.IsometricPortfolio.GameRecommendationLink"] = function (request, data, root) {
  var i906 = root || request.c( 'Portfolio.Playables.IsometricPortfolio.GameRecommendationLink' )
  var i907 = data
  request.r(i907[0], i907[1], 0, i906, 'titleTarget')
  request.r(i907[2], i907[3], 0, i906, 'descriptionTarget')
  request.r(i907[4], i907[5], 0, i906, 'steamButtonLabel')
  request.r(i907[6], i907[7], 0, i906, 'steamButtonRoot')
  request.r(i907[8], i907[9], 0, i906, 'steamButtonLink')
  i906.gameTitle = i907[10]
  i906.description = i907[11]
  i906.steamUrl = i907[12]
  i906.idleTitle = i907[13]
  i906.idleDescription = i907[14]
  return i906
}

Deserializers["UnityEngine.UI.Scrollbar"] = function (request, data, root) {
  var i908 = root || request.c( 'UnityEngine.UI.Scrollbar' )
  var i909 = data
  request.r(i909[0], i909[1], 0, i908, 'm_HandleRect')
  i908.m_Direction = i909[2]
  i908.m_Value = i909[3]
  i908.m_Size = i909[4]
  i908.m_NumberOfSteps = i909[5]
  i908.m_OnValueChanged = request.d('UnityEngine.UI.Scrollbar+ScrollEvent', i909[6], i908.m_OnValueChanged)
  i908.m_Navigation = request.d('UnityEngine.UI.Navigation', i909[7], i908.m_Navigation)
  i908.m_Transition = i909[8]
  i908.m_Colors = request.d('UnityEngine.UI.ColorBlock', i909[9], i908.m_Colors)
  i908.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i909[10], i908.m_SpriteState)
  i908.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i909[11], i908.m_AnimationTriggers)
  i908.m_Interactable = !!i909[12]
  request.r(i909[13], i909[14], 0, i908, 'm_TargetGraphic')
  return i908
}

Deserializers["UnityEngine.UI.Scrollbar+ScrollEvent"] = function (request, data, root) {
  var i910 = root || request.c( 'UnityEngine.UI.Scrollbar+ScrollEvent' )
  var i911 = data
  i910.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i911[0], i910.m_PersistentCalls)
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i913 = data
  i912.center = new pc.Vec3( i913[0], i913[1], i913[2] )
  i912.radius = i913[3]
  i912.height = i913[4]
  i912.direction = i913[5]
  i912.enabled = !!i913[6]
  i912.isTrigger = !!i913[7]
  request.r(i913[8], i913[9], 0, i912, 'material')
  return i912
}

Deserializers["Portfolio.Playables.IsometricPortfolio.IsometricCharacterController"] = function (request, data, root) {
  var i914 = root || request.c( 'Portfolio.Playables.IsometricPortfolio.IsometricCharacterController' )
  var i915 = data
  request.r(i915[0], i915[1], 0, i914, 'cameraTransform')
  request.r(i915[2], i915[3], 0, i914, 'visualRoot')
  i914.moveSpeed = i915[4]
  i914.turnSharpness = i915[5]
  i914.movementExtents = new pc.Vec2( i915[6], i915[7] )
  i914.destinationStoppingDistance = i915[8]
  i914.obstacleRadius = i915[9]
  return i914
}

Deserializers["Portfolio.Playables.IsometricPortfolio.ZuitAnimationDriver"] = function (request, data, root) {
  var i916 = root || request.c( 'Portfolio.Playables.IsometricPortfolio.ZuitAnimationDriver' )
  var i917 = data
  request.r(i917[0], i917[1], 0, i916, 'character')
  request.r(i917[2], i917[3], 0, i916, 'animator')
  request.r(i917[4], i917[5], 0, i916, 'modelRoot')
  i916.stepFrequency = i917[6]
  i916.stepHeight = i917[7]
  i916.bodySwayDegrees = i917[8]
  i916.responseSharpness = i917[9]
  return i916
}

Deserializers["Portfolio.Playables.IsometricPortfolio.PlayerAboutSection"] = function (request, data, root) {
  var i918 = root || request.c( 'Portfolio.Playables.IsometricPortfolio.PlayerAboutSection' )
  var i919 = data
  request.r(i919[0], i919[1], 0, i918, 'character')
  request.r(i919[2], i919[3], 0, i918, 'interactions')
  request.r(i919[4], i919[5], 0, i918, 'cameraRig')
  request.r(i919[6], i919[7], 0, i918, 'characterVisual')
  request.r(i919[8], i919[9], 0, i918, 'headMouseLook')
  request.r(i919[10], i919[11], 0, i918, 'faceFocusPoint')
  request.r(i919[12], i919[13], 0, i918, 'aboutContent')
  i918.faceZoom = i919[14]
  i918.faceCameraOffset = new pc.Vec3( i919[15], i919[16], i919[17] )
  return i918
}

Deserializers["Portfolio.Playables.IsometricPortfolio.ProceduralHeadMouseLook"] = function (request, data, root) {
  var i920 = root || request.c( 'Portfolio.Playables.IsometricPortfolio.ProceduralHeadMouseLook' )
  var i921 = data
  request.r(i921[0], i921[1], 0, i920, 'cameraRig')
  request.r(i921[2], i921[3], 0, i920, 'head')
  request.r(i921[4], i921[5], 0, i920, 'neck')
  i920.maxYaw = i921[6]
  i920.maxPitch = i921[7]
  i920.neckInfluence = i921[8]
  i920.responseSharpness = i921[9]
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i923 = data
  request.r(i923[0], i923[1], 0, i922, 'sharedMesh')
  var i925 = i923[2]
  var i924 = []
  for(var i = 0; i < i925.length; i += 2) {
  request.r(i925[i + 0], i925[i + 1], 2, i924, '')
  }
  i922.bones = i924
  i922.updateWhenOffscreen = !!i923[3]
  i922.localBounds = i923[4]
  request.r(i923[5], i923[6], 0, i922, 'rootBone')
  var i927 = i923[7]
  var i926 = []
  for(var i = 0; i < i927.length; i += 1) {
    i926.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i927[i + 0]) );
  }
  i922.blendShapesWeights = i926
  i922.enabled = !!i923[8]
  request.r(i923[9], i923[10], 0, i922, 'sharedMaterial')
  var i929 = i923[11]
  var i928 = []
  for(var i = 0; i < i929.length; i += 2) {
  request.r(i929[i + 0], i929[i + 1], 2, i928, '')
  }
  i922.sharedMaterials = i928
  i922.receiveShadows = !!i923[12]
  i922.shadowCastingMode = i923[13]
  i922.sortingLayerID = i923[14]
  i922.sortingOrder = i923[15]
  i922.lightmapIndex = i923[16]
  i922.lightmapSceneIndex = i923[17]
  i922.lightmapScaleOffset = new pc.Vec4( i923[18], i923[19], i923[20], i923[21] )
  i922.lightProbeUsage = i923[22]
  i922.reflectionProbeUsage = i923[23]
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i933 = data
  i932.weight = i933[0]
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i935 = data
  i934.aspect = i935[0]
  i934.orthographic = !!i935[1]
  i934.orthographicSize = i935[2]
  i934.backgroundColor = new pc.Color(i935[3], i935[4], i935[5], i935[6])
  i934.nearClipPlane = i935[7]
  i934.farClipPlane = i935[8]
  i934.fieldOfView = i935[9]
  i934.depth = i935[10]
  i934.clearFlags = i935[11]
  i934.cullingMask = i935[12]
  i934.rect = i935[13]
  request.r(i935[14], i935[15], 0, i934, 'targetTexture')
  i934.usePhysicalProperties = !!i935[16]
  i934.focalLength = i935[17]
  i934.sensorSize = new pc.Vec2( i935[18], i935[19] )
  i934.lensShift = new pc.Vec2( i935[20], i935[21] )
  i934.gateFit = i935[22]
  i934.commandBufferCount = i935[23]
  i934.cameraType = i935[24]
  i934.enabled = !!i935[25]
  return i934
}

Deserializers["Portfolio.Playables.IsometricPortfolio.IsometricCameraFollow"] = function (request, data, root) {
  var i936 = root || request.c( 'Portfolio.Playables.IsometricPortfolio.IsometricCameraFollow' )
  var i937 = data
  request.r(i937[0], i937[1], 0, i936, 'target')
  request.r(i937[2], i937[3], 0, i936, 'character')
  i936.followSharpness = i937[4]
  i936.movementLookAhead = i937[5]
  return i936
}

Deserializers["Portfolio.Playables.IsometricPortfolio.IsometricFocusCameraRig"] = function (request, data, root) {
  var i938 = root || request.c( 'Portfolio.Playables.IsometricPortfolio.IsometricFocusCameraRig' )
  var i939 = data
  request.r(i939[0], i939[1], 0, i938, 'movementCamera')
  request.r(i939[2], i939[3], 0, i938, 'focusCamera')
  i938.focusOffset = new pc.Vec3( i939[4], i939[5], i939[6] )
  i938.focusOrthographicSize = i939[7]
  return i938
}

Deserializers["Portfolio.Playables.IsometricPortfolio.IsometricInteractionController"] = function (request, data, root) {
  var i940 = root || request.c( 'Portfolio.Playables.IsometricPortfolio.IsometricInteractionController' )
  var i941 = data
  request.r(i941[0], i941[1], 0, i940, 'character')
  request.r(i941[2], i941[3], 0, i940, 'cameraRig')
  i940.arrivalTolerance = i941[4]
  return i940
}

Deserializers["Portfolio.Playables.IsometricPortfolio.PointerMoveTarget"] = function (request, data, root) {
  var i942 = root || request.c( 'Portfolio.Playables.IsometricPortfolio.PointerMoveTarget' )
  var i943 = data
  request.r(i943[0], i943[1], 0, i942, 'inputCamera')
  request.r(i943[2], i943[3], 0, i942, 'character')
  request.r(i943[4], i943[5], 0, i942, 'destinationMarker')
  request.r(i943[6], i943[7], 0, i942, 'interactionController')
  request.r(i943[8], i943[9], 0, i942, 'playerAbout')
  i942.groundHeight = i943[10]
  return i942
}

Deserializers["Portfolio.Playables.IsometricPortfolio.ResponsiveAboutModal"] = function (request, data, root) {
  var i944 = root || request.c( 'Portfolio.Playables.IsometricPortfolio.ResponsiveAboutModal' )
  var i945 = data
  request.r(i945[0], i945[1], 0, i944, 'card')
  request.r(i945[2], i945[3], 0, i944, 'portrait')
  request.r(i945[4], i945[5], 0, i944, 'title')
  request.r(i945[6], i945[7], 0, i944, 'body')
  request.r(i945[8], i945[9], 0, i944, 'contactHeading')
  var i947 = i945[10]
  var i946 = []
  for(var i = 0; i < i947.length; i += 2) {
  request.r(i947[i + 0], i947[i + 1], 2, i946, '')
  }
  i944.contactButtons = i946
  request.r(i945[11], i945[12], 0, i944, 'closeHint')
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i949 = data
  i948.type = i949[0]
  i948.color = new pc.Color(i949[1], i949[2], i949[3], i949[4])
  i948.cullingMask = i949[5]
  i948.intensity = i949[6]
  i948.range = i949[7]
  i948.spotAngle = i949[8]
  i948.shadows = i949[9]
  i948.shadowNormalBias = i949[10]
  i948.shadowBias = i949[11]
  i948.shadowStrength = i949[12]
  i948.shadowResolution = i949[13]
  i948.lightmapBakeType = i949[14]
  i948.renderMode = i949[15]
  request.r(i949[16], i949[17], 0, i948, 'cookie')
  i948.cookieSize = i949[18]
  i948.shadowNearPlane = i949[19]
  i948.occlusionMaskChannel = i949[20]
  i948.isBaked = !!i949[21]
  i948.mixedLightingMode = i949[22]
  i948.enabled = !!i949[23]
  return i948
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i950 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i951 = data
  request.r(i951[0], i951[1], 0, i950, 'm_FirstSelected')
  i950.m_sendNavigationEvents = !!i951[2]
  i950.m_DragThreshold = i951[3]
  return i950
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i952 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i953 = data
  i952.m_HorizontalAxis = i953[0]
  i952.m_VerticalAxis = i953[1]
  i952.m_SubmitButton = i953[2]
  i952.m_CancelButton = i953[3]
  i952.m_InputActionsPerSecond = i953[4]
  i952.m_RepeatDelay = i953[5]
  i952.m_ForceModuleActive = !!i953[6]
  i952.m_SendPointerHoverToParent = !!i953[7]
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i955 = data
  i954.ambientIntensity = i955[0]
  i954.reflectionIntensity = i955[1]
  i954.ambientMode = i955[2]
  i954.ambientLight = new pc.Color(i955[3], i955[4], i955[5], i955[6])
  i954.ambientSkyColor = new pc.Color(i955[7], i955[8], i955[9], i955[10])
  i954.ambientGroundColor = new pc.Color(i955[11], i955[12], i955[13], i955[14])
  i954.ambientEquatorColor = new pc.Color(i955[15], i955[16], i955[17], i955[18])
  i954.fogColor = new pc.Color(i955[19], i955[20], i955[21], i955[22])
  i954.fogEndDistance = i955[23]
  i954.fogStartDistance = i955[24]
  i954.fogDensity = i955[25]
  i954.fog = !!i955[26]
  request.r(i955[27], i955[28], 0, i954, 'skybox')
  i954.fogMode = i955[29]
  var i957 = i955[30]
  var i956 = []
  for(var i = 0; i < i957.length; i += 1) {
    i956.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i957[i + 0]) );
  }
  i954.lightmaps = i956
  i954.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i955[31], i954.lightProbes)
  i954.lightmapsMode = i955[32]
  i954.mixedBakeMode = i955[33]
  i954.environmentLightingMode = i955[34]
  i954.ambientProbe = new pc.SphericalHarmonicsL2(i955[35])
  request.r(i955[36], i955[37], 0, i954, 'customReflection')
  request.r(i955[38], i955[39], 0, i954, 'defaultReflection')
  i954.defaultReflectionMode = i955[40]
  i954.defaultReflectionResolution = i955[41]
  i954.sunLightObjectId = i955[42]
  i954.pixelLightCount = i955[43]
  i954.defaultReflectionHDR = !!i955[44]
  i954.hasLightDataAsset = !!i955[45]
  i954.hasManualGenerate = !!i955[46]
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i961 = data
  request.r(i961[0], i961[1], 0, i960, 'lightmapColor')
  request.r(i961[2], i961[3], 0, i960, 'lightmapDirection')
  request.r(i961[4], i961[5], 0, i960, 'shadowMask')
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i962 = root || new UnityEngine.LightProbes()
  var i963 = data
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i971 = data
  var i973 = i971[0]
  var i972 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i973.length; i += 1) {
    i972.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i973[i + 0]));
  }
  i970.ShaderCompilationErrors = i972
  i970.name = i971[1]
  i970.guid = i971[2]
  var i975 = i971[3]
  var i974 = []
  for(var i = 0; i < i975.length; i += 1) {
    i974.push( i975[i + 0] );
  }
  i970.shaderDefinedKeywords = i974
  var i977 = i971[4]
  var i976 = []
  for(var i = 0; i < i977.length; i += 1) {
    i976.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i977[i + 0]) );
  }
  i970.passes = i976
  var i979 = i971[5]
  var i978 = []
  for(var i = 0; i < i979.length; i += 1) {
    i978.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i979[i + 0]) );
  }
  i970.usePasses = i978
  var i981 = i971[6]
  var i980 = []
  for(var i = 0; i < i981.length; i += 1) {
    i980.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i981[i + 0]) );
  }
  i970.defaultParameterValues = i980
  request.r(i971[7], i971[8], 0, i970, 'unityFallbackShader')
  i970.readDepth = !!i971[9]
  i970.hasDepthOnlyPass = !!i971[10]
  i970.isCreatedByShaderGraph = !!i971[11]
  i970.disableBatching = !!i971[12]
  i970.compiled = !!i971[13]
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i985 = data
  i984.shaderName = i985[0]
  i984.errorMessage = i985[1]
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i990 = root || new pc.UnityShaderPass()
  var i991 = data
  i990.id = i991[0]
  i990.subShaderIndex = i991[1]
  i990.name = i991[2]
  i990.passType = i991[3]
  i990.grabPassTextureName = i991[4]
  i990.usePass = !!i991[5]
  i990.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i991[6], i990.zTest)
  i990.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i991[7], i990.zWrite)
  i990.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i991[8], i990.culling)
  i990.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i991[9], i990.blending)
  i990.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i991[10], i990.alphaBlending)
  i990.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i991[11], i990.colorWriteMask)
  i990.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i991[12], i990.offsetUnits)
  i990.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i991[13], i990.offsetFactor)
  i990.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i991[14], i990.stencilRef)
  i990.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i991[15], i990.stencilReadMask)
  i990.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i991[16], i990.stencilWriteMask)
  i990.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i991[17], i990.stencilOp)
  i990.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i991[18], i990.stencilOpFront)
  i990.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i991[19], i990.stencilOpBack)
  var i993 = i991[20]
  var i992 = []
  for(var i = 0; i < i993.length; i += 1) {
    i992.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i993[i + 0]) );
  }
  i990.tags = i992
  var i995 = i991[21]
  var i994 = []
  for(var i = 0; i < i995.length; i += 1) {
    i994.push( i995[i + 0] );
  }
  i990.passDefinedKeywords = i994
  var i997 = i991[22]
  var i996 = []
  for(var i = 0; i < i997.length; i += 1) {
    i996.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i997[i + 0]) );
  }
  i990.passDefinedKeywordGroups = i996
  var i999 = i991[23]
  var i998 = []
  for(var i = 0; i < i999.length; i += 1) {
    i998.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i999[i + 0]) );
  }
  i990.variants = i998
  var i1001 = i991[24]
  var i1000 = []
  for(var i = 0; i < i1001.length; i += 1) {
    i1000.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1001[i + 0]) );
  }
  i990.excludedVariants = i1000
  i990.hasDepthReader = !!i991[25]
  return i990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1003 = data
  i1002.val = i1003[0]
  i1002.name = i1003[1]
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1005 = data
  i1004.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1005[0], i1004.src)
  i1004.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1005[1], i1004.dst)
  i1004.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1005[2], i1004.op)
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1007 = data
  i1006.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1007[0], i1006.pass)
  i1006.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1007[1], i1006.fail)
  i1006.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1007[2], i1006.zFail)
  i1006.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1007[3], i1006.comp)
  return i1006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1011 = data
  i1010.name = i1011[0]
  i1010.value = i1011[1]
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1015 = data
  var i1017 = i1015[0]
  var i1016 = []
  for(var i = 0; i < i1017.length; i += 1) {
    i1016.push( i1017[i + 0] );
  }
  i1014.keywords = i1016
  i1014.hasDiscard = !!i1015[1]
  return i1014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1021 = data
  i1020.passId = i1021[0]
  i1020.subShaderIndex = i1021[1]
  var i1023 = i1021[2]
  var i1022 = []
  for(var i = 0; i < i1023.length; i += 1) {
    i1022.push( i1023[i + 0] );
  }
  i1020.keywords = i1022
  i1020.vertexProgram = i1021[3]
  i1020.fragmentProgram = i1021[4]
  i1020.exportedForWebGl2 = !!i1021[5]
  i1020.readDepth = !!i1021[6]
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1027 = data
  request.r(i1027[0], i1027[1], 0, i1026, 'shader')
  i1026.pass = i1027[2]
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1031 = data
  i1030.name = i1031[0]
  i1030.type = i1031[1]
  i1030.value = new pc.Vec4( i1031[2], i1031[3], i1031[4], i1031[5] )
  i1030.textureValue = i1031[6]
  i1030.shaderPropertyFlag = i1031[7]
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1033 = data
  i1032.name = i1033[0]
  return i1032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1035 = data
  i1034.name = i1035[0]
  i1034.wrapMode = i1035[1]
  i1034.isLooping = !!i1035[2]
  i1034.length = i1035[3]
  var i1037 = i1035[4]
  var i1036 = []
  for(var i = 0; i < i1037.length; i += 1) {
    i1036.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1037[i + 0]) );
  }
  i1034.curves = i1036
  var i1039 = i1035[5]
  var i1038 = []
  for(var i = 0; i < i1039.length; i += 1) {
    i1038.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1039[i + 0]) );
  }
  i1034.events = i1038
  i1034.halfPrecision = !!i1035[6]
  i1034._frameRate = i1035[7]
  i1034.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1035[8], i1034.localBounds)
  i1034.hasMuscleCurves = !!i1035[9]
  var i1041 = i1035[10]
  var i1040 = []
  for(var i = 0; i < i1041.length; i += 1) {
    i1040.push( i1041[i + 0] );
  }
  i1034.clipMuscleConstant = i1040
  i1034.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1035[11], i1034.clipBindingConstant)
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1045 = data
  i1044.path = i1045[0]
  i1044.hash = i1045[1]
  i1044.componentType = i1045[2]
  i1044.property = i1045[3]
  i1044.keys = i1045[4]
  var i1047 = i1045[5]
  var i1046 = []
  for(var i = 0; i < i1047.length; i += 1) {
    i1046.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1047[i + 0]) );
  }
  i1044.objectReferenceKeys = i1046
  return i1044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1051 = data
  i1050.time = i1051[0]
  request.r(i1051[1], i1051[2], 0, i1050, 'value')
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1055 = data
  i1054.functionName = i1055[0]
  i1054.floatParameter = i1055[1]
  i1054.intParameter = i1055[2]
  i1054.stringParameter = i1055[3]
  request.r(i1055[4], i1055[5], 0, i1054, 'objectReferenceParameter')
  i1054.time = i1055[6]
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1057 = data
  i1056.center = new pc.Vec3( i1057[0], i1057[1], i1057[2] )
  i1056.extends = new pc.Vec3( i1057[3], i1057[4], i1057[5] )
  return i1056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1061 = data
  var i1063 = i1061[0]
  var i1062 = []
  for(var i = 0; i < i1063.length; i += 1) {
    i1062.push( i1063[i + 0] );
  }
  i1060.genericBindings = i1062
  var i1065 = i1061[1]
  var i1064 = []
  for(var i = 0; i < i1065.length; i += 1) {
    i1064.push( i1065[i + 0] );
  }
  i1060.pptrCurveMapping = i1064
  return i1060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1067 = data
  i1066.name = i1067[0]
  i1066.ascent = i1067[1]
  i1066.originalLineHeight = i1067[2]
  i1066.fontSize = i1067[3]
  var i1069 = i1067[4]
  var i1068 = []
  for(var i = 0; i < i1069.length; i += 1) {
    i1068.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1069[i + 0]) );
  }
  i1066.characterInfo = i1068
  request.r(i1067[5], i1067[6], 0, i1066, 'texture')
  i1066.originalFontSize = i1067[7]
  return i1066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1073 = data
  i1072.index = i1073[0]
  i1072.advance = i1073[1]
  i1072.bearing = i1073[2]
  i1072.glyphWidth = i1073[3]
  i1072.glyphHeight = i1073[4]
  i1072.minX = i1073[5]
  i1072.maxX = i1073[6]
  i1072.minY = i1073[7]
  i1072.maxY = i1073[8]
  i1072.uvBottomLeftX = i1073[9]
  i1072.uvBottomLeftY = i1073[10]
  i1072.uvBottomRightX = i1073[11]
  i1072.uvBottomRightY = i1073[12]
  i1072.uvTopLeftX = i1073[13]
  i1072.uvTopLeftY = i1073[14]
  i1072.uvTopRightX = i1073[15]
  i1072.uvTopRightY = i1073[16]
  return i1072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1075 = data
  i1074.name = i1075[0]
  var i1077 = i1075[1]
  var i1076 = []
  for(var i = 0; i < i1077.length; i += 1) {
    i1076.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1077[i + 0]) );
  }
  i1074.layers = i1076
  var i1079 = i1075[2]
  var i1078 = []
  for(var i = 0; i < i1079.length; i += 1) {
    i1078.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1079[i + 0]) );
  }
  i1074.parameters = i1078
  i1074.animationClips = i1075[3]
  i1074.avatarUnsupported = i1075[4]
  return i1074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1083 = data
  i1082.name = i1083[0]
  i1082.defaultWeight = i1083[1]
  i1082.blendingMode = i1083[2]
  i1082.avatarMask = i1083[3]
  i1082.syncedLayerIndex = i1083[4]
  i1082.syncedLayerAffectsTiming = !!i1083[5]
  i1082.syncedLayers = i1083[6]
  i1082.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1083[7], i1082.stateMachine)
  return i1082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1085 = data
  i1084.id = i1085[0]
  i1084.name = i1085[1]
  i1084.path = i1085[2]
  var i1087 = i1085[3]
  var i1086 = []
  for(var i = 0; i < i1087.length; i += 1) {
    i1086.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1087[i + 0]) );
  }
  i1084.states = i1086
  var i1089 = i1085[4]
  var i1088 = []
  for(var i = 0; i < i1089.length; i += 1) {
    i1088.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1089[i + 0]) );
  }
  i1084.machines = i1088
  var i1091 = i1085[5]
  var i1090 = []
  for(var i = 0; i < i1091.length; i += 1) {
    i1090.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1091[i + 0]) );
  }
  i1084.entryStateTransitions = i1090
  var i1093 = i1085[6]
  var i1092 = []
  for(var i = 0; i < i1093.length; i += 1) {
    i1092.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1093[i + 0]) );
  }
  i1084.exitStateTransitions = i1092
  var i1095 = i1085[7]
  var i1094 = []
  for(var i = 0; i < i1095.length; i += 1) {
    i1094.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1095[i + 0]) );
  }
  i1084.anyStateTransitions = i1094
  i1084.defaultStateId = i1085[8]
  return i1084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1099 = data
  i1098.id = i1099[0]
  i1098.name = i1099[1]
  i1098.cycleOffset = i1099[2]
  i1098.cycleOffsetParameter = i1099[3]
  i1098.cycleOffsetParameterActive = !!i1099[4]
  i1098.mirror = !!i1099[5]
  i1098.mirrorParameter = i1099[6]
  i1098.mirrorParameterActive = !!i1099[7]
  i1098.motionId = i1099[8]
  i1098.nameHash = i1099[9]
  i1098.fullPathHash = i1099[10]
  i1098.speed = i1099[11]
  i1098.speedParameter = i1099[12]
  i1098.speedParameterActive = !!i1099[13]
  i1098.tag = i1099[14]
  i1098.tagHash = i1099[15]
  i1098.writeDefaultValues = !!i1099[16]
  var i1101 = i1099[17]
  var i1100 = []
  for(var i = 0; i < i1101.length; i += 2) {
  request.r(i1101[i + 0], i1101[i + 1], 2, i1100, '')
  }
  i1098.behaviours = i1100
  var i1103 = i1099[18]
  var i1102 = []
  for(var i = 0; i < i1103.length; i += 1) {
    i1102.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1103[i + 0]) );
  }
  i1098.transitions = i1102
  return i1098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1109 = data
  i1108.fullPath = i1109[0]
  i1108.canTransitionToSelf = !!i1109[1]
  i1108.duration = i1109[2]
  i1108.exitTime = i1109[3]
  i1108.hasExitTime = !!i1109[4]
  i1108.hasFixedDuration = !!i1109[5]
  i1108.interruptionSource = i1109[6]
  i1108.offset = i1109[7]
  i1108.orderedInterruption = !!i1109[8]
  i1108.destinationStateId = i1109[9]
  i1108.isExit = !!i1109[10]
  i1108.mute = !!i1109[11]
  i1108.solo = !!i1109[12]
  var i1111 = i1109[13]
  var i1110 = []
  for(var i = 0; i < i1111.length; i += 1) {
    i1110.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1111[i + 0]) );
  }
  i1108.conditions = i1110
  return i1108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1117 = data
  i1116.destinationStateId = i1117[0]
  i1116.isExit = !!i1117[1]
  i1116.mute = !!i1117[2]
  i1116.solo = !!i1117[3]
  var i1119 = i1117[4]
  var i1118 = []
  for(var i = 0; i < i1119.length; i += 1) {
    i1118.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1119[i + 0]) );
  }
  i1116.conditions = i1118
  return i1116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1123 = data
  i1122.defaultBool = !!i1123[0]
  i1122.defaultFloat = i1123[1]
  i1122.defaultInt = i1123[2]
  i1122.name = i1123[3]
  i1122.nameHash = i1123[4]
  i1122.type = i1123[5]
  return i1122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1127 = data
  i1126.mode = i1127[0]
  i1126.parameter = i1127[1]
  i1126.threshold = i1127[2]
  return i1126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1129 = data
  i1128.name = i1129[0]
  i1128.bytes64 = i1129[1]
  i1128.data = i1129[2]
  return i1128
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1130 = root || request.c( 'TMPro.TMP_Settings' )
  var i1131 = data
  i1130.m_enableWordWrapping = !!i1131[0]
  i1130.m_enableKerning = !!i1131[1]
  i1130.m_enableExtraPadding = !!i1131[2]
  i1130.m_enableTintAllSprites = !!i1131[3]
  i1130.m_enableParseEscapeCharacters = !!i1131[4]
  i1130.m_EnableRaycastTarget = !!i1131[5]
  i1130.m_GetFontFeaturesAtRuntime = !!i1131[6]
  i1130.m_missingGlyphCharacter = i1131[7]
  i1130.m_warningsDisabled = !!i1131[8]
  request.r(i1131[9], i1131[10], 0, i1130, 'm_defaultFontAsset')
  i1130.m_defaultFontAssetPath = i1131[11]
  i1130.m_defaultFontSize = i1131[12]
  i1130.m_defaultAutoSizeMinRatio = i1131[13]
  i1130.m_defaultAutoSizeMaxRatio = i1131[14]
  i1130.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1131[15], i1131[16] )
  i1130.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1131[17], i1131[18] )
  i1130.m_autoSizeTextContainer = !!i1131[19]
  i1130.m_IsTextObjectScaleStatic = !!i1131[20]
  var i1133 = i1131[21]
  var i1132 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1133.length; i += 2) {
  request.r(i1133[i + 0], i1133[i + 1], 1, i1132, '')
  }
  i1130.m_fallbackFontAssets = i1132
  i1130.m_matchMaterialPreset = !!i1131[22]
  request.r(i1131[23], i1131[24], 0, i1130, 'm_defaultSpriteAsset')
  i1130.m_defaultSpriteAssetPath = i1131[25]
  i1130.m_enableEmojiSupport = !!i1131[26]
  i1130.m_MissingCharacterSpriteUnicode = i1131[27]
  i1130.m_defaultColorGradientPresetsPath = i1131[28]
  request.r(i1131[29], i1131[30], 0, i1130, 'm_defaultStyleSheet')
  i1130.m_StyleSheetsResourcePath = i1131[31]
  request.r(i1131[32], i1131[33], 0, i1130, 'm_leadingCharacters')
  request.r(i1131[34], i1131[35], 0, i1130, 'm_followingCharacters')
  i1130.m_UseModernHangulLineBreakingRules = !!i1131[36]
  return i1130
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1136 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1137 = data
  request.r(i1137[0], i1137[1], 0, i1136, 'atlas')
  i1136.normalStyle = i1137[2]
  i1136.normalSpacingOffset = i1137[3]
  i1136.boldStyle = i1137[4]
  i1136.boldSpacing = i1137[5]
  i1136.italicStyle = i1137[6]
  i1136.tabSize = i1137[7]
  i1136.hashCode = i1137[8]
  request.r(i1137[9], i1137[10], 0, i1136, 'material')
  i1136.materialHashCode = i1137[11]
  i1136.m_Version = i1137[12]
  i1136.m_SourceFontFileGUID = i1137[13]
  request.r(i1137[14], i1137[15], 0, i1136, 'm_SourceFontFile_EditorRef')
  request.r(i1137[16], i1137[17], 0, i1136, 'm_SourceFontFile')
  i1136.m_AtlasPopulationMode = i1137[18]
  i1136.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1137[19], i1136.m_FaceInfo)
  var i1139 = i1137[20]
  var i1138 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1139.length; i += 1) {
    i1138.add(request.d('UnityEngine.TextCore.Glyph', i1139[i + 0]));
  }
  i1136.m_GlyphTable = i1138
  var i1141 = i1137[21]
  var i1140 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1141.length; i += 1) {
    i1140.add(request.d('TMPro.TMP_Character', i1141[i + 0]));
  }
  i1136.m_CharacterTable = i1140
  var i1143 = i1137[22]
  var i1142 = []
  for(var i = 0; i < i1143.length; i += 2) {
  request.r(i1143[i + 0], i1143[i + 1], 2, i1142, '')
  }
  i1136.m_AtlasTextures = i1142
  i1136.m_AtlasTextureIndex = i1137[23]
  i1136.m_IsMultiAtlasTexturesEnabled = !!i1137[24]
  i1136.m_ClearDynamicDataOnBuild = !!i1137[25]
  var i1145 = i1137[26]
  var i1144 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1145.length; i += 1) {
    i1144.add(request.d('UnityEngine.TextCore.GlyphRect', i1145[i + 0]));
  }
  i1136.m_UsedGlyphRects = i1144
  var i1147 = i1137[27]
  var i1146 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1147.length; i += 1) {
    i1146.add(request.d('UnityEngine.TextCore.GlyphRect', i1147[i + 0]));
  }
  i1136.m_FreeGlyphRects = i1146
  i1136.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1137[28], i1136.m_fontInfo)
  i1136.m_AtlasWidth = i1137[29]
  i1136.m_AtlasHeight = i1137[30]
  i1136.m_AtlasPadding = i1137[31]
  i1136.m_AtlasRenderMode = i1137[32]
  var i1149 = i1137[33]
  var i1148 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1149.length; i += 1) {
    i1148.add(request.d('TMPro.TMP_Glyph', i1149[i + 0]));
  }
  i1136.m_glyphInfoList = i1148
  i1136.m_KerningTable = request.d('TMPro.KerningTable', i1137[34], i1136.m_KerningTable)
  i1136.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1137[35], i1136.m_FontFeatureTable)
  var i1151 = i1137[36]
  var i1150 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1151.length; i += 2) {
  request.r(i1151[i + 0], i1151[i + 1], 1, i1150, '')
  }
  i1136.fallbackFontAssets = i1150
  var i1153 = i1137[37]
  var i1152 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1153.length; i += 2) {
  request.r(i1153[i + 0], i1153[i + 1], 1, i1152, '')
  }
  i1136.m_FallbackFontAssetTable = i1152
  i1136.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1137[38], i1136.m_CreationSettings)
  var i1155 = i1137[39]
  var i1154 = []
  for(var i = 0; i < i1155.length; i += 1) {
    i1154.push( request.d('TMPro.TMP_FontWeightPair', i1155[i + 0]) );
  }
  i1136.m_FontWeightTable = i1154
  var i1157 = i1137[40]
  var i1156 = []
  for(var i = 0; i < i1157.length; i += 1) {
    i1156.push( request.d('TMPro.TMP_FontWeightPair', i1157[i + 0]) );
  }
  i1136.fontWeights = i1156
  return i1136
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1158 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1159 = data
  i1158.m_FaceIndex = i1159[0]
  i1158.m_FamilyName = i1159[1]
  i1158.m_StyleName = i1159[2]
  i1158.m_PointSize = i1159[3]
  i1158.m_Scale = i1159[4]
  i1158.m_UnitsPerEM = i1159[5]
  i1158.m_LineHeight = i1159[6]
  i1158.m_AscentLine = i1159[7]
  i1158.m_CapLine = i1159[8]
  i1158.m_MeanLine = i1159[9]
  i1158.m_Baseline = i1159[10]
  i1158.m_DescentLine = i1159[11]
  i1158.m_SuperscriptOffset = i1159[12]
  i1158.m_SuperscriptSize = i1159[13]
  i1158.m_SubscriptOffset = i1159[14]
  i1158.m_SubscriptSize = i1159[15]
  i1158.m_UnderlineOffset = i1159[16]
  i1158.m_UnderlineThickness = i1159[17]
  i1158.m_StrikethroughOffset = i1159[18]
  i1158.m_StrikethroughThickness = i1159[19]
  i1158.m_TabWidth = i1159[20]
  return i1158
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1162 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1163 = data
  i1162.m_Index = i1163[0]
  i1162.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1163[1], i1162.m_Metrics)
  i1162.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1163[2], i1162.m_GlyphRect)
  i1162.m_Scale = i1163[3]
  i1162.m_AtlasIndex = i1163[4]
  i1162.m_ClassDefinitionType = i1163[5]
  return i1162
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1164 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1165 = data
  i1164.m_Width = i1165[0]
  i1164.m_Height = i1165[1]
  i1164.m_HorizontalBearingX = i1165[2]
  i1164.m_HorizontalBearingY = i1165[3]
  i1164.m_HorizontalAdvance = i1165[4]
  return i1164
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1166 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1167 = data
  i1166.m_X = i1167[0]
  i1166.m_Y = i1167[1]
  i1166.m_Width = i1167[2]
  i1166.m_Height = i1167[3]
  return i1166
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1170 = root || request.c( 'TMPro.TMP_Character' )
  var i1171 = data
  i1170.m_ElementType = i1171[0]
  i1170.m_Unicode = i1171[1]
  i1170.m_GlyphIndex = i1171[2]
  i1170.m_Scale = i1171[3]
  return i1170
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1176 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1177 = data
  i1176.Name = i1177[0]
  i1176.PointSize = i1177[1]
  i1176.Scale = i1177[2]
  i1176.CharacterCount = i1177[3]
  i1176.LineHeight = i1177[4]
  i1176.Baseline = i1177[5]
  i1176.Ascender = i1177[6]
  i1176.CapHeight = i1177[7]
  i1176.Descender = i1177[8]
  i1176.CenterLine = i1177[9]
  i1176.SuperscriptOffset = i1177[10]
  i1176.SubscriptOffset = i1177[11]
  i1176.SubSize = i1177[12]
  i1176.Underline = i1177[13]
  i1176.UnderlineThickness = i1177[14]
  i1176.strikethrough = i1177[15]
  i1176.strikethroughThickness = i1177[16]
  i1176.TabWidth = i1177[17]
  i1176.Padding = i1177[18]
  i1176.AtlasWidth = i1177[19]
  i1176.AtlasHeight = i1177[20]
  return i1176
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1180 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1181 = data
  i1180.id = i1181[0]
  i1180.x = i1181[1]
  i1180.y = i1181[2]
  i1180.width = i1181[3]
  i1180.height = i1181[4]
  i1180.xOffset = i1181[5]
  i1180.yOffset = i1181[6]
  i1180.xAdvance = i1181[7]
  i1180.scale = i1181[8]
  return i1180
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1182 = root || request.c( 'TMPro.KerningTable' )
  var i1183 = data
  var i1185 = i1183[0]
  var i1184 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1185.length; i += 1) {
    i1184.add(request.d('TMPro.KerningPair', i1185[i + 0]));
  }
  i1182.kerningPairs = i1184
  return i1182
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1188 = root || request.c( 'TMPro.KerningPair' )
  var i1189 = data
  i1188.xOffset = i1189[0]
  i1188.m_FirstGlyph = i1189[1]
  i1188.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1189[2], i1188.m_FirstGlyphAdjustments)
  i1188.m_SecondGlyph = i1189[3]
  i1188.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1189[4], i1188.m_SecondGlyphAdjustments)
  i1188.m_IgnoreSpacingAdjustments = !!i1189[5]
  return i1188
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1190 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1191 = data
  var i1193 = i1191[0]
  var i1192 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1193.length; i += 1) {
    i1192.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1193[i + 0]));
  }
  i1190.m_GlyphPairAdjustmentRecords = i1192
  return i1190
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1196 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1197 = data
  i1196.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1197[0], i1196.m_FirstAdjustmentRecord)
  i1196.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1197[1], i1196.m_SecondAdjustmentRecord)
  i1196.m_FeatureLookupFlags = i1197[2]
  return i1196
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1198 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1199 = data
  i1198.m_GlyphIndex = i1199[0]
  i1198.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1199[1], i1198.m_GlyphValueRecord)
  return i1198
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1200 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1201 = data
  i1200.m_XPlacement = i1201[0]
  i1200.m_YPlacement = i1201[1]
  i1200.m_XAdvance = i1201[2]
  i1200.m_YAdvance = i1201[3]
  return i1200
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1202 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1203 = data
  i1202.sourceFontFileName = i1203[0]
  i1202.sourceFontFileGUID = i1203[1]
  i1202.pointSizeSamplingMode = i1203[2]
  i1202.pointSize = i1203[3]
  i1202.padding = i1203[4]
  i1202.packingMode = i1203[5]
  i1202.atlasWidth = i1203[6]
  i1202.atlasHeight = i1203[7]
  i1202.characterSetSelectionMode = i1203[8]
  i1202.characterSequence = i1203[9]
  i1202.referencedFontAssetGUID = i1203[10]
  i1202.referencedTextAssetGUID = i1203[11]
  i1202.fontStyle = i1203[12]
  i1202.fontStyleModifier = i1203[13]
  i1202.renderMode = i1203[14]
  i1202.includeFontFeatures = !!i1203[15]
  return i1202
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1206 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1207 = data
  request.r(i1207[0], i1207[1], 0, i1206, 'regularTypeface')
  request.r(i1207[2], i1207[3], 0, i1206, 'italicTypeface')
  return i1206
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1208 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1209 = data
  request.r(i1209[0], i1209[1], 0, i1208, 'spriteSheet')
  var i1211 = i1209[2]
  var i1210 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1211.length; i += 1) {
    i1210.add(request.d('TMPro.TMP_Sprite', i1211[i + 0]));
  }
  i1208.spriteInfoList = i1210
  var i1213 = i1209[3]
  var i1212 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1213.length; i += 2) {
  request.r(i1213[i + 0], i1213[i + 1], 1, i1212, '')
  }
  i1208.fallbackSpriteAssets = i1212
  i1208.hashCode = i1209[4]
  request.r(i1209[5], i1209[6], 0, i1208, 'material')
  i1208.materialHashCode = i1209[7]
  i1208.m_Version = i1209[8]
  i1208.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1209[9], i1208.m_FaceInfo)
  var i1215 = i1209[10]
  var i1214 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1215.length; i += 1) {
    i1214.add(request.d('TMPro.TMP_SpriteCharacter', i1215[i + 0]));
  }
  i1208.m_SpriteCharacterTable = i1214
  var i1217 = i1209[11]
  var i1216 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1217.length; i += 1) {
    i1216.add(request.d('TMPro.TMP_SpriteGlyph', i1217[i + 0]));
  }
  i1208.m_SpriteGlyphTable = i1216
  return i1208
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1220 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1221 = data
  i1220.name = i1221[0]
  i1220.hashCode = i1221[1]
  i1220.unicode = i1221[2]
  i1220.pivot = new pc.Vec2( i1221[3], i1221[4] )
  request.r(i1221[5], i1221[6], 0, i1220, 'sprite')
  i1220.id = i1221[7]
  i1220.x = i1221[8]
  i1220.y = i1221[9]
  i1220.width = i1221[10]
  i1220.height = i1221[11]
  i1220.xOffset = i1221[12]
  i1220.yOffset = i1221[13]
  i1220.xAdvance = i1221[14]
  i1220.scale = i1221[15]
  return i1220
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1226 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1227 = data
  i1226.m_Name = i1227[0]
  i1226.m_HashCode = i1227[1]
  i1226.m_ElementType = i1227[2]
  i1226.m_Unicode = i1227[3]
  i1226.m_GlyphIndex = i1227[4]
  i1226.m_Scale = i1227[5]
  return i1226
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1230 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1231 = data
  request.r(i1231[0], i1231[1], 0, i1230, 'sprite')
  i1230.m_Index = i1231[2]
  i1230.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1231[3], i1230.m_Metrics)
  i1230.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1231[4], i1230.m_GlyphRect)
  i1230.m_Scale = i1231[5]
  i1230.m_AtlasIndex = i1231[6]
  i1230.m_ClassDefinitionType = i1231[7]
  return i1230
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1232 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1233 = data
  var i1235 = i1233[0]
  var i1234 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1235.length; i += 1) {
    i1234.add(request.d('TMPro.TMP_Style', i1235[i + 0]));
  }
  i1232.m_StyleList = i1234
  return i1232
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1238 = root || request.c( 'TMPro.TMP_Style' )
  var i1239 = data
  i1238.m_Name = i1239[0]
  i1238.m_HashCode = i1239[1]
  i1238.m_OpeningDefinition = i1239[2]
  i1238.m_ClosingDefinition = i1239[3]
  i1238.m_OpeningTagArray = i1239[4]
  i1238.m_ClosingTagArray = i1239[5]
  i1238.m_OpeningTagUnicodeArray = i1239[6]
  i1238.m_ClosingTagUnicodeArray = i1239[7]
  return i1238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1241 = data
  var i1243 = i1241[0]
  var i1242 = []
  for(var i = 0; i < i1243.length; i += 1) {
    i1242.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1243[i + 0]) );
  }
  i1240.files = i1242
  i1240.componentToPrefabIds = i1241[1]
  return i1240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1247 = data
  i1246.path = i1247[0]
  request.r(i1247[1], i1247[2], 0, i1246, 'unityObject')
  return i1246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1249 = data
  var i1251 = i1249[0]
  var i1250 = []
  for(var i = 0; i < i1251.length; i += 1) {
    i1250.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1251[i + 0]) );
  }
  i1248.scriptsExecutionOrder = i1250
  var i1253 = i1249[1]
  var i1252 = []
  for(var i = 0; i < i1253.length; i += 1) {
    i1252.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1253[i + 0]) );
  }
  i1248.sortingLayers = i1252
  var i1255 = i1249[2]
  var i1254 = []
  for(var i = 0; i < i1255.length; i += 1) {
    i1254.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1255[i + 0]) );
  }
  i1248.cullingLayers = i1254
  i1248.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1249[3], i1248.timeSettings)
  i1248.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1249[4], i1248.physicsSettings)
  i1248.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1249[5], i1248.physics2DSettings)
  i1248.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1249[6], i1248.qualitySettings)
  i1248.enableRealtimeShadows = !!i1249[7]
  i1248.enableAutoInstancing = !!i1249[8]
  i1248.enableStaticBatching = !!i1249[9]
  i1248.enableDynamicBatching = !!i1249[10]
  i1248.usePreservativeDynamicBatching = !!i1249[11]
  i1248.lightmapEncodingQuality = i1249[12]
  i1248.desiredColorSpace = i1249[13]
  var i1257 = i1249[14]
  var i1256 = []
  for(var i = 0; i < i1257.length; i += 1) {
    i1256.push( i1257[i + 0] );
  }
  i1248.allTags = i1256
  return i1248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1261 = data
  i1260.name = i1261[0]
  i1260.value = i1261[1]
  return i1260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1265 = data
  i1264.id = i1265[0]
  i1264.name = i1265[1]
  i1264.value = i1265[2]
  return i1264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1269 = data
  i1268.id = i1269[0]
  i1268.name = i1269[1]
  return i1268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1271 = data
  i1270.fixedDeltaTime = i1271[0]
  i1270.maximumDeltaTime = i1271[1]
  i1270.timeScale = i1271[2]
  i1270.maximumParticleTimestep = i1271[3]
  return i1270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1273 = data
  i1272.gravity = new pc.Vec3( i1273[0], i1273[1], i1273[2] )
  i1272.defaultSolverIterations = i1273[3]
  i1272.bounceThreshold = i1273[4]
  i1272.autoSyncTransforms = !!i1273[5]
  i1272.autoSimulation = !!i1273[6]
  var i1275 = i1273[7]
  var i1274 = []
  for(var i = 0; i < i1275.length; i += 1) {
    i1274.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1275[i + 0]) );
  }
  i1272.collisionMatrix = i1274
  return i1272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1279 = data
  i1278.enabled = !!i1279[0]
  i1278.layerId = i1279[1]
  i1278.otherLayerId = i1279[2]
  return i1278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1281 = data
  request.r(i1281[0], i1281[1], 0, i1280, 'material')
  i1280.gravity = new pc.Vec2( i1281[2], i1281[3] )
  i1280.positionIterations = i1281[4]
  i1280.velocityIterations = i1281[5]
  i1280.velocityThreshold = i1281[6]
  i1280.maxLinearCorrection = i1281[7]
  i1280.maxAngularCorrection = i1281[8]
  i1280.maxTranslationSpeed = i1281[9]
  i1280.maxRotationSpeed = i1281[10]
  i1280.baumgarteScale = i1281[11]
  i1280.baumgarteTOIScale = i1281[12]
  i1280.timeToSleep = i1281[13]
  i1280.linearSleepTolerance = i1281[14]
  i1280.angularSleepTolerance = i1281[15]
  i1280.defaultContactOffset = i1281[16]
  i1280.autoSimulation = !!i1281[17]
  i1280.queriesHitTriggers = !!i1281[18]
  i1280.queriesStartInColliders = !!i1281[19]
  i1280.callbacksOnDisable = !!i1281[20]
  i1280.reuseCollisionCallbacks = !!i1281[21]
  i1280.autoSyncTransforms = !!i1281[22]
  var i1283 = i1281[23]
  var i1282 = []
  for(var i = 0; i < i1283.length; i += 1) {
    i1282.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1283[i + 0]) );
  }
  i1280.collisionMatrix = i1282
  return i1280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1287 = data
  i1286.enabled = !!i1287[0]
  i1286.layerId = i1287[1]
  i1286.otherLayerId = i1287[2]
  return i1286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1289 = data
  var i1291 = i1289[0]
  var i1290 = []
  for(var i = 0; i < i1291.length; i += 1) {
    i1290.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1291[i + 0]) );
  }
  i1288.qualityLevels = i1290
  var i1293 = i1289[1]
  var i1292 = []
  for(var i = 0; i < i1293.length; i += 1) {
    i1292.push( i1293[i + 0] );
  }
  i1288.names = i1292
  i1288.shadows = i1289[2]
  i1288.anisotropicFiltering = i1289[3]
  i1288.antiAliasing = i1289[4]
  i1288.lodBias = i1289[5]
  i1288.shadowCascades = i1289[6]
  i1288.shadowDistance = i1289[7]
  i1288.shadowmaskMode = i1289[8]
  i1288.shadowProjection = i1289[9]
  i1288.shadowResolution = i1289[10]
  i1288.softParticles = !!i1289[11]
  i1288.softVegetation = !!i1289[12]
  i1288.activeColorSpace = i1289[13]
  i1288.desiredColorSpace = i1289[14]
  i1288.masterTextureLimit = i1289[15]
  i1288.maxQueuedFrames = i1289[16]
  i1288.particleRaycastBudget = i1289[17]
  i1288.pixelLightCount = i1289[18]
  i1288.realtimeReflectionProbes = !!i1289[19]
  i1288.shadowCascade2Split = i1289[20]
  i1288.shadowCascade4Split = new pc.Vec3( i1289[21], i1289[22], i1289[23] )
  i1288.streamingMipmapsActive = !!i1289[24]
  i1288.vSyncCount = i1289[25]
  i1288.asyncUploadBufferSize = i1289[26]
  i1288.asyncUploadTimeSlice = i1289[27]
  i1288.billboardsFaceCameraPosition = !!i1289[28]
  i1288.shadowNearPlaneOffset = i1289[29]
  i1288.streamingMipmapsMemoryBudget = i1289[30]
  i1288.maximumLODLevel = i1289[31]
  i1288.streamingMipmapsAddAllCameras = !!i1289[32]
  i1288.streamingMipmapsMaxLevelReduction = i1289[33]
  i1288.streamingMipmapsRenderersPerFrame = i1289[34]
  i1288.resolutionScalingFixedDPIFactor = i1289[35]
  i1288.streamingMipmapsMaxFileIORequests = i1289[36]
  i1288.currentQualityLevel = i1289[37]
  return i1288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1299 = data
  i1298.weight = i1299[0]
  i1298.vertices = i1299[1]
  i1298.normals = i1299[2]
  i1298.tangents = i1299[3]
  return i1298
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1300 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1301 = data
  request.r(i1301[0], i1301[1], 0, i1300, 'm_ObjectArgument')
  i1300.m_ObjectArgumentAssemblyTypeName = i1301[2]
  i1300.m_IntArgument = i1301[3]
  i1300.m_FloatArgument = i1301[4]
  i1300.m_StringArgument = i1301[5]
  i1300.m_BoolArgument = !!i1301[6]
  return i1300
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1302 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1303 = data
  i1302.xPlacement = i1303[0]
  i1302.yPlacement = i1303[1]
  i1302.xAdvance = i1303[2]
  i1302.yAdvance = i1303[3]
  return i1302
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"68":[69],"70":[69],"71":[69],"72":[69],"73":[69],"74":[69],"75":[53],"76":[54],"77":[78],"79":[78],"80":[78],"81":[78],"82":[78],"83":[78],"84":[78],"85":[86],"87":[86],"88":[86],"89":[86],"90":[86],"91":[86],"92":[86],"93":[86],"94":[86],"95":[86],"96":[86],"97":[86],"98":[86],"99":[54],"100":[5],"101":[102],"103":[102],"23":[22],"104":[105],"106":[22],"107":[5,22],"108":[22,29],"109":[22],"110":[29,22],"111":[5],"112":[29,22],"113":[22],"114":[17],"115":[17],"116":[22],"117":[22],"26":[23],"30":[29,22],"118":[22],"25":[23],"46":[22],"119":[22],"120":[22],"121":[22],"41":[22],"122":[22],"45":[22],"44":[22],"123":[22],"39":[29,22],"124":[22],"43":[22],"42":[22],"125":[22],"28":[29,22],"126":[22],"127":[60],"128":[60],"61":[60],"129":[60],"130":[54],"131":[54],"37":[31],"47":[31],"21":[19],"32":[31],"132":[31,30],"133":[54]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.BoxCollider","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.MonoBehaviour","Portfolio.Playables.IsometricPortfolio.IsometricInteractable","UnityEngine.Transform","UnityEngine.GameObject","Portfolio.Playables.IsometricPortfolio.FaceMainCamera","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","Portfolio.Playables.IsometricPortfolio.TakeoffExhibitMotion","Portfolio.Playables.IsometricPortfolio.TelepathyParticleMotion","Portfolio.Playables.IsometricPortfolio.AirSwimmingMotion","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.AudioSource","UnityEngine.AudioClip","Portfolio.Playables.IsometricPortfolio.GramophoneMusicToggle","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","Portfolio.Playables.IsometricPortfolio.ResponsiveWorkModal","UnityEngine.UI.Text","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Button","Portfolio.Playables.IsometricPortfolio.ModalCloseButton","Portfolio.Playables.IsometricPortfolio.IsometricInteractionController","Portfolio.Playables.IsometricPortfolio.PlayerAboutSection","UnityEngine.Font","Portfolio.Playables.IsometricPortfolio.ResponsiveModalCard","Portfolio.Playables.IsometricPortfolio.ExternalUrlButton","Portfolio.Playables.IsometricPortfolio.ResponsiveLifeModal","UnityEngine.UI.RawImage","Portfolio.Playables.IsometricPortfolio.ResponsiveRecommendationsModal","UnityEngine.UI.LayoutElement","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Mask","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.ContentSizeFitter","Portfolio.Playables.IsometricPortfolio.GameRecommendationLink","UnityEngine.CapsuleCollider","Portfolio.Playables.IsometricPortfolio.IsometricCharacterController","Portfolio.Playables.IsometricPortfolio.ZuitAnimationDriver","Portfolio.Playables.IsometricPortfolio.IsometricFocusCameraRig","Portfolio.Playables.IsometricPortfolio.ProceduralHeadMouseLook","UnityEngine.SkinnedMeshRenderer","UnityEngine.Camera","UnityEngine.AudioListener","Portfolio.Playables.IsometricPortfolio.IsometricCameraFollow","Portfolio.Playables.IsometricPortfolio.PointerMoveTarget","Portfolio.Playables.IsometricPortfolio.ResponsiveAboutModal","UnityEngine.Light","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Cubemap","TMPro.TMP_Settings","TMPro.TMP_FontAsset","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Polyperfect.Common.AnimationDelay","Polyperfect.Common.AnimationOffset","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Portfolio.Playables.Common.PlayableSoundToggle","Portfolio.Playables.Common.ResponsiveCamera"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "PlayableAds";

Deserializers.lunaInitializationTime = "";

Deserializers.lunaDaysRunning = "11.1";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "0";

Deserializers.projectId = "5656ab464859c5d469e89a62c9c8d58d";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.7\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1655";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3885";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, reflection";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "ZuitLabs";

Deserializers.buildPlatform = "WebGL";

Deserializers.applicationIdentifier = "com.ZuitLabs.PlayableAds";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "49fd276b-2ebc-47db-b0fe-c64a217393d5";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Portfolio","Playables","AsteroidBlitz","AsteroidMovementTrace","BeginPlayTrace"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

