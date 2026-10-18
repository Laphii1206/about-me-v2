import type { CSSProperties } from 'react'
import Button from '../Button/Button'

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties

function Heading() {
  return (
    <header id="home" className="flex-1 flex">
      <div className="bg-black/80 flex-1 flex items-center justify-center text-center text-white px-4 pt-16 pb-6">
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
      </div>
    </header>
  )
}

export default Heading
