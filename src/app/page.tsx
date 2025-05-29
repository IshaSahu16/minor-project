import DetectFake from "@/components/level_two_layout/detect_fake";
import HeroSection from "@/components/level_two_layout/hero_section";
import HowItWorks from "@/components/level_two_layout/how_it_works";
import React from "react";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <DetectFake />
      <HowItWorks/>
    </div>
  );
}
