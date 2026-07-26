"use client";

import { motion } from "framer-motion";
import { Star, Sparkles } from "lucide-react";
import RazorpayButton from "./RazorpayButton";


const supportPlans = [
  {
    stars: 1,
    price: 100,
    title: "Good Start",
    description: "Thanks for supporting my work",
  },
  {
    stars: 2,
    price: 300,
    title: "Nice Work",
    description: "Your appreciation means a lot",
  },
  {
    stars: 3,
    price: 500,
    title: "Great Portfolio",
    description: "Thank you for your valuable support",
  },
  {
    stars: 4,
    price: 750,
    title: "Amazing Work",
    description: "Your support motivates me",
  },
  {
    stars: 5,
    price: 960,
    title: "Outstanding 🚀",
    description: "Thank you for believing in my journey",
  },
];


export default function SupportSection() {

  return (

    <section
      id="support"
      className="
        relative
        overflow-hidden
        px-6
        py-32
      "
    >


      <div
        className="
          mx-auto
          flex
          max-w-7xl
          flex-col
          items-center
        "
      >


        {/* Heading */}

        <motion.div

          initial={{
            opacity:0,
            y:30,
          }}

          whileInView={{
            opacity:1,
            y:0,
          }}

          transition={{
            duration:.6,
          }}

          viewport={{
            once:true,
          }}

          className="
            max-w-4xl
            text-center
          "
        >


          <div
            className="
              flex
              items-center
              justify-center
              gap-3
            "
          >

            <Sparkles
              className="
                text-yellow-400
              "
              size={30}
            />


            <h2
              className="
                text-4xl
                font-black
                text-white
                md:text-5xl
              "
            >
              Support My Journey
            </h2>


          </div>



          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-center
              text-lg
              leading-8
              text-slate-400
            "
          >
            If you like my portfolio and my work, you can appreciate my
            effort by giving a star rating.
          </p>



        </motion.div>




        {/* Support Cards */}

        <div
          className="
            mt-16
            grid
            w-full
            gap-8
            sm:grid-cols-2
            lg:grid-cols-5
            place-items-center
          "
        >


          {supportPlans.map((plan,index)=>(


            <motion.div

              key={plan.stars}

              initial={{
                opacity:0,
                scale:.8,
              }}

              whileInView={{
                opacity:1,
                scale:1,
              }}

              transition={{
                duration:.4,
                delay:index*.1,
              }}

              viewport={{
                once:true,
              }}

              whileHover={{
                y:-10,
                scale:1.05,
              }}


              className="
                group
                flex
                min-h-[300px]
                w-full
                max-w-[240px]
                flex-col
                items-center
                justify-center
                rounded-[32px]
                border
                border-white/10
                bg-transparent
                p-6
                text-center
                backdrop-blur-sm
                transition-all
                duration-500
                hover:border-yellow-400/50
                hover:bg-white/5
              "
            >



              {/* Stars */}

              <div
                className="
                  flex
                  justify-center
                  gap-1
                "
              >

                {[...Array(plan.stars)].map((_,i)=>(

                  <Star

                    key={i}

                    size={22}

                    className="
                      fill-yellow-400
                      text-yellow-400
                    "

                  />

                ))}

              </div>




              {/* Price */}

              <h3
                className="
                  mt-6
                  text-3xl
                  font-black
                  text-white
                "
              >
                ₹{plan.price}
              </h3>




              {/* Title */}

              <h4
                className="
                  mt-3
                  font-bold
                  text-yellow-400
                "
              >
                {plan.title}
              </h4>




              {/* Description */}

              <p
                className="
                  mt-4
                  text-sm
                  leading-6
                  text-slate-400
                "
              >
                {plan.description}
              </p>




              {/* Payment Button */}

              <div
                className="
                  mt-6
                  w-full
                "
              >

                <RazorpayButton
                  amount={plan.price}
                />

              </div>




            </motion.div>


          ))}


        </div>


      </div>


    </section>

  );
}