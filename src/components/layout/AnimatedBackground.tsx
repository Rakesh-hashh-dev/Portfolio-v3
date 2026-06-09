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
      <div className="noise-overlay" aria-hidden="true" />
    </>
  );
}
