"use client";
import React, { useRef, useState, useEffect } from "react";
import { HiOutlineVolumeUp, HiOutlineVolumeOff } from "react-icons/hi";

export default function GalaxySound() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(0.3);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.muted = muted;
    }
  }, [volume, muted]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      const p = audioRef.current.play();
      if (p && p.then) p.catch(() => {}); // ignore autoplay reject
      setPlaying(true);
    }
  };

  const toggleMute = () => {
    setMuted((m) => !m);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-3">
      <audio
        ref={audioRef}
        loop
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        preload="auto"
      />

      <button
        onClick={togglePlay}
        aria-label={playing ? "Pause ambient sound" : "Play ambient sound"}
        className="bg-tertiary/80 backdrop-blur-sm p-3 rounded-full shadow-lg text-white hover:scale-105 transition-transform"
      >
        {playing ? <HiOutlineVolumeUp size={20} /> : <HiOutlineVolumeOff size={20} />}
      </button>

      <div className="hidden sm:flex items-center gap-2 bg-tertiary/80 p-2 rounded-md">
        <input
          aria-label="galaxy volume"
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
          className="w-24"
        />
        <button onClick={toggleMute} className="text-sm text-secondary">
          {muted ? "Unmute" : "Mute"}
        </button>
      </div>
    </div>
  );
}
