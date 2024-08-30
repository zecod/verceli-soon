import { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import HyperText from "@/components/magicui/hyper-text";
import BlurFade from "@/components/magicui/blur-fade";
import { Intro } from "./Intro";
import GradualSpacing from "@/components/magicui/gradual-spacing";

const Content = () => {
  return (
    <div className="border p-10 relative">
      <Plus className="absolute -top-3 -left-3 text-zinc-600 " />
      <Plus className="absolute -bottom-3 -right-3 text-zinc-600 " />
      <GradualSpacing
        className="font-display text-center text-3xl font-bold tracking-[-0.1em]  md:text-6xl lg:text-7xl  md:leading-[5rem] text-wrap"
        text="Stay Tuned for What's Next!"
      />

      <div className="w-full flex justify-end">
        <BlurFade delay={0.25 * 2} inView>
          <HyperText
            className="text-xl font-bold text-muted-foreground "
            text="Coming soon..."
          />
        </BlurFade>
      </div>
    </div>
  );
};

export const Hero = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="w-screen h-screen bg-black text-white relative">
      <div className="container w-full h-full flex flex-col items-center justify-center">
        {showIntro ? <Intro /> : <Content />}
      </div>
    </main>
  );
};
