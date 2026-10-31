import { useState, useRef } from "react";
import { FiX } from "react-icons/fi";
import { btnStyle, focusRing, surfaceStyle } from "../Button/Button";
import { delay } from "../delay";

type Tournament = {
  title: string;
  description: string;
  forum?: string;
  image: string;
};

type Preview = { src: string; alt: string };

const TOURNAMENTS: Tournament[] = [
  {
    title: "osu! Malaysia Tournament 2020 Best Staff",
    description: "Awarded for outstanding contribution as a staff member.",
    forum: "https://osu.ppy.sh/community/forums/topics/1062405?n=1",
    image: "/beststaff2020.webp",
  },
  {
    title: "osu! Malaysia Tournament 2022 Best Staff",
    description: "Awarded for outstanding contribution as a staff member.",
    forum: "https://osu.ppy.sh/community/forums/topics/1584850?n=1",
    image: "/beststaff2022.webp",
  },
  {
    title: "Summer Osu! Cup 4",
    description: "Summer when is SOC5?",
    forum: "https://osu.ppy.sh/community/forums/topics/1769310?n=1",
    image: "/Laphii.webp",
  },
  {
    title: "Suika's Drunken Suiji Cup",
    description: "Join mid-way helping realshin to playtest replay this out of nowhere",
    forum: "https://osu.ppy.sh/community/forums/topics/1851914?n=1",
    image: "/suika.webp",
  },
  {
    title: "osu! Battle Archive Malaysia",
    description: "Nice and fun tournament hosted by lous",
    forum: "https://osu.ppy.sh/community/forums/topics/1393142?n=1",
    image: "/aronaStaff.mp4",
  },
];

const isVideo = (src: string) => src.endsWith(".mp4");
const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

function Media({ src, alt, className, loading, preview }: Preview & { className: string; loading?: "lazy"; preview?: boolean }) {
  if (!isVideo(src)) return <img src={src} alt={alt} loading={loading} className={className} />;
  const playOnHover = !preview && !reducedMotion;
  return (
    <video
      src={`${src}#t=0.1`}
      aria-label={alt}
      autoPlay={preview && !reducedMotion}
      muted
      loop
      playsInline
      preload="metadata"
      className={className}
      onMouseEnter={playOnHover ? (e) => { e.currentTarget.play().catch(() => undefined) } : undefined}
      onMouseLeave={playOnHover ? (e) => e.currentTarget.pause() : undefined}
    />
  );
}

function TournamentCard({ item, i, onImageClick }: { item: Tournament; i: number; onImageClick: (preview: Preview) => void }) {
  return (
    <article
      style={delay(i * 60)}
      className={`hero-enter flex flex-col ${surfaceStyle} hover:border-white/20 motion-safe:hover:-translate-y-0.5 transition-[border-color,translate] duration-150 ease-out`}
    >
      <button
        type="button"
        aria-label={`Enlarge ${item.title} image`}
        className={`group block overflow-hidden rounded-t-xl bg-ink/40 cursor-zoom-in ${focusRing}`}
        onClick={() => onImageClick({ src: item.image, alt: item.title })}
      >
        <Media
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="w-full aspect-video object-contain transition-transform duration-150 ease-out motion-safe:group-hover:scale-110"
        />
      </button>

      <div className="px-4 py-4">
        <h2 className="font-bold text-lg mb-2 text-white">
          {item.title}
        </h2>
        <p className="text-silver">{item.description}</p>
      </div>

      {item.forum && (
        <div className="mt-auto px-4 pb-4">
          <a
            href={item.forum}
            target="_blank"
            rel="noopener noreferrer"
            className={btnStyle}
          >
            Forum Post
          </a>
        </div>
      )}
    </article>
  );
}

export default function Project() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [preview, setPreview] = useState<Preview | null>(null);

  const openModal = (next: Preview) => {
    setPreview(next);
    dialogRef.current?.showModal();
  };

  return (
    <>
      <div className="max-w-6xl mx-auto grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {TOURNAMENTS.map((item, i) => (
          <TournamentCard key={item.title} item={item} i={i} onImageClick={openModal} />
        ))}
      </div>

      <dialog
        ref={dialogRef}
        aria-label={preview?.alt}
        className="preview m-auto p-0 bg-transparent max-w-[90vw] max-h-[90vh] overflow-visible cursor-zoom-out"
        onClick={() => dialogRef.current?.close()}
        onTransitionEnd={(e) => { if (!e.currentTarget.open) setPreview(null) }}
      >
        {preview && (
          <>
            <Media
              src={preview.src}
              alt={preview.alt}
              preview
              className="block max-w-[90vw] max-h-[90vh] md:max-w-[60vw] rounded-lg shadow-xl outline outline-1 -outline-offset-1 outline-white/10"
            />
            <button
              type="button"
              aria-label="Close preview"
              className={`absolute -top-3 -right-3 inline-flex items-center justify-center size-9 pointer-coarse:size-11 rounded-full border border-white/10 bg-surface text-white ${focusRing}`}
            >
              <FiX aria-hidden="true" />
            </button>
          </>
        )}
      </dialog>
    </>
  );
}
