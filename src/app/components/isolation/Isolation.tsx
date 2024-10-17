import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { FaPlay, FaPause } from "react-icons/fa";
import { ChevronDown, ChevronRight } from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";

export const Isolation: React.FC = () => {
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
      audioRef.current?.pause(); // Pause the first audio when playing the second
      setIsPlayingAudio1(false); // Ensure the first audio shows as paused
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
    <div className="border-x border-b p-8 flex flex-col justify-center">
      <BlurFade
        delay={0.25}
        inView
        className="my-24 flex flex-col items-center"
      >
        <div className="text-[32px] md:text-[46px] mb-2 md:leading-[67.2px] tracking-[-1.4px] lg:text-left text-center">
          Pure Isolation for Perfect Voice Clones
        </div>
        <BlurFade delay={0.25} inView>
          <p className="text-[16px] md:text-[20px] md:leading-[36px] tracking-[0.1px] text-[#A1A1A1] max-w-xl text-center ">
            Isolate voices to create natural, clear voice clones. Get accurate
            results with easy voice separation.
          </p>
        </BlurFade>
      </BlurFade>

      <div className="flex lg:flex-row flex-col justify-center items-center gap-2 mb-24">
        <BlurFade delay={0.25} inView className="w-full lg:w-auto">
          <div className="text-green-600 dark:bg-green-950 bg-green-200 w-fit px-2 rounded-full">
            Original
          </div>
          <div className="flex items-center justify-between mt-5 border p-2 rounded-lg lg:w-[400px] w-full">
            <div className="flex items-center gap-2">
              <img
                src="https://snjzgrnhlqngthyxcutc.supabase.co/storage/v1/object/sign/cdn/audio/freeman.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjZG4vYXVkaW8vZnJlZW1hbi5qcGVnIiwiaWF0IjoxNzI1Nzk3MjA3LCJleHAiOjMxNzA1NDI2MTIwN30.3OkSVP8Bf512HG-DvtSfvt07iKZxGzylWfhoMtt5kGc&t=2024-09-08T12%3A06%3A47.808Z"
                className="w-10 h-10 rounded-full bg-white shadow object-cover"
                alt="Mr. Morgan Avatar"
              />
              <div>
                <p className="font-bold text-sm">Morgan Freeman</p>
              </div>
            </div>
            <audio
              ref={audioRef}
              src={
                "https://snjzgrnhlqngthyxcutc.supabase.co/storage/v1/object/sign/cdn/audio/morgan.mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjZG4vYXVkaW8vbW9yZ2FuLm1wMyIsImlhdCI6MTcyNTc5NzEzMiwiZXhwIjozMTcwNTQyNjExMzJ9.KPwgN9wVop0Lm4ZDxjBsqX2eBgGWVfb-7TQxBQDI6iM&t=2024-09-08T12%3A05%3A32.337Z"
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

        <div className="flex items-center justify-center my-5 md:mt-10">
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
          <div className="text-indigo-600 dark:bg-indigo-950 bg-indigo-200 w-fit px-2 rounded-full">
            Output
          </div>
          <div className="flex items-center justify-between mt-5 border p-2 rounded-lg lg:w-[400px] w-full">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
              <div>
                <p className="font-bold text-sm">Morgan Freeman</p>
              </div>
            </div>
            <audio
              ref={audioRef2}
              src={
                "https://snjzgrnhlqngthyxcutc.supabase.co/storage/v1/object/sign/cdn/audio/mrs.mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjZG4vYXVkaW8vbXJzLm1wMyIsImlhdCI6MTcyNTc5NzcyMiwiZXhwIjozMTU1Mjk0MjYxNzIyfQ.u-inNrf7W-cbuMxCVdl3HKA_vtwWt5Bk1EzuEVAthno&t=2024-09-08T12%3A15%3A22.773Z"
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
