"use client";


import {
  useRef
} from "react";


import {
  useFrame
} from "@react-three/fiber";


import {
  Sphere,
  MeshDistortMaterial,
  PointMaterial
} from "@react-three/drei";


import {
  AdditiveBlending,
  Mesh
} from "three";




export default function Sun(){


const sunRef =
useRef<Mesh>(null);


const coronaRef =
useRef<Mesh>(null);





useFrame(({clock})=>{


const time =
clock.getElapsedTime();




if(sunRef.current){


sunRef.current.rotation.y =
time * 0.15;


}




if(coronaRef.current){


coronaRef.current.scale.x =
1 +
Math.sin(time * 2)
*
0.03;


coronaRef.current.scale.y =
1 +
Math.cos(time * 2)
*
0.03;


}



});





return (

<group>





{/* 
    Solar Corona Glow
*/}


<mesh
ref={coronaRef}
>


<sphereGeometry

args={[
1.35,
64,
64
]}

/>


<meshBasicMaterial

color="#ff8c00"

transparent

opacity={0.18}

blending={
AdditiveBlending
}


/>


</mesh>





{/* 
    Main Sun Body
*/}



<Sphere

ref={sunRef}

args={[
1,
128,
128
]}


>


<MeshDistortMaterial


color="#ffaa33"


emissive="#ff6600"


emissiveIntensity={4}


roughness={0.5}


metalness={0.1}


distort={0.25}


speed={2}


/>


</Sphere>






{/* 
    Extra Solar Glow Layers
*/}



<pointLight

intensity={15}

distance={80}

color="#ff9900"


/>





<mesh>


<sphereGeometry

args={[
1.7,
32,
32
]}


/>


<meshBasicMaterial


color="#ffcc66"


transparent


opacity={0.05}


blending={
AdditiveBlending
}


/>


</mesh>



</group>


);


}