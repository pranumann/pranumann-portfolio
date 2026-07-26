"use client";


import {
  Stars as DreiStars
} from "@react-three/drei";





export default function Stars(){


return (

<DreiStars


// Space sphere size

radius={80}


// Depth distribution

depth={60}


// Number of stars

count={12000}


// Star size

factor={5}


// White natural stars

saturation={0}


// Smooth fade effect

fade={true}


// Slow movement

speed={0.25}


/>


);


}