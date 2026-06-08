export default function AnimatedBackground() {
  return (
    <>
      <div className="animated-bg" aria-hidden="true">
        <div className="aurora-orb aurora-orb--a" />
        <div className="aurora-orb aurora-orb--b" />
        <div className="aurora-orb aurora-orb--c" />
        <div className="aurora-orb aurora-orb--d" />
        <div className="aurora-orb aurora-orb--e" />
      </div>
      <div className="noise-overlay" aria-hidden="true">
        <svg className="h-full w-full">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>
    </>
  );
}
