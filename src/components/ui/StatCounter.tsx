"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

function parseValue(raw: string) {
  const match = raw.match(/^([^\d]*)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return { prefix: "", num: 0, suffix: raw, isFloat: false };
  return {
    prefix: match[1],
    num: parseFloat(match[2]),
    suffix: match[3],
    isFloat: match[2].includes("."),
  };
}

export default function StatCounter({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const { prefix, num, suffix, isFloat } = parseValue(value);

  useEffect(() => {
    if (!inView) return;
    const el = ref.current;
    if (!el) return;
    const controls = animate(0, num, {
      duration: 1.5,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(v) {
        el.textContent = `${prefix}${isFloat ? v.toFixed(1) : Math.round(v)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, num, prefix, suffix, isFloat]);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}
