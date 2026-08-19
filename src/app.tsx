import { useState } from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import IdBadge from "./components/id-badge";
import ExperienceSection from "./components/experience-section";

export default function App() {
  const [badgeOpen, setBadgeOpen] = useState(false);

  return (
    <div className="flex flex-col w-full h-auto">
      <Header
        badgeOpen={badgeOpen}
        onToggleBadge={() => setBadgeOpen((v) => !v)}
      />
      <Hero />
      <ExperienceSection />
      <IdBadge open={badgeOpen} />
    </div>
  );
}
