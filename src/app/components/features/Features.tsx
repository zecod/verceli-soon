import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { FaPlay, FaPause } from "react-icons/fa";
import { ChevronDown, ChevronRight, Plus } from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";

export const Features: React.FC = () => {
  const [isPlayingAudio1, setIsPlayingAudio1] = useState(false);
  const [isPlayingAudio2, setIsPlayingAudio2] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const audioRef2 = useRef<HTMLAudioElement>(null);

  const handlePlayPauseAudio1 = () => {
    if (isPlayingAudio1) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
      audioRef2.current?.pause();
      setIsPlayingAudio2(false);
    }
    setIsPlayingAudio1(!isPlayingAudio1);
  };

  const handlePlayPauseAudio2 = () => {
    if (isPlayingAudio2) {
      audioRef2.current?.pause();
    } else {
      audioRef2.current?.play();
      audioRef.current?.pause();
      setIsPlayingAudio1(false);
    }
    setIsPlayingAudio2(!isPlayingAudio2);
  };

  const handleAudioEnded1 = () => {
    setIsPlayingAudio1(false);
  };

  const handleAudioEnded2 = () => {
    setIsPlayingAudio2(false);
  };

  return (
    <div className="border-x border-b p-8 flex flex-col justify-center relative">
      <Plus className="absolute -top-3 -left-3 text-zinc-600" />

      <Plus className="absolute -bottom-3 -right-3 text-zinc-600 " />

      <BlurFade
        delay={0.25}
        inView
        className="my-24 flex flex-col items-center"
      >
        <div className="text-[32px] md:text-[46px] mb-2 md:leading-[67.2px] tracking-[-1.4px] lg:text-left text-center">
          Realistic Voice Clones for All Your Projects
        </div>
        <BlurFade delay={0.25} inView>
          <p className="text-[16px] md:text-[20px] md:leading-[36px] tracking-[0.1px] text-[#A1A1A1] max-w-xl text-center">
            Generate realistic voice clones for all your projects, with clear
            and natural sound quality tailored to your needs.
          </p>
        </BlurFade>
      </BlurFade>

      <div className="flex lg:flex-row flex-col justify-center items-center gap-2 mb-24">
        <BlurFade delay={0.25} inView className="w-full lg:w-auto">
          <div className="text-orange-600 dark:bg-orange-950 bg-orange-200 w-fit px-2 rounded-full">
            Original
          </div>
          <div className="flex items-center justify-between mt-5 border p-2 rounded-lg lg:w-[400px] w-full">
            <div className="flex items-center gap-2">
              <img
                src="https://snjzgrnhlqngthyxcutc.supabase.co/storage/v1/object/sign/cdn/audio/cr7.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjZG4vYXVkaW8vY3I3LmpwZyIsImlhdCI6MTcyNTgxNDEyMywiZXhwIjozMTU1Mjk0Mjc4MTIzfQ.5wVTbYBRR9_dAj6h3hWs-GTCy8SSsmXtfACbAWXBfwA&t=2024-09-08T16%3A48%3A43.446Z"
                className="w-10 h-10 rounded-full bg-white shadow object-cover"
                alt="Mr. Morgan Avatar"
              />
              <div>
                <p className="font-bold text-sm">Cristiano Ronaldo</p>
              </div>
            </div>
            <audio
              ref={audioRef}
              src={
                "https://snjzgrnhlqngthyxcutc.supabase.co/storage/v1/object/sign/cdn/audio/ronaldo-origin.MP3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjZG4vYXVkaW8vcm9uYWxkby1vcmlnaW4uTVAzIiwiaWF0IjoxNzI1ODEzNzk1LCJleHAiOjMxNzA1NDI3Nzc5NX0.t8tKgsJ_Rp72ge1hb8JOnx9hszfGcFqWeVrAZEL8zvQ&t=2024-09-08T16%3A43%3A15.064Z"
              }
              onEnded={handleAudioEnded1}
              className="hidden"
            ></audio>
            <Button
              size={"icon"}
              className="rounded-full dark:bg-black dark:text-white"
              onClick={handlePlayPauseAudio1}
            >
              {isPlayingAudio1 ? <FaPause /> : <FaPlay />}
            </Button>
          </div>
        </BlurFade>

        <div className="flex items-center justify-center  my-5 md:mt-10">
          <ChevronRight
            size={30}
            className="text-muted-foreground lg:block hidden"
          />
          <ChevronDown
            size={26}
            className="text-muted-foreground lg:hidden block"
          />
        </div>

        <BlurFade delay={0.35} inView className="w-full lg:w-auto">
          <div className="text-yellow-600 dark:bg-yellow-950 bg-yellow-200 w-fit px-2 rounded-full">
            Clone
          </div>
          <div className="flex items-center justify-between mt-5 border p-2 rounded-lg lg:w-[400px] w-full">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500" />
              <div>
                <p className="font-bold text-sm">Cristiano Ronaldo</p>
              </div>
            </div>
            <audio
              ref={audioRef2}
              src={
                "https://snjzgrnhlqngthyxcutc.supabase.co/storage/v1/object/sign/cdn/audio/clone-ronaldo.mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjZG4vYXVkaW8vY2xvbmUtcm9uYWxkby5tcDMiLCJpYXQiOjE3MjU4MTM4MzgsImV4cCI6MzE1NTI5NDI3NzgzOH0.s755bdss9L_ivYyR0zdJmq7G3S5SU-3S-PdqwohhZhg&t=2024-09-08T16%3A43%3A58.235Z"
              }
              onEnded={handleAudioEnded2}
              className="hidden"
            ></audio>
            <Button
              size={"icon"}
              className="rounded-full dark:bg-black dark:text-white"
              onClick={handlePlayPauseAudio2}
            >
              {isPlayingAudio2 ? <FaPause /> : <FaPlay />}
            </Button>
          </div>
        </BlurFade>
      </div>
    </div>
  );
};
