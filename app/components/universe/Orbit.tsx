"use client";


import {
  useMemo
} from "react";


import {
  Line
} from "@react-three/drei";




type OrbitProps = {

radius:number;

};





export default function Orbit({
radius
}:OrbitProps){



const points =
useMemo(()=>{


const orbitPoints:any[] = [];


const segments = 128;



for(
let i=0;
i<=segments;
i++
){


const angle =
(i / segments)
*
Math.PI
*
2;



orbitPoints.push([

Math.cos(angle)
*
radius,


0,


Math.sin(angle)
*
radius


]);


}



return orbitPoints;



},[
radius
]);





return (

<Line

points={points}

color="#334155"

lineWidth={0.6}

transparent

opacity={0.45}


/>

);


}