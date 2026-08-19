

export default function ExperienceSection() {

  return (
    <section id='experience'>
      <div className="flex w-full h-200 bg-[url(/orange_waves.gif)] bg-cover bg-background to-accent/15 from-70%">
        <div className="flex flex-col w-full h-full px-10 py-8 backdrop-blur-xs bg-black/96">
          <h1 className="font-instrument w-auto text-6xl text-foreground mb-10">EXPERIENCE</h1>
          <div className="flex w-full h-80 bg-[url(black_waves.gif)] bg-cover border-2 border-black/60 rounded-lg">
            <div className="flex flex-col w-full h-full bg-black/98 px-5 py-3">
              <h2 className="font-instrument w-auto text-4xl text-foreground">Software Engineer - University of North Dakota</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}