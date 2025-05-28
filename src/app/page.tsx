import DetectFake from "@/components/level_two_layout/detect_fake";
import HeroSection from "@/components/level_two_layout/hero_section";
import React from "react";

export default function Home() {
  return (
    <div>
      <div className="min-h-screen">
        <HeroSection />
      </div>
      <DetectFake />
    </div>
  );
}
