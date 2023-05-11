import { Toast } from "bootstrap"
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
  Color,
  Group,
  PlaneGeometry,
  DoubleSide,
  FrontSide,
  Vector3,
  Box3
} from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

const $3dCubeContainer = document.getElementById("3d-cube-container")

const scene = new Scene()

const camera = new PerspectiveCamera(
  75,
  $3dCubeContainer.getBoundingClientRect().width /
    $3dCubeContainer.getBoundingClientRect().height,
  1,
  100
)
camera.position.set(0, 0, 8)

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
controls.minDistance = 5
controls.maxDistance = 20

const platform = new Mesh(
  new PlaneGeometry(100, 100),
  new MeshStandardMaterial({ color: 0xffffff, side: FrontSide })
)

platform.position.set(0, 0, 0)
platform.rotation.x = (-90 * Math.PI) / 180
platform.receiveShadow = true
scene.add(platform)

const gltfLoader = new GLTFLoader()
function objResolve(obj) {
  obj.scene.traverse((node) => {
    if (node.isMesh) {
      node.castShadow = true
    }
  })

  const box = new Box3().setFromObject(obj.scene)
  const measure = new Vector3()

  platform.position.set(0, box.getSize(measure).y / -2, 0)

  scene.add(obj.scene)
  animate()
}

const alertToast = new Toast("#alertToast")

gltfLoader.load(
  "/objs/scene.glb",
  objResolve,
  () => {},
  () => {
    // onError
    gltfLoader.load(
      "/next-college-website/objs/scene.glb",
      objResolve,
      () => {},
      () => {
        // onError
        alertToast.show()
      }
    )
  }
)

const ambientLight = new AmbientLight(0xffffff, 0.5)
scene.add(ambientLight)

// 0d6efd #blue
// dc3545 #red
const pointLight = new PointLight(0xffffff, 1)
pointLight.position.set(9, 10, 4)
pointLight.castShadow = true
scene.add(pointLight)

const lightHolder = new Group()
lightHolder.add(pointLight)
scene.add(lightHolder)

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

function animate() {
  requestAnimationFrame(animate)

  resizeCanvas()

  // makes light stay at the same point
  // when the scene is rotated
  lightHolder.quaternion.copy(camera.quaternion)

  renderer.render(scene, camera)
  controls.update()
}
