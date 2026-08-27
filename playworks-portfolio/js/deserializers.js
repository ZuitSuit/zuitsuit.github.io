var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i650 = root || request.c( 'UnityEngine.JointSpring' )
  var i651 = data
  i650.spring = i651[0]
  i650.damper = i651[1]
  i650.targetPosition = i651[2]
  return i650
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i652 = root || request.c( 'UnityEngine.JointMotor' )
  var i653 = data
  i652.m_TargetVelocity = i653[0]
  i652.m_Force = i653[1]
  i652.m_FreeSpin = i653[2]
  return i652
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i654 = root || request.c( 'UnityEngine.JointLimits' )
  var i655 = data
  i654.m_Min = i655[0]
  i654.m_Max = i655[1]
  i654.m_Bounciness = i655[2]
  i654.m_BounceMinVelocity = i655[3]
  i654.m_ContactDistance = i655[4]
  i654.minBounce = i655[5]
  i654.maxBounce = i655[6]
  return i654
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i656 = root || request.c( 'UnityEngine.JointDrive' )
  var i657 = data
  i656.m_PositionSpring = i657[0]
  i656.m_PositionDamper = i657[1]
  i656.m_MaximumForce = i657[2]
  i656.m_UseAcceleration = i657[3]
  return i656
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i658 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i659 = data
  i658.m_Spring = i659[0]
  i658.m_Damper = i659[1]
  return i658
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i660 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i661 = data
  i660.m_Limit = i661[0]
  i660.m_Bounciness = i661[1]
  i660.m_ContactDistance = i661[2]
  return i660
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i662 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i663 = data
  i662.m_ExtremumSlip = i663[0]
  i662.m_ExtremumValue = i663[1]
  i662.m_AsymptoteSlip = i663[2]
  i662.m_AsymptoteValue = i663[3]
  i662.m_Stiffness = i663[4]
  return i662
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i664 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i665 = data
  i664.m_LowerAngle = i665[0]
  i664.m_UpperAngle = i665[1]
  return i664
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i666 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i667 = data
  i666.m_MotorSpeed = i667[0]
  i666.m_MaximumMotorTorque = i667[1]
  return i666
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i668 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i669 = data
  i668.m_DampingRatio = i669[0]
  i668.m_Frequency = i669[1]
  i668.m_Angle = i669[2]
  return i668
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i670 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i671 = data
  i670.m_LowerTranslation = i671[0]
  i670.m_UpperTranslation = i671[1]
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i673 = data
  i672.name = i673[0]
  i672.halfPrecision = !!i673[1]
  i672.useSimplification = !!i673[2]
  i672.useUInt32IndexFormat = !!i673[3]
  i672.vertexCount = i673[4]
  i672.aabb = i673[5]
  var i675 = i673[6]
  var i674 = []
  for(var i = 0; i < i675.length; i += 1) {
    i674.push( !!i675[i + 0] );
  }
  i672.streams = i674
  i672.vertices = i673[7]
  var i677 = i673[8]
  var i676 = []
  for(var i = 0; i < i677.length; i += 1) {
    i676.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i677[i + 0]) );
  }
  i672.subMeshes = i676
  var i679 = i673[9]
  var i678 = []
  for(var i = 0; i < i679.length; i += 16) {
    i678.push( new pc.Mat4().setData(i679[i + 0], i679[i + 1], i679[i + 2], i679[i + 3],  i679[i + 4], i679[i + 5], i679[i + 6], i679[i + 7],  i679[i + 8], i679[i + 9], i679[i + 10], i679[i + 11],  i679[i + 12], i679[i + 13], i679[i + 14], i679[i + 15]) );
  }
  i672.bindposes = i678
  var i681 = i673[10]
  var i680 = []
  for(var i = 0; i < i681.length; i += 1) {
    i680.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i681[i + 0]) );
  }
  i672.blendShapes = i680
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i687 = data
  i686.triangles = i687[0]
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i693 = data
  i692.name = i693[0]
  var i695 = i693[1]
  var i694 = []
  for(var i = 0; i < i695.length; i += 1) {
    i694.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i695[i + 0]) );
  }
  i692.frames = i694
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i696 = root || new pc.UnityMaterial()
  var i697 = data
  i696.name = i697[0]
  request.r(i697[1], i697[2], 0, i696, 'shader')
  i696.renderQueue = i697[3]
  i696.enableInstancing = !!i697[4]
  var i699 = i697[5]
  var i698 = []
  for(var i = 0; i < i699.length; i += 1) {
    i698.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i699[i + 0]) );
  }
  i696.floatParameters = i698
  var i701 = i697[6]
  var i700 = []
  for(var i = 0; i < i701.length; i += 1) {
    i700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i701[i + 0]) );
  }
  i696.colorParameters = i700
  var i703 = i697[7]
  var i702 = []
  for(var i = 0; i < i703.length; i += 1) {
    i702.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i703[i + 0]) );
  }
  i696.vectorParameters = i702
  var i705 = i697[8]
  var i704 = []
  for(var i = 0; i < i705.length; i += 1) {
    i704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i705[i + 0]) );
  }
  i696.textureParameters = i704
  var i707 = i697[9]
  var i706 = []
  for(var i = 0; i < i707.length; i += 1) {
    i706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i707[i + 0]) );
  }
  i696.materialFlags = i706
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i711 = data
  i710.name = i711[0]
  i710.value = i711[1]
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i715 = data
  i714.name = i715[0]
  i714.value = new pc.Color(i715[1], i715[2], i715[3], i715[4])
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i719 = data
  i718.name = i719[0]
  i718.value = new pc.Vec4( i719[1], i719[2], i719[3], i719[4] )
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i723 = data
  i722.name = i723[0]
  request.r(i723[1], i723[2], 0, i722, 'value')
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i727 = data
  i726.name = i727[0]
  i726.enabled = !!i727[1]
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i729 = data
  i728.name = i729[0]
  i728.width = i729[1]
  i728.height = i729[2]
  i728.mipmapCount = i729[3]
  i728.anisoLevel = i729[4]
  i728.filterMode = i729[5]
  i728.hdr = !!i729[6]
  i728.format = i729[7]
  i728.wrapMode = i729[8]
  i728.alphaIsTransparency = !!i729[9]
  i728.alphaSource = i729[10]
  i728.graphicsFormat = i729[11]
  i728.sRGBTexture = !!i729[12]
  i728.desiredColorSpace = i729[13]
  i728.wrapU = i729[14]
  i728.wrapV = i729[15]
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i731 = data
  i730.name = i731[0]
  i730.atlasId = i731[1]
  i730.mipmapCount = i731[2]
  i730.hdr = !!i731[3]
  i730.size = i731[4]
  i730.anisoLevel = i731[5]
  i730.filterMode = i731[6]
  var i733 = i731[7]
  var i732 = []
  for(var i = 0; i < i733.length; i += 4) {
    i732.push( UnityEngine.Rect.MinMaxRect(i733[i + 0], i733[i + 1], i733[i + 2], i733[i + 3]) );
  }
  i730.rects = i732
  i730.wrapU = i731[8]
  i730.wrapV = i731[9]
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i737 = data
  i736.name = i737[0]
  i736.index = i737[1]
  i736.startup = !!i737[2]
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i739 = data
  request.r(i739[0], i739[1], 0, i738, 'sharedMesh')
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i741 = data
  i740.center = new pc.Vec3( i741[0], i741[1], i741[2] )
  i740.size = new pc.Vec3( i741[3], i741[4], i741[5] )
  i740.enabled = !!i741[6]
  i740.isTrigger = !!i741[7]
  request.r(i741[8], i741[9], 0, i740, 'material')
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i743 = data
  request.r(i743[0], i743[1], 0, i742, 'additionalVertexStreams')
  i742.enabled = !!i743[2]
  request.r(i743[3], i743[4], 0, i742, 'sharedMaterial')
  var i745 = i743[5]
  var i744 = []
  for(var i = 0; i < i745.length; i += 2) {
  request.r(i745[i + 0], i745[i + 1], 2, i744, '')
  }
  i742.sharedMaterials = i744
  i742.receiveShadows = !!i743[6]
  i742.shadowCastingMode = i743[7]
  i742.sortingLayerID = i743[8]
  i742.sortingOrder = i743[9]
  i742.lightmapIndex = i743[10]
  i742.lightmapSceneIndex = i743[11]
  i742.lightmapScaleOffset = new pc.Vec4( i743[12], i743[13], i743[14], i743[15] )
  i742.lightProbeUsage = i743[16]
  i742.reflectionProbeUsage = i743[17]
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i749 = data
  i748.name = i749[0]
  i748.tagId = i749[1]
  i748.enabled = !!i749[2]
  i748.isStatic = !!i749[3]
  i748.layer = i749[4]
  return i748
}

Deserializers["Portfolio.Playables.IsometricPortfolio.IsometricInteractable"] = function (request, data, root) {
  var i750 = root || request.c( 'Portfolio.Playables.IsometricPortfolio.IsometricInteractable' )
  var i751 = data
  request.r(i751[0], i751[1], 0, i750, 'solidCollider')
  request.r(i751[2], i751[3], 0, i750, 'focusPoint')
  request.r(i751[4], i751[5], 0, i750, 'temporaryObjects')
  request.r(i751[6], i751[7], 0, i750, 'musicToggle')
  i750.approachClearance = i751[8]
  return i750
}

Deserializers["Portfolio.Playables.IsometricPortfolio.FaceMainCamera"] = function (request, data, root) {
  var i752 = root || request.c( 'Portfolio.Playables.IsometricPortfolio.FaceMainCamera' )
  var i753 = data
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i755 = data
  i754.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i755[0], i754.main)
  i754.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i755[1], i754.colorBySpeed)
  i754.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i755[2], i754.colorOverLifetime)
  i754.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i755[3], i754.emission)
  i754.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i755[4], i754.rotationBySpeed)
  i754.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i755[5], i754.rotationOverLifetime)
  i754.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i755[6], i754.shape)
  i754.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i755[7], i754.sizeBySpeed)
  i754.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i755[8], i754.sizeOverLifetime)
  i754.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i755[9], i754.textureSheetAnimation)
  i754.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i755[10], i754.velocityOverLifetime)
  i754.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i755[11], i754.noise)
  i754.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i755[12], i754.inheritVelocity)
  i754.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i755[13], i754.forceOverLifetime)
  i754.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i755[14], i754.limitVelocityOverLifetime)
  i754.useAutoRandomSeed = !!i755[15]
  i754.randomSeed = i755[16]
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i756 = root || new pc.ParticleSystemMain()
  var i757 = data
  i756.duration = i757[0]
  i756.loop = !!i757[1]
  i756.prewarm = !!i757[2]
  i756.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[3], i756.startDelay)
  i756.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[4], i756.startLifetime)
  i756.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[5], i756.startSpeed)
  i756.startSize3D = !!i757[6]
  i756.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[7], i756.startSizeX)
  i756.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[8], i756.startSizeY)
  i756.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[9], i756.startSizeZ)
  i756.startRotation3D = !!i757[10]
  i756.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[11], i756.startRotationX)
  i756.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[12], i756.startRotationY)
  i756.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[13], i756.startRotationZ)
  i756.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i757[14], i756.startColor)
  i756.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[15], i756.gravityModifier)
  i756.simulationSpace = i757[16]
  request.r(i757[17], i757[18], 0, i756, 'customSimulationSpace')
  i756.simulationSpeed = i757[19]
  i756.useUnscaledTime = !!i757[20]
  i756.scalingMode = i757[21]
  i756.playOnAwake = !!i757[22]
  i756.maxParticles = i757[23]
  i756.emitterVelocityMode = i757[24]
  i756.stopAction = i757[25]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i758 = root || new pc.MinMaxCurve()
  var i759 = data
  i758.mode = i759[0]
  i758.curveMin = new pc.AnimationCurve( { keys_flow: i759[1] } )
  i758.curveMax = new pc.AnimationCurve( { keys_flow: i759[2] } )
  i758.curveMultiplier = i759[3]
  i758.constantMin = i759[4]
  i758.constantMax = i759[5]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i760 = root || new pc.MinMaxGradient()
  var i761 = data
  i760.mode = i761[0]
  i760.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i761[1], i760.gradientMin)
  i760.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i761[2], i760.gradientMax)
  i760.colorMin = new pc.Color(i761[3], i761[4], i761[5], i761[6])
  i760.colorMax = new pc.Color(i761[7], i761[8], i761[9], i761[10])
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i763 = data
  i762.mode = i763[0]
  var i765 = i763[1]
  var i764 = []
  for(var i = 0; i < i765.length; i += 1) {
    i764.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i765[i + 0]) );
  }
  i762.colorKeys = i764
  var i767 = i763[2]
  var i766 = []
  for(var i = 0; i < i767.length; i += 1) {
    i766.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i767[i + 0]) );
  }
  i762.alphaKeys = i766
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i768 = root || new pc.ParticleSystemColorBySpeed()
  var i769 = data
  i768.enabled = !!i769[0]
  i768.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i769[1], i768.color)
  i768.range = new pc.Vec2( i769[2], i769[3] )
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i773 = data
  i772.color = new pc.Color(i773[0], i773[1], i773[2], i773[3])
  i772.time = i773[4]
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i777 = data
  i776.alpha = i777[0]
  i776.time = i777[1]
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i778 = root || new pc.ParticleSystemColorOverLifetime()
  var i779 = data
  i778.enabled = !!i779[0]
  i778.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i779[1], i778.color)
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i780 = root || new pc.ParticleSystemEmitter()
  var i781 = data
  i780.enabled = !!i781[0]
  i780.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[1], i780.rateOverTime)
  i780.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[2], i780.rateOverDistance)
  var i783 = i781[3]
  var i782 = []
  for(var i = 0; i < i783.length; i += 1) {
    i782.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i783[i + 0]) );
  }
  i780.bursts = i782
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i786 = root || new pc.ParticleSystemBurst()
  var i787 = data
  i786.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[0], i786.count)
  i786.cycleCount = i787[1]
  i786.minCount = i787[2]
  i786.maxCount = i787[3]
  i786.repeatInterval = i787[4]
  i786.time = i787[5]
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i788 = root || new pc.ParticleSystemRotationBySpeed()
  var i789 = data
  i788.enabled = !!i789[0]
  i788.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[1], i788.x)
  i788.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[2], i788.y)
  i788.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[3], i788.z)
  i788.separateAxes = !!i789[4]
  i788.range = new pc.Vec2( i789[5], i789[6] )
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i790 = root || new pc.ParticleSystemRotationOverLifetime()
  var i791 = data
  i790.enabled = !!i791[0]
  i790.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[1], i790.x)
  i790.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[2], i790.y)
  i790.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[3], i790.z)
  i790.separateAxes = !!i791[4]
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i792 = root || new pc.ParticleSystemShape()
  var i793 = data
  i792.enabled = !!i793[0]
  i792.shapeType = i793[1]
  i792.randomDirectionAmount = i793[2]
  i792.sphericalDirectionAmount = i793[3]
  i792.randomPositionAmount = i793[4]
  i792.alignToDirection = !!i793[5]
  i792.radius = i793[6]
  i792.radiusMode = i793[7]
  i792.radiusSpread = i793[8]
  i792.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[9], i792.radiusSpeed)
  i792.radiusThickness = i793[10]
  i792.angle = i793[11]
  i792.length = i793[12]
  i792.boxThickness = new pc.Vec3( i793[13], i793[14], i793[15] )
  i792.meshShapeType = i793[16]
  request.r(i793[17], i793[18], 0, i792, 'mesh')
  request.r(i793[19], i793[20], 0, i792, 'meshRenderer')
  request.r(i793[21], i793[22], 0, i792, 'skinnedMeshRenderer')
  i792.useMeshMaterialIndex = !!i793[23]
  i792.meshMaterialIndex = i793[24]
  i792.useMeshColors = !!i793[25]
  i792.normalOffset = i793[26]
  i792.arc = i793[27]
  i792.arcMode = i793[28]
  i792.arcSpread = i793[29]
  i792.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[30], i792.arcSpeed)
  i792.donutRadius = i793[31]
  i792.position = new pc.Vec3( i793[32], i793[33], i793[34] )
  i792.rotation = new pc.Vec3( i793[35], i793[36], i793[37] )
  i792.scale = new pc.Vec3( i793[38], i793[39], i793[40] )
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i794 = root || new pc.ParticleSystemSizeBySpeed()
  var i795 = data
  i794.enabled = !!i795[0]
  i794.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[1], i794.x)
  i794.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[2], i794.y)
  i794.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[3], i794.z)
  i794.separateAxes = !!i795[4]
  i794.range = new pc.Vec2( i795[5], i795[6] )
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i796 = root || new pc.ParticleSystemSizeOverLifetime()
  var i797 = data
  i796.enabled = !!i797[0]
  i796.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[1], i796.x)
  i796.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[2], i796.y)
  i796.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[3], i796.z)
  i796.separateAxes = !!i797[4]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i798 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i799 = data
  i798.enabled = !!i799[0]
  i798.mode = i799[1]
  i798.animation = i799[2]
  i798.numTilesX = i799[3]
  i798.numTilesY = i799[4]
  i798.useRandomRow = !!i799[5]
  i798.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[6], i798.frameOverTime)
  i798.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[7], i798.startFrame)
  i798.cycleCount = i799[8]
  i798.rowIndex = i799[9]
  i798.flipU = i799[10]
  i798.flipV = i799[11]
  i798.spriteCount = i799[12]
  var i801 = i799[13]
  var i800 = []
  for(var i = 0; i < i801.length; i += 2) {
  request.r(i801[i + 0], i801[i + 1], 2, i800, '')
  }
  i798.sprites = i800
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i804 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i805 = data
  i804.enabled = !!i805[0]
  i804.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[1], i804.x)
  i804.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[2], i804.y)
  i804.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[3], i804.z)
  i804.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[4], i804.radial)
  i804.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[5], i804.speedModifier)
  i804.space = i805[6]
  i804.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[7], i804.orbitalX)
  i804.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[8], i804.orbitalY)
  i804.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[9], i804.orbitalZ)
  i804.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[10], i804.orbitalOffsetX)
  i804.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[11], i804.orbitalOffsetY)
  i804.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[12], i804.orbitalOffsetZ)
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i806 = root || new pc.ParticleSystemNoise()
  var i807 = data
  i806.enabled = !!i807[0]
  i806.separateAxes = !!i807[1]
  i806.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[2], i806.strengthX)
  i806.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[3], i806.strengthY)
  i806.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[4], i806.strengthZ)
  i806.frequency = i807[5]
  i806.damping = !!i807[6]
  i806.octaveCount = i807[7]
  i806.octaveMultiplier = i807[8]
  i806.octaveScale = i807[9]
  i806.quality = i807[10]
  i806.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[11], i806.scrollSpeed)
  i806.scrollSpeedMultiplier = i807[12]
  i806.remapEnabled = !!i807[13]
  i806.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[14], i806.remapX)
  i806.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[15], i806.remapY)
  i806.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[16], i806.remapZ)
  i806.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[17], i806.positionAmount)
  i806.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[18], i806.rotationAmount)
  i806.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[19], i806.sizeAmount)
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i808 = root || new pc.ParticleSystemInheritVelocity()
  var i809 = data
  i808.enabled = !!i809[0]
  i808.mode = i809[1]
  i808.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[2], i808.curve)
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i810 = root || new pc.ParticleSystemForceOverLifetime()
  var i811 = data
  i810.enabled = !!i811[0]
  i810.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[1], i810.x)
  i810.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[2], i810.y)
  i810.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[3], i810.z)
  i810.space = i811[4]
  i810.randomized = !!i811[5]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i812 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i813 = data
  i812.enabled = !!i813[0]
  i812.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[1], i812.limit)
  i812.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[2], i812.limitX)
  i812.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[3], i812.limitY)
  i812.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[4], i812.limitZ)
  i812.dampen = i813[5]
  i812.separateAxes = !!i813[6]
  i812.space = i813[7]
  i812.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[8], i812.drag)
  i812.multiplyDragByParticleSize = !!i813[9]
  i812.multiplyDragByParticleVelocity = !!i813[10]
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i815 = data
  request.r(i815[0], i815[1], 0, i814, 'mesh')
  i814.meshCount = i815[2]
  i814.activeVertexStreamsCount = i815[3]
  i814.alignment = i815[4]
  i814.renderMode = i815[5]
  i814.sortMode = i815[6]
  i814.lengthScale = i815[7]
  i814.velocityScale = i815[8]
  i814.cameraVelocityScale = i815[9]
  i814.normalDirection = i815[10]
  i814.sortingFudge = i815[11]
  i814.minParticleSize = i815[12]
  i814.maxParticleSize = i815[13]
  i814.pivot = new pc.Vec3( i815[14], i815[15], i815[16] )
  request.r(i815[17], i815[18], 0, i814, 'trailMaterial')
  i814.applyActiveColorSpace = !!i815[19]
  i814.enabled = !!i815[20]
  request.r(i815[21], i815[22], 0, i814, 'sharedMaterial')
  var i817 = i815[23]
  var i816 = []
  for(var i = 0; i < i817.length; i += 2) {
  request.r(i817[i + 0], i817[i + 1], 2, i816, '')
  }
  i814.sharedMaterials = i816
  i814.receiveShadows = !!i815[24]
  i814.shadowCastingMode = i815[25]
  i814.sortingLayerID = i815[26]
  i814.sortingOrder = i815[27]
  i814.lightmapIndex = i815[28]
  i814.lightmapSceneIndex = i815[29]
  i814.lightmapScaleOffset = new pc.Vec4( i815[30], i815[31], i815[32], i815[33] )
  i814.lightProbeUsage = i815[34]
  i814.reflectionProbeUsage = i815[35]
  return i814
}

Deserializers["Portfolio.Playables.IsometricPortfolio.TakeoffExhibitMotion"] = function (request, data, root) {
  var i818 = root || request.c( 'Portfolio.Playables.IsometricPortfolio.TakeoffExhibitMotion' )
  var i819 = data
  i818.bobHeight = i819[0]
  i818.frequency = i819[1]
  i818.pitchDegrees = i819[2]
  return i818
}

Deserializers["Portfolio.Playables.IsometricPortfolio.TelepathyParticleMotion"] = function (request, data, root) {
  var i820 = root || request.c( 'Portfolio.Playables.IsometricPortfolio.TelepathyParticleMotion' )
  var i821 = data
  request.r(i821[0], i821[1], 0, i820, 'firstHead')
  request.r(i821[2], i821[3], 0, i820, 'secondHead')
  i820.oneWayDuration = i821[4]
  i820.arcHeight = i821[5]
  return i820
}

Deserializers["Portfolio.Playables.IsometricPortfolio.AirSwimmingMotion"] = function (request, data, root) {
  var i822 = root || request.c( 'Portfolio.Playables.IsometricPortfolio.AirSwimmingMotion' )
  var i823 = data
  request.r(i823[0], i823[1], 0, i822, 'animator')
  i822.swimState = i823[2]
  i822.cycleSpeed = i823[3]
  i822.travel = new pc.Vec3( i823[4], i823[5], i823[6] )
  i822.rotationAmount = new pc.Vec3( i823[7], i823[8], i823[9] )
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i825 = data
  request.r(i825[0], i825[1], 0, i824, 'animatorController')
  request.r(i825[2], i825[3], 0, i824, 'avatar')
  i824.updateMode = i825[4]
  i824.hasTransformHierarchy = !!i825[5]
  i824.applyRootMotion = !!i825[6]
  var i827 = i825[7]
  var i826 = []
  for(var i = 0; i < i827.length; i += 2) {
  request.r(i827[i + 0], i827[i + 1], 2, i826, '')
  }
  i824.humanBones = i826
  i824.enabled = !!i825[8]
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i831 = data
  request.r(i831[0], i831[1], 0, i830, 'clip')
  request.r(i831[2], i831[3], 0, i830, 'outputAudioMixerGroup')
  i830.playOnAwake = !!i831[4]
  i830.loop = !!i831[5]
  i830.time = i831[6]
  i830.volume = i831[7]
  i830.pitch = i831[8]
  i830.enabled = !!i831[9]
  return i830
}

