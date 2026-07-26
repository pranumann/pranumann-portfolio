"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";


const contacts = [
  {
    icon: Mail,
    title: "Email",
    value: "monarchpraveen@email.com",
    href: "mailto:monarchpraveen@email.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 6299121574",
    href: "tel:+916299121574",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "India",
    href: "#",
  },
];


const socials = [
  {
    name: "GitHub",
    icon: FaGithub,
    href: "https://github.com/pranumann",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    href: "https://linkedin.com/in/pranumann",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    href: "https://instagram.com/pranumann",
  },
];


export default function ContactInfo() {
  return (

    <div
      className="
        flex
        w-full
        max-w-xl
        flex-col
        items-center
        space-y-8
      "
    >


      {contacts.map((item) => {

        const Icon = item.icon;

        return (

          <motion.a
            key={item.title}
            href={item.href}

            whileHover={{
              y:-6,
              scale:1.02,
            }}

            transition={{
              duration:.3,
            }}

            className="
              group
              flex
              w-full
              flex-col
              items-center
              justify-center
              rounded-[32px]
              border
              border-white/10
              bg-transparent
              p-7
              text-center
              backdrop-blur-sm
              transition-all
              duration-500
              hover:border-cyan-400/40
              hover:bg-white/5
            "
          >


            {/* Icon */}

            <div
              className="
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                bg-cyan-400/10
              "
            >

              <Icon
                size={28}
                className="text-cyan-400"
              />

            </div>



            {/* Text */}

            <div className="mt-5">

              <p
                className="
                  text-sm
                  text-slate-400
                "
              >
                {item.title}
              </p>


              <h3
                className="
                  mt-2
                  text-lg
                  font-semibold
                  text-white
                "
              >
                {item.value}
              </h3>


            </div>


          </motion.a>

        );

      })}




      {/* Social Icons */}

      <div
        className="
          flex
          justify-center
          gap-5
          pt-6
        "
      >

        {socials.map((social)=>{

          const Icon = social.icon;


          return (

            <motion.a

              key={social.name}

              href={social.href}

              target="_blank"

              rel="noopener noreferrer"


              whileHover={{
                y:-8,
                scale:1.1,
              }}


              transition={{
                duration:.25,
              }}


              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                border
                border-white/10
                bg-transparent
                text-white
                backdrop-blur-sm
                transition-all
                duration-300
                hover:border-cyan-400
                hover:text-cyan-400
              "
            >

              <Icon size={24}/>

            </motion.a>

          );

        })}


      </div>


    </div>

  );
}