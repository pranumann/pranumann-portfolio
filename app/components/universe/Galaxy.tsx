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





export default function Galaxy() {



const galaxyRef =
useRef<Points>(null);






const geometry =
useMemo(()=>{


const positions:number[] = [];

const colors:number[] = [];



const particleCount = 12000;

const arms = 6;





for(
let i = 0;
i < particleCount;
i++
){



const radius =
Math.random() * 45;



const branch =
(i % arms)
*
(
(Math.PI * 2)
/arms
);



const spin =
radius * 0.35;



const angle =
branch +
spin;



const random =
(
Math.random()
-
0.5
)
*
(radius * 0.15);





const x =
Math.cos(angle)
*
radius
+
random;



const y =
(
Math.random()
-
0.5
)
*
2;



const z =
Math.sin(angle)
*
radius
+
random;



positions.push(
x,
y,
z
);






// Galaxy color gradient

const mix =
radius / 45;



colors.push(

1 - mix * 0.3,

1 - mix * 0.4,

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

colors,

3

)

);





return geo;



},[]);







useFrame(()=>{


if(
galaxyRef.current
){


galaxyRef.current.rotation.y +=
0.0005;



}


});







return (

<points


ref={galaxyRef}


geometry={geometry}


>



<pointsMaterial


size={0.045}


vertexColors


transparent


opacity={0.85}


sizeAttenuation


/>


</points>


);


}