Deserializers["Portfolio.Playables.IsometricPortfolio.GramophoneMusicToggle"] = function (request, data, root) {
  var i832 = root || request.c( 'Portfolio.Playables.IsometricPortfolio.GramophoneMusicToggle' )
  var i833 = data
  request.r(i833[0], i833[1], 0, i832, 'musicSource')
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i835 = data
  i834.pivot = new pc.Vec2( i835[0], i835[1] )
  i834.anchorMin = new pc.Vec2( i835[2], i835[3] )
  i834.anchorMax = new pc.Vec2( i835[4], i835[5] )
  i834.sizeDelta = new pc.Vec2( i835[6], i835[7] )
  i834.anchoredPosition3D = new pc.Vec3( i835[8], i835[9], i835[10] )
  i834.rotation = new pc.Quat(i835[11], i835[12], i835[13], i835[14])
  i834.scale = new pc.Vec3( i835[15], i835[16], i835[17] )
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i837 = data
  i836.planeDistance = i837[0]
  i836.referencePixelsPerUnit = i837[1]
  i836.isFallbackOverlay = !!i837[2]
  i836.renderMode = i837[3]
  i836.renderOrder = i837[4]
  i836.sortingLayerName = i837[5]
  i836.sortingOrder = i837[6]
  i836.scaleFactor = i837[7]
  request.r(i837[8], i837[9], 0, i836, 'worldCamera')
  i836.overrideSorting = !!i837[10]
  i836.pixelPerfect = !!i837[11]
  i836.targetDisplay = i837[12]
  i836.overridePixelPerfect = !!i837[13]
  i836.enabled = !!i837[14]
  return i836
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i838 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i839 = data
  i838.m_UiScaleMode = i839[0]
  i838.m_ReferencePixelsPerUnit = i839[1]
  i838.m_ScaleFactor = i839[2]
  i838.m_ReferenceResolution = new pc.Vec2( i839[3], i839[4] )
  i838.m_ScreenMatchMode = i839[5]
  i838.m_MatchWidthOrHeight = i839[6]
  i838.m_PhysicalUnit = i839[7]
  i838.m_FallbackScreenDPI = i839[8]
  i838.m_DefaultSpriteDPI = i839[9]
  i838.m_DynamicPixelsPerUnit = i839[10]
  i838.m_PresetInfoIsWorld = !!i839[11]
  return i838
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i840 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i841 = data
  i840.m_IgnoreReversedGraphics = !!i841[0]
  i840.m_BlockingObjects = i841[1]
  i840.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i841[2] )
  return i840
}

Deserializers["Portfolio.Playables.IsometricPortfolio.ResponsiveWorkModal"] = function (request, data, root) {
  var i842 = root || request.c( 'Portfolio.Playables.IsometricPortfolio.ResponsiveWorkModal' )
  var i843 = data
  request.r(i843[0], i843[1], 0, i842, 'card')
  request.r(i843[2], i843[3], 0, i842, 'title')
  request.r(i843[4], i843[5], 0, i842, 'kicker')
  request.r(i843[6], i843[7], 0, i842, 'body')
  var i845 = i843[8]
  var i844 = []
  for(var i = 0; i < i845.length; i += 2) {
  request.r(i845[i + 0], i845[i + 1], 2, i844, '')
  }
  i842.links = i844
  request.r(i843[9], i843[10], 0, i842, 'closeHint')
  i842.widePreferredHeight = i843[11]
  i842.portraitMinimumHeight = i843[12]
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i849 = data
  i848.cullTransparentMesh = !!i849[0]
  return i848
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i850 = root || request.c( 'UnityEngine.UI.Image' )
  var i851 = data
  request.r(i851[0], i851[1], 0, i850, 'm_Sprite')
  i850.m_Type = i851[2]
  i850.m_PreserveAspect = !!i851[3]
  i850.m_FillCenter = !!i851[4]
  i850.m_FillMethod = i851[5]
  i850.m_FillAmount = i851[6]
  i850.m_FillClockwise = !!i851[7]
  i850.m_FillOrigin = i851[8]
  i850.m_UseSpriteMesh = !!i851[9]
  i850.m_PixelsPerUnitMultiplier = i851[10]
  request.r(i851[11], i851[12], 0, i850, 'm_Material')
  i850.m_Maskable = !!i851[13]
  i850.m_Color = new pc.Color(i851[14], i851[15], i851[16], i851[17])
  i850.m_RaycastTarget = !!i851[18]
  i850.m_RaycastPadding = new pc.Vec4( i851[19], i851[20], i851[21], i851[22] )
  return i850
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i852 = root || request.c( 'UnityEngine.UI.Button' )
  var i853 = data
  i852.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i853[0], i852.m_OnClick)
  i852.m_Navigation = request.d('UnityEngine.UI.Navigation', i853[1], i852.m_Navigation)
  i852.m_Transition = i853[2]
  i852.m_Colors = request.d('UnityEngine.UI.ColorBlock', i853[3], i852.m_Colors)
  i852.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i853[4], i852.m_SpriteState)
  i852.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i853[5], i852.m_AnimationTriggers)
  i852.m_Interactable = !!i853[6]
  request.r(i853[7], i853[8], 0, i852, 'm_TargetGraphic')
  return i852
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i854 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i855 = data
  i854.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i855[0], i854.m_PersistentCalls)
  return i854
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i856 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i857 = data
  var i859 = i857[0]
  var i858 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i859.length; i += 1) {
    i858.add(request.d('UnityEngine.Events.PersistentCall', i859[i + 0]));
  }
  i856.m_Calls = i858
  return i856
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i862 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i863 = data
  request.r(i863[0], i863[1], 0, i862, 'm_Target')
  i862.m_TargetAssemblyTypeName = i863[2]
  i862.m_MethodName = i863[3]
  i862.m_Mode = i863[4]
  i862.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i863[5], i862.m_Arguments)
  i862.m_CallState = i863[6]
  return i862
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i864 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i865 = data
  i864.m_Mode = i865[0]
  i864.m_WrapAround = !!i865[1]
  request.r(i865[2], i865[3], 0, i864, 'm_SelectOnUp')
  request.r(i865[4], i865[5], 0, i864, 'm_SelectOnDown')
  request.r(i865[6], i865[7], 0, i864, 'm_SelectOnLeft')
  request.r(i865[8], i865[9], 0, i864, 'm_SelectOnRight')
  return i864
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i866 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i867 = data
  i866.m_NormalColor = new pc.Color(i867[0], i867[1], i867[2], i867[3])
  i866.m_HighlightedColor = new pc.Color(i867[4], i867[5], i867[6], i867[7])
  i866.m_PressedColor = new pc.Color(i867[8], i867[9], i867[10], i867[11])
  i866.m_SelectedColor = new pc.Color(i867[12], i867[13], i867[14], i867[15])
  i866.m_DisabledColor = new pc.Color(i867[16], i867[17], i867[18], i867[19])
  i866.m_ColorMultiplier = i867[20]
  i866.m_FadeDuration = i867[21]
  return i866
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i868 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i869 = data
  request.r(i869[0], i869[1], 0, i868, 'm_HighlightedSprite')
  request.r(i869[2], i869[3], 0, i868, 'm_PressedSprite')
  request.r(i869[4], i869[5], 0, i868, 'm_SelectedSprite')
  request.r(i869[6], i869[7], 0, i868, 'm_DisabledSprite')
  return i868
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i870 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i871 = data
  i870.m_NormalTrigger = i871[0]
  i870.m_HighlightedTrigger = i871[1]
  i870.m_PressedTrigger = i871[2]
  i870.m_SelectedTrigger = i871[3]
  i870.m_DisabledTrigger = i871[4]
  return i870
}

Deserializers["Portfolio.Playables.IsometricPortfolio.ModalCloseButton"] = function (request, data, root) {
  var i872 = root || request.c( 'Portfolio.Playables.IsometricPortfolio.ModalCloseButton' )
  var i873 = data
  request.r(i873[0], i873[1], 0, i872, 'interactions')
  request.r(i873[2], i873[3], 0, i872, 'aboutSection')
  i872.closesAbout = !!i873[4]
  return i872
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i874 = root || request.c( 'UnityEngine.UI.Text' )
  var i875 = data
  i874.m_FontData = request.d('UnityEngine.UI.FontData', i875[0], i874.m_FontData)
  i874.m_Text = i875[1]
  request.r(i875[2], i875[3], 0, i874, 'm_Material')
  i874.m_Maskable = !!i875[4]
  i874.m_Color = new pc.Color(i875[5], i875[6], i875[7], i875[8])
  i874.m_RaycastTarget = !!i875[9]
  i874.m_RaycastPadding = new pc.Vec4( i875[10], i875[11], i875[12], i875[13] )
  return i874
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i876 = root || request.c( 'UnityEngine.UI.FontData' )
  var i877 = data
  request.r(i877[0], i877[1], 0, i876, 'm_Font')
  i876.m_FontSize = i877[2]
  i876.m_FontStyle = i877[3]
  i876.m_BestFit = !!i877[4]
  i876.m_MinSize = i877[5]
  i876.m_MaxSize = i877[6]
  i876.m_Alignment = i877[7]
  i876.m_AlignByGeometry = !!i877[8]
  i876.m_RichText = !!i877[9]
  i876.m_HorizontalOverflow = i877[10]
  i876.m_VerticalOverflow = i877[11]
  i876.m_LineSpacing = i877[12]
  return i876
}

Deserializers["Portfolio.Playables.IsometricPortfolio.ResponsiveModalCard"] = function (request, data, root) {
  var i878 = root || request.c( 'Portfolio.Playables.IsometricPortfolio.ResponsiveModalCard' )
  var i879 = data
  request.r(i879[0], i879[1], 0, i878, 'card')
  i878.preferredSize = new pc.Vec2( i879[2], i879[3] )
  i878.portraitPreferredHeight = i879[4]
  i878.alignRightOnWideScreens = !!i879[5]
  request.r(i879[6], i879[7], 0, i878, 'primaryButton')
  i878.wideButtonHeight = i879[8]
  i878.wideButtonFontSize = i879[9]
  return i878
}

Deserializers["Portfolio.Playables.IsometricPortfolio.ExternalUrlButton"] = function (request, data, root) {
  var i880 = root || request.c( 'Portfolio.Playables.IsometricPortfolio.ExternalUrlButton' )
  var i881 = data
  i880.url = i881[0]
  return i880
}

Deserializers["Portfolio.Playables.IsometricPortfolio.ResponsiveLifeModal"] = function (request, data, root) {
  var i882 = root || request.c( 'Portfolio.Playables.IsometricPortfolio.ResponsiveLifeModal' )
  var i883 = data
  request.r(i883[0], i883[1], 0, i882, 'card')
  request.r(i883[2], i883[3], 0, i882, 'photo')
  request.r(i883[4], i883[5], 0, i882, 'title')
  request.r(i883[6], i883[7], 0, i882, 'kicker')
  request.r(i883[8], i883[9], 0, i882, 'body')
  request.r(i883[10], i883[11], 0, i882, 'closeHint')
  request.r(i883[12], i883[13], 0, i882, 'titleText')
  request.r(i883[14], i883[15], 0, i882, 'bodyText')
  return i882
}

