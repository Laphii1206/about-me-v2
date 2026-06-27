import React from 'react'
import { SiOsu, SiX, SiSteam, SiGoogleSheets } from 'react-icons/si'
import { FaTrophy, FaBook } from 'react-icons/fa'

export const btnStyle = "inline-flex items-center justify-center px-4 py-2 bg-blue-600 ease-in-out delay-75 hover:bg-blue-700 text-white text-sm font-medium rounded-md active:scale-95 transition-all duration-200";

const content = [
  { label: "osu!", url: "https://osu.ppy.sh/users/9364594", icon: <SiOsu /> },
  { label: "VNDB", url: "https://vndb.org/u228751/ulist?f=&mul=1&p=1&s=3q02", icon: <FaBook /> },
  { label: "osu! Tournament History", url: "https://docs.google.com/spreadsheets/d/1dCUqfqQC7rHrAj6Tg9IQXhuwJd_hIWo1mj7pRJ0q1OE/edit#gid=1040639049", icon: <SiGooglesheets /> },
  { label: "X", url: "https://x.com/nishikilaphii", icon: <SiX /> },
  { label: "Steam", url: "https://steamcommunity.com/id/laphii", icon: <SiSteam /> },
];

const Button = () => {
  return (
    <div className="mt-5 flex flex-wrap justify-center gap-2 px-3">
      {content.map(({ label, url, icon }) => (
        <button
          key={label}
          className={btnStyle}
          onClick={() => window.open(url, "_blank")}
        >
          {icon}
          <span className="ml-2">{label}</span>
        </button>
      ))}
    </div>
  )
}

export default Button

