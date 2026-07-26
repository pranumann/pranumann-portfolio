"use client";


import {
  useMemo,
  useRef
} from "react";


import {
  useFrame
} from "@react-three/fiber";





export default function Asteroids(){


const asteroidGroup =
useRef<any>(null);







const asteroids =
useMemo(()=>{


const data:any[] = [];


const count = 600;



for(
let i = 0;
i < count;
i++
){



const angle =
Math.random()
*
Math.PI
*
2;




// Asteroid belt
// Mars - Jupiter area

const radius =
6 +
Math.random()
*
2.5;



const height =
(
Math.random()
-
0.5
)
*
0.8;





data.push({


position:[

Math.cos(angle)
*
radius,


height,


Math.sin(angle)
*
radius


],



scale:

0.03 +
Math.random()
*
0.08,



rotation:[

Math.random()
*
Math.PI,


Math.random()
*
Math.PI,


Math.random()
*
Math.PI

]


});



}



return data;



},[]);








useFrame(()=>{


if(
asteroidGroup.current
){


asteroidGroup.current.rotation.y +=
0.0007;



}


});







return (

<group

ref={asteroidGroup}

>



{

asteroids.map(
(asteroid,index)=>(



<mesh


key={index}


position={
asteroid.position
}


scale={
asteroid.scale
}


rotation={
asteroid.rotation
}


>



<icosahedronGeometry

args={[
1,
1
]}


/>



<meshStandardMaterial


color="#78716c"


roughness={1}


metalness={0.1}


/>



</mesh>



)


)


}



</group>


);


}