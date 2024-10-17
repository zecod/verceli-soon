import BlurFade from "@/components/magicui/blur-fade";
import GradualSpacing from "@/components/magicui/gradual-spacing";
import HyperText from "@/components/magicui/hyper-text";
import { Plus } from "lucide-react";
import { FaRegHandPointUp, FaUniversalAccess } from "react-icons/fa6";
import { FaGlobeAmericas } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center  rounded-xl relative  lg:mt-30 mt-10">
      <div className="border p-10 relative md:h-[550px] flex flex-col items-center justify-center w-full">
        <Plus className="absolute -top-3 -left-3 text-zinc-600" />
        <Plus className="absolute -bottom-3 -right-3 text-zinc-600 " />
        <div className="flex flex-col items-center justify-center md:my-40">
          <GradualSpacing
            className="hidden md:blockfont-display text-center text-2xl font-bold tracking-[-0.1em]  md:text-6xl lg:text-7xl  md:leading-[5rem] text-wrap max-w-4xl hideen md:block "
            text="Which Words Will Speak Next?"
          />

          <div className="text-[24px] leading-[32px] tracking-[0px] text-center md:hidden ">
            Which Words Will Speak Next?
          </div>

          <div className="w-full flex justify-center my-2 md:my-5">
            <BlurFade delay={0.25 * 2} inView>
              <HyperText
                className="hidden md:block text-sm md:text-lg font-bold text-muted-foreground "
                text="Text Transformed into Voice, One Word at a Time."
              />
              <div className="text-sm md:text-lg font-bold text-muted-foreground md:hidden text-center">
                Text Transformed into Voice, One Word at a Time.
              </div>
            </BlurFade>
          </div>
        </div>
      </div>

      <div className="w-full grid lg:grid-cols-3  grid-rows border-l border-r border-b  gap-5 ">
        <BlurFade delay={0.25} inView>
          <div className="p-8 space-y-8">
            <FaRegHandPointUp size={32} />
            <div>
              <span className="text-[20px] leading-[26px] tracking-[-0.4px] text-[#4A4A4A] dark:text-[#EDEDED]">
                Simple.
              </span>{" "}
              <span className="text-[20px] leading-[26px] tracking-[-0.4px] text-[#A1A1A1]">
                Converting text to speech in one tap.
              </span>
            </div>
          </div>
        </BlurFade>
        <BlurFade delay={0.25 * 2} inView>
          <div className="border-b border-t lg:border-r lg:border-l lg:border-t-0 lg:border-b-0 p-8 space-y-8">
            <FaGlobeAmericas size={32} />
            <div>
              <span className="md:text-[20px] text-[16px] md:leading-[26px] leading-[24px] md:tracking-[-0.4px] tracking-[-0.3px] text-[#4A4A4A] dark:text-[#EDEDED]">
                Fast.
              </span>{" "}
              <span className="text-[20px] leading-[26px] tracking-[-0.4px] text-[#A1A1A1]">
                Speech that’s quick and responsive, anywhere.
              </span>
            </div>
          </div>
        </BlurFade>

        <BlurFade delay={0.25 * 3} inView>
          <div className="p-8 space-y-8">
            <FaUniversalAccess size={32} />
            <div>
              <span className="text-[20px] leading-[26px] tracking-[-0.4px] text-[#4A4A4A] dark:text-[#EDEDED]">
                Accessible.
              </span>{" "}
              <span className="text-[20px] leading-[26px] tracking-[-0.4px] text-[#A1A1A1]">
                Built for everyone to use easily.
              </span>
            </div>
          </div>
        </BlurFade>
      </div>

      <div className="w-full p-8 border-l border-b border-r relative">
        <Plus className="absolute -top-3 -right-3 text-zinc-600 " />
        <Plus className="absolute -bottom-3 -left-3 text-zinc-600 " />
        <BlurFade delay={0.25} inView>
          <div className="flex items-center justify-center py-8">
            <div className="text-[32px] leading-[40px] tracking-[-1.3px] text-[#1A1A1A] dark:text-[#EDEDED] max-w-xl text-center my-12">
              Powered by Us, So You Can Focus on What Matters
            </div>
          </div>
        </BlurFade>

        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-16 [&_path]:fill-white mt-6 mb-12">
          <BlurFade delay={0.25} inView>
            <img
              src="https://www.vectorlogo.zone/logos/microsoft/microsoft-ar21.svg"
              alt="microsoft logo"
              className="w-40 px-2 "
            />
          </BlurFade>
          <BlurFade delay={0.25} inView>
            {" "}
            <img
              src="https://www.vectorlogo.zone/logos/google/google-ar21.svg"
              alt="google logo"
              className="w-40 px-2"
            />
          </BlurFade>

          <BlurFade delay={0.25} inView>
            {" "}
            <img
              src="https://www.hetzner.com/_resources/themes/hetzner/images/logo/hetzner-logo.svg?m=1724935105"
              alt="hetzner logo"
              className="w-40 px-2"
            />
          </BlurFade>
        </div>
      </div>
    </section>
  );
};

export { Hero };
