"use client";


import {
  useRef
} from "react";


import {
  useFrame
} from "@react-three/fiber";


import {
  Mesh,
  AdditiveBlending
} from "three";



type PlanetProps = {

size:number;

distance:number;

speed:number;

rotationSpeed:number;

color:string;

ring?:boolean;

atmosphere?:boolean;

};





export default function Planet({

size,

distance,

speed,

rotationSpeed,

color,

ring,

atmosphere


}:PlanetProps){



const planetRef =
useRef<Mesh>(null);



const atmosphereRef =
useRef<Mesh>(null);



const angle =
useRef(
Math.random()
*
Math.PI
*
2
);





useFrame(({clock})=>{


const time =
clock.getElapsedTime();



/*
  Planet orbit movement
*/

if(planetRef.current){


const orbitTime =
time *
speed *
0.25;



planetRef.current.position.x =
Math.cos(
orbitTime +
angle.current
)
*
distance;



planetRef.current.position.z =
Math.sin(
orbitTime +
angle.current
)
*
distance;



/*
  Self rotation
*/

planetRef.current.rotation.y +=
rotationSpeed;


}




/*
 Earth atmosphere breathing effect
*/

if(atmosphereRef.current){


const scale =
1.05 +
Math.sin(time*2)
*
0.02;


atmosphereRef.current.scale.set(
scale,
scale,
scale
);


}


});






return (

<group>





{/* Planet Atmosphere Glow */}

{

atmosphere &&


<mesh

ref={atmosphereRef}

>

<sphereGeometry

args={[
size*1.15,
64,
64
]}

/>


<meshBasicMaterial

color="#38bdf8"

transparent

opacity={0.18}

blending={
AdditiveBlending
}


/>


</mesh>


}






{/* Main Planet */}


<mesh

ref={planetRef}

>


<sphereGeometry

args={[
size,
64,
64
]}

/>



<meshStandardMaterial

color={color}

roughness={0.8}

metalness={0.1}


/>


</mesh>








{/* Planet Rings */}


{

ring &&


<mesh

rotation={[
Math.PI/2,
0,
0
]}

position={[
0,
0,
0
]}

>


<ringGeometry

args={[

size*1.4,

size*2.2,

96

]}

/>



<meshStandardMaterial

color="#d6b48c"

transparent

opacity={0.65}


/>



</mesh>


}



</group>

);


}