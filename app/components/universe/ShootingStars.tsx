"use client";


import {
  useMemo,
  useRef
} from "react";


import {
  useFrame
} from "@react-three/fiber";


import {
  AdditiveBlending,
  Vector3
} from "three";





type StarData = {

start:Vector3;

end:Vector3;

speed:number;

};






export default function ShootingStars(){



const starsRef =
useRef<any>(null);





const shootingStars =
useMemo<StarData[]>(()=>{


const data:StarData[]=[];


const count=20;



for(
let i=0;
i<count;
i++
){



data.push({


start:
new Vector3(

(Math.random()-0.5)*40,

Math.random()*15,

-20-Math.random()*30

),



end:
new Vector3(

(Math.random()-0.5)*40,

Math.random()*5,

20

),



speed:

0.5+
Math.random()*2



});



}



return data;



},[]);






useFrame(
({clock})=>{


const time =
clock.getElapsedTime();



if(
starsRef.current
){


starsRef.current.children.forEach(
(
child:any,
index:number
)=>{


const star =
shootingStars[index];



const progress =
(
time *
star.speed
)
%
5
/
5;




child.position.lerpVectors(

star.start,

star.end,

progress


);



}


);


}



});







return (

<group

ref={starsRef}

>


{

shootingStars.map(
(_,index)=>(


<mesh

key={index}

>



<sphereGeometry

args={[
0.03,
8,
8
]}


/>



<meshBasicMaterial


color="#ffffff"


transparent


opacity={0.9}


blending={
AdditiveBlending
}



/>



</mesh>


)

)


}



</group>


);


}