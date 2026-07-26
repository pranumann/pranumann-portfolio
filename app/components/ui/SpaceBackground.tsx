"use client";


import universe from "../universe/Universe";


import {Canvas} from "@react-three/fiber";


export default function Universe(){


return (

<div
className="
fixed
inset-0
z-0
"
>


<Canvas
camera={{
position:[0,0,5]
}}
>


<ambientLight intensity={2}/>



<mesh>


<sphereGeometry
args={[1,32,32]}
/>


<meshStandardMaterial
color="red"
/>


</mesh>



</Canvas>


</div>


);


}