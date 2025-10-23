import { useState } from 'react'
import './App.css'
import cover from '/cover.jpg'
import Button from './assets/Button/Button.jsx'
import arisu from '/Arisu.jpg'
import Project from './assets/Project/Project.jsx'

function App() {
  return (
    <>
      <div
        className="relative h-screen bg-cover snap-y snap-mandatory overflow-y-scroll scroll-smooth"
        style={{ backgroundImage: `url(${cover})` }}
      >
        <div className="bg-black/80 tracking-normal h-screen w-full backdrop-blur-[1px] flex items-center justify-center text-center text-white snap-start px-4">
          <div className="leading-[2.5] space-y-5">
            <p className="text-2xl sm:text-4xl">Hi This is</p>
            <h1 className="text-5xl sm:text-8xl font-bold">Laphii</h1>
            <p className="text-xl sm:text-3xl">
              Visual Novel Reader and an ex-osu! Tournament Staff
            </p>
            <Button />
          </div>
        </div>

        <article className="bg-black/80 flex flex-col md:flex-row items-center justify-center p-6 md:p-10 h-screen snap-start scroll-smooth text-white">
          <div className="flex justify-center md:justify-end mb-6 md:mb-0">
            <img
              src={arisu}
              alt="My Wife"
              className="w-64 h-72 sm:w-80 sm:h-96 md:w-[520px] md:h-[560px] object-cover rounded-2xl shadow-lg border-4 border-white"
            />
          </div>

          <div className="flex flex-col max-w-md md:ml-8 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">My Wife!</h1>

            <p className="text-xs sm:text-sm mb-4 font-semibold leading-relaxed">
              天然でお日様のように明るく、周囲から好かれる生まれながらのお嬢様。
              飾らない人柄が男女ともに人気で、学園のアイドル的な存在になっている。
              特定の恋人を作る気はないようだが、
              お人好しで告白を断るのにいつも苦労しているらしい。
            </p>

            <div className="text-sm sm:text-base mb-5 space-y-2">
              <p><strong>Measurements:</strong> Height: 150cm, Weight: 41kg</p>
              <p><strong>Affiliation:</strong> 香々見学園本校1年1組</p>
              <p><strong>Birthday:</strong> 8 December</p>
              <p><strong>Personality:</strong> Cheerful, Sweets Lover</p>
              <p><strong>Favourite:</strong> Alice in Wonderland, Mystery Novel</p>
              <p><strong>Dislike:</strong> Loud Noise (Thunder etc.)</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <a
                href="https://vndb.org/c77134?view=0S-rr2moiyj"
                className="bg-blue-500 text-white py-2 px-6 sm:px-10 rounded-lg hover:bg-blue-600 transition text-sm sm:text-base"
                target="_blank"
              >
                VNDB
              </a>
              <a
                href="https://circus-co.jp/product/dc4ph/character/arisu/"
                className="bg-blue-500 text-white py-2 px-6 sm:px-10 rounded-lg hover:bg-blue-600 transition text-sm sm:text-base"
                target="_blank"
              >
                Official Website
              </a>
            </div>
          </div>
        </article>

        <div className="bg-black/80 p-6 sm:p-10 h-screen snap-start scroll-smooth text-white">
          <h1 className="text-xl sm:text-2xl font-bold mb-6 text-center">
            What have I done for the osu! Community
          </h1>
          <Project />
          <div className="text-center font-bold py-16 sm:py-20 space-y-4">
            <p className="text-4xl sm:text-6xl md:text-8xl">This site is still under construction</p>
            <p className="text-4xl sm:text-6xl md:text-8xl">my bad</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