Deserializers["Portfolio.Playables.IsometricPortfolio.ResponsiveRecommendationsModal"] = function (request, data, root) {
  var i884 = root || request.c( 'Portfolio.Playables.IsometricPortfolio.ResponsiveRecommendationsModal' )
  var i885 = data
  request.r(i885[0], i885[1], 0, i884, 'card')
  request.r(i885[2], i885[3], 0, i884, 'listPanel')
  request.r(i885[4], i885[5], 0, i884, 'descriptionPanel')
  request.r(i885[6], i885[7], 0, i884, 'descriptionTitle')
  request.r(i885[8], i885[9], 0, i884, 'descriptionBody')
  request.r(i885[10], i885[11], 0, i884, 'selectedGameButton')
  var i887 = i885[12]
  var i886 = []
  for(var i = 0; i < i887.length; i += 2) {
  request.r(i887[i + 0], i887[i + 1], 2, i886, '')
  }
  i884.rows = i886
  return i884
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i890 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i891 = data
  request.r(i891[0], i891[1], 0, i890, 'm_Content')
  i890.m_Horizontal = !!i891[2]
  i890.m_Vertical = !!i891[3]
  i890.m_MovementType = i891[4]
  i890.m_Elasticity = i891[5]
  i890.m_Inertia = !!i891[6]
  i890.m_DecelerationRate = i891[7]
  i890.m_ScrollSensitivity = i891[8]
  request.r(i891[9], i891[10], 0, i890, 'm_Viewport')
  request.r(i891[11], i891[12], 0, i890, 'm_HorizontalScrollbar')
  request.r(i891[13], i891[14], 0, i890, 'm_VerticalScrollbar')
  i890.m_HorizontalScrollbarVisibility = i891[15]
  i890.m_VerticalScrollbarVisibility = i891[16]
  i890.m_HorizontalScrollbarSpacing = i891[17]
  i890.m_VerticalScrollbarSpacing = i891[18]
  i890.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i891[19], i890.m_OnValueChanged)
  return i890
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i892 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i893 = data
  i892.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i893[0], i892.m_PersistentCalls)
  return i892
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i894 = root || request.c( 'UnityEngine.UI.Mask' )
  var i895 = data
  i894.m_ShowMaskGraphic = !!i895[0]
  return i894
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i896 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i897 = data
  i896.m_Spacing = i897[0]
  i896.m_ChildForceExpandWidth = !!i897[1]
  i896.m_ChildForceExpandHeight = !!i897[2]
  i896.m_ChildControlWidth = !!i897[3]
  i896.m_ChildControlHeight = !!i897[4]
  i896.m_ChildScaleWidth = !!i897[5]
  i896.m_ChildScaleHeight = !!i897[6]
  i896.m_ReverseArrangement = !!i897[7]
  i896.m_Padding = UnityEngine.RectOffset.FromPaddings(i897[8], i897[9], i897[10], i897[11])
  i896.m_ChildAlignment = i897[12]
  return i896
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i898 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i899 = data
  i898.m_HorizontalFit = i899[0]
  i898.m_VerticalFit = i899[1]
  return i898
}

Deserializers["UnityEngine.UI.LayoutElement"] = function (request, data, root) {
  var i900 = root || request.c( 'UnityEngine.UI.LayoutElement' )
  var i901 = data
  i900.m_IgnoreLayout = !!i901[0]
  i900.m_MinWidth = i901[1]
  i900.m_MinHeight = i901[2]
  i900.m_PreferredWidth = i901[3]
  i900.m_PreferredHeight = i901[4]
  i900.m_FlexibleWidth = i901[5]
  i900.m_FlexibleHeight = i901[6]
  i900.m_LayoutPriority = i901[7]
  return i900
}

Deserializers["Portfolio.Playables.IsometricPortfolio.GameRecommendationLink"] = function (request, data, root) {
  var i902 = root || request.c( 'Portfolio.Playables.IsometricPortfolio.GameRecommendationLink' )
  var i903 = data
  request.r(i903[0], i903[1], 0, i902, 'titleTarget')
  request.r(i903[2], i903[3], 0, i902, 'descriptionTarget')
  request.r(i903[4], i903[5], 0, i902, 'steamButtonLabel')
  request.r(i903[6], i903[7], 0, i902, 'steamButtonRoot')
  request.r(i903[8], i903[9], 0, i902, 'steamButtonLink')
  i902.gameTitle = i903[10]
  i902.description = i903[11]
  i902.steamUrl = i903[12]
  i902.idleTitle = i903[13]
  i902.idleDescription = i903[14]
  return i902
}

Deserializers["UnityEngine.UI.Scrollbar"] = function (request, data, root) {
  var i904 = root || request.c( 'UnityEngine.UI.Scrollbar' )
  var i905 = data
  request.r(i905[0], i905[1], 0, i904, 'm_HandleRect')
  i904.m_Direction = i905[2]
  i904.m_Value = i905[3]
  i904.m_Size = i905[4]
  i904.m_NumberOfSteps = i905[5]
  i904.m_OnValueChanged = request.d('UnityEngine.UI.Scrollbar+ScrollEvent', i905[6], i904.m_OnValueChanged)
  i904.m_Navigation = request.d('UnityEngine.UI.Navigation', i905[7], i904.m_Navigation)
  i904.m_Transition = i905[8]
  i904.m_Colors = request.d('UnityEngine.UI.ColorBlock', i905[9], i904.m_Colors)
  i904.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i905[10], i904.m_SpriteState)
  i904.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i905[11], i904.m_AnimationTriggers)
  i904.m_Interactable = !!i905[12]
  request.r(i905[13], i905[14], 0, i904, 'm_TargetGraphic')
  return i904
}

Deserializers["UnityEngine.UI.Scrollbar+ScrollEvent"] = function (request, data, root) {
  var i906 = root || request.c( 'UnityEngine.UI.Scrollbar+ScrollEvent' )
  var i907 = data
  i906.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i907[0], i906.m_PersistentCalls)
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i909 = data
  i908.center = new pc.Vec3( i909[0], i909[1], i909[2] )
  i908.radius = i909[3]
  i908.height = i909[4]
  i908.direction = i909[5]
  i908.enabled = !!i909[6]
  i908.isTrigger = !!i909[7]
  request.r(i909[8], i909[9], 0, i908, 'material')
  return i908
}

Deserializers["Portfolio.Playables.IsometricPortfolio.IsometricCharacterController"] = function (request, data, root) {
  var i910 = root || request.c( 'Portfolio.Playables.IsometricPortfolio.IsometricCharacterController' )
  var i911 = data
  request.r(i911[0], i911[1], 0, i910, 'cameraTransform')
  request.r(i911[2], i911[3], 0, i910, 'visualRoot')
  i910.moveSpeed = i911[4]
  i910.turnSharpness = i911[5]
  i910.movementExtents = new pc.Vec2( i911[6], i911[7] )
  i910.destinationStoppingDistance = i911[8]
  i910.obstacleRadius = i911[9]
  return i910
}

Deserializers["Portfolio.Playables.IsometricPortfolio.ZuitAnimationDriver"] = function (request, data, root) {
  var i912 = root || request.c( 'Portfolio.Playables.IsometricPortfolio.ZuitAnimationDriver' )
  var i913 = data
  request.r(i913[0], i913[1], 0, i912, 'character')
  request.r(i913[2], i913[3], 0, i912, 'animator')
  request.r(i913[4], i913[5], 0, i912, 'modelRoot')
  i912.stepFrequency = i913[6]
  i912.stepHeight = i913[7]
  i912.bodySwayDegrees = i913[8]
  i912.responseSharpness = i913[9]
  return i912
}

Deserializers["Portfolio.Playables.IsometricPortfolio.PlayerAboutSection"] = function (request, data, root) {
  var i914 = root || request.c( 'Portfolio.Playables.IsometricPortfolio.PlayerAboutSection' )
  var i915 = data
  request.r(i915[0], i915[1], 0, i914, 'character')
  request.r(i915[2], i915[3], 0, i914, 'interactions')
  request.r(i915[4], i915[5], 0, i914, 'cameraRig')
  request.r(i915[6], i915[7], 0, i914, 'characterVisual')
  request.r(i915[8], i915[9], 0, i914, 'headMouseLook')
  request.r(i915[10], i915[11], 0, i914, 'faceFocusPoint')
  request.r(i915[12], i915[13], 0, i914, 'aboutContent')
  i914.faceZoom = i915[14]
  i914.faceCameraOffset = new pc.Vec3( i915[15], i915[16], i915[17] )
  return i914
}

Deserializers["Portfolio.Playables.IsometricPortfolio.ProceduralHeadMouseLook"] = function (request, data, root) {
  var i916 = root || request.c( 'Portfolio.Playables.IsometricPortfolio.ProceduralHeadMouseLook' )
  var i917 = data
  request.r(i917[0], i917[1], 0, i916, 'cameraRig')
  request.r(i917[2], i917[3], 0, i916, 'head')
  request.r(i917[4], i917[5], 0, i916, 'neck')
  i916.maxYaw = i917[6]
  i916.maxPitch = i917[7]
  i916.neckInfluence = i917[8]
  i916.responseSharpness = i917[9]
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i919 = data
  request.r(i919[0], i919[1], 0, i918, 'sharedMesh')
  var i921 = i919[2]
  var i920 = []
  for(var i = 0; i < i921.length; i += 2) {
  request.r(i921[i + 0], i921[i + 1], 2, i920, '')
  }
  i918.bones = i920
  i918.updateWhenOffscreen = !!i919[3]
  i918.localBounds = i919[4]
  request.r(i919[5], i919[6], 0, i918, 'rootBone')
  var i923 = i919[7]
  var i922 = []
  for(var i = 0; i < i923.length; i += 1) {
    i922.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i923[i + 0]) );
  }
  i918.blendShapesWeights = i922
  i918.enabled = !!i919[8]
  request.r(i919[9], i919[10], 0, i918, 'sharedMaterial')
  var i925 = i919[11]
  var i924 = []
  for(var i = 0; i < i925.length; i += 2) {
  request.r(i925[i + 0], i925[i + 1], 2, i924, '')
  }
  i918.sharedMaterials = i924
  i918.receiveShadows = !!i919[12]
  i918.shadowCastingMode = i919[13]
  i918.sortingLayerID = i919[14]
  i918.sortingOrder = i919[15]
  i918.lightmapIndex = i919[16]
  i918.lightmapSceneIndex = i919[17]
  i918.lightmapScaleOffset = new pc.Vec4( i919[18], i919[19], i919[20], i919[21] )
  i918.lightProbeUsage = i919[22]
  i918.reflectionProbeUsage = i919[23]
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i929 = data
  i928.weight = i929[0]
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i931 = data
  i930.aspect = i931[0]
  i930.orthographic = !!i931[1]
  i930.orthographicSize = i931[2]
  i930.backgroundColor = new pc.Color(i931[3], i931[4], i931[5], i931[6])
  i930.nearClipPlane = i931[7]
  i930.farClipPlane = i931[8]
  i930.fieldOfView = i931[9]
  i930.depth = i931[10]
  i930.clearFlags = i931[11]
  i930.cullingMask = i931[12]
  i930.rect = i931[13]
  request.r(i931[14], i931[15], 0, i930, 'targetTexture')
  i930.usePhysicalProperties = !!i931[16]
  i930.focalLength = i931[17]
  i930.sensorSize = new pc.Vec2( i931[18], i931[19] )
  i930.lensShift = new pc.Vec2( i931[20], i931[21] )
  i930.gateFit = i931[22]
  i930.commandBufferCount = i931[23]
  i930.cameraType = i931[24]
  i930.enabled = !!i931[25]
  return i930
}

Deserializers["Portfolio.Playables.IsometricPortfolio.IsometricCameraFollow"] = function (request, data, root) {
  var i932 = root || request.c( 'Portfolio.Playables.IsometricPortfolio.IsometricCameraFollow' )
  var i933 = data
  request.r(i933[0], i933[1], 0, i932, 'target')
  request.r(i933[2], i933[3], 0, i932, 'character')
  i932.followSharpness = i933[4]
  i932.movementLookAhead = i933[5]
  return i932
}

Deserializers["Portfolio.Playables.IsometricPortfolio.IsometricFocusCameraRig"] = function (request, data, root) {
  var i934 = root || request.c( 'Portfolio.Playables.IsometricPortfolio.IsometricFocusCameraRig' )
  var i935 = data
  request.r(i935[0], i935[1], 0, i934, 'movementCamera')
  request.r(i935[2], i935[3], 0, i934, 'focusCamera')
  i934.focusOffset = new pc.Vec3( i935[4], i935[5], i935[6] )
  i934.focusOrthographicSize = i935[7]
  return i934
}

