"use client";


import {
  useMemo,
  useRef
} from "react";


import {
  useFrame
} from "@react-three/fiber";


import {
  BufferGeometry,
  Float32BufferAttribute,
  Points
} from "three";





export default function SpaceDust(){


const dustRef =
useRef<Points>(null);





const geometry =
useMemo(()=>{


const positions:number[] = [];


const count = 6000;



for(
let i = 0;
i < count;
i++
){


const radius =
Math.random() * 80;


const angle =
Math.random() *
Math.PI *
2;



const x =
Math.cos(angle) *
radius;



const y =
(
Math.random() - 0.5
)
*
50;



const z =
Math.sin(angle) *
radius;



positions.push(
x,
y,
z
);



}




const geo =
new BufferGeometry();



geo.setAttribute(

"position",

new Float32BufferAttribute(

positions,

3

)

);



return geo;



},[]);







useFrame(
({clock})=>{


if(
dustRef.current
){


const time =
clock.getElapsedTime();



dustRef.current.rotation.y =
time *
0.002;



dustRef.current.rotation.x =
Math.sin(
time * 0.1
)
*
0.05;



}


});







return (

<points

ref={dustRef}

geometry={geometry}

>



<pointsMaterial


size={0.02}


color="#94a3b8"


transparent


opacity={0.45}


depthWrite={false}


sizeAttenuation


/>



</points>


);


}