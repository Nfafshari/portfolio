import { useState } from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import IdBadge from "./components/id-badge";

export default function App() {
  const [badgeOpen, setBadgeOpen] = useState(false);

  return (
    <div className="flex flex-col w-full h-auto">
      <Header
        badgeOpen={badgeOpen}
        onToggleBadge={() => setBadgeOpen((v) => !v)}
      />
      <Hero />
      <div className="flex w-full h-110 bg-radial from-glow to-background"></div>
      <IdBadge open={badgeOpen} />
    </div>
  );
}
