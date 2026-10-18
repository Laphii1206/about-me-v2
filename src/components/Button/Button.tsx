import { SiOsu, SiX, SiSteam, SiGithub  } from 'react-icons/si'
import { FaBook } from 'react-icons/fa'

export const btnStyle = "inline-flex items-center justify-center px-4 py-2 bg-white/15 backdrop-blur-md shadow-[0_0_0_1px_oklch(1_0_0/0.08)] text-white text-sm font-medium rounded-full active:scale-[0.96] hover:bg-white/25 hover:shadow-[0_0_0_1px_oklch(1_0_0/0.13)] transition-[scale,background-color,box-shadow] duration-150 ease-out";
const content = [
  { label: "osu!", url: "https://osu.ppy.sh/users/9364594", icon: <SiOsu /> },
  { label: "VNDB", url: "https://vndb.org/u228751/ulist?f=&mul=1&p=1&s=3q02", icon: <FaBook /> },
  { label: "Twitter", url: "https://x.com/nishikilaphii", icon: <SiX /> },
  { label: "Steam", url: "https://steamcommunity.com/id/laphii", icon: <SiSteam /> },
  { label: "GitHub", url: "https://github.com/Laphii1206", icon: <SiGithub /> },
];

const Button = () => {
  return (
    <div className="mt-5 flex flex-wrap justify-center gap-2 px-3">
      {content.map(({ label, url, icon }) => (
        <a
          key={label}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${btnStyle} ps-3.5`}
        >
          {icon}
          <span className="ml-2">{label}</span>
        </a>
      ))}
    </div>
  )
}

export default Button

