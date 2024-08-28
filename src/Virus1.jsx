import {useLoader, useFrame} from '@react-three/fiber';
import {useEffect} from 'react';
import {BufferAttribute, Color} from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { useAnimations } from '@react-three/drei';
import { AnimationMixer } from 'three';

export function Virus1(){

    const gltf = useLoader(GLTFLoader, process.env.PUBLIC_URL + "models/ZoeTwerk.glb");
    // const{actions} = useAnimations(gltf.animations, gltf.scene);

    // useEffect(()=>{
    //     actions.play();
    // }, [

    let mixer = null;
    useEffect(() => {
        const model = gltf.scene;
        const animations = gltf.animations;
    
        if (model && animations && mixer === null) {
          mixer = new AnimationMixer(model);
    
          const action = mixer.clipAction(animations[0]);
          action.play();
 
        }
    }, [gltf]);

    useFrame((_, delta) => {
        if (mixer) {
          mixer.update(delta);
        }
      });

    console.log(gltf);
    useEffect(()=>{
        if(gltf) return;

        let mesh = gltf.scene.childeren[0];
        var uvs = mesh.geometry.attribute.uv.array;
        mesh.geometry.setAttribute('uv2', new BufferAttribute(uvs, 2));

        
        mesh.material.lightMap = mesh.material.map;
        mesh.material.lightMapIntensity = 400;
        mesh.material.color = new Color(0.04, 0.06, 0.1);
    }, [gltf]);



    return(

       
        <primitive object={gltf.scene}/>

       
    )


}