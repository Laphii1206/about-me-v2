import { FaChevronDown } from 'react-icons/fa'
import Button from '../Button/Button'

function Heading() {
  return (
    <header id="home">
      <div className="relative bg-black/80 h-screen w-full flex items-center justify-center text-center text-white snap-start px-4">
        <div className="space-y-5">
          <p className="text-xl sm:text-2xl text-white/70">Hi, this is</p>
          <h1 className="text-5xl sm:text-8xl font-bold">Laphii</h1>
          <p className="text-xl sm:text-3xl">
            Visual Novel Reader and an ex-osu! Tournament Staff
          </p>
          <Button />
        </div>
        <a
          href="#wife"
          aria-label="Scroll to the next section"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 p-3 text-white/60 hover:text-white transition-colors duration-150 ease-out"
        >
          <FaChevronDown />
        </a>
      </div>
    </header>
  )
}

export default Heading
