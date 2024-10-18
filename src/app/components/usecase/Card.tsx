import React, { useState } from "react";
import AudioMarketing from "@/assets/mark.mp3";
import AudioNarrator from "@/assets/narrator.mp3";
import CustomerNarrator from "@/assets/customer.mp3";
import CoachAudio from "@/assets/coach.mp3";
import PodAudio from "@/assets/podcast.mp3";
import VendorAudio from "@/assets/vendor.mp3";
import { Button } from "@/components/ui/button";
import { FaPause, FaPlay } from "react-icons/fa";
import BlurFade from "@/components/magicui/blur-fade";
import AudioPlayer from "./AudioPlayer";

interface Track {
  title: string;
  description: string;
  audio: string;
  musicAudio: string;
  img: string;
  bgColor: string;
}

const tracks: Track[] = [
  {
    title: "Marketing",
    description:
      "As a marketing professional, I excel at creating captivating campaigns and engaging with clients effectively. With the right tools and strategies, I can bring my ideas to life and drive impactful results.",
    audio: AudioMarketing,
    musicAudio:
      "https://murf.ai/public-assets/new-home/usecase_audios/music/product_developer_music_2.mp3",
    img: "https://cdn.prod.website-files.com/62161dfeaa650ac5bb2a4d49/65f92d10abfa235decaa192c_us_product_developer%402x.webp",
    bgColor: "",
  },
  {
    title: "Narrator",
    description:
      "As a narrator, I bring stories to life with engaging and dynamic voiceovers. Whether it's for audiobooks, documentaries, or any other narrative content, my voice adds depth and emotion to the storytelling experience.",
    audio: AudioNarrator,
    musicAudio:
      "https://murf.ai/public-assets/new-home/usecase_audios/music/author_music.mp3",
    img: "https://cdn.prod.website-files.com/62161dfeaa650ac5bb2a4d49/65f92cce3e9e9384e38e4e74_us_educator%402x.webp",
    bgColor: "bg-yellow-100",
  },
  {
    title: "Customer Service",
    description:
      "As a customer service representative, I bring solutions to life with engaging and dynamic interactions. Whether it's resolving issues, answering questions, or providing helpful information, my approach adds a personal touch and ensures a positive experience for every customer.",
    audio: CustomerNarrator,
    musicAudio: "",
    img: "https://cdn.prod.website-files.com/62161dfeaa650ac5bb2a4d49/65f92c48405ebd03bef32fa6_us_customer_support%402x.webp",
    bgColor: "bg-green-100",
  },
  {
    title: "Corporate Coach",
    description:
      "As a corporate coach, I bring strategies to life with engaging and dynamic sessions. Whether it's starting a business, developing leadership skills, or making your dreams a reality, my personalized approach inspires and empowers. Together, we'll turn your aspirations into achievements.",
    audio: CoachAudio,
    musicAudio:
      "https://murf.ai/public-assets/new-home/usecase_audios/music/corporate_coach_music.mp3",
    img: "https://cdn.prod.website-files.com/62161dfeaa650ac5bb2a4d49/65f92c77f4add725aa6068e5_us_corporate_coach%402x.webp",
    bgColor: "bg-blue-100",
  },
  {
    title: "Podcast",
    description:
      "As the new co-host of 'Wander and Wonder,' I bring stories to life with engaging and dynamic episodes. Whether it's exploring hidden gems, sharing travel experiences, or connecting with nature, my adventurous spirit inspires and relaxes. Together, we'll embark on journeys that turn your dreams into reality.",
    audio: PodAudio,
    musicAudio:
      "https://murf.ai/public-assets/new-home/usecase_audios/music/podcast_music.mp3",
    img: "https://cdn.prod.website-files.com/62161dfeaa650ac5bb2a4d49/65f92c669102da8859ee6797_us_podcaster%402x.webp",
    bgColor: "bg-[#f5d0fe]",
  },
  {
    title: "Vendor",
    description:
      "Introducing Vendor’s new Raspberry Truffle Bliss! This flavor combines sweet raspberry with silky truffle for an unforgettable taste experience. Discover pure indulgence and let every bite transport you to a world of bliss.",
    audio: VendorAudio,
    musicAudio:
      "https://murf.ai/public-assets/new-home/usecase_audios/music/marketer_music.mp3",
    img: "https://cdn.prod.website-files.com/62161dfeaa650ac5bb2a4d49/65f92c5c37abbc1c8ac51af5_us_marketer%402x.webp",
    bgColor: "bg-cyan-100",
  },
];

export const CardVoice: React.FC = () => {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const handlePlayPause = (index: number) => {
    if (playingIndex !== null && playingIndex !== index) {
      setPlayingIndex(null);
      setTimeout(() => setPlayingIndex(index), 0); // delay to ensure the previous audio stops before starting a new one
    } else {
      setPlayingIndex(playingIndex === index ? null : index);
    }
  };

  return (
    <>
      {tracks.map((item, index) => {
        const isPlaying = playingIndex === index;
        return (
          <div
            key={index}
            className={`${"lg.min-w-[190px] lg:max-w-[400px]"} p-8 transition-all duration-900 ease-in-out hover:shadow-lg cursor-pointer flex flex-col items-center justify-center gap-5 border border-[#1A1A1A] flex-1 `}
          >
            <BlurFade delay={index * 0.1} inView>
              <div className="flex">
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-center gap-5">
                    <img
                      src={item.img}
                      className="w-40 mt-4"
                      alt={item.title}
                    />
                    <div>{item.title}</div>
                    <Button
                      className="rounded-full"
                      size={"sm"}
                      variant={"outline"}
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePlayPause(index);
                      }}
                    >
                      {!isPlaying ? (
                        <span className="flex items-center gap-2">
                          <FaPlay size={12} />
                          Play
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          {" "}
                          <FaPause size={12} />
                          Pause
                        </span>
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </BlurFade>
          </div>
        );
      })}
      {playingIndex !== null && (
        <AudioPlayer
          audioSrc={tracks[playingIndex].audio}
          musicSrc={tracks[playingIndex].musicAudio}
          playing={playingIndex !== null}
          onEnd={() => setPlayingIndex(null)}
        />
      )}
    </>
  );
};
