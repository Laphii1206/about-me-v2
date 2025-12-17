import React, { useState, useCallback } from "react";
import beststaff from "/beststaff2020.png";
import beststaff1 from "/beststaff2022.png";
import Laphii from "/Laphii.png";
import suika from "/suika.png";
import arona from "/aronaStaff.gif";

const TOURNAMENTS = [
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
    forum: "https://osu.ppy.sh/community/forums/topics/1776033?n=1",
    images: [suika],
  },
  {
    title: "osu! Battle Archive Malaysia",
    description: "Nice and fun tournament hosted by lous",
    forum: "https://osu.ppy.sh/community/forums/topics/1776033?n=1",
    images: [arona],
  },
];

function ImageModal({ src, onClose }) {
  if (!src) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <img
        src={src}
        alt="Preview"
        className="max-w-[60%] max-h-[90%] rounded-lg shadow-xl"
      />
    </div>
  );
}

function TournamentCard({ item, onImageClick }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
      {item.images.map((image, index) => (
        <div
          key={index}
          className="relative group cursor-pointer"
          onClick={() => onImageClick(image)}
        >
          <img
            src={image}
            alt={item.title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      ))}

      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2 text-gray-800 dark:text-white">
          {item.title}
        </h2>
        <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
      </div>

      {item.forum && (
        <div className="px-6 pb-4">
          <a
            href={item.forum}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Forum Post
          </a>
        </div>
      )}
    </div>
  );
}

export default function Project() {
  const [modalImage, setModalImage] = useState(null);

  const openModal = useCallback((src) => setModalImage(src), []);
  const closeModal = useCallback(() => setModalImage(null), []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {TOURNAMENTS.map((item, index) => (
          <TournamentCard key={index} item={item} onImageClick={openModal} />
        ))}
      </div>

      <ImageModal src={modalImage} onClose={closeModal} />
    </>
  );
}
