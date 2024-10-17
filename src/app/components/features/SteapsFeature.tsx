import BlurFade from "@/components/magicui/blur-fade";
import AnimatedCircularProgressBar from "@/components/ui/animated-circular-progress-bar";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Check, Cloud, File, Waves } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa6";

export const StepsFeature = () => {
  const [value, setValue] = useState(0);
  const [completed, setCompleted] = useState<boolean>(false);
  const [isPlayingAudio1, setIsPlayingAudio1] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlayPauseAudio1 = () => {
    if (isPlayingAudio1) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlayingAudio1(!isPlayingAudio1);
  };

  const handleAudioEnded1 = () => {
    setIsPlayingAudio1(false);
  };

  useEffect(() => {
    const handleIncrement = (prev: number) => {
      if (prev == 100) {
        setCompleted(true);
        return 100;
      }
      return prev + 20;
    };
    setValue(handleIncrement);
    const interval = setInterval(() => setValue(handleIncrement), 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="w-full flex md:flex-row flex-col">
      <BlurFade
        delay={0.35}
        inView
        className="flex-1 px-8 border-l border-b border-r py-12"
      >
        <div className="flex items-center gap-2 text-muted-foreground">
          <Cloud size={22} />
          <div className="text-[16px] leading-[20px] tracking-[0px] text-[#A1A1A1] font-light">
            Upload Your Voice
          </div>
        </div>
        <div className="my-6 font-medium">
          <span className="text-[24px] leading-[32px] tracking-[-1px] text-[#4A4A4A] dark:text-[#EDEDED]">
            Simply upload your audio file,
          </span>{" "}
          <span className="text-[24px] leading-[32px] tracking-[-1px] text-[#A1A1A1]">
            and we’ll handle everything from there. No complicated steps
            required.
          </span>
        </div>

        <div className="flex items-center  justify-between border px-2 py-4 rounded-lg">
          <div className="flex flex-col gap-1">
            <div className="text-xs flex items-center font-light">
              <span className="text-muted-foreground">verceli</span>
              /clone-voice
            </div>
            <div className="flex items-center gap-1">
              <File size={14} />
              <span className="text-sm">custom-voice.mp3</span>
            </div>
          </div>
          {completed ? (
            <motion.div
              className="size-[32px] text-green-600 bg-green-200 dark:bg-green-950 rounded-full flex items-center justify-center opacity-0 scale-x-0"
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <Check />
            </motion.div>
          ) : (
            <AnimatedCircularProgressBar
              max={100}
              min={0}
              value={value}
              gaugePrimaryColor={"rgb(34, 197, 94)"}
              gaugeSecondaryColor={"  rgba(119, 119, 119, 0.1)"}
              className="size-[38px] text-xs font-medium"
            />
          )}
        </div>
      </BlurFade>
      {/* Second card! */}
      <BlurFade
        delay={0.55}
        inView
        className="flex-1 px-8 border-b border-r md:border-l-0 border-l py-12"
      >
        <div className="flex items-center gap-2 text-muted-foreground">
          <Waves size={22} />
          <div className="text-[16px] leading-[20px] tracking-[0px] text-[#A1A1A1] font-light">
            Use your cloned voice
          </div>
        </div>
        <div className="my-6 font-medium">
          <span className="text-[24px] leading-[32px] tracking-[-1px] text-[#4A4A4A] dark:text-[#EDEDED]">
            Your voice is ready to use.
          </span>{" "}
          <span className="text-[24px] leading-[32px] tracking-[-1px] text-[#A1A1A1]">
            No delays—just plug it in where you need it.
          </span>
        </div>

        <div className="flex items-center justify-between mt-5 border px-2 py-4 rounded-lg w-full ">
          <div className="flex items-center gap-2">
            <img
              src="https://www.apple.com/v/siri/h/images/overview/workout_tile_2__fduarvg890qe_large_2x.png"
              className="w-10 h-10 rounded-full shadow object-cover"
              alt="Siri Logo Avatar"
            />
            <div>
              <p className="font-bold text-sm">Siri</p>
            </div>
          </div>
          <audio
            ref={audioRef}
            src={
              "https://snjzgrnhlqngthyxcutc.supabase.co/storage/v1/object/sign/cdn/audio/siri-voice.mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjZG4vYXVkaW8vc2lyaS12b2ljZS5tcDMiLCJpYXQiOjE3MjU5NjQyNzQsImV4cCI6MzE1NTI5NDQyODI3NH0.oKK2Mg-r-jl5UITWNG3WYmxLNlwruaPkzRK96QQ6Q2c&t=2024-09-10T10%3A31%3A14.272Z"
            }
            onEnded={handleAudioEnded1}
            className="hidden"
          ></audio>
          <Button
            size={"icon"}
            className="rounded-full size-8 items-center justify-center"
            onClick={handlePlayPauseAudio1}
          >
            {isPlayingAudio1 ? <FaPause /> : <FaPlay />}
          </Button>
        </div>
      </BlurFade>
    </div>
  );
};
