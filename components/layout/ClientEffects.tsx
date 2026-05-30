"use client";

import GoldParticles from "@/components/effects/GoldParticles";
import CustomCursor from "@/components/effects/CustomCursor";
import LoadingScreen from "@/components/layout/LoadingScreen";

export default function ClientEffects() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <GoldParticles />
    </>
  );
}
