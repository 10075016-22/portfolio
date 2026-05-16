import * as THREE from 'three'
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js'

function scrollProgress() {
  if (typeof document === 'undefined' || typeof window === 'undefined') return 0
  const max = Math.max(
    1,
    document.documentElement.scrollHeight - window.innerHeight,
  )
  return Math.min(1, Math.max(0, window.scrollY / max))
}

function buildRocket() {
  const disposable = { geometries: [], materials: [] }

  const group = new THREE.Group()

  const hullMat = new THREE.MeshPhysicalMaterial({
    color: 0xd1dae5,
    metalness: 0.55,
    roughness: 0.34,
    clearcoat: 0.12,
    clearcoatRoughness: 0.4,
    envMapIntensity: 0.4,
    fog: true,
  })
  disposable.materials.push(hullMat)

  const accentMat = new THREE.MeshPhysicalMaterial({
    color: 0x2563eb,
    metalness: 0.5,
    roughness: 0.34,
    clearcoat: 0.2,
    clearcoatRoughness: 0.35,
    envMapIntensity: 0.55,
    fog: true,
  })
  disposable.materials.push(accentMat)

  const finMat = new THREE.MeshPhysicalMaterial({
    color: 0x3d4f63,
    metalness: 0.5,
    roughness: 0.45,
    clearcoat: 0.08,
    clearcoatRoughness: 0.5,
    envMapIntensity: 0.4,
    fog: true,
  })
  disposable.materials.push(finMat)

  const windowMat = new THREE.MeshPhysicalMaterial({
    color: 0x071528,
    metalness: 0.85,
    roughness: 0.1,
    transmission: 0,
    thickness: 0.5,
    emissive: 0x0d2a55,
    emissiveIntensity: 0.35,
    envMapIntensity: 0.5,
    fog: true,
  })
  disposable.materials.push(windowMat)

  const frameMat = new THREE.MeshPhysicalMaterial({
    color: 0x94a3b8,
    metalness: 0.72,
    roughness: 0.26,
    clearcoat: 0.15,
    envMapIntensity: 0.5,
    fog: true,
  })
  disposable.materials.push(frameMat)

  const ringMat = new THREE.MeshPhysicalMaterial({
    color: 0x5c6b82,
    metalness: 0.65,
    roughness: 0.34,
    clearcoat: 0.1,
    envMapIntensity: 0.45,
    fog: true,
  })
  disposable.materials.push(ringMat)

  const skirtMat = new THREE.MeshPhysicalMaterial({
    color: 0x2a3441,
    metalness: 0.56,
    roughness: 0.42,
    clearcoat: 0.08,
    envMapIntensity: 0.4,
    fog: true,
  })
  disposable.materials.push(skirtMat)

  const flameMat = new THREE.MeshBasicMaterial({
    color: 0xfb923c,
    transparent: true,
    opacity: 0.82,
    depthWrite: false,
    fog: true,
  })
  disposable.materials.push(flameMat)

  const flameCoreMat = new THREE.MeshBasicMaterial({
    color: 0xfef3c7,
    transparent: true,
    opacity: 0.55,
    depthWrite: false,
    fog: true,
  })
  disposable.materials.push(flameCoreMat)

  const lowerGeo = new THREE.CylinderGeometry(0.17, 0.21, 0.52, 32, 1, false)
  disposable.geometries.push(lowerGeo)
  const lower = new THREE.Mesh(lowerGeo, hullMat)
  lower.position.y = -0.28
  group.add(lower)

  const stripeGeo = new THREE.CylinderGeometry(0.218, 0.228, 0.1, 32, 1, false)
  disposable.geometries.push(stripeGeo)
  const stripe = new THREE.Mesh(stripeGeo, accentMat)
  stripe.position.y = 0.08
  group.add(stripe)

  const upperGeo = new THREE.CylinderGeometry(0.16, 0.17, 0.48, 32, 1, false)
  disposable.geometries.push(upperGeo)
  const upper = new THREE.Mesh(upperGeo, hullMat)
  upper.position.y = 0.48
  group.add(upper)

  const fairingGeo = new THREE.CylinderGeometry(0.145, 0.16, 0.22, 28, 1, false)
  disposable.geometries.push(fairingGeo)
  const fairing = new THREE.Mesh(fairingGeo, hullMat)
  fairing.position.y = 0.78
  group.add(fairing)

  const noseGeo = new THREE.ConeGeometry(0.155, 0.38, 28, 1, false)
  disposable.geometries.push(noseGeo)
  const nose = new THREE.Mesh(noseGeo, hullMat)
  nose.position.y = 1.09
  group.add(nose)

  const capGeo = new THREE.SphereGeometry(0.045, 16, 12)
  disposable.geometries.push(capGeo)
  const cap = new THREE.Mesh(capGeo, skirtMat)
  cap.position.y = 1.28
  group.add(cap)

  const rcsGeo = new THREE.SphereGeometry(0.035, 12, 10)
  disposable.geometries.push(rcsGeo)
  for (let s = 0; s < 4; s++) {
    const ang = (s / 4) * Math.PI * 2 + 0.4
    const rc = new THREE.Mesh(rcsGeo, ringMat)
    rc.position.set(Math.cos(ang) * 0.17, 0.9, Math.sin(ang) * 0.17)
    group.add(rc)
  }

  const bandGeo = new THREE.TorusGeometry(0.165, 0.014, 10, 36)
  disposable.geometries.push(bandGeo)
  const band = new THREE.Mesh(bandGeo, frameMat)
  band.position.y = 0.66
  band.rotation.x = Math.PI / 2
  group.add(band)

  for (let p = 0; p < 3; p++) {
    const pr = new THREE.TorusGeometry(0.195 - p * 0.02, 0.006, 8, 40)
    disposable.geometries.push(pr)
    const ring = new THREE.Mesh(pr, ringMat)
    ring.position.y = -0.05 - p * 0.22
    ring.rotation.x = Math.PI / 2
    group.add(ring)
  }

  const frameTorusGeo = new THREE.TorusGeometry(0.12, 0.018, 10, 28)
  disposable.geometries.push(frameTorusGeo)
  const winFrame = new THREE.Mesh(frameTorusGeo, frameMat)
  winFrame.position.set(0.15, 0.32, 0.13)
  winFrame.rotation.y = 0.45
  winFrame.rotation.x = 0.12
  group.add(winFrame)

  const winGeo = new THREE.SphereGeometry(0.09, 20, 16)
  disposable.geometries.push(winGeo)
  const win = new THREE.Mesh(winGeo, windowMat)
  win.position.set(0.15, 0.32, 0.13)
  group.add(win)

  const skirtTubeGeo = new THREE.CylinderGeometry(0.19, 0.2, 0.2, 26, 1, false)
  disposable.geometries.push(skirtTubeGeo)
  const skirtTube = new THREE.Mesh(skirtTubeGeo, skirtMat)
  skirtTube.position.y = -0.62
  group.add(skirtTube)

  const bellGeo = new THREE.ConeGeometry(0.19, 0.26, 22, 1, true)
  disposable.geometries.push(bellGeo)
  const bell = new THREE.Mesh(bellGeo, skirtMat)
  bell.position.y = -0.84
  bell.rotation.x = Math.PI
  group.add(bell)

  const nozzleGeo = new THREE.CylinderGeometry(0.075, 0.1, 0.12, 20, 1, true)
  disposable.geometries.push(nozzleGeo)
  const nozzle = new THREE.Mesh(nozzleGeo, finMat)
  nozzle.position.y = -0.98
  group.add(nozzle)

  const finGeo = new THREE.BoxGeometry(0.05, 0.26, 0.18)
  disposable.geometries.push(finGeo)
  for (let i = 0; i < 4; i++) {
    const fin = new THREE.Mesh(finGeo, finMat)
    const a = (i / 4) * Math.PI * 2 + Math.PI / 8
    fin.position.set(Math.cos(a) * 0.26, -0.52, Math.sin(a) * 0.26)
    fin.rotation.y = -a
    fin.rotation.z = 0.32
    fin.rotation.x = 0.05
    group.add(fin)
  }

  const flameGeo = new THREE.ConeGeometry(0.14, 0.42, 20, 1, true)
  disposable.geometries.push(flameGeo)
  const flame = new THREE.Mesh(flameGeo, flameMat)
  flame.position.y = -1.14
  flame.rotation.x = Math.PI
  group.add(flame)

  const flameCoreGeo = new THREE.ConeGeometry(0.07, 0.28, 14, 1, true)
  disposable.geometries.push(flameCoreGeo)
  const flameCore = new THREE.Mesh(flameCoreGeo, flameCoreMat)
  flameCore.position.y = -1.1
  flameCore.rotation.x = Math.PI
  group.add(flameCore)

  return {
    group,
    disposable,
    flame,
    flameCore,
    flameMat,
    flameCoreMat,
    hullMat,
    accentMat,
    finMat,
    windowMat,
    frameMat,
    ringMat,
    skirtMat,
  }
}

export function createPortfolioBackdrop(canvas, hooks) {
  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
    powerPreference: 'high-performance',
  })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setClearColor(0x000000, 0)
  renderer.outputColorSpace = THREE.SRGBColorSpace
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1

  const scene = new THREE.Scene()
  scene.fog = new THREE.FogExp2(0x0a1628, 0.03)

  let pmremGenerator = null
  let envTexture = null

  function buildLightEnvironment() {
    if (envTexture) return
    pmremGenerator = new THREE.PMREMGenerator(renderer)
    pmremGenerator.compileEquirectangularShader()
    const envScene = new RoomEnvironment()
    envTexture = pmremGenerator.fromScene(envScene).texture
    envScene.clear()
  }

  function releaseLightEnvironment() {
    if (envTexture) {
      envTexture.dispose()
      envTexture = null
    }
    if (pmremGenerator) {
      pmremGenerator.dispose()
      pmremGenerator = null
    }
  }

  const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 80)
  camera.position.set(0, 0.38, 7.65)

  const amb = new THREE.AmbientLight(0xffffff, 0.42)
  scene.add(amb)

  const key = new THREE.DirectionalLight(0xffffff, 0.88)
  key.position.set(6, 9, 11)
  scene.add(key)

  const fill = new THREE.DirectionalLight(0xb8d4f0, 0.38)
  fill.position.set(-8, 4, 5)
  scene.add(fill)

  const rim = new THREE.PointLight(0xa5c8ff, 0.34, 32, 2)
  rim.position.set(-3.5, 0.8, 5.5)
  scene.add(rim)

  const back = new THREE.DirectionalLight(0xffffff, 0)
  back.position.set(-4, 5, -10)
  scene.add(back)

  const hemi = new THREE.HemisphereLight(0xffffff, 0xc8d4e0, 0)
  hemi.position.set(0, 1, 0)
  scene.add(hemi)

  const front = new THREE.DirectionalLight(0xffffff, 0)
  front.position.set(1.2, 3.5, 11)
  scene.add(front)

  const cursorLight = new THREE.PointLight(0xffffff, 0, 38, 2)
  cursorLight.position.set(0, 0, 6)
  scene.add(cursorLight)

  const {
    group: rocket,
    disposable,
    flame,
    flameCore,
    flameMat,
    flameCoreMat,
    hullMat,
    accentMat,
    finMat,
    windowMat,
    frameMat,
    ringMat,
    skirtMat,
  } = buildRocket()

  const rocketX = 0.22
  const rocketZ = 0
  rocket.position.set(rocketX, -1.45, rocketZ)
  rocket.rotation.order = 'YXZ'
  rocket.rotation.x = 0.11
  rocket.rotation.z = -0.02
  rocket.scale.setScalar(1.08)
  scene.add(rocket)

  let rocketY = -1.45
  const rocketYMin = -2.15
  const rocketYMax = 2.45

  let raf = 0
  const clock = new THREE.Clock()
  let ambientPulse = 0

  const stdMats = [
    hullMat,
    accentMat,
    finMat,
    windowMat,
    frameMat,
    ringMat,
    skirtMat,
  ]

  function applyEnvIntensity(dark, v) {
    const val = dark ? v * 0.45 : v
    stdMats.forEach((m) => {
      m.envMapIntensity = val
    })
  }

  function syncTheme() {
    const dark = hooks.getIsDark()

    if (dark) {
      releaseLightEnvironment()
      scene.environment = null
      scene.fog = scene.fog || new THREE.FogExp2(0x0a1628, 0.032)
      scene.fog.color.setHex(0x0a1628)
      scene.fog.density = 0.032
      renderer.toneMappingExposure = 1
    } else {
      buildLightEnvironment()
      scene.environment = envTexture
      if (scene.fog) {
        scene.fog = null
      }
      renderer.toneMappingExposure = 1.06
    }

    hemi.intensity = dark ? 0 : 0.58
    front.intensity = dark ? 0 : 0.72
    back.intensity = dark ? 0 : 0.38

    amb.intensity = dark ? 0.42 : 0.45
    key.color.setHex(dark ? 0xf1f5f9 : 0xffffff)
    key.intensity = dark ? 0.9 : 1.05
    key.position.set(dark ? 6 : 5.2, dark ? 9 : 9.5, dark ? 11 : 9)

    fill.color.setHex(dark ? 0x38bdf8 : 0xc4dff5)
    fill.intensity = dark ? 0.38 : 0.55
    fill.position.set(-7.5, 4.5, 5)

    if (dark) {
      applyEnvIntensity(true, 1)
      hullMat.color.setHex(0xd1dae5)
      hullMat.metalness = 0.55
      hullMat.roughness = 0.34
      hullMat.clearcoat = 0.12
      hullMat.clearcoatRoughness = 0.4
      accentMat.color.setHex(0x2563eb)
      accentMat.metalness = 0.5
      accentMat.clearcoat = 0.2
      finMat.color.setHex(0x3d4f63)
      ringMat.color.setHex(0x5c6b82)
      frameMat.color.setHex(0x94a3b8)
      skirtMat.color.setHex(0x2a3441)
      windowMat.color.setHex(0x071528)
      windowMat.emissive.setHex(0x0d2a55)
      windowMat.emissiveIntensity = 0.35
      windowMat.transmission = 0
      windowMat.metalness = 0.85
    } else {
      applyEnvIntensity(false, 1.15)
      hullMat.color.setHex(0xb8c9db)
      hullMat.metalness = 0.48
      hullMat.roughness = 0.32
      hullMat.clearcoat = 0.55
      hullMat.clearcoatRoughness = 0.28
      accentMat.color.setHex(0x1d4ed8)
      accentMat.metalness = 0.52
      accentMat.clearcoat = 0.45
      accentMat.roughness = 0.28
      finMat.color.setHex(0x4a5f72)
      finMat.clearcoat = 0.25
      ringMat.color.setHex(0x5c7a8e)
      frameMat.color.setHex(0x7c8fa3)
      skirtMat.color.setHex(0x3d5164)
      windowMat.color.setHex(0x0f172a)
      windowMat.metalness = 0.75
      windowMat.roughness = 0.18
      windowMat.emissive.setHex(0x1d4ed8)
      windowMat.emissiveIntensity = 0.18
      windowMat.transmission = 0.35
    }

    flameMat.color.setHex(0xfb923c)
    flameMat.opacity = dark ? 0.82 : 0.5
    flameCoreMat.color.setHex(dark ? 0xfef3c7 : 0xffffff)
    flameCoreMat.opacity = dark ? 0.55 : 0.42

    cursorLight.color.setHex(dark ? 0xc7d2fe : 0x60a5fa)
  }

  function tick() {
    const t = clock.getElapsedTime()
    const progress = scrollProgress()
    const glow = hooks.getGlow
      ? hooks.getGlow()
      : { x: 0.5, y: 0.5, linkActive: false }

    const targetY = THREE.MathUtils.lerp(rocketYMin, rocketYMax, progress)
    rocketY = THREE.MathUtils.lerp(rocketY, targetY, 0.088)
    rocket.position.y = rocketY
    rocket.position.x = rocketX + Math.sin(progress * Math.PI) * 0.045
    rocket.position.z = rocketZ + Math.cos(progress * Math.PI * 0.5) * 0.04

    rocket.rotation.y = Math.sin(t * 0.32) * 0.035 + progress * 0.07
    rocket.rotation.x =
      0.1 + Math.sin(t * 0.26) * 0.022 + (progress - 0.5) * 0.07
    rocket.rotation.z = -0.04 + Math.sin(t * 0.2) * 0.025

    const thr = 0.9 + Math.sin(t * 15) * 0.1
    flame.scale.set(thr * 0.92, thr, thr * 0.92)
    flameCore.scale.set(thr * 0.88, thr * 1.05, thr * 0.88)

    camera.lookAt(rocket.position.x, rocket.position.y * 0.28 + 0.2, 0)

    const tx = (glow.x * 2 - 1) * 4.2
    const ty = -(glow.y * 2 - 1) * 2.8 + 0.35
    const tz = 6.5
    cursorLight.position.x = THREE.MathUtils.lerp(
      cursorLight.position.x,
      tx,
      0.062,
    )
    cursorLight.position.y = THREE.MathUtils.lerp(
      cursorLight.position.y,
      ty,
      0.062,
    )
    cursorLight.position.z = THREE.MathUtils.lerp(
      cursorLight.position.z,
      tz,
      0.05,
    )

    const targetInt = glow.linkActive ? 0.55 : 0
    cursorLight.intensity = THREE.MathUtils.lerp(
      cursorLight.intensity,
      targetInt,
      0.052,
    )

    ambientPulse = THREE.MathUtils.lerp(
      ambientPulse,
      glow.linkActive ? 1 : 0,
      0.052,
    )
    rim.intensity =
      (hooks.getIsDark() ? 0.34 : 0.4) + ambientPulse * 0.2

    renderer.render(scene, camera)
    raf = requestAnimationFrame(tick)
  }

  function onResize() {
    resize()
  }

  function resize() {
    const w = canvas.clientWidth || window.innerWidth
    const h = canvas.clientHeight || window.innerHeight
    camera.aspect = w / Math.max(h, 1)
    camera.updateProjectionMatrix()
    renderer.setSize(w, h, false)
  }

  return {
    start() {
      resize()
      window.addEventListener('resize', onResize)
      syncTheme()
      tick()
    },
    stop() {
      window.removeEventListener('resize', onResize)
      cancelAnimationFrame(raf)
      raf = 0
    },
    dispose() {
      this.stop()
      releaseLightEnvironment()
      disposable.geometries.forEach((g) => g.dispose())
      disposable.materials.forEach((m) => m.dispose())
      renderer.dispose()
      scene.fog = null
    },
    syncTheme,
  }
}
