"use client";


import Planet from "./Planet";

import Orbit from "./Orbit";

import {
  planets
} from "./PlanetData";





export default function Planets(){



return (

<group>


{

planets.map((planet)=>(


<group

key={
planet.name
}

>



{/* Planet Orbit Path */}

<Orbit

radius={
planet.distance
}

/>





{/* Planet Object */}

<Planet

size={
planet.size
}

distance={
planet.distance
}

speed={
planet.speed
}

rotationSpeed={
planet.rotationSpeed
}

color={
planet.color
}

ring={
planet.ring
}

atmosphere={
planet.atmosphere
}


/>



</group>


))


}



</group>


);


}