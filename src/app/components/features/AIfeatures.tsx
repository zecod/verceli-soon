import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { BsStars } from "react-icons/bs";
import BlurFade from "@/components/magicui/blur-fade";

export const AIfeatures = () => {
  return (
    <div className="border-x border-b p-8 flex flex-col justify-center items-center relative ">
      <Plus className="absolute -top-3 -left-3 text-zinc-600" />
      <Plus className="absolute -bottom-3 -right-3 text-zinc-600 " />

      <BlurFade
        delay={0.25}
        inView
        className="mt-20 flex flex-col items-center mb-10"
      >
        <div className="text-[32px] md:text-[46px] mb-2 md:leading-[67.2px] tracking-[-1.4px] lg:text-left text-center">
          AI for Audio That Sounds Just the Way You Want
        </div>
        <p className="text-[16px] md:text-[20px] md:leading-[36px] tracking-[0.1px] text-[#A1A1A1] max-w-xl text-center">
          Create custom audio with AI that matches your exact preferences. Get
          the sound you need, tailored to your unique requirements.
        </p>
      </BlurFade>

      <BlurFade
        delay={0.45}
        inView
        className="flex p-2 border rounded-full lg:w-[500px] md:w-[480px] mt-10 mb-20 "
      >
        <div className="flex-1 flex items-center px-2 text-muted-foreground text-sm md:text-md ">
          {" "}
          What would you like to say? We'll make it sound real.
        </div>
        <Button
          className="group bg-gradient-to-r from-[#5885F5] via-[#DB4CAE] to-[#FF7E22] text-white rounded-full gap-2 transition-all duration-200 ease-in-out items-center justify-center"
          size={"icon"}
        >
          <BsStars size={19} />
        </Button>
      </BlurFade>
    </div>
  );
};
