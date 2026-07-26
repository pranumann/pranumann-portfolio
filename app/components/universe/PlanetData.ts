export type PlanetType = {

name:string;

size:number;

distance:number;

speed:number;

rotationSpeed:number;

color:string;

emissive?:string;

ring?:boolean;

atmosphere?:boolean;

};



export const planets:PlanetType[] = [



{
name:"Mercury",

size:0.18,

distance:2.2,

speed:2.8,

rotationSpeed:0.02,

color:"#9ca3af"

},



{
name:"Venus",

size:0.28,

distance:3.2,

speed:2.2,

rotationSpeed:0.015,

color:"#eab308"

},




{
name:"Earth",

size:0.32,

distance:4.3,

speed:1.8,

rotationSpeed:0.03,

color:"#2563eb",

atmosphere:true

},




{
name:"Mars",

size:0.26,

distance:5.4,

speed:1.4,

rotationSpeed:0.025,

color:"#ef4444"

},




{
name:"Jupiter",

size:0.75,

distance:7,

speed:0.9,

rotationSpeed:0.05,

color:"#d6b48c"

},





{
name:"Saturn",

size:0.62,

distance:9,

speed:0.7,

rotationSpeed:0.04,

color:"#e5c07b",

ring:true

},




{
name:"Uranus",

size:0.45,

distance:11,

speed:0.5,

rotationSpeed:0.035,

color:"#67e8f9",

ring:true

},





{
name:"Neptune",

size:0.43,

distance:13,

speed:0.35,

rotationSpeed:0.04,

color:"#2563eb"

}



];