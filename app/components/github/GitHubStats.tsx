"use client";

import {
  motion,
  animate,
  useInView,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Star, GitFork, Eye } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

const stats = [
  {
    title: "Repositories",
    value: 20,
    suffix: "+",
    icon: FaGithub,
  },
  {
    title: "Stars",
    value: 100,
    suffix: "+",
    icon: Star,
  },
  {
    title: "Forks",
    value: 25,
    suffix: "+",
    icon: GitFork,
  },
  {
    title: "Contributions",
    value: 1000,
    suffix: "+",
    icon: Eye,
  },
];

function CountUp({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate(latest) {
        setCount(Math.floor(latest));
      },
    });

    return () => controls.stop();
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function GitHubStats() {
  return (
    <section
      id="github"
      className="relative mx-auto max-w-7xl px-6 py-32"
    >
      <div className="flex flex-col items-center">

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
            duration: 0.6,
          }}
          className="mx-auto max-w-4xl text-center"
        >
          <p
            className="
              text-sm
              uppercase
              tracking-[8px]
              text-cyan-400
            "
          >
            GitHub
          </p>

          <h2
            className="
              mt-4
              text-center
              text-5xl
              font-black
              text-white
              md:text-6xl
            "
          >
            Open Source
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-3xl
              text-center
              text-lg
              leading-8
              text-slate-400
            "
          >
            I enjoy building AI products, backend systems and open-source
            projects while continuously learning new technologies.
          </p>
        </motion.div>

        {/* Stats */}

        <div
          className="
            mt-20
            grid
            w-full
            place-items-center
            gap-8
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="
                  group
                  flex
                  min-h-[220px]
                  w-full
                  max-w-[280px]
                  flex-col
                  items-center
                  justify-center
                  rounded-3xl
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
                {/* Icon */}

                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-cyan-400/10
                    text-cyan-400
                  "
                >
                  <Icon size={28} />
                </div>

                {/* Animated Number */}

                <h3
                  className="
                    mt-8
                    text-center
                    text-5xl
                    font-black
                    text-white
                  "
                >
                  <CountUp
                    value={item.value}
                    suffix={item.suffix}
                  />
                </h3>

                {/* Label */}

                <p
                  className="
                    mt-3
                    text-center
                    text-slate-400
                  "
                >
                  {item.title}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Button */}

        <div className="mt-16 flex justify-center">
          <a
            href="https://github.com/pranumann"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-cyan-400
              px-8
              py-4
              font-semibold
              text-cyan-400
              transition-all
              duration-300
              hover:bg-cyan-400
              hover:text-black
            "
          >
            <FaGithub size={20} />
            Visit GitHub →
          </a>
        </div>

      </div>
    </section>
  );
}