import { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import { Intro } from "./Intro";
import {
  FaGlobeAmericas,
  FaRegHandPointUp,
  FaUniversalAccess,
} from "react-icons/fa";
import HyperText from "@/components/magicui/hyper-text";
import BlurFade from "@/components/magicui/blur-fade";
import GradualSpacing from "@/components/magicui/gradual-spacing";

const Content = () => {
  return (
    <div className="container max-w-[1200px]">
      <div className="border p-10 relative md:h-[400px] flex flex-col items-center justify-center">
        <Plus className="absolute -top-3 -left-3 text-zinc-600 " />
        <Plus className="absolute -bottom-3 -right-3 text-zinc-600 " />
        <GradualSpacing
          className="font-display text-center text-3xl font-bold tracking-[-0.1em]  md:text-6xl lg:text-7xl  md:leading-[5rem] text-wrap"
          text="Stay Tuned for What's Next!"
        />

        <div className="w-full flex justify-center">
          <BlurFade delay={0.25 * 2} inView>
            <HyperText
              className="text-xl font-bold text-muted-foreground "
              text="Coming soon..."
            />
          </BlurFade>
        </div>
      </div>

      <div className="grid lg:grid-cols-3  grid-rows border-l border-r border-b  gap-5 ">
        <div className="p-8 space-y-8">
          <FaRegHandPointUp size={32} />
          <div>
            <span className="text-[20px] leading-[26px] tracking-[-0.4px] text-[#EDEDED]">
              Simple.
            </span>{" "}
            <span className="text-[20px] leading-[26px] tracking-[-0.4px] text-[#A1A1A1]">
              Converting text to speech in one tap.
            </span>
          </div>
        </div>
        <div className="border-b border-t lg:border-r lg:border-l lg:border-t-0 lg:border-b-0 p-8 space-y-8">
          <FaGlobeAmericas size={32} />
          <div>
            <span className="md:text-[20px] text-[16px] md:leading-[26px] leading-[24px] md:tracking-[-0.4px] tracking-[-0.3px] text-[#EDEDED]">
              Fast.
            </span>{" "}
            <span className="text-[20px] leading-[26px] tracking-[-0.4px] text-[#A1A1A1]">
              Speech that’s quick and responsive, anywhere.
            </span>
          </div>
        </div>

        <div className="p-8 space-y-8">
          <FaUniversalAccess size={32} />
          <div>
            <span className="text-[20px] leading-[26px] tracking-[-0.4px] text-[#EDEDED]">
              Accessible.
            </span>{" "}
            <span className="text-[20px] leading-[26px] tracking-[-0.4px] text-[#A1A1A1]">
              Built for everyone to use easily.
            </span>
          </div>
        </div>
      </div>

      <div className="p-8 border-l border-b border-r">
        <div className="text-[32px] leading-[68px] tracking-[-1.3px] text-[#EDEDED] font-semibold">
          Text to Speech, Simplified
        </div>
        <p className="text-[17px] leading-[30px] tracking-[-0px] text-[#A1A1A1]">
          We’re creating a tool that makes turning text into natural, human-like
          speech super easy. Whether you’re making content or enhancing
          accessibility, our service is built to deliver quick, high-quality
          voice output.
        </p>
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
