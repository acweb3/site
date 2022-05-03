// import ethereum from "";
import * as S from "components/Waves/Waves.styled";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

let dummyCamera,
	camera,
	gridCamera,
	scene,
	dummyScene,
	gridScene,
	renderer,
	zmesh1,
	zmesh2;
let rtTexture, quad;
let uniforms;
var mouseX = 0,
	mouseY = 0;

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

function init(container, gltfPath) {
	camera = new THREE.PerspectiveCamera(
		80,
		window.innerWidth / window.innerHeight,
		1,
		10000
	);
	camera.position.z = 500;
	camera.position.y = 10;
	dummyCamera = new THREE.OrthographicCamera(
		window.innerWidth / -2,
		window.innerWidth / 2,
		window.innerHeight / 2,
		window.innerHeight / -2,
		-10000,
		10000
	);
	dummyCamera.position.z = 1;

	gridCamera = new THREE.PerspectiveCamera(
		80,
		window.innerWidth / window.innerHeight,
		1,
		10000
	);
	gridCamera.position.z = 500;
	gridCamera.position.y = 300;

	scene = new THREE.Scene();
	dummyScene = new THREE.Scene();
	gridScene = new THREE.Scene();

	rtTexture = new THREE.WebGLRenderTarget(
		window.innerWidth / 4, //resolution x
		window.innerHeight / 4, //resolution y
		{
			minFilter: THREE.LinearFilter,
			magFilter: THREE.NearestFilter,
			format: THREE.RGBFormat,
		}
	);

	var materialScreen = new THREE.ShaderMaterial({
		uniforms: { tDiffuse: { value: rtTexture.texture } },
		vertexShader: `
			varying vec2 vUv;

			void main() {

				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			}
		`,
		fragmentShader: `
			varying vec2 vUv;
			uniform sampler2D tDiffuse;

			void main() {

				gl_FragColor = texture2D( tDiffuse, vUv );

			}
		`,
		depthWrite: false,
	});

	var plane = new THREE.PlaneGeometry(window.innerWidth, window.innerHeight);
	// plane to display rendered texture
	quad = new THREE.Mesh(plane, materialScreen);
	quad.position.z = -100;
	dummyScene.add(quad);

	// var geometry = new THREE.PlaneGeometry(100, 100);

	// var mat1 = new THREE.MeshBasicMaterial({ color: 0x0000ff });

	// zmesh2 = new THREE.Mesh(geometry, mat1);
	// zmesh2.position.set(0, 0, 20);
	// zmesh2.scale.set(1.5, 1.5, 1.5);
	// dummyScene.add(zmesh2);

	const gridHelper = new THREE.GridHelper(1000, 10);
	gridHelper.material.color.setHex(0x000000);
	console.log({ gridHelper });
	gridScene.add(gridHelper);

	var light = new THREE.AmbientLight(0x000000);
	// const light = new THREE.PointLight(0x000000, 200, 1000);
	scene.add(light);

	renderer = new THREE.WebGLRenderer();
	//				renderer.setPixelRatio( 0.2 );
	renderer.setClearColor(0xffffff);
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.autoClear = false;

	const loader = new GLTFLoader();

	loader.load(
		"https://3d-demo-f50fc543-45bc-4f12-9b47-08c140c30e11.s3.amazonaws.com/ethereum_coin/scene.gltf",
		function (gltf) {
			gltf.scene.scale.set(100, 100, 100);
			gltf.scene.position.set(0, 100, 0);
			gltf.scene.traverse((child) => {
				if (child.material) {
					child.material.color.setHex(0x000000);
				}
			});
			gltf.scene.rotation.x = 0;

			zmesh1 = gltf.scene;
			scene.add(gltf.scene);
		},
		(...progress) => {
			console.log(progress);
		},
		function (...error) {
			console.error(error);
		}
	);

	// loader.load(
	// 	"https://3d-demo-f50fc543-45bc-4f12-9b47-08c140c30e11.s3.amazonaws.com/discord_logo/scene.gltf",
	// 	function (gltf) {
	// 		gltf.scene.scale.set(1000, 1000, 1000);
	// 		gltf.scene.position.set(-100, 100, 0);
	// 		// gltf.scene.traverse((child) => {
	// 		// 	if (child.material) {
	// 		// 		child.material.color.setHex(0x000000);
	// 		// 	}
	// 		// });
	// 		// gltf.scene.rotation.x = 0;

	// 		console.log({
	// 			gltf,
	// 		});

	// 		scene.add(gltf.scene);
	// 	},
	// 	(...progress) => {
	// 		console.log(progress);
	// 	},
	// 	function (...error) {
	// 		console.error(error);
	// 	}
	// )

	container.appendChild(renderer.domElement);

	document.addEventListener("mousemove", onDocumentMouseMove, false);
}

function onDocumentMouseMove(event) {
	mouseX = event.clientX - windowHalfX;
	mouseY = event.clientY - windowHalfY;
}

function animate() {
	requestAnimationFrame(animate);
	render();
}

const render = () => {
	// camera.position.x += (mouseX - camera.position.x) * 0.05;
	// camera.position.y += (-mouseY - camera.position.y) * 0.05;
	// camera.lookAt(scene.position);
	if (zmesh1) {
		zmesh1.position.y = 0 + Math.sin(Date.now() * 0.0012) * Math.PI * 4;
	}

	// Render first scene into texture
	renderer.setRenderTarget(rtTexture);
	renderer.clear();
	renderer.render(scene, camera);
	// Render full screen quad with generated texture
	renderer.setRenderTarget(null);
	renderer.clear();
	renderer.render(dummyScene, dummyCamera);

	// Render full screen quad with generated texture
	renderer.setRenderTarget(null);
	renderer.render(gridScene, gridCamera);
};

export const Waves = ({ gltfPath }) => {
	const [refState, setRefState] = useState(undefined);
	const hasSetRefState = useRef(false);
	const hasMountedRefState = useRef(false);

	useEffect(
		() => {
			if (refState && !hasMountedRefState.current) {
				hasMountedRefState.current = true;
				// init(refState, gltfPath);
				// animate();
			}
		},
		[refState],
		gltfPath
	);

	return (
		<S.Waves>
			<div
				ref={(ref) => {
					if (!hasSetRefState.current) {
						hasSetRefState.current = true;
						setRefState(ref);
					}
				}}
			></div>
		</S.Waves>
	);
};
