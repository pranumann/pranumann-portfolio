"use client";

import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";
import { useState } from "react";

export default function ContactForm() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });


  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {

    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

  };


  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    setLoading(true);
    setStatus("");


    try {

      const response = await fetch(
        "/api/contact",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(form),
        }
      );


      const data = await response.json();


      if(data.success){

        setStatus(
          "Message sent successfully 🚀"
        );


        setForm({
          name:"",
          email:"",
          subject:"",
          message:"",
        });


      }else{

        setStatus(
          "Failed to send message ❌"
        );

      }


    } catch(error){

      console.error(error);

      setStatus(
        "Something went wrong ❌"
      );


    } finally {

      setLoading(false);

    }

  };



  return (

    <motion.form

      onSubmit={handleSubmit}

      initial={{
        opacity:0,
        y:50,
      }}

      whileInView={{
        opacity:1,
        y:0,
      }}

      viewport={{
        once:true,
      }}

      transition={{
        duration:.6,
      }}


      className="
      group
      w-full
      max-w-xl
      rounded-[32px]
      border
      border-white/10
      bg-transparent
      p-8
      backdrop-blur-sm
      transition-all
      duration-500
      hover:border-cyan-400/40
      hover:bg-white/5
      "

    >


      <div className="space-y-6">


        <input

          name="name"
          value={form.name}
          onChange={handleChange}
          required

          placeholder="Your Name"

          className="
          w-full
          rounded-2xl
          border
          border-white/10
          bg-white/[0.03]
          px-5
          py-4
          text-white
          placeholder:text-slate-500
          outline-none
          transition
          focus:border-cyan-400
          "

        />



        <input

          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required

          placeholder="Email Address"

          className="
          w-full
          rounded-2xl
          border
          border-white/10
          bg-white/[0.03]
          px-5
          py-4
          text-white
          placeholder:text-slate-500
          outline-none
          transition
          focus:border-cyan-400
          "

        />



        <input

          name="subject"
          value={form.subject}
          onChange={handleChange}
          required

          placeholder="Subject"

          className="
          w-full
          rounded-2xl
          border
          border-white/10
          bg-white/[0.03]
          px-5
          py-4
          text-white
          placeholder:text-slate-500
          outline-none
          transition
          focus:border-cyan-400
          "

        />



        <textarea

          name="message"

          rows={6}

          value={form.message}

          onChange={handleChange}

          required

          placeholder="Write your message..."

          className="
          w-full
          resize-none
          rounded-2xl
          border
          border-white/10
          bg-white/[0.03]
          px-5
          py-4
          text-white
          placeholder:text-slate-500
          outline-none
          transition
          focus:border-cyan-400
          "

        />



        <button

          type="submit"

          disabled={loading}

          className="
          flex
          w-full
          items-center
          justify-center
          gap-3
          rounded-2xl
          bg-gradient-to-r
          from-cyan-400
          via-sky-400
          to-blue-500
          py-4
          font-bold
          text-slate-950
          shadow-[0_10px_40px_rgba(34,211,238,.25)]
          transition
          hover:scale-[1.03]
          disabled:opacity-60
          "

        >

          {
            loading ? (
              <>
                <Loader2 
                  size={20}
                  className="animate-spin"
                />
                Sending...
              </>
            )
            :
            (
              <>
                <Send size={20}/>
                Send Message
              </>
            )
          }


        </button>



        {
          status && (

            <p
              className="
              text-center
              text-sm
              text-cyan-300
              "
            >
              {status}
            </p>

          )
        }



      </div>


    </motion.form>

  );
}