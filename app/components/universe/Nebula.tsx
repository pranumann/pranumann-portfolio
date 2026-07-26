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
  Points,
  AdditiveBlending
} from "three";





export default function Nebula(){


const nebulaRef =
useRef<Points>(null);





const {
  geometry,
  colors
} = useMemo(()=>{


const positions:number[] = [];

const colorArray:number[] = [];


const count = 2500;



for(
let i = 0;
i < count;
i++
){



const radius =
Math.random() * 12;



const angle =
Math.random()
*
Math.PI
*
2;




const x =
Math.cos(angle)
*
radius;



const y =
(
Math.random()
-
0.5
)
*
6;



const z =
Math.sin(angle)
*
radius
-
10;



positions.push(
x,
y,
z
);






// Purple + Blue cosmic color

const mix =
Math.random();



colorArray.push(

0.5 + mix * 0.3,

0.2 + mix * 0.4,

1

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




geo.setAttribute(

"color",

new Float32BufferAttribute(

colorArray,

3

)

);





return {


geometry:geo,

colors:
new Float32Array(
colorArray
)


};



},[]);








useFrame(()=>{


if(
nebulaRef.current
){


nebulaRef.current.rotation.y +=
0.0008;



nebulaRef.current.rotation.x +=
0.0002;



}



});







return (

<points


ref={nebulaRef}


geometry={geometry}


>



<pointsMaterial


size={0.08}


vertexColors


transparent


opacity={0.35}


blending={
AdditiveBlending
}


depthWrite={false}


sizeAttenuation



/>



</points>


);


}