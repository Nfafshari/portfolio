import Header from "./components/header";
import Hero from "./components/hero";

export default function App() {
  return (
    <div className="flex flex-col w-full h-auto">
      <Header />
      <Hero />
      <div className="flex w-full h-110 bg-radial from-glow to-background"></div>
    </div>
  );
}