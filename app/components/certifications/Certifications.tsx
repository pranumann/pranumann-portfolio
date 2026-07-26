"use client";

import { motion } from "framer-motion";
import CertificationCard from "./CertificationCard";
import { certificationsData } from "./certificationsData";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative py-32 md:py-36"
    >

      <div className="mx-auto flex max-w-7xl flex-col items-center px-6">

        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            mx-auto
            flex
            max-w-5xl
            flex-col
            items-center
            text-center
          "
        >

          {/* Badge */}

          <span
            className="
              inline-flex
              rounded-full
              border
              border-cyan-400/20
              bg-white/5
              px-6
              py-3
              text-xs
              font-semibold
              uppercase
              tracking-[0.35em]
              text-cyan-300
              backdrop-blur-md
            "
          >
            CERTIFICATIONS
          </span>


          {/* Title */}

          <h2
            className="
              mt-10
              text-center
              text-4xl
              font-black
              text-white
              sm:text-5xl
              lg:text-6xl
            "
          >
            Professional

            <span
              className="
                bg-gradient-to-r
                from-cyan-400
                via-sky-300
                to-blue-500
                bg-clip-text
                text-transparent
              "
            >
              {" "}Certifications
            </span>

          </h2>


          {/* Description */}

          <p
            className="
              mx-auto
              mt-8
              max-w-3xl
              text-center
              text-[17px]
              leading-9
              text-slate-400
            "
          >
            Continuous learning through professional certifications in
            Artificial Intelligence, Backend Development, Cloud Computing,
            DevOps and modern software engineering.
          </p>


        </motion.div>



        {/* Certificates */}

        <div
          className="
            mt-20
            grid
            w-full
            place-items-center
            gap-8
            md:grid-cols-2
            xl:grid-cols-3
          "
        >

          {certificationsData.map((item, index) => (

            <motion.div
              key={`${item.title}-${item.year}`}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.06,
              }}
              className="
                flex
                w-full
                justify-center
              "
            >

              <CertificationCard
                title={item.title}
                issuer={item.issuer}
                year={item.year}
                credential={item.credential}
                link={item.link}
              />

            </motion.div>

          ))}

        </div>


      </div>

    </section>
  );
}