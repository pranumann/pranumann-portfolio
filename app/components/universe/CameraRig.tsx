"use client";

import { OrbitControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";


export default function CameraRig() {

  const { camera } = useThree();


  const mouse = useRef({
    x: 0,
    y: 0,
  });


  const target = useRef({
    x: 0,
    y: 2,
  });



  useEffect(() => {

    const handleMouseMove = (event: MouseEvent) => {

      mouse.current.x =
        (event.clientX / window.innerWidth - 0.5);


      mouse.current.y =
        (event.clientY / window.innerHeight - 0.5);

    };


    window.addEventListener(
      "mousemove",
      handleMouseMove
    );


    return () => {

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

    };


  }, []);




  useFrame(() => {


    // Smooth mouse parallax
    target.current.x =
      mouse.current.x * 2;


    target.current.y =
      2 - mouse.current.y * 1.5;



    camera.position.x +=
      (
        target.current.x -
        camera.position.x
      ) * 0.025;



    camera.position.y +=
      (
        target.current.y -
        camera.position.y
      ) * 0.025;



    // Slight depth movement
    camera.position.z +=
      (
        10 -
        camera.position.z
      ) * 0.02;



    camera.lookAt(
      new THREE.Vector3(
        0,
        0,
        0
      )
    );


  });




  return (

    <OrbitControls

      enableZoom={false}

      enablePan={false}

      enableRotate={false}

      autoRotate={false}

      enableDamping

      dampingFactor={0.08}

    />

  );

}