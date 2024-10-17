import React, { useEffect, useRef } from "react";

interface AudioPlayerProps {
  audioSrc: string;
  musicSrc?: string;
  playing: boolean;
  onEnd: () => void;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({
  audioSrc,
  musicSrc,
  playing,
  onEnd,
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const musicRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    const music = musicRef.current;

    if (playing) {
      audio?.play();
      if (musicSrc) {
        music?.play();
      }
    } else {
      audio?.pause();
      audio!.currentTime = 0;
      if (musicSrc) {
        music?.pause();
        music!.currentTime = 0;
      }
    }

    const handleAudioEnd = () => {
      onEnd();
    };

    audio?.addEventListener("ended", handleAudioEnd);

    return () => {
      audio?.removeEventListener("ended", handleAudioEnd);
    };
  }, [playing, audioSrc, musicSrc, onEnd]);

  return (
    <>
      <audio ref={audioRef} src={audioSrc} />
      {musicSrc && <audio ref={musicRef} src={musicSrc} />}
    </>
  );
};

export default AudioPlayer;
