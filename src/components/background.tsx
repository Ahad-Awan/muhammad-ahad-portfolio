"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export function Background() {
  return (
    <div className="fixed inset-0 w-full h-full bg-neutral-900 z-[-1]">
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}