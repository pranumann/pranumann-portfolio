"use client";


export default function Lights() {


return (

<>


{/* 
  Deep Space Ambient Light
  Keeps planets visible in dark universe
*/}

<ambientLight

intensity={0.35}

/>



{/* 
  Main Sun Light
  Creates realistic solar illumination
*/}

<pointLight

position={[
0,
0,
0
]}

intensity={12}

distance={150}

decay={2}

color="#ffb347"

/>




{/* 
  Blue Galaxy Reflection Light
*/}

<pointLight

position={[
-15,
8,
-20
]}

intensity={3}

distance={80}

color="#2563eb"

/>




{/* 
  Purple Nebula Glow
*/}

<pointLight

position={[
15,
-10,
-15
]}

intensity={2.5}

distance={100}

color="#9333ea"

/>




{/* 
  Soft White Space Fill
*/}

<directionalLight

position={[
5,
10,
5
]}

intensity={1.5}


/>



</>

);


}