import {
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  MeshPhongMaterial,
  AmbientLight,
  DirectionalLight,
  PCFSoftShadowMap,
  PointLight,
  Color
} from "three"
import { OrbitControls } from "three/addons/controls/OrbitControls"

const $3dCubeContainer = document.getElementById("3d-cube-container")

const scene = new Scene()

const camera = new PerspectiveCamera(
  75,
  $3dCubeContainer.getBoundingClientRect().width /
    $3dCubeContainer.getBoundingClientRect().height,
  1,
  1000
)
camera.position.set(0, 0, 2)

const renderer = new WebGLRenderer({ antialias: true, alpha: true })
renderer.setSize(
  $3dCubeContainer.getBoundingClientRect().width,
  $3dCubeContainer.getBoundingClientRect().height
)
renderer.shadowMap.enabled = true
renderer.shadowMap.type = PCFSoftShadowMap
$3dCubeContainer.appendChild(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)
controls.autoRotate = true
// controls.maxPolarAngle = Math.PI / 2
// controls.minPolarAngle = Math.PI / 2
controls.minDistance = 2
controls.maxDistance = 20

const geometry = new BoxGeometry(1, 1, 1)
const material = new MeshPhongMaterial({ color: 0x666666 })
material.specular = new Color(0xaaaaaa)
const cube = new Mesh(geometry, material)
scene.add(cube)

const ambientLight = new AmbientLight(0xffffff, 0.5)
scene.add(ambientLight)

// const directionalLight = new DirectionalLight(0xffffff, 1)
// directionalLight.position.set(5, 5, 5)
// directionalLight.castShadow = true
// scene.add(directionalLight)

const pointLight = new PointLight(0xffffff, 1)
pointLight.position.set(3, 5, 2)
pointLight.castShadow = true
scene.add(pointLight)

function resizeCanvas() {
  const $canvas = renderer.domElement

  if (
    $canvas.getBoundingClientRect().width !==
      $3dCubeContainer.getBoundingClientRect().width ||
    $canvas.getBoundingClientRect().height !==
      $3dCubeContainer.getBoundingClientRect().height
  ) {
    renderer.setSize(
      $3dCubeContainer.getBoundingClientRect().width,
      $3dCubeContainer.getBoundingClientRect().height
    )
    camera.aspect =
      $3dCubeContainer.getBoundingClientRect().width /
      $3dCubeContainer.getBoundingClientRect().height
    camera.updateProjectionMatrix()
  }
}

animate()
function animate() {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
  controls.update()
  resizeCanvas()
}
