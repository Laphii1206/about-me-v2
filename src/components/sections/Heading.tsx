import type { CSSProperties } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import Button from '../Button/Button'

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties

function Heading() {
  return (
    <header id="home">
      <div className="relative bg-black/80 h-screen w-full flex items-center justify-center text-center text-white snap-start px-4">
        <div className="space-y-5">
          <p className="hero-enter text-xl sm:text-2xl text-white/70">Hi, this is</p>
          <h1 className="hero-enter text-5xl sm:text-8xl font-bold" style={delay(100)}>Laphii</h1>
          <p className="hero-enter text-xl sm:text-3xl" style={delay(200)}>
            Visual Novel Reader and an ex-osu! Tournament Staff
          </p>
          <div className="hero-enter" style={delay(300)}>
            <Button />
          </div>
        </div>
        <a
          href="#wife"
          aria-label="Scroll to the next section"
          className="hero-enter absolute bottom-6 left-1/2 -translate-x-1/2 p-3 text-white/60 hover:text-white transition-colors duration-150 ease-out"
          style={delay(450)}
        >
          <FaChevronDown />
        </a>
      </div>
    </header>
  )
}

export default Heading
