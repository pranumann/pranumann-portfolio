"use client";

import { motion } from "framer-motion";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative mx-auto max-w-7xl px-6 py-32 md:py-36"
    >

      <div className="flex flex-col items-center">


        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 70,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            mx-auto
            max-w-5xl
            text-center
          "
        >

          <p
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[8px]
              text-cyan-400
            "
          >
            Contact
          </p>


          <h2
            className="
              mt-5
              text-center
              text-5xl
              font-black
              text-white
              md:text-7xl
            "
          >
            Let's Work

            <span className="text-cyan-400">
              {" "}Together.
            </span>

          </h2>


          <p
            className="
              mx-auto
              mt-8
              max-w-3xl
              text-center
              text-lg
              leading-8
              text-slate-400
            "
          >
            Have an idea, AI project, freelance work or collaboration?
            Feel free to contact me. I usually reply within 24 hours.
          </p>


        </motion.div>



        {/* Content */}

        <div
          className="
            mt-24
            grid
            w-full
            max-w-6xl
            place-items-center
            gap-10
            lg:grid-cols-2
          "
        >

          {/* Contact Info */}

          <motion.div
            initial={{
              opacity: 0,
              x: -70,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="
              flex
              w-full
              justify-center
            "
          >
            <ContactInfo />
          </motion.div>



          {/* Contact Form */}

          <motion.div
            initial={{
              opacity: 0,
              x: 70,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="
              flex
              w-full
              justify-center
            "
          >
            <ContactForm />
          </motion.div>


        </div>


      </div>

    </section>
  );
}