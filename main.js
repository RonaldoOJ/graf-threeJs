import * as THREE from 'https://unpkg.com/three@0.154.0/build/three.module.js';

// Crea escena, cámara y renderizador
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Crea los tres cubos con colores distintos
const geometria = new THREE.BoxGeometry(1, 1, 1);
const materiales = [
  new THREE.MeshStandardMaterial({ color: 0xffa500  }), // naranja
  new THREE.MeshStandardMaterial({ color: 0x00ffff }), // cian
  new THREE.MeshStandardMaterial({ color: 0xff69b4 })  // rosa
];

const cubos = [
  new THREE.Mesh(geometria, materiales[0]),
  new THREE.Mesh(geometria, materiales[1]),
  new THREE.Mesh(geometria, materiales[2])
];

// Posiciona los cubos centrados con el eje x
cubos[0].position.x = -2;
cubos[1].position.x = 0;
cubos[2].position.x = 2;
cubos.forEach(cubo => scene.add(cubo));

// Luz direccional
const luz = new THREE.DirectionalLight(0xffffff, 1);
luz.position.set(5, 5, 5);
scene.add(luz);

// Posición de cámara
camera.position.z = 5;

// Animación 
function animate() {
  // Cubo 1:
  cubos[0].rotation.x += 0.03;
  cubos[0].rotation.y -= 0.02;

  // Cubo 2:
  cubos[1].rotation.x += 0.015;
  cubos[1].rotation.y += 0.015;

  // Cubo 3:
  cubos[2].rotation.x -= 0.01;
  cubos[2].rotation.y += 0.005;

  renderer.render(scene, camera);
}

// Ejecuta animación
renderer.setAnimationLoop(animate);

// Ajusta tamaño al cambiar ventana
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});