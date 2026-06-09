"use client";

import { LazyMotion, MotionConfig, domMax } from "framer-motion";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    // LazyMotion + `m` components load the feature bundle once and let the
    // bundler drop framer-motion's heavier `motion` glue. `domMax` is required
    // because the nav underline, mobile dock pill, and case-study grid use
    // layout animations (layoutId / `layout`). `strict` throws if a full
    // `motion.*` component sneaks in.
    <LazyMotion features={domMax} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
