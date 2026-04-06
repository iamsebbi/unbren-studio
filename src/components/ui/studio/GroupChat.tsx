"use client";

import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState, useEffect, useRef } from "react";

interface Message {
  id: string;
  sender: string;
  role: string;
  avatar: string;
  content: string;
}

const messages: Message[] = [
  {
    id: "1",
    sender: "Sebastian",
    role: "Founder & Creative",
    avatar: "/avatars/sebastian.png",
    content: "Fără site-uri la kilogram.",
  },
  {
    id: "2",
    sender: "Ana",
    role: "Strategy Lead",
    avatar: "/avatars/ana.png",
    content: "Fără promisiuni pe care nimeni nu le ține.",
  },
  {
    id: "3",
    sender: "Andrei",
    role: "Tech Lead",
    avatar: "/avatars/andrei.png",
    content:
      "Doar soluții care îți aduc clienți noi și îți construiesc reputația online.",
  },
];

const ChatMessage = ({ msg, index }: { msg: Message; index: number }) => {
  const isUser = msg.sender === "Tu";
  const isRight = index === 1 || isUser;
  const [status, setStatus] = useState<"idle" | "typing" | "shown">(
    isUser ? "shown" : "idle"
  );
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isUser) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && status === "idle") {
          const typingStartDelay = index * 2000;
          const typingDuration = 1500;

          const timer1 = setTimeout(
            () => setStatus("typing"),
            typingStartDelay,
          );
          const timer2 = setTimeout(
            () => setStatus("shown"),
            typingStartDelay + typingDuration,
          );

          return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
          };
        }
      },
      { threshold: 0.1 },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [index, status, isUser]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "group flex min-h-16 items-end gap-3 md:gap-4",
        isRight && "flex-row-reverse",
      )}
    >
      <div className="relative mb-1 shrink-0">
        <div
          className={cn(
            "h-9 w-9 overflow-hidden rounded-full border border-(--color-studio-border) bg-(--color-studio-surface) shadow-inner transition-all duration-500 md:h-10 md:w-10",
            status !== "idle" ? "scale-100 opacity-100" : "scale-0 opacity-0",
          )}
        >
          <Image
            src={msg.avatar}
            alt={msg.sender}
            width={40}
            height={40}
            className="h-full w-full object-cover"
            priority
          />
        </div>
        {status !== "idle" && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className={cn(
              "absolute -bottom-0.5 h-3 w-3 rounded-full border-2 border-(--color-studio-bg) bg-emerald-500 shadow-sm",
              isRight ? "-left-0.5" : "-right-0.5",
            )}
          />
        )}
      </div>

      <div
        className={cn(
          "flex min-w-0 flex-1 flex-col gap-1.5",
          isRight && "items-end",
        )}
      >
        <AnimatePresence>
          {status !== "idle" && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className={cn(
                "flex items-baseline gap-2 px-1",
                isRight && "flex-row-reverse",
              )}
            >
              <span className="font-sans text-[13px] font-semibold tracking-[-0.01em] text-(--color-studio-text) md:text-sm">
                {msg.sender}
              </span>
              <span className="text-[10px] font-medium tracking-tight text-(--color-studio-muted) uppercase opacity-50 md:text-[10px]">
                {msg.role}
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          layout
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: status === "idle" ? 0 : 1,
            scale: status === "idle" ? 0.8 : 1,
          }}
          transition={{
            layout: { type: "spring", damping: 20, stiffness: 300 },
            opacity: { duration: 0.4 },
          }}
          style={{
            transformOrigin: isRight ? "bottom right" : "bottom left",
          }}
          className={cn(
            "relative transition-all duration-500",
            isRight
              ? "bg-linear-to-b from-(--color-studio-accent) to-(--color-studio-accent)/90 text-white shadow-[0_4px_12px_rgba(150,102,255,0.2)]"
              : "border border-(--color-studio-border)/50 bg-(--color-studio-surface)/50 shadow-sm backdrop-blur-xl",
            // iMessage Style Geometry
            status === "typing"
              ? "w-fit rounded-full px-4 py-2"
              : cn(
                  "w-fit max-w-[85%] px-5 py-2.5 md:max-w-[75%] md:px-6 md:py-3",
                  isRight
                    ? "rounded-3xl rounded-br-lg"
                    : "rounded-3xl rounded-bl-lg",
                ),
            status === "shown" &&
              isRight &&
              "shadow-(--color-studio-accent)/20",
          )}
        >
          <AnimatePresence mode="wait">
            {status === "typing" ? (
              <motion.div
                key="typing"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex h-4 min-w-7.5 items-center justify-center gap-1"
              >
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ y: [0, -3, 0] }}
                    transition={{
                      duration: 0.6,
                      repeat: Infinity,
                      delay: i * 0.15,
                      ease: "easeInOut",
                    }}
                    className={cn(
                      "h-1.5 w-1.5 rounded-full",
                      isRight ? "bg-white/80" : "bg-(--color-studio-muted)",
                    )}
                  />
                ))}
              </motion.div>
            ) : status === "shown" ? (
              <motion.div
                key="content"
                initial={{ opacity: 0, filter: "blur(8px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <p
                  className={cn(
                    "balance font-sans text-base leading-relaxed font-normal tracking-tight md:text-lg",
                    isRight ? "text-white" : "text-(--color-studio-text)",
                  )}
                >
                  {msg.content}
                </p>
              </motion.div>
            ) : (
              <div key="placeholder" className="h-4 w-8" />
            )}
          </AnimatePresence>

          {status === "shown" && (
            <div className="absolute inset-0 -z-10 bg-(--color-studio-accent)/5 opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100" />
          )}
        </motion.div>
      </div>
    </div>
  );
};

const ChatHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="mb-8 flex w-full flex-col items-center border-b border-(--color-studio-border)/50 pb-8"
    >
      {/* Top Row: Actions and Avatars */}
      <div className="flex w-full items-center justify-center gap-20 md:gap-32">
        {/* Left Back Button */}
        <button className="flex h-11 w-11 items-center justify-center rounded-full border border-(--color-studio-border)/50 bg-(--color-studio-surface)/30 text-(--color-studio-accent) backdrop-blur-xl transition-all duration-300 hover:bg-(--color-studio-accent)/10 active:scale-95">
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* Center Avatars */}
        <div className="flex -space-x-4">
          {messages.map((msg, i) => (
            <div
              key={msg.id}
              className="relative h-11 w-11 overflow-hidden rounded-full border-2 border-(--color-studio-bg) shadow-lg md:h-14 md:w-14"
              style={{ zIndex: messages.length - i }}
            >
              <Image
                src={msg.avatar}
                alt={msg.sender}
                width={56}
                height={56}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Right Action */}
        <div className="flex items-center justify-end text-(--color-studio-accent)">
          <button className="flex h-11 w-11 items-center justify-center rounded-full border border-(--color-studio-border)/50 bg-(--color-studio-surface)/30 backdrop-blur-xl transition-all duration-300 hover:bg-(--color-studio-accent)/10 active:scale-95">
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M23 7l-7 5 7 5V7z" />
              <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
            </svg>
          </button>
        </div>
      </div>

      {/* Bottom Row: Text Info */}
      <div className="mt-4 flex flex-col gap-1 text-center">
        <h3 className="font-sans text-2xl font-semibold tracking-[-0.02em] text-(--color-studio-text) md:text-3xl">
          Unbren Groupchat
        </h3>
        <p className="text-[11px] font-bold tracking-[0.05em] text-(--color-studio-muted) uppercase opacity-50 md:text-xs">
          Studio Members
        </p>
      </div>
    </motion.div>
  );
};

const ChatInput = ({ onSendMessage }: { onSendMessage: (content: string) => void }) => {
  const [text, setText] = useState("");
  const isActive = text.trim().length > 0;

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (isActive) {
      onSendMessage(text);
      setText("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      handleSubmit();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="mt-4 flex items-center gap-3"
    >
      {/* Left Plus Button */}
      <button className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-(--color-studio-border) bg-(--color-studio-surface)/30 text-(--color-studio-muted) transition-all duration-300 hover:bg-(--color-studio-surface) hover:text-(--color-studio-text) active:scale-95">
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </button>

      {/* Input Field Container */}
      <div className="relative flex flex-1 items-center">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Scrie ceva..."
          className="font-sans w-full rounded-full border border-(--color-studio-border) bg-(--color-studio-surface)/30 px-5 py-3.5 text-sm tracking-tight text-(--color-studio-text) backdrop-blur-xl transition-all duration-300 placeholder:text-(--color-studio-muted)/50 focus:border-(--color-studio-accent)/50 focus:outline-none"
        />

        {/* Right Send Button */}
        <div className="absolute right-2 flex items-center justify-center">
          <motion.button
            onClick={() => handleSubmit()}
            animate={{
              backgroundColor: isActive
                ? "var(--color-studio-accent)"
                : "rgba(161, 161, 170, 0.1)",
              color: isActive ? "#ffffff" : "var(--color-studio-muted)",
              scale: isActive ? 1 : 0.9,
              opacity: isActive ? 1 : 0.4,
            }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="flex h-9 w-9 items-center justify-center rounded-full"
          >
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="-mt-0.5"
            >
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export const GroupChat = () => {
  const [chatMessages, setChatMessages] = useState<Message[]>(messages);

  const handleSendMessage = (content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      sender: "Tu",
      role: "Vizitator",
      avatar: "/avatars/user.png",
      content,
    };
    setChatMessages((prev) => [...prev, newMessage]);
  };

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-8 px-4">
      <ChatHeader />
      {chatMessages.map((msg, index) => (
        <ChatMessage key={msg.id} msg={msg} index={index} />
      ))}
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};
