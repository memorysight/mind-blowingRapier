// // import {useLoader} from '@react-three/fiber';
// import {useEffect, useRef} from 'react';
// import {BufferAttribute, Color} from 'three';
// // import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
// import { RigidBody, RapierRigidBody } from "@react-three/rapier";

// export function MotionShape(){

//     // const gltf = useLoader(GLTFLoader, process.env.PUBLIC_URL + "models/virus1.glb");

//     // useEffect(()=>{
//     //     if(gltf) return;

//     //     let mesh = gltf.scene.childeren[0];
//     //     var uvs = mesh.geometry.attribute.uv.array;
//     //     mesh.geometry.setAttribute('uv2', new BufferAttribute(uvs, 2));

//     //     mesh.material.lightMap = mesh.material.map;
//     //     mesh.material.lightMapIntensity = 400;
//     //     mesh.material.color = new Color(0.04, 0.06, 0.1);
//     // }, [gltf]);



//     ////////////////////////////


//     const rigidBody = useRef<RapierRigidBody>(null);

//     useEffect(() => {
//       if (rigidBody.current) {
//         // A one-off "push"
//         rigidBody.current.applyImpulse({ x: 0, y: 10, z: 0 }, true);
  
//         // A continuous force
//         rigidBody.current.addForce({ x: 0, y: 10, z: 0 }, true);
  
//         // A one-off torque rotation
//         rigidBody.current.applyTorqueImpulse({ x: 0, y: 10, z: 0 }, true);
  
//         // A continuous torque
//         rigidBody.current.addTorque({ x: 0, y: 10, z: 0 }, true);
//       }
//     }, []);




//     return(

//             <>
//         <RigidBody ref={rigidBody}>
//         <mesh>
//           <boxBufferGeometry />
//           <meshStandardMaterial />
//         </mesh>
//       </RigidBody>
      


       
//         {/* <primitive object={gltf.scene}/> */}

//       </> 
//     )


// }