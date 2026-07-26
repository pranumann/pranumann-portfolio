"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Bot,
  Cloud,
  Code2,
  Cpu,
  Database,
  GraduationCap,
  Briefcase,
  Award,
  Rocket,
  Sparkles,
  MapPin,
} from "lucide-react";


const skills = [
  { icon: Brain, label: "AI Agents" },
  { icon: Bot, label: "LLMs" },
  { icon: Cpu, label: "Python" },
  { icon: Code2, label: "Golang" },
  { icon: Database, label: "FastAPI" },
  { icon: Cloud, label: "Docker" },
  { icon: Rocket, label: "Kubernetes" },
  { icon: Sparkles, label: "LangGraph" },
];



export default function HeroRight() {


return (

<div className="relative flex justify-center">



{/* Animated Background Glow */}

<motion.div

animate={{
 scale:[1,1.2,1],
 opacity:[0.4,0.7,0.4]
}}

transition={{
 duration:5,
 repeat:Infinity,
 ease:"easeInOut"
}}

className="
absolute
h-[420px]
w-[420px]
rounded-full
bg-cyan-400/20
blur-[150px]
"

/>





{/* Main Card */}


<motion.div

initial={{
 opacity:0,
 x:80,
 scale:.9
}}

animate={{
 opacity:1,
 x:0,
 scale:1,
 y:[0,-10,0]
}}

transition={{
 duration:.9,
 type:"spring",
 stiffness:80,
 y:{
  duration:5,
  repeat:Infinity,
  ease:"easeInOut"
 }
}}


className="
relative
w-full
max-w-[390px]

rounded-[32px]

border
border-white/10

bg-white/[0.06]

p-6

backdrop-blur-3xl

shadow-[0_30px_90px_rgba(0,0,0,.5)]

"

>



{/* Top Profile */}


<div
className="
flex
flex-col
items-center
text-center
"
>


<motion.div

animate={{
 rotate:[0,5,0,-5,0]
}}

transition={{
duration:6,
repeat:Infinity
}}

className="
flex
h-16
w-16
items-center
justify-center

rounded-full

border
border-cyan-400/30

bg-cyan-400/10

shadow-[0_0_35px_rgba(34,211,238,.4)]

"

>

<Brain
size={32}
className="text-cyan-400"
/>


</motion.div>





<div
className="
mt-4
flex
items-center
gap-2
rounded-full

border
border-green-400/20

bg-green-400/10

px-4
py-2
"
>

<span
className="
h-2
w-2
rounded-full
bg-green-400
animate-pulse
"
/>


<span
className="
text-xs
font-semibold
text-green-400
"
>
Available For Hire
</span>


</div>





<h2
className="
mt-4
text-xl
font-bold
text-white
"
>
Praveen Yadav
</h2>



<p
className="
mt-1
text-xs
uppercase
tracking-[0.25em]
text-cyan-300
"
>
AI Software Engineer
</p>



</div>







<div
className="
my-6
h-px
bg-gradient-to-r
from-transparent
via-cyan-400/30
to-transparent
"
/>







{/* Information Cards */}


<div className="space-y-3">


{[

{
icon:GraduationCap,
title:"Education",
text:"B.Tech CSE"
},

{
icon:Briefcase,
title:"Experience",
text:"AI Engineer Intern"
},

{
icon:Award,
title:"Certification",
text:"Web Development"
},

{
icon:MapPin,
title:"Location",
text:"India"
}


].map((item,index)=>{


const Icon=item.icon;


return(

<motion.div

key={item.title}


initial={{
opacity:0,
y:20
}}

animate={{
opacity:1,
y:0
}}

transition={{
delay:index*.15,
duration:.5
}}


whileHover={{
scale:1.04,
y:-4
}}


className="
flex
flex-col
items-center
justify-center

rounded-2xl

border
border-white/10

bg-white/5

px-4
py-3

text-center

transition

hover:border-cyan-400/40

"

>


<Icon

size={20}

className="
mb-2
text-cyan-400
"

/>


<p
className="
text-[10px]
uppercase
tracking-[0.25em]
text-slate-500
"
>

{item.title}

</p>



<p
className="
mt-1
text-sm
font-semibold
text-white
"
>

{item.text}

</p>



</motion.div>


)


})}


</div>








<div
className="
my-6
h-px
bg-gradient-to-r
from-transparent
via-cyan-400/30
to-transparent
"
/>








{/* Technology */}


<h3
className="
mb-4
text-center

text-xs

font-bold

uppercase

tracking-[0.3em]

text-cyan-300
"
>

Core Technologies

</h3>





<div
className="
grid
grid-cols-2
gap-3
"
>


{skills.map((item,index)=>{


const Icon=item.icon;


return(

<motion.div


key={item.label}


initial={{
opacity:0,
scale:.8
}}


animate={{
opacity:1,
scale:1
}}


transition={{
delay:.5+index*.08
}}


whileHover={{
y:-6,
scale:1.08
}}



className="
flex
flex-col
items-center
justify-center

rounded-xl

border
border-white/10

bg-white/5

py-3

transition

hover:border-cyan-400/50

hover:bg-cyan-400/10

"

>


<Icon

size={18}

className="
mb-2
text-cyan-400
"

/>



<span
className="
text-xs
text-slate-200
"
>
{item.label}
</span>



</motion.div>


)


})}


</div>







{/* Bottom Badge */}


<motion.div


animate={{

boxShadow:[

"0 0 20px rgba(34,211,238,.1)",

"0 0 45px rgba(34,211,238,.35)",

"0 0 20px rgba(34,211,238,.1)"

]

}}


transition={{
duration:3,
repeat:Infinity
}}


className="
mt-6

rounded-2xl

border
border-cyan-400/20

bg-cyan-400/10

px-4

py-3

text-center

"

>


<p

className="
text-xs
font-semibold
text-cyan-300
"

>

Building Production-Grade AI Systems

</p>


</motion.div>



</motion.div>



</div>

);

}