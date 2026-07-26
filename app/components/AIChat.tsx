"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  User,
  X,
  Cpu,
  CheckCheck,
  Copy,
  ThumbsUp,
  ThumbsDown,
  RefreshCcw,
  Sparkles,
  SendHorizonal,
} from "lucide-react";

type Message = {
  id: number;
  role: "ai" | "user";
  text: string;
  time: string;
};

export default function AIChat() {
  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState<Message[]>([]);

  const [input, setInput] = useState("");

  const [loading, setLoading] = useState(false);

  const [clock, setClock] = useState("");

  const [copied, setCopied] = useState<number | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const currentTime = () =>
    new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

  useEffect(() => {
    setClock(currentTime());

    const timer = setInterval(() => {
      setClock(currentTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setMessages([
      {
        id: Date.now(),
        role: "ai",
        time: currentTime(),
        text:
          "👋 Welcome to Pranumann AI\n\n" +
          "I'm your intelligent AI assistant.\n\n" +
          "You can ask me anything about:\n\n" +
          "• Skills\n" +
          "• Projects\n" +
          "• Experience\n" +
          "• Education\n" +
          "• Technologies\n\n" +
          "Let's build something amazing 🚀",
      },
    ]);
  }, []);

  useEffect(() => {
    if (open) {
      messagesEndRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [messages, loading, open]);

  useEffect(() => {
    if (!textareaRef.current) return;

    textareaRef.current.style.height = "0px";

    textareaRef.current.style.height =
      textareaRef.current.scrollHeight + "px";
  }, [input]);

  async function copyMessage(text: string, id: number) {
    await navigator.clipboard.writeText(text);

    setCopied(id);

    setTimeout(() => {
      setCopied(null);
    }, 1800);
  }

  async function sendMessage() {
    if (!input.trim() || loading) return;

    const userMessage = input;

    const userObj: Message = {
      id: Date.now(),
      role: "user",
      text: userMessage,
      time: currentTime(),
    };

    setMessages((prev) => [...prev, userObj]);

    setInput("");

    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          message: userMessage,
        }),
      });

      const data = await res.json();

      const aiObj: Message = {
        id: Date.now() + 1,
        role: "ai",
        text:
          data.reply ??
          "Sorry, I couldn't understand your request.",
        time: currentTime(),
      };

      setMessages((prev) => [...prev, aiObj]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: "ai",
          text:
            "⚠️ Unable to connect to the AI server.\nPlease try again later.",
          time: currentTime(),
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
  <div className="fixed bottom-6 right-6 z-[999] font-sans">

    <AnimatePresence>

      {open && (

        <motion.div
          initial={{
            opacity: 0,
            y: 70,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: 70,
            scale: 0.92,
          }}
          transition={{
            duration: 0.35,
            ease: "easeOut",
          }}
          className="
            relative
            mb-5
            flex
            h-[730px]
            w-[430px]
            max-w-[95vw]
            flex-col
            overflow-hidden
            rounded-[34px]
            border
            border-white/10
            bg-[#060B18]/90
            backdrop-blur-3xl
            shadow-[0_40px_120px_rgba(0,0,0,.75)]
          "
        >

          {/* Animated Border */}

          <div className="pointer-events-none absolute inset-0 rounded-[34px] p-[1px]">

            <div
              className="
                absolute
                inset-0
                rounded-[34px]
                bg-gradient-to-r
                from-cyan-400/25
                via-purple-500/25
                to-blue-500/25
                blur-xl
              "
            />

          </div>

          {/* Aurora */}

          <div className="pointer-events-none absolute inset-0 overflow-hidden">

            <motion.div
              animate={{
                x: [0, 120, 0],
                y: [0, -60, 0],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
              }}
              className="
                absolute
                -top-32
                -left-24
                h-72
                w-72
                rounded-full
                bg-cyan-500/20
                blur-[120px]
              "
            />

            <motion.div
              animate={{
                x: [0, -100, 0],
                y: [0, 70, 0],
              }}
              transition={{
                duration: 14,
                repeat: Infinity,
              }}
              className="
                absolute
                bottom-0
                right-0
                h-72
                w-72
                rounded-full
                bg-purple-600/20
                blur-[140px]
              "
            />

          </div>

          {/* Grid */}

          <div
            className="
              absolute
              inset-0
              opacity-[0.04]
              bg-[linear-gradient(rgba(255,255,255,.25)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.25)_1px,transparent_1px)]
              bg-[size:26px_26px]
            "
          />

          {/* Header */}

          <div
            className="
              relative
              flex
              items-center
              justify-between
              border-b
              border-white/10
              bg-gradient-to-r
              from-cyan-500/10
              via-transparent
              to-purple-500/10
              px-6
              py-5
              backdrop-blur-xl
            "
          >

            <div className="flex items-center gap-4">

              <motion.div
                animate={{
                  rotate: [0, 4, -4, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="
                  relative
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-gradient-to-br
                  from-cyan-400
                  via-blue-500
                  to-purple-600
                  shadow-[0_0_40px_rgba(34,211,238,.45)]
                "
              >

                <Bot size={28} className="text-white" />

                <span className="absolute bottom-1 right-1 flex h-3 w-3">

                  <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 animate-ping" />

                  <span className="relative inline-flex h-3 w-3 rounded-full border-2 border-[#060B18] bg-green-400" />

                </span>

              </motion.div>

              <div>

                <div className="flex items-center gap-2">

                  <h2 className="text-lg font-bold tracking-wide text-white">
                    Pranumann AI
                  </h2>

                  <span className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-cyan-300">

                    AI

                  </span>

                </div>

                <div className="mt-1 flex items-center gap-2 text-xs text-emerald-400">

                  <Cpu size={13} />

                  <span>Online</span>

                  <span className="text-white/30">•</span>

                  <span className="text-slate-400">
                    {clock}
                  </span>

                </div>

              </div>

            </div>

            <button
              onClick={() => setOpen(false)}
              className="
                rounded-xl
                p-2
                text-gray-400
                transition-all
                duration-300
                hover:bg-white/10
                hover:text-white
              "
            >

              <X size={20} />

            </button>

          </div>

          {/* Date */}

          <div className="relative flex items-center justify-center py-3">

            <div className="h-px flex-1 bg-white/10" />

            <div className="mx-4 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-[11px] font-medium text-cyan-300">

              Today

            </div>

            <div className="h-px flex-1 bg-white/10" />

          </div>
{/* MESSAGE AREA */}

<div
  className="
    relative
    flex-1
    overflow-y-auto
    px-5
    pb-5
    space-y-5
    scrollbar-thin
    scrollbar-thumb-cyan-500/30
    scrollbar-track-transparent
  "
>
  {messages.map((msg) => (
    <motion.div
      key={msg.id}
      initial={{ opacity: 0, y: 25, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.25 }}
      className={`flex gap-3 ${
        msg.role === "user" ? "flex-row-reverse" : ""
      }`}
    >
      {/* Avatar */}

      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border ${
          msg.role === "user"
            ? "border-purple-400/20 bg-purple-500/15 text-purple-300"
            : "border-cyan-400/20 bg-cyan-500/15 text-cyan-300 shadow-[0_0_25px_rgba(34,211,238,.25)]"
        }`}
      >
        {msg.role === "user" ? (
          <User size={18} />
        ) : (
          <Bot size={18} />
        )}
      </div>

      {/* Bubble */}

      <div
        className={`group max-w-[82%] rounded-3xl border px-5 py-4 backdrop-blur-xl ${
          msg.role === "user"
            ? "rounded-tr-none border-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-white shadow-[0_15px_35px_rgba(34,211,238,.25)]"
            : "rounded-tl-none border-cyan-400/10 bg-slate-900/70 text-slate-200"
        }`}
      >
        <p className="whitespace-pre-wrap text-sm leading-7">
          {msg.text}
        </p>

        <div
          className={`mt-4 flex items-center justify-between ${
            msg.role === "user"
              ? "text-white/70"
              : "text-slate-500"
          }`}
        >
          <div className="flex items-center gap-1 text-[11px]">
            <span>{msg.time}</span>

            {msg.role === "user" && (
              <CheckCheck
                size={14}
                className="text-cyan-200"
              />
            )}
          </div>

          {msg.role === "ai" && (
            <div className="flex items-center gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100">

              <button
                onClick={() => copyMessage(msg.text, msg.id)}
                className="rounded-lg p-1.5 hover:bg-white/10"
              >
                {copied === msg.id ? (
                  <CheckCheck
                    size={15}
                    className="text-emerald-400"
                  />
                ) : (
                  <Copy size={15} />
                )}
              </button>

              <button className="rounded-lg p-1.5 hover:bg-white/10">
                <ThumbsUp size={15} />
              </button>

              <button className="rounded-lg p-1.5 hover:bg-white/10">
                <ThumbsDown size={15} />
              </button>

              <button className="rounded-lg p-1.5 hover:bg-white/10">
                <RefreshCcw size={15} />
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  ))}

  {loading && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex gap-3"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-500/15 text-cyan-300">
        <Bot size={18} />
      </div>

      <div className="rounded-3xl rounded-tl-none border border-cyan-400/10 bg-slate-900/70 px-5 py-4">
        <div className="flex gap-2">
          <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-400" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-400 [animation-delay:150ms]" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-400 [animation-delay:300ms]" />
        </div>
      </div>
    </motion.div>
  )}

  <div ref={messagesEndRef} />
</div>

{/* INPUT */}

<div className="border-t border-white/10 bg-white/[0.03] p-5 backdrop-blur-2xl">
  <div className="flex items-end gap-3">

    <textarea
      ref={textareaRef}
      rows={1}
      value={input}
      onChange={(e) => setInput(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          sendMessage();
        }
      }}
      placeholder="Ask anything about Praveen..."
      className="
        max-h-36
        min-h-[56px]
        flex-1
        resize-none
        rounded-2xl
        border
        border-white/10
        bg-white/[0.05]
        px-5
        py-4
        text-sm
        text-white
        outline-none
        placeholder:text-slate-500
        focus:border-cyan-400/40
        focus:shadow-[0_0_25px_rgba(34,211,238,.18)]
      "
    />

    <motion.button
      whileHover={{ scale: 1.08, rotate: -8 }}
      whileTap={{ scale: 0.92 }}
      disabled={loading}
      onClick={sendMessage}
      className="
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-2xl
        bg-gradient-to-br
        from-cyan-400
        via-blue-500
        to-purple-600
        text-white
        shadow-[0_0_35px_rgba(34,211,238,.35)]
      "
    >
      <SendHorizonal size={22} />
    </motion.button>

  </div>
</div>

</motion.div>
      )}
    </AnimatePresence>

    {!open && (
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        animate={{ y: [0, -5, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        onClick={() => setOpen(true)}
        className="
          relative
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-gradient-to-br
          from-cyan-400
          via-blue-500
          to-purple-600
          text-white
          shadow-[0_0_40px_rgba(34,211,238,.45)]
        "
      >
        <Bot size={30} />

        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
          <span className="relative inline-flex h-4 w-4 rounded-full border-2 border-[#060B18] bg-green-400" />
        </span>
      </motion.button>
    )}
  </div>
);
}