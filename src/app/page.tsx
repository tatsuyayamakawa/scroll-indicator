"use client";

import { Header } from "@/ui/header";

export default function Home() {
  return (
    <>
      <div>
        <Header />
        <main className="h-[3000px] flex flex-col items-center justify-around">
          <div className="text-9xl">Let&apos;s Scroll Down</div>
          <div className="text-9xl">More Down</div>
          <div className="text-9xl">Nice Scroll!</div>
        </main>
      </div>
    </>
  );
}
