import { useState, useCallback, useRef } from "react";
import { btnStyle } from "../Button/Button";
const beststaff = "/beststaff2020.webp";
const beststaff1 = "/beststaff2022.webp";
const Laphii = "/Laphii.webp";
const suika = "/suika.webp";
const arona = "/aronaStaff.mp4";

type Tournament = {
  title: string;
  description: string;
  forum?: string;
  images: string[];
};

type Preview = { src: string; alt: string };

const TOURNAMENTS: Tournament[] = [
  {
    title: "Osu! Malaysia Tournament 2020 Best Staff",
    description: "Awarded for outstanding contribution as a staff member.",
    forum: "https://osu.ppy.sh/community/forums/topics/1062405?n=1",
    images: [beststaff],
  },
  {
    title: "Osu! Malaysia Tournament 2022 Best Staff",
    description: "Awarded for outstanding contribution as a staff member.",
    forum: "https://osu.ppy.sh/community/forums/topics/1584850?n=1",
    images: [beststaff1],
  },
  {
    title: "Summer Osu Cup 4",
    description: "Summer when is SOC5?",
    forum: "https://osu.ppy.sh/community/forums/topics/1769310?n=1",
    images: [Laphii],
  },
  {
    title: "Suika's Drunken Suiji Cup",
    description: "Join mid-way helping realshin to playtest replay this out of no where",
    forum: "https://osu.ppy.sh/community/forums/topics/1851914?n=1",
    images: [suika],
  },
  {
    title: "osu! Battle Archive Malaysia",
    description: "Nice and fun tournament hosted by lous",
    forum: "https://osu.ppy.sh/community/forums/topics/1393142?n=1",
    images: [arona],
  },
];

const isVideo = (src: string) => src.endsWith(".mp4");

function Media({ src, alt, className, loading }: Preview & { className: string; loading?: "lazy" }) {
  return isVideo(src) ? (
    <video src={src} aria-label={alt} autoPlay muted loop playsInline className={className} />
  ) : (
    <img src={src} alt={alt} loading={loading} className={className} />
  );
}

function TournamentCard({ item, onImageClick }: { item: Tournament; onImageClick: (preview: Preview) => void }) {
  return (
    <article className="flex flex-col bg-gray-800 rounded-lg overflow-hidden shadow-[0_0_0_1px_oklch(1_0_0/0.08)] hover:shadow-[0_0_0_1px_oklch(1_0_0/0.13)] transition-shadow duration-150 ease-out">
      {item.images.map((image) => (
        <button
          key={image}
          type="button"
          aria-label={`Enlarge ${item.title} image`}
          className="group block overflow-hidden bg-black/40 cursor-zoom-in"
          onClick={() => onImageClick({ src: image, alt: item.title })}
        >
          <Media
            src={image}
            alt={item.title}
            loading="lazy"
            className="w-full aspect-video object-contain transition-transform duration-150 ease-out group-hover:scale-110"
          />
        </button>
      ))}

      <div className="px-6 py-4">
        <h3 className="font-bold text-lg mb-2 text-white">
          {item.title}
        </h3>
        <p className="text-gray-300">{item.description}</p>
      </div>

      {item.forum && (
        <div className="mt-auto px-6 pb-4">
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

  const openModal = useCallback((next: Preview) => {
    setPreview(next);
    dialogRef.current?.showModal();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {TOURNAMENTS.map((item) => (
          <TournamentCard key={item.title} item={item} onImageClick={openModal} />
        ))}
      </div>

      <dialog
        ref={dialogRef}
        aria-label={preview?.alt}
        className="preview m-auto p-0 bg-transparent max-w-[90vw] max-h-[90vh] overflow-visible"
        onClick={() => dialogRef.current?.close()}
      >
        {preview && (
          <Media
            src={preview.src}
            alt={preview.alt}
            className="block max-w-[90vw] max-h-[90vh] md:max-w-[60vw] rounded-lg shadow-xl outline outline-1 -outline-offset-1 outline-white/10"
          />
        )}
      </dialog>
    </>
  );
}
