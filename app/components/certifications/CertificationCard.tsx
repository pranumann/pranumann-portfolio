"use client";

import { motion } from "framer-motion";
import {
  Award,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";

type Props = {
  title: string;
  issuer: string;
  year: string;
  credential: string;
  link: string;
};

export default function CertificationCard({
  title,
  issuer,
  year,
  credential,
  link,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        group
        relative
        flex
        w-full
        max-w-[360px]
        flex-col
        items-center
        overflow-hidden
        rounded-[32px]
        border
        border-white/10
        bg-transparent
        p-8
        text-center
        backdrop-blur-sm
        transition-all
        duration-500
        hover:border-cyan-400/40
        hover:bg-white/5
      "
    >

      {/* Glass Reflection */}

      <div
        className="
          absolute
          inset-0
          rounded-[32px]
          bg-gradient-to-br
          from-white/5
          via-transparent
          to-transparent
          opacity-0
          transition
          duration-500
          group-hover:opacity-100
        "
      />


      {/* Icon */}

      <div
        className="
          relative
          flex
          h-20
          w-20
          items-center
          justify-center
          rounded-3xl
          border
          border-cyan-400/20
          bg-cyan-400/10
        "
      >
        <Award
          size={36}
          className="text-cyan-400"
        />
      </div>


      {/* Year */}

      <div
        className="
          mt-6
          inline-flex
          rounded-full
          border
          border-cyan-400/20
          bg-cyan-400/10
          px-5
          py-2
          text-xs
          font-semibold
          uppercase
          tracking-[0.3em]
          text-cyan-300
        "
      >
        {year}
      </div>


      {/* Title */}

      <h3
        className="
          mt-8
          text-center
          text-2xl
          font-black
          text-white
        "
      >
        {title}
      </h3>


      {/* Issuer */}

      <p
        className="
          mt-3
          text-center
          text-lg
          font-semibold
          text-cyan-300
        "
      >
        {issuer}
      </p>


      {/* Divider */}

      <div
        className="
          mx-auto
          my-8
          h-px
          w-24
          bg-gradient-to-r
          from-transparent
          via-cyan-400
          to-transparent
        "
      />


      {/* Credential */}

      <div
        className="
          flex
          items-center
          justify-center
          gap-2
          text-slate-400
        "
      >
        <ShieldCheck
          size={18}
          className="text-cyan-400"
        />

        <span className="text-sm">
          Credential ID
        </span>
      </div>


      <p
        className="
          mt-2
          max-w-full
          break-all
          text-center
          text-sm
          text-white
        "
      >
        {credential}
      </p>


      {/* Button */}

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="
          mt-8
          inline-flex
          items-center
          justify-center
          gap-3
          rounded-full
          border
          border-cyan-400/20
          bg-cyan-400/10
          px-6
          py-3
          font-semibold
          text-cyan-300
          transition-all
          duration-300
          hover:scale-105
          hover:border-cyan-400
          hover:bg-cyan-400/20
        "
      >
        <ExternalLink size={18} />
        View Certificate
      </a>


    </motion.div>
  );
}