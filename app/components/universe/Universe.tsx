"use client";


import {
  Canvas
} from "@react-three/fiber";


import {
  Suspense
} from "react";


import Stars from "./Stars";

import Galaxy from "./Galaxy";

import Nebula from "./Nebula";

import SpaceDust from "./SpaceDust";

import SolarSystem from "./SolarSystem";

import Asteroids from "./Asteroids";

import ShootingStars from "./ShootingStars";

import CameraRig from "./CameraRig";

import Lights from "./Lights";





export default function Universe(){


return (

<div
className="
fixed
inset-0
z-0
h-screen
w-screen
overflow-hidden
"
>


<Canvas

dpr={[1,2]}

camera={{

position:[
0,
3,
14
],

fov:55

}}


gl={{

antialias:true,

alpha:true

}}


>



<Suspense fallback={null}>


{/* Lighting System */}

<Lights/>




{/* Deep Space */}

<Stars/>

<Galaxy/>

<Nebula/>

<SpaceDust/>





{/* Solar System */}

<SolarSystem/>





{/* Space Objects */}

<Asteroids/>

<ShootingStars/>





{/* Camera Movement */}

<CameraRig/>


</Suspense>



</Canvas>


</div>


);


}