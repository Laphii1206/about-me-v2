import Button from '../Button/Button'
import { delay } from '../delay'

function Heading() {
  return (
    <section id="home" className="flex-1 flex">
      <div className="bg-ink/70 flex-1 flex items-center justify-center text-center text-white px-4 pt-20 pb-6">
        <div className="space-y-5">
          <p className="hero-enter text-xl sm:text-2xl text-white/70">Hi, this is</p>
          <h1 className="hero-enter text-5xl sm:text-8xl font-bold" style={delay(100)}>Laphii</h1>
          <p className="hero-enter text-xl sm:text-3xl" style={delay(200)}>
            Visual Novel Reader and an <span className="whitespace-nowrap">ex-osu!</span> Tournament Staff
          </p>
          <div className="hero-enter" style={delay(300)}>
            <Button />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Heading
