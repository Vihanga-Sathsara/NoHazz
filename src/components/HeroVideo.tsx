import { useEffect, useRef, useState } from "react";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) video.play();
  }, []);

  const unlockSound = async () => {
    if (unlocked) return;

    const audio = audioRef.current;
    const video = videoRef.current;

    if (!audio || !video) return;

    try {
      audio.currentTime = video.currentTime;
      await audio.play();

      setUnlocked(true);
    } catch (err) {
      console.log("Blocked by browser:", err);
    }
  };

  return (
    <div
      className="w-full aspect-video relative overflow-hidden"
      onClick={unlockSound}
    >

      {/* VIDEO */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="https://res.cloudinary.com/dvnoyis73/video/upload/q_auto/f_auto/v1778479442/DREAMLIFE.LK_NOHAZZ_WEB_LOOP_wll32w.mp4" />
      </video>

      {/* AUDIO */}
      <audio
        ref={audioRef}
        loop
        src="https://res.cloudinary.com/dvnoyis73/video/upload/q_auto/f_auto/v1778510733/DREAMLIFE.LK_NOHAZZ_WEB_LOOP_wll32w_eh4zj4.mp3"
      />

      {/* Hint UI */}
      {!unlocked && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 text-white text-lg">
          Click anywhere to enable sound 🔊
        </div>
      )}

    </div>
  );
}