Deserializers["Portfolio.Playables.IsometricPortfolio.IsometricInteractionController"] = function (request, data, root) {
  var i936 = root || request.c( 'Portfolio.Playables.IsometricPortfolio.IsometricInteractionController' )
  var i937 = data
  request.r(i937[0], i937[1], 0, i936, 'character')
  request.r(i937[2], i937[3], 0, i936, 'cameraRig')
  i936.arrivalTolerance = i937[4]
  return i936
}

Deserializers["Portfolio.Playables.IsometricPortfolio.PointerMoveTarget"] = function (request, data, root) {
  var i938 = root || request.c( 'Portfolio.Playables.IsometricPortfolio.PointerMoveTarget' )
  var i939 = data
  request.r(i939[0], i939[1], 0, i938, 'inputCamera')
  request.r(i939[2], i939[3], 0, i938, 'character')
  request.r(i939[4], i939[5], 0, i938, 'destinationMarker')
  request.r(i939[6], i939[7], 0, i938, 'interactionController')
  request.r(i939[8], i939[9], 0, i938, 'playerAbout')
  i938.groundHeight = i939[10]
  return i938
}

Deserializers["Portfolio.Playables.IsometricPortfolio.ResponsiveAboutModal"] = function (request, data, root) {
  var i940 = root || request.c( 'Portfolio.Playables.IsometricPortfolio.ResponsiveAboutModal' )
  var i941 = data
  request.r(i941[0], i941[1], 0, i940, 'card')
  request.r(i941[2], i941[3], 0, i940, 'portrait')
  request.r(i941[4], i941[5], 0, i940, 'title')
  request.r(i941[6], i941[7], 0, i940, 'body')
  request.r(i941[8], i941[9], 0, i940, 'contactHeading')
  var i943 = i941[10]
  var i942 = []
  for(var i = 0; i < i943.length; i += 2) {
  request.r(i943[i + 0], i943[i + 1], 2, i942, '')
  }
  i940.contactButtons = i942
  request.r(i941[11], i941[12], 0, i940, 'closeHint')
  return i940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i945 = data
  i944.type = i945[0]
  i944.color = new pc.Color(i945[1], i945[2], i945[3], i945[4])
  i944.cullingMask = i945[5]
  i944.intensity = i945[6]
  i944.range = i945[7]
  i944.spotAngle = i945[8]
  i944.shadows = i945[9]
  i944.shadowNormalBias = i945[10]
  i944.shadowBias = i945[11]
  i944.shadowStrength = i945[12]
  i944.shadowResolution = i945[13]
  i944.lightmapBakeType = i945[14]
  i944.renderMode = i945[15]
  request.r(i945[16], i945[17], 0, i944, 'cookie')
  i944.cookieSize = i945[18]
  i944.shadowNearPlane = i945[19]
  i944.occlusionMaskChannel = i945[20]
  i944.isBaked = !!i945[21]
  i944.mixedLightingMode = i945[22]
  i944.enabled = !!i945[23]
  return i944
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i946 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i947 = data
  request.r(i947[0], i947[1], 0, i946, 'm_FirstSelected')
  i946.m_sendNavigationEvents = !!i947[2]
  i946.m_DragThreshold = i947[3]
  return i946
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i948 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i949 = data
  i948.m_HorizontalAxis = i949[0]
  i948.m_VerticalAxis = i949[1]
  i948.m_SubmitButton = i949[2]
  i948.m_CancelButton = i949[3]
  i948.m_InputActionsPerSecond = i949[4]
  i948.m_RepeatDelay = i949[5]
  i948.m_ForceModuleActive = !!i949[6]
  i948.m_SendPointerHoverToParent = !!i949[7]
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i951 = data
  i950.ambientIntensity = i951[0]
  i950.reflectionIntensity = i951[1]
  i950.ambientMode = i951[2]
  i950.ambientLight = new pc.Color(i951[3], i951[4], i951[5], i951[6])
  i950.ambientSkyColor = new pc.Color(i951[7], i951[8], i951[9], i951[10])
  i950.ambientGroundColor = new pc.Color(i951[11], i951[12], i951[13], i951[14])
  i950.ambientEquatorColor = new pc.Color(i951[15], i951[16], i951[17], i951[18])
  i950.fogColor = new pc.Color(i951[19], i951[20], i951[21], i951[22])
  i950.fogEndDistance = i951[23]
  i950.fogStartDistance = i951[24]
  i950.fogDensity = i951[25]
  i950.fog = !!i951[26]
  request.r(i951[27], i951[28], 0, i950, 'skybox')
  i950.fogMode = i951[29]
  var i953 = i951[30]
  var i952 = []
  for(var i = 0; i < i953.length; i += 1) {
    i952.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i953[i + 0]) );
  }
  i950.lightmaps = i952
  i950.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i951[31], i950.lightProbes)
  i950.lightmapsMode = i951[32]
  i950.mixedBakeMode = i951[33]
  i950.environmentLightingMode = i951[34]
  i950.ambientProbe = new pc.SphericalHarmonicsL2(i951[35])
  request.r(i951[36], i951[37], 0, i950, 'customReflection')
  request.r(i951[38], i951[39], 0, i950, 'defaultReflection')
  i950.defaultReflectionMode = i951[40]
  i950.defaultReflectionResolution = i951[41]
  i950.sunLightObjectId = i951[42]
  i950.pixelLightCount = i951[43]
  i950.defaultReflectionHDR = !!i951[44]
  i950.hasLightDataAsset = !!i951[45]
  i950.hasManualGenerate = !!i951[46]
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i957 = data
  request.r(i957[0], i957[1], 0, i956, 'lightmapColor')
  request.r(i957[2], i957[3], 0, i956, 'lightmapDirection')
  request.r(i957[4], i957[5], 0, i956, 'shadowMask')
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i958 = root || new UnityEngine.LightProbes()
  var i959 = data
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i967 = data
  var i969 = i967[0]
  var i968 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i969.length; i += 1) {
    i968.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i969[i + 0]));
  }
  i966.ShaderCompilationErrors = i968
  i966.name = i967[1]
  i966.guid = i967[2]
  var i971 = i967[3]
  var i970 = []
  for(var i = 0; i < i971.length; i += 1) {
    i970.push( i971[i + 0] );
  }
  i966.shaderDefinedKeywords = i970
  var i973 = i967[4]
  var i972 = []
  for(var i = 0; i < i973.length; i += 1) {
    i972.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i973[i + 0]) );
  }
  i966.passes = i972
  var i975 = i967[5]
  var i974 = []
  for(var i = 0; i < i975.length; i += 1) {
    i974.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i975[i + 0]) );
  }
  i966.usePasses = i974
  var i977 = i967[6]
  var i976 = []
  for(var i = 0; i < i977.length; i += 1) {
    i976.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i977[i + 0]) );
  }
  i966.defaultParameterValues = i976
  request.r(i967[7], i967[8], 0, i966, 'unityFallbackShader')
  i966.readDepth = !!i967[9]
  i966.hasDepthOnlyPass = !!i967[10]
  i966.isCreatedByShaderGraph = !!i967[11]
  i966.disableBatching = !!i967[12]
  i966.compiled = !!i967[13]
  return i966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i981 = data
  i980.shaderName = i981[0]
  i980.errorMessage = i981[1]
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i986 = root || new pc.UnityShaderPass()
  var i987 = data
  i986.id = i987[0]
  i986.subShaderIndex = i987[1]
  i986.name = i987[2]
  i986.passType = i987[3]
  i986.grabPassTextureName = i987[4]
  i986.usePass = !!i987[5]
  i986.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i987[6], i986.zTest)
  i986.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i987[7], i986.zWrite)
  i986.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i987[8], i986.culling)
  i986.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i987[9], i986.blending)
  i986.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i987[10], i986.alphaBlending)
  i986.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i987[11], i986.colorWriteMask)
  i986.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i987[12], i986.offsetUnits)
  i986.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i987[13], i986.offsetFactor)
  i986.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i987[14], i986.stencilRef)
  i986.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i987[15], i986.stencilReadMask)
  i986.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i987[16], i986.stencilWriteMask)
  i986.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i987[17], i986.stencilOp)
  i986.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i987[18], i986.stencilOpFront)
  i986.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i987[19], i986.stencilOpBack)
  var i989 = i987[20]
  var i988 = []
  for(var i = 0; i < i989.length; i += 1) {
    i988.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i989[i + 0]) );
  }
  i986.tags = i988
  var i991 = i987[21]
  var i990 = []
  for(var i = 0; i < i991.length; i += 1) {
    i990.push( i991[i + 0] );
  }
  i986.passDefinedKeywords = i990
  var i993 = i987[22]
  var i992 = []
  for(var i = 0; i < i993.length; i += 1) {
    i992.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i993[i + 0]) );
  }
  i986.passDefinedKeywordGroups = i992
  var i995 = i987[23]
  var i994 = []
  for(var i = 0; i < i995.length; i += 1) {
    i994.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i995[i + 0]) );
  }
  i986.variants = i994
  var i997 = i987[24]
  var i996 = []
  for(var i = 0; i < i997.length; i += 1) {
    i996.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i997[i + 0]) );
  }
  i986.excludedVariants = i996
  i986.hasDepthReader = !!i987[25]
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i999 = data
  i998.val = i999[0]
  i998.name = i999[1]
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1001 = data
  i1000.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1001[0], i1000.src)
  i1000.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1001[1], i1000.dst)
  i1000.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1001[2], i1000.op)
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1003 = data
  i1002.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1003[0], i1002.pass)
  i1002.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1003[1], i1002.fail)
  i1002.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1003[2], i1002.zFail)
  i1002.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1003[3], i1002.comp)
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1007 = data
  i1006.name = i1007[0]
  i1006.value = i1007[1]
  return i1006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1011 = data
  var i1013 = i1011[0]
  var i1012 = []
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.push( i1013[i + 0] );
  }
  i1010.keywords = i1012
  i1010.hasDiscard = !!i1011[1]
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1017 = data
  i1016.passId = i1017[0]
  i1016.subShaderIndex = i1017[1]
  var i1019 = i1017[2]
  var i1018 = []
  for(var i = 0; i < i1019.length; i += 1) {
    i1018.push( i1019[i + 0] );
  }
  i1016.keywords = i1018
  i1016.vertexProgram = i1017[3]
  i1016.fragmentProgram = i1017[4]
  i1016.exportedForWebGl2 = !!i1017[5]
  i1016.readDepth = !!i1017[6]
  return i1016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1023 = data
  request.r(i1023[0], i1023[1], 0, i1022, 'shader')
  i1022.pass = i1023[2]
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1027 = data
  i1026.name = i1027[0]
  i1026.type = i1027[1]
  i1026.value = new pc.Vec4( i1027[2], i1027[3], i1027[4], i1027[5] )
  i1026.textureValue = i1027[6]
  i1026.shaderPropertyFlag = i1027[7]
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1029 = data
  i1028.name = i1029[0]
  return i1028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1031 = data
  i1030.name = i1031[0]
  i1030.wrapMode = i1031[1]
  i1030.isLooping = !!i1031[2]
  i1030.length = i1031[3]
  var i1033 = i1031[4]
  var i1032 = []
  for(var i = 0; i < i1033.length; i += 1) {
    i1032.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1033[i + 0]) );
  }
  i1030.curves = i1032
  var i1035 = i1031[5]
  var i1034 = []
  for(var i = 0; i < i1035.length; i += 1) {
    i1034.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1035[i + 0]) );
  }
  i1030.events = i1034
  i1030.halfPrecision = !!i1031[6]
  i1030._frameRate = i1031[7]
  i1030.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1031[8], i1030.localBounds)
  i1030.hasMuscleCurves = !!i1031[9]
  var i1037 = i1031[10]
  var i1036 = []
  for(var i = 0; i < i1037.length; i += 1) {
    i1036.push( i1037[i + 0] );
  }
  i1030.clipMuscleConstant = i1036
  i1030.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1031[11], i1030.clipBindingConstant)
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1041 = data
  i1040.path = i1041[0]
  i1040.hash = i1041[1]
  i1040.componentType = i1041[2]
  i1040.property = i1041[3]
  i1040.keys = i1041[4]
  var i1043 = i1041[5]
  var i1042 = []
  for(var i = 0; i < i1043.length; i += 1) {
    i1042.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1043[i + 0]) );
  }
  i1040.objectReferenceKeys = i1042
  return i1040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1047 = data
  i1046.time = i1047[0]
  request.r(i1047[1], i1047[2], 0, i1046, 'value')
  return i1046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1051 = data
  i1050.functionName = i1051[0]
  i1050.floatParameter = i1051[1]
  i1050.intParameter = i1051[2]
  i1050.stringParameter = i1051[3]
  request.r(i1051[4], i1051[5], 0, i1050, 'objectReferenceParameter')
  i1050.time = i1051[6]
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1053 = data
  i1052.center = new pc.Vec3( i1053[0], i1053[1], i1053[2] )
  i1052.extends = new pc.Vec3( i1053[3], i1053[4], i1053[5] )
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1057 = data
  var i1059 = i1057[0]
  var i1058 = []
  for(var i = 0; i < i1059.length; i += 1) {
    i1058.push( i1059[i + 0] );
  }
  i1056.genericBindings = i1058
  var i1061 = i1057[1]
  var i1060 = []
  for(var i = 0; i < i1061.length; i += 1) {
    i1060.push( i1061[i + 0] );
  }
  i1056.pptrCurveMapping = i1060
  return i1056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1063 = data
  i1062.name = i1063[0]
  i1062.ascent = i1063[1]
  i1062.originalLineHeight = i1063[2]
  i1062.fontSize = i1063[3]
  var i1065 = i1063[4]
  var i1064 = []
  for(var i = 0; i < i1065.length; i += 1) {
    i1064.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1065[i + 0]) );
  }
  i1062.characterInfo = i1064
  request.r(i1063[5], i1063[6], 0, i1062, 'texture')
  i1062.originalFontSize = i1063[7]
  return i1062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1069 = data
  i1068.index = i1069[0]
  i1068.advance = i1069[1]
  i1068.bearing = i1069[2]
  i1068.glyphWidth = i1069[3]
  i1068.glyphHeight = i1069[4]
  i1068.minX = i1069[5]
  i1068.maxX = i1069[6]
  i1068.minY = i1069[7]
  i1068.maxY = i1069[8]
  i1068.uvBottomLeftX = i1069[9]
  i1068.uvBottomLeftY = i1069[10]
  i1068.uvBottomRightX = i1069[11]
  i1068.uvBottomRightY = i1069[12]
  i1068.uvTopLeftX = i1069[13]
  i1068.uvTopLeftY = i1069[14]
  i1068.uvTopRightX = i1069[15]
  i1068.uvTopRightY = i1069[16]
  return i1068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1071 = data
  i1070.name = i1071[0]
  var i1073 = i1071[1]
  var i1072 = []
  for(var i = 0; i < i1073.length; i += 1) {
    i1072.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1073[i + 0]) );
  }
  i1070.layers = i1072
  var i1075 = i1071[2]
  var i1074 = []
  for(var i = 0; i < i1075.length; i += 1) {
    i1074.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1075[i + 0]) );
  }
  i1070.parameters = i1074
  i1070.animationClips = i1071[3]
  i1070.avatarUnsupported = i1071[4]
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1079 = data
  i1078.name = i1079[0]
  i1078.defaultWeight = i1079[1]
  i1078.blendingMode = i1079[2]
  i1078.avatarMask = i1079[3]
  i1078.syncedLayerIndex = i1079[4]
  i1078.syncedLayerAffectsTiming = !!i1079[5]
  i1078.syncedLayers = i1079[6]
  i1078.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1079[7], i1078.stateMachine)
  return i1078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1081 = data
  i1080.id = i1081[0]
  i1080.name = i1081[1]
  i1080.path = i1081[2]
  var i1083 = i1081[3]
  var i1082 = []
  for(var i = 0; i < i1083.length; i += 1) {
    i1082.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1083[i + 0]) );
  }
  i1080.states = i1082
  var i1085 = i1081[4]
  var i1084 = []
  for(var i = 0; i < i1085.length; i += 1) {
    i1084.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1085[i + 0]) );
  }
  i1080.machines = i1084
  var i1087 = i1081[5]
  var i1086 = []
  for(var i = 0; i < i1087.length; i += 1) {
    i1086.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1087[i + 0]) );
  }
  i1080.entryStateTransitions = i1086
  var i1089 = i1081[6]
  var i1088 = []
  for(var i = 0; i < i1089.length; i += 1) {
    i1088.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1089[i + 0]) );
  }
  i1080.exitStateTransitions = i1088
  var i1091 = i1081[7]
  var i1090 = []
  for(var i = 0; i < i1091.length; i += 1) {
    i1090.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1091[i + 0]) );
  }
  i1080.anyStateTransitions = i1090
  i1080.defaultStateId = i1081[8]
  return i1080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1095 = data
  i1094.id = i1095[0]
  i1094.name = i1095[1]
  i1094.cycleOffset = i1095[2]
  i1094.cycleOffsetParameter = i1095[3]
  i1094.cycleOffsetParameterActive = !!i1095[4]
  i1094.mirror = !!i1095[5]
  i1094.mirrorParameter = i1095[6]
  i1094.mirrorParameterActive = !!i1095[7]
  i1094.motionId = i1095[8]
  i1094.nameHash = i1095[9]
  i1094.fullPathHash = i1095[10]
  i1094.speed = i1095[11]
  i1094.speedParameter = i1095[12]
  i1094.speedParameterActive = !!i1095[13]
  i1094.tag = i1095[14]
  i1094.tagHash = i1095[15]
  i1094.writeDefaultValues = !!i1095[16]
  var i1097 = i1095[17]
  var i1096 = []
  for(var i = 0; i < i1097.length; i += 2) {
  request.r(i1097[i + 0], i1097[i + 1], 2, i1096, '')
  }
  i1094.behaviours = i1096
  var i1099 = i1095[18]
  var i1098 = []
  for(var i = 0; i < i1099.length; i += 1) {
    i1098.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1099[i + 0]) );
  }
  i1094.transitions = i1098
  return i1094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1105 = data
  i1104.fullPath = i1105[0]
  i1104.canTransitionToSelf = !!i1105[1]
  i1104.duration = i1105[2]
  i1104.exitTime = i1105[3]
  i1104.hasExitTime = !!i1105[4]
  i1104.hasFixedDuration = !!i1105[5]
  i1104.interruptionSource = i1105[6]
  i1104.offset = i1105[7]
  i1104.orderedInterruption = !!i1105[8]
  i1104.destinationStateId = i1105[9]
  i1104.isExit = !!i1105[10]
  i1104.mute = !!i1105[11]
  i1104.solo = !!i1105[12]
  var i1107 = i1105[13]
  var i1106 = []
  for(var i = 0; i < i1107.length; i += 1) {
    i1106.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1107[i + 0]) );
  }
  i1104.conditions = i1106
  return i1104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1113 = data
  i1112.destinationStateId = i1113[0]
  i1112.isExit = !!i1113[1]
  i1112.mute = !!i1113[2]
  i1112.solo = !!i1113[3]
  var i1115 = i1113[4]
  var i1114 = []
  for(var i = 0; i < i1115.length; i += 1) {
    i1114.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1115[i + 0]) );
  }
  i1112.conditions = i1114
  return i1112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1119 = data
  i1118.defaultBool = !!i1119[0]
  i1118.defaultFloat = i1119[1]
  i1118.defaultInt = i1119[2]
  i1118.name = i1119[3]
  i1118.nameHash = i1119[4]
  i1118.type = i1119[5]
  return i1118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1123 = data
  i1122.mode = i1123[0]
  i1122.parameter = i1123[1]
  i1122.threshold = i1123[2]
  return i1122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1125 = data
  i1124.name = i1125[0]
  i1124.bytes64 = i1125[1]
  i1124.data = i1125[2]
  return i1124
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1126 = root || request.c( 'TMPro.TMP_Settings' )
  var i1127 = data
  i1126.m_enableWordWrapping = !!i1127[0]
  i1126.m_enableKerning = !!i1127[1]
  i1126.m_enableExtraPadding = !!i1127[2]
  i1126.m_enableTintAllSprites = !!i1127[3]
  i1126.m_enableParseEscapeCharacters = !!i1127[4]
  i1126.m_EnableRaycastTarget = !!i1127[5]
  i1126.m_GetFontFeaturesAtRuntime = !!i1127[6]
  i1126.m_missingGlyphCharacter = i1127[7]
  i1126.m_warningsDisabled = !!i1127[8]
  request.r(i1127[9], i1127[10], 0, i1126, 'm_defaultFontAsset')
  i1126.m_defaultFontAssetPath = i1127[11]
  i1126.m_defaultFontSize = i1127[12]
  i1126.m_defaultAutoSizeMinRatio = i1127[13]
  i1126.m_defaultAutoSizeMaxRatio = i1127[14]
  i1126.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1127[15], i1127[16] )
  i1126.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1127[17], i1127[18] )
  i1126.m_autoSizeTextContainer = !!i1127[19]
  i1126.m_IsTextObjectScaleStatic = !!i1127[20]
  var i1129 = i1127[21]
  var i1128 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1129.length; i += 2) {
  request.r(i1129[i + 0], i1129[i + 1], 1, i1128, '')
  }
  i1126.m_fallbackFontAssets = i1128
  i1126.m_matchMaterialPreset = !!i1127[22]
  request.r(i1127[23], i1127[24], 0, i1126, 'm_defaultSpriteAsset')
  i1126.m_defaultSpriteAssetPath = i1127[25]
  i1126.m_enableEmojiSupport = !!i1127[26]
  i1126.m_MissingCharacterSpriteUnicode = i1127[27]
  i1126.m_defaultColorGradientPresetsPath = i1127[28]
  request.r(i1127[29], i1127[30], 0, i1126, 'm_defaultStyleSheet')
  i1126.m_StyleSheetsResourcePath = i1127[31]
  request.r(i1127[32], i1127[33], 0, i1126, 'm_leadingCharacters')
  request.r(i1127[34], i1127[35], 0, i1126, 'm_followingCharacters')
  i1126.m_UseModernHangulLineBreakingRules = !!i1127[36]
  return i1126
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1132 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1133 = data
  request.r(i1133[0], i1133[1], 0, i1132, 'atlas')
  i1132.normalStyle = i1133[2]
  i1132.normalSpacingOffset = i1133[3]
  i1132.boldStyle = i1133[4]
  i1132.boldSpacing = i1133[5]
  i1132.italicStyle = i1133[6]
  i1132.tabSize = i1133[7]
  i1132.hashCode = i1133[8]
  request.r(i1133[9], i1133[10], 0, i1132, 'material')
  i1132.materialHashCode = i1133[11]
  i1132.m_Version = i1133[12]
  i1132.m_SourceFontFileGUID = i1133[13]
  request.r(i1133[14], i1133[15], 0, i1132, 'm_SourceFontFile_EditorRef')
  request.r(i1133[16], i1133[17], 0, i1132, 'm_SourceFontFile')
  i1132.m_AtlasPopulationMode = i1133[18]
  i1132.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1133[19], i1132.m_FaceInfo)
  var i1135 = i1133[20]
  var i1134 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1135.length; i += 1) {
    i1134.add(request.d('UnityEngine.TextCore.Glyph', i1135[i + 0]));
  }
  i1132.m_GlyphTable = i1134
  var i1137 = i1133[21]
  var i1136 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1137.length; i += 1) {
    i1136.add(request.d('TMPro.TMP_Character', i1137[i + 0]));
  }
  i1132.m_CharacterTable = i1136
  var i1139 = i1133[22]
  var i1138 = []
  for(var i = 0; i < i1139.length; i += 2) {
  request.r(i1139[i + 0], i1139[i + 1], 2, i1138, '')
  }
  i1132.m_AtlasTextures = i1138
  i1132.m_AtlasTextureIndex = i1133[23]
  i1132.m_IsMultiAtlasTexturesEnabled = !!i1133[24]
  i1132.m_ClearDynamicDataOnBuild = !!i1133[25]
  var i1141 = i1133[26]
  var i1140 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1141.length; i += 1) {
    i1140.add(request.d('UnityEngine.TextCore.GlyphRect', i1141[i + 0]));
  }
  i1132.m_UsedGlyphRects = i1140
  var i1143 = i1133[27]
  var i1142 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1143.length; i += 1) {
    i1142.add(request.d('UnityEngine.TextCore.GlyphRect', i1143[i + 0]));
  }
  i1132.m_FreeGlyphRects = i1142
  i1132.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1133[28], i1132.m_fontInfo)
  i1132.m_AtlasWidth = i1133[29]
  i1132.m_AtlasHeight = i1133[30]
  i1132.m_AtlasPadding = i1133[31]
  i1132.m_AtlasRenderMode = i1133[32]
  var i1145 = i1133[33]
  var i1144 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1145.length; i += 1) {
    i1144.add(request.d('TMPro.TMP_Glyph', i1145[i + 0]));
  }
  i1132.m_glyphInfoList = i1144
  i1132.m_KerningTable = request.d('TMPro.KerningTable', i1133[34], i1132.m_KerningTable)
  i1132.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1133[35], i1132.m_FontFeatureTable)
  var i1147 = i1133[36]
  var i1146 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1147.length; i += 2) {
  request.r(i1147[i + 0], i1147[i + 1], 1, i1146, '')
  }
  i1132.fallbackFontAssets = i1146
  var i1149 = i1133[37]
  var i1148 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1149.length; i += 2) {
  request.r(i1149[i + 0], i1149[i + 1], 1, i1148, '')
  }
  i1132.m_FallbackFontAssetTable = i1148
  i1132.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1133[38], i1132.m_CreationSettings)
  var i1151 = i1133[39]
  var i1150 = []
  for(var i = 0; i < i1151.length; i += 1) {
    i1150.push( request.d('TMPro.TMP_FontWeightPair', i1151[i + 0]) );
  }
  i1132.m_FontWeightTable = i1150
  var i1153 = i1133[40]
  var i1152 = []
  for(var i = 0; i < i1153.length; i += 1) {
    i1152.push( request.d('TMPro.TMP_FontWeightPair', i1153[i + 0]) );
  }
  i1132.fontWeights = i1152
  return i1132
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1154 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1155 = data
  i1154.m_FaceIndex = i1155[0]
  i1154.m_FamilyName = i1155[1]
  i1154.m_StyleName = i1155[2]
  i1154.m_PointSize = i1155[3]
  i1154.m_Scale = i1155[4]
  i1154.m_UnitsPerEM = i1155[5]
  i1154.m_LineHeight = i1155[6]
  i1154.m_AscentLine = i1155[7]
  i1154.m_CapLine = i1155[8]
  i1154.m_MeanLine = i1155[9]
  i1154.m_Baseline = i1155[10]
  i1154.m_DescentLine = i1155[11]
  i1154.m_SuperscriptOffset = i1155[12]
  i1154.m_SuperscriptSize = i1155[13]
  i1154.m_SubscriptOffset = i1155[14]
  i1154.m_SubscriptSize = i1155[15]
  i1154.m_UnderlineOffset = i1155[16]
  i1154.m_UnderlineThickness = i1155[17]
  i1154.m_StrikethroughOffset = i1155[18]
  i1154.m_StrikethroughThickness = i1155[19]
  i1154.m_TabWidth = i1155[20]
  return i1154
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1158 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1159 = data
  i1158.m_Index = i1159[0]
  i1158.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1159[1], i1158.m_Metrics)
  i1158.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1159[2], i1158.m_GlyphRect)
  i1158.m_Scale = i1159[3]
  i1158.m_AtlasIndex = i1159[4]
  i1158.m_ClassDefinitionType = i1159[5]
  return i1158
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1160 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1161 = data
  i1160.m_Width = i1161[0]
  i1160.m_Height = i1161[1]
  i1160.m_HorizontalBearingX = i1161[2]
  i1160.m_HorizontalBearingY = i1161[3]
  i1160.m_HorizontalAdvance = i1161[4]
  return i1160
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1162 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1163 = data
  i1162.m_X = i1163[0]
  i1162.m_Y = i1163[1]
  i1162.m_Width = i1163[2]
  i1162.m_Height = i1163[3]
  return i1162
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1166 = root || request.c( 'TMPro.TMP_Character' )
  var i1167 = data
  i1166.m_ElementType = i1167[0]
  i1166.m_Unicode = i1167[1]
  i1166.m_GlyphIndex = i1167[2]
  i1166.m_Scale = i1167[3]
  return i1166
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1172 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1173 = data
  i1172.Name = i1173[0]
  i1172.PointSize = i1173[1]
  i1172.Scale = i1173[2]
  i1172.CharacterCount = i1173[3]
  i1172.LineHeight = i1173[4]
  i1172.Baseline = i1173[5]
  i1172.Ascender = i1173[6]
  i1172.CapHeight = i1173[7]
  i1172.Descender = i1173[8]
  i1172.CenterLine = i1173[9]
  i1172.SuperscriptOffset = i1173[10]
  i1172.SubscriptOffset = i1173[11]
  i1172.SubSize = i1173[12]
  i1172.Underline = i1173[13]
  i1172.UnderlineThickness = i1173[14]
  i1172.strikethrough = i1173[15]
  i1172.strikethroughThickness = i1173[16]
  i1172.TabWidth = i1173[17]
  i1172.Padding = i1173[18]
  i1172.AtlasWidth = i1173[19]
  i1172.AtlasHeight = i1173[20]
  return i1172
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1176 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1177 = data
  i1176.id = i1177[0]
  i1176.x = i1177[1]
  i1176.y = i1177[2]
  i1176.width = i1177[3]
  i1176.height = i1177[4]
  i1176.xOffset = i1177[5]
  i1176.yOffset = i1177[6]
  i1176.xAdvance = i1177[7]
  i1176.scale = i1177[8]
  return i1176
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1178 = root || request.c( 'TMPro.KerningTable' )
  var i1179 = data
  var i1181 = i1179[0]
  var i1180 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1181.length; i += 1) {
    i1180.add(request.d('TMPro.KerningPair', i1181[i + 0]));
  }
  i1178.kerningPairs = i1180
  return i1178
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1184 = root || request.c( 'TMPro.KerningPair' )
  var i1185 = data
  i1184.xOffset = i1185[0]
  i1184.m_FirstGlyph = i1185[1]
  i1184.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1185[2], i1184.m_FirstGlyphAdjustments)
  i1184.m_SecondGlyph = i1185[3]
  i1184.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1185[4], i1184.m_SecondGlyphAdjustments)
  i1184.m_IgnoreSpacingAdjustments = !!i1185[5]
  return i1184
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1186 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1187 = data
  var i1189 = i1187[0]
  var i1188 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1189.length; i += 1) {
    i1188.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1189[i + 0]));
  }
  i1186.m_GlyphPairAdjustmentRecords = i1188
  return i1186
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1192 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1193 = data
  i1192.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1193[0], i1192.m_FirstAdjustmentRecord)
  i1192.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1193[1], i1192.m_SecondAdjustmentRecord)
  i1192.m_FeatureLookupFlags = i1193[2]
  return i1192
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1194 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1195 = data
  i1194.m_GlyphIndex = i1195[0]
  i1194.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1195[1], i1194.m_GlyphValueRecord)
  return i1194
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1196 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1197 = data
  i1196.m_XPlacement = i1197[0]
  i1196.m_YPlacement = i1197[1]
  i1196.m_XAdvance = i1197[2]
  i1196.m_YAdvance = i1197[3]
  return i1196
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1198 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1199 = data
  i1198.sourceFontFileName = i1199[0]
  i1198.sourceFontFileGUID = i1199[1]
  i1198.pointSizeSamplingMode = i1199[2]
  i1198.pointSize = i1199[3]
  i1198.padding = i1199[4]
  i1198.packingMode = i1199[5]
  i1198.atlasWidth = i1199[6]
  i1198.atlasHeight = i1199[7]
  i1198.characterSetSelectionMode = i1199[8]
  i1198.characterSequence = i1199[9]
  i1198.referencedFontAssetGUID = i1199[10]
  i1198.referencedTextAssetGUID = i1199[11]
  i1198.fontStyle = i1199[12]
  i1198.fontStyleModifier = i1199[13]
  i1198.renderMode = i1199[14]
  i1198.includeFontFeatures = !!i1199[15]
  return i1198
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1202 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1203 = data
  request.r(i1203[0], i1203[1], 0, i1202, 'regularTypeface')
  request.r(i1203[2], i1203[3], 0, i1202, 'italicTypeface')
  return i1202
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1204 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1205 = data
  request.r(i1205[0], i1205[1], 0, i1204, 'spriteSheet')
  var i1207 = i1205[2]
  var i1206 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1207.length; i += 1) {
    i1206.add(request.d('TMPro.TMP_Sprite', i1207[i + 0]));
  }
  i1204.spriteInfoList = i1206
  var i1209 = i1205[3]
  var i1208 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1209.length; i += 2) {
  request.r(i1209[i + 0], i1209[i + 1], 1, i1208, '')
  }
  i1204.fallbackSpriteAssets = i1208
  i1204.hashCode = i1205[4]
  request.r(i1205[5], i1205[6], 0, i1204, 'material')
  i1204.materialHashCode = i1205[7]
  i1204.m_Version = i1205[8]
  i1204.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1205[9], i1204.m_FaceInfo)
  var i1211 = i1205[10]
  var i1210 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1211.length; i += 1) {
    i1210.add(request.d('TMPro.TMP_SpriteCharacter', i1211[i + 0]));
  }
  i1204.m_SpriteCharacterTable = i1210
  var i1213 = i1205[11]
  var i1212 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1213.length; i += 1) {
    i1212.add(request.d('TMPro.TMP_SpriteGlyph', i1213[i + 0]));
  }
  i1204.m_SpriteGlyphTable = i1212
  return i1204
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1216 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1217 = data
  i1216.name = i1217[0]
  i1216.hashCode = i1217[1]
  i1216.unicode = i1217[2]
  i1216.pivot = new pc.Vec2( i1217[3], i1217[4] )
  request.r(i1217[5], i1217[6], 0, i1216, 'sprite')
  i1216.id = i1217[7]
  i1216.x = i1217[8]
  i1216.y = i1217[9]
  i1216.width = i1217[10]
  i1216.height = i1217[11]
  i1216.xOffset = i1217[12]
  i1216.yOffset = i1217[13]
  i1216.xAdvance = i1217[14]
  i1216.scale = i1217[15]
  return i1216
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1222 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1223 = data
  i1222.m_Name = i1223[0]
  i1222.m_HashCode = i1223[1]
  i1222.m_ElementType = i1223[2]
  i1222.m_Unicode = i1223[3]
  i1222.m_GlyphIndex = i1223[4]
  i1222.m_Scale = i1223[5]
  return i1222
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1226 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1227 = data
  request.r(i1227[0], i1227[1], 0, i1226, 'sprite')
  i1226.m_Index = i1227[2]
  i1226.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1227[3], i1226.m_Metrics)
  i1226.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1227[4], i1226.m_GlyphRect)
  i1226.m_Scale = i1227[5]
  i1226.m_AtlasIndex = i1227[6]
  i1226.m_ClassDefinitionType = i1227[7]
  return i1226
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1228 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1229 = data
  var i1231 = i1229[0]
  var i1230 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1231.length; i += 1) {
    i1230.add(request.d('TMPro.TMP_Style', i1231[i + 0]));
  }
  i1228.m_StyleList = i1230
  return i1228
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1234 = root || request.c( 'TMPro.TMP_Style' )
  var i1235 = data
  i1234.m_Name = i1235[0]
  i1234.m_HashCode = i1235[1]
  i1234.m_OpeningDefinition = i1235[2]
  i1234.m_ClosingDefinition = i1235[3]
  i1234.m_OpeningTagArray = i1235[4]
  i1234.m_ClosingTagArray = i1235[5]
  i1234.m_OpeningTagUnicodeArray = i1235[6]
  i1234.m_ClosingTagUnicodeArray = i1235[7]
  return i1234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1237 = data
  var i1239 = i1237[0]
  var i1238 = []
  for(var i = 0; i < i1239.length; i += 1) {
    i1238.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1239[i + 0]) );
  }
  i1236.files = i1238
  i1236.componentToPrefabIds = i1237[1]
  return i1236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1243 = data
  i1242.path = i1243[0]
  request.r(i1243[1], i1243[2], 0, i1242, 'unityObject')
  return i1242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1245 = data
  var i1247 = i1245[0]
  var i1246 = []
  for(var i = 0; i < i1247.length; i += 1) {
    i1246.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1247[i + 0]) );
  }
  i1244.scriptsExecutionOrder = i1246
  var i1249 = i1245[1]
  var i1248 = []
  for(var i = 0; i < i1249.length; i += 1) {
    i1248.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1249[i + 0]) );
  }
  i1244.sortingLayers = i1248
  var i1251 = i1245[2]
  var i1250 = []
  for(var i = 0; i < i1251.length; i += 1) {
    i1250.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1251[i + 0]) );
  }
  i1244.cullingLayers = i1250
  i1244.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1245[3], i1244.timeSettings)
  i1244.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1245[4], i1244.physicsSettings)
  i1244.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1245[5], i1244.physics2DSettings)
  i1244.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1245[6], i1244.qualitySettings)
  i1244.enableRealtimeShadows = !!i1245[7]
  i1244.enableAutoInstancing = !!i1245[8]
  i1244.enableStaticBatching = !!i1245[9]
  i1244.enableDynamicBatching = !!i1245[10]
  i1244.usePreservativeDynamicBatching = !!i1245[11]
  i1244.lightmapEncodingQuality = i1245[12]
  i1244.desiredColorSpace = i1245[13]
  var i1253 = i1245[14]
  var i1252 = []
  for(var i = 0; i < i1253.length; i += 1) {
    i1252.push( i1253[i + 0] );
  }
  i1244.allTags = i1252
  return i1244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1257 = data
  i1256.name = i1257[0]
  i1256.value = i1257[1]
  return i1256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1261 = data
  i1260.id = i1261[0]
  i1260.name = i1261[1]
  i1260.value = i1261[2]
  return i1260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1265 = data
  i1264.id = i1265[0]
  i1264.name = i1265[1]
  return i1264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1267 = data
  i1266.fixedDeltaTime = i1267[0]
  i1266.maximumDeltaTime = i1267[1]
  i1266.timeScale = i1267[2]
  i1266.maximumParticleTimestep = i1267[3]
  return i1266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1269 = data
  i1268.gravity = new pc.Vec3( i1269[0], i1269[1], i1269[2] )
  i1268.defaultSolverIterations = i1269[3]
  i1268.bounceThreshold = i1269[4]
  i1268.autoSyncTransforms = !!i1269[5]
  i1268.autoSimulation = !!i1269[6]
  var i1271 = i1269[7]
  var i1270 = []
  for(var i = 0; i < i1271.length; i += 1) {
    i1270.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1271[i + 0]) );
  }
  i1268.collisionMatrix = i1270
  return i1268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1275 = data
  i1274.enabled = !!i1275[0]
  i1274.layerId = i1275[1]
  i1274.otherLayerId = i1275[2]
  return i1274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1277 = data
  request.r(i1277[0], i1277[1], 0, i1276, 'material')
  i1276.gravity = new pc.Vec2( i1277[2], i1277[3] )
  i1276.positionIterations = i1277[4]
  i1276.velocityIterations = i1277[5]
  i1276.velocityThreshold = i1277[6]
  i1276.maxLinearCorrection = i1277[7]
  i1276.maxAngularCorrection = i1277[8]
  i1276.maxTranslationSpeed = i1277[9]
  i1276.maxRotationSpeed = i1277[10]
  i1276.baumgarteScale = i1277[11]
  i1276.baumgarteTOIScale = i1277[12]
  i1276.timeToSleep = i1277[13]
  i1276.linearSleepTolerance = i1277[14]
  i1276.angularSleepTolerance = i1277[15]
  i1276.defaultContactOffset = i1277[16]
  i1276.autoSimulation = !!i1277[17]
  i1276.queriesHitTriggers = !!i1277[18]
  i1276.queriesStartInColliders = !!i1277[19]
  i1276.callbacksOnDisable = !!i1277[20]
  i1276.reuseCollisionCallbacks = !!i1277[21]
  i1276.autoSyncTransforms = !!i1277[22]
  var i1279 = i1277[23]
  var i1278 = []
  for(var i = 0; i < i1279.length; i += 1) {
    i1278.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1279[i + 0]) );
  }
  i1276.collisionMatrix = i1278
  return i1276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1283 = data
  i1282.enabled = !!i1283[0]
  i1282.layerId = i1283[1]
  i1282.otherLayerId = i1283[2]
  return i1282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1285 = data
  var i1287 = i1285[0]
  var i1286 = []
  for(var i = 0; i < i1287.length; i += 1) {
    i1286.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1287[i + 0]) );
  }
  i1284.qualityLevels = i1286
  var i1289 = i1285[1]
  var i1288 = []
  for(var i = 0; i < i1289.length; i += 1) {
    i1288.push( i1289[i + 0] );
  }
  i1284.names = i1288
  i1284.shadows = i1285[2]
  i1284.anisotropicFiltering = i1285[3]
  i1284.antiAliasing = i1285[4]
  i1284.lodBias = i1285[5]
  i1284.shadowCascades = i1285[6]
  i1284.shadowDistance = i1285[7]
  i1284.shadowmaskMode = i1285[8]
  i1284.shadowProjection = i1285[9]
  i1284.shadowResolution = i1285[10]
  i1284.softParticles = !!i1285[11]
  i1284.softVegetation = !!i1285[12]
  i1284.activeColorSpace = i1285[13]
  i1284.desiredColorSpace = i1285[14]
  i1284.masterTextureLimit = i1285[15]
  i1284.maxQueuedFrames = i1285[16]
  i1284.particleRaycastBudget = i1285[17]
  i1284.pixelLightCount = i1285[18]
  i1284.realtimeReflectionProbes = !!i1285[19]
  i1284.shadowCascade2Split = i1285[20]
  i1284.shadowCascade4Split = new pc.Vec3( i1285[21], i1285[22], i1285[23] )
  i1284.streamingMipmapsActive = !!i1285[24]
  i1284.vSyncCount = i1285[25]
  i1284.asyncUploadBufferSize = i1285[26]
  i1284.asyncUploadTimeSlice = i1285[27]
  i1284.billboardsFaceCameraPosition = !!i1285[28]
  i1284.shadowNearPlaneOffset = i1285[29]
  i1284.streamingMipmapsMemoryBudget = i1285[30]
  i1284.maximumLODLevel = i1285[31]
  i1284.streamingMipmapsAddAllCameras = !!i1285[32]
  i1284.streamingMipmapsMaxLevelReduction = i1285[33]
  i1284.streamingMipmapsRenderersPerFrame = i1285[34]
  i1284.resolutionScalingFixedDPIFactor = i1285[35]
  i1284.streamingMipmapsMaxFileIORequests = i1285[36]
  i1284.currentQualityLevel = i1285[37]
  return i1284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1295 = data
  i1294.weight = i1295[0]
  i1294.vertices = i1295[1]
  i1294.normals = i1295[2]
  i1294.tangents = i1295[3]
  return i1294
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1296 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1297 = data
  request.r(i1297[0], i1297[1], 0, i1296, 'm_ObjectArgument')
  i1296.m_ObjectArgumentAssemblyTypeName = i1297[2]
  i1296.m_IntArgument = i1297[3]
  i1296.m_FloatArgument = i1297[4]
  i1296.m_StringArgument = i1297[5]
  i1296.m_BoolArgument = !!i1297[6]
  return i1296
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1298 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1299 = data
  i1298.xPlacement = i1299[0]
  i1298.yPlacement = i1299[1]
  i1298.xAdvance = i1299[2]
  i1298.yAdvance = i1299[3]
  return i1298
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"67":[68],"69":[68],"70":[68],"71":[68],"72":[68],"73":[68],"74":[52],"75":[53],"76":[77],"78":[77],"79":[77],"80":[77],"81":[77],"82":[77],"83":[77],"84":[85],"86":[85],"87":[85],"88":[85],"89":[85],"90":[85],"91":[85],"92":[85],"93":[85],"94":[85],"95":[85],"96":[85],"97":[85],"98":[53],"99":[5],"100":[101],"102":[101],"23":[22],"103":[104],"105":[22],"106":[5,22],"107":[22,29],"108":[22],"109":[29,22],"110":[5],"111":[29,22],"112":[22],"113":[17],"114":[17],"115":[22],"116":[22],"26":[23],"30":[29,22],"117":[22],"25":[23],"45":[22],"118":[22],"119":[22],"120":[22],"40":[22],"121":[22],"44":[22],"43":[22],"122":[22],"123":[29,22],"124":[22],"42":[22],"41":[22],"125":[22],"28":[29,22],"126":[22],"127":[59],"128":[59],"60":[59],"129":[59],"130":[53],"131":[53],"37":[31],"46":[31],"19":[20],"32":[31],"132":[31,30],"133":[53]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.BoxCollider","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.MonoBehaviour","Portfolio.Playables.IsometricPortfolio.IsometricInteractable","UnityEngine.Transform","UnityEngine.GameObject","Portfolio.Playables.IsometricPortfolio.FaceMainCamera","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","Portfolio.Playables.IsometricPortfolio.TakeoffExhibitMotion","Portfolio.Playables.IsometricPortfolio.TelepathyParticleMotion","Portfolio.Playables.IsometricPortfolio.AirSwimmingMotion","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","Portfolio.Playables.IsometricPortfolio.GramophoneMusicToggle","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","Portfolio.Playables.IsometricPortfolio.ResponsiveWorkModal","UnityEngine.UI.Text","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Button","Portfolio.Playables.IsometricPortfolio.ModalCloseButton","Portfolio.Playables.IsometricPortfolio.IsometricInteractionController","Portfolio.Playables.IsometricPortfolio.PlayerAboutSection","UnityEngine.Font","Portfolio.Playables.IsometricPortfolio.ResponsiveModalCard","Portfolio.Playables.IsometricPortfolio.ExternalUrlButton","Portfolio.Playables.IsometricPortfolio.ResponsiveLifeModal","Portfolio.Playables.IsometricPortfolio.ResponsiveRecommendationsModal","UnityEngine.UI.LayoutElement","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Mask","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.ContentSizeFitter","Portfolio.Playables.IsometricPortfolio.GameRecommendationLink","UnityEngine.CapsuleCollider","Portfolio.Playables.IsometricPortfolio.IsometricCharacterController","Portfolio.Playables.IsometricPortfolio.ZuitAnimationDriver","Portfolio.Playables.IsometricPortfolio.IsometricFocusCameraRig","Portfolio.Playables.IsometricPortfolio.ProceduralHeadMouseLook","UnityEngine.SkinnedMeshRenderer","UnityEngine.Camera","UnityEngine.AudioListener","Portfolio.Playables.IsometricPortfolio.IsometricCameraFollow","Portfolio.Playables.IsometricPortfolio.PointerMoveTarget","Portfolio.Playables.IsometricPortfolio.ResponsiveAboutModal","UnityEngine.Light","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Cubemap","TMPro.TMP_Settings","TMPro.TMP_FontAsset","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Polyperfect.Common.AnimationDelay","Polyperfect.Common.AnimationOffset","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Portfolio.Playables.Common.PlayableSoundToggle","Portfolio.Playables.Common.ResponsiveCamera"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "PlayableAds";

Deserializers.lunaInitializationTime = "";

Deserializers.lunaDaysRunning = "8.7";

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

Deserializers.buildID = "edff95d7-cbc8-4c22-8931-9d38b8a52191";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Portfolio","Playables","AsteroidBlitz","AsteroidMovementTrace","BeginPlayTrace"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

