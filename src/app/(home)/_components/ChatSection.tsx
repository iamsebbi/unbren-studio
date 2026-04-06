"use client";

import { GroupChat } from "@/components/ui/studio/GroupChat";

const ChatSection = () => {
  return (
    <section
      id="chat-reveal"
      className="relative z-10 overflow-hidden bg-(--color-studio-bg) px-0 py-24 sm:py-32 md:py-40"
    >
      {/* Apple-style Subtle Background Glows */}
      <div className="pointer-events-none absolute -top-1/4 -left-1/4 h-200 w-200 rounded-full bg-(--color-studio-accent)/5 blur-[160px] animate-pulse" />
      <div className="pointer-events-none absolute -bottom-1/4 -right-1/4 h-250 w-250 rounded-full bg-(--color-studio-accent)/3 blur-[200px]" />

      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center">
          <GroupChat />
        </div>
      </div>
    </section>
  );
};

export default ChatSection;
