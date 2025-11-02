"use client";

import { HomeHeroBanner, HomeHireMe, HomeTechStack, HomeXP } from "./sections";

export default function Home() {

  return (
    <div className="relative">
      <HomeHeroBanner />
      <HomeTechStack />
      <HomeXP />
      <HomeHireMe />
    </div>
  );
}
