import BlurFade from "@/components/magicui/blur-fade";
import { Plus } from "lucide-react";

export const SSMLDemo = () => {
  return (
    <div className="border-x border-b p-8 flex flex-col justify-center relative ">
      <Plus className="absolute -top-3 -left-3 text-zinc-600" />
      <Plus className="absolute -bottom-3 -right-3 text-zinc-600 " />

      <BlurFade
        delay={0.25}
        inView
        className="my-40 flex flex-col items-center"
      >
        <div className="text-[32px] md:text-[46px] mb-2 md:leading-[67.2px] tracking-[-1.4px] lg:text-left text-center">
          Text-to-Speech with SSML Features
        </div>
        <p className="text-[16px] md:text-[20px] md:leading-[36px] tracking-[0.1px] text-[#A1A1A1] max-w-xl text-center">
          Create lifelike speech from text with SSML, allowing you to control
          tone, pauses, and emphasis for more natural audio.
        </p>
      </BlurFade>
    </div>
  );
};
