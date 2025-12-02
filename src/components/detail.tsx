import { motion } from "framer-motion";
import { useMemo, useCallback } from "react";

const colors = ["bg-blue-500/25", "bg-violet-500/25", "bg-cyan-500/25", "bg-pink-500/25", "bg-emerald-500/25"];
const blobsSize = 60;

const seededRandom = (seed: number) => {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return x - Math.floor(x);
};

export const Detail = () => {
  const blobs = useMemo(() => {
    return Array.from({ length: blobsSize }, (_, i) => {
      const baseSeed = i * 1.618;

      const size = Math.floor(seededRandom(baseSeed) * 120) + 80;
      const color = colors[Math.floor(seededRandom(baseSeed * 2) * colors.length)];

      const verticalZone = i % 3;
      const top = `${seededRandom(baseSeed * 3) * 33 + verticalZone * 33}%`;
      const left = `${seededRandom(baseSeed * 4) * 100}%`;

      const duration = Math.floor(seededRandom(baseSeed * 5) * 20) + 15;
      const blur = seededRandom(baseSeed * 6) > 0.5 ? "blur-2xl" : "blur-3xl";

      const x1 = seededRandom(baseSeed * 7) * 60 - 30;
      const x2 = seededRandom(baseSeed * 8) * 60 - 30;
      const y1 = seededRandom(baseSeed * 9) * 40 - 20;
      const y2 = seededRandom(baseSeed * 10) * 40 - 20;

      return {
        id: i,
        size,
        color,
        top,
        left,
        duration,
        blur,
        x: [0, x1, x2, 0],
        y: [0, y1, y2, 0],
      };
    });
  }, []);

  const BlobItem = useCallback(
    ({ blob }: any) => (
      <motion.div
        className={`absolute rounded-full ${blob.color} ${blob.blur}`}
        style={{
          width: blob.size,
          height: blob.size,
          top: blob.top,
          left: blob.left,
          willChange: "transform, opacity",
        }}
        animate={{
          x: blob.x,
          y: blob.y,
          scale: [1, 1.05, 0.95, 1],
          opacity: [0.3, 0.7, 0.5, 0.3],
        }}
        transition={{
          duration: blob.duration,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "loop",
        }}
        initial={false}
        layout={false}
      />
    ),
    []
  );

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      {blobs.map((blob) => (
        <BlobItem key={blob.id} blob={blob} />
      ))}
    </div>
  );
};
