"use client";


import Sun from "./Sun";

import Planets from "./Planets";





export default function SolarSystem(){



return (

<group>



{/* 
    Central Star
    Main source of solar light
*/}


<Sun/>





{/* 
    Complete Planet System
*/}


<Planets/>




</group>


);


}