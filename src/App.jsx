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
        className="min-h-screen bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${cover})` }}
      >
        {/* Section 1 */}
        <div className="bg-black/80 h-screen w-full flex items-center justify-center text-center text-white snap-start px-4">
          <div className="space-y-5">
            <p className="text-2xl sm:text-4xl">Hi This is</p>
            <h1 className="text-5xl sm:text-8xl font-bold">Laphii</h1>
            <p className="text-xl sm:text-3xl">
              Visual Novel Reader and an ex-osu! Tournament Staff
            </p>
            <Button />
          </div>
        </div>

        {/* Section 2 */}
        <article className="bg-black/80 flex flex-col md:flex-row items-center justify-center p-6 md:p-10 h-screen snap-start text-white">
          <div className="flex justify-center md:justify-end mb-6 md:mb-0">
            <img
              src={arisu}
              alt="My Wife"
              className="w-64 h-72 sm:w-80 sm:h-96 md:w-[520px] md:h-[560px] object-cover rounded-2xl shadow-lg border-4 border-white"
            />
          </div>

          <div className="flex flex-col max-w-md md:ml-8 text-center md:text-left">
            <h1 className="sm:text-7xl font-bold mb-4">My Wife!</h1>

            <p className="text-lg mb-12 font-semibold leading-relaxed">
              天然でお日様のように明るく、周囲から好かれる生まれながらのお嬢様。
              飾らない人柄が男女ともに人気で、学園のアイドル的な存在になっている。
              特定の恋人を作る気はないようだが、
              お人好しで告白を断るのにいつも苦労しているらしい。
            </p>

            <div className="text-lg mb-5 space-y-2">
              <p><strong>Measurements:</strong> Height: 150cm, Weight: 41kg</p>
              <p><strong>Affiliation:</strong> 香々見学園本校1年1組</p>
              <p><strong>Birthday:</strong> 8 December</p>
              <p><strong>Personality:</strong> Cheerful, Sweets Lover</p>
              <p><strong>Favourite:</strong> Alice in Wonderland, Mystery Novel</p>
              <p><strong>Dislike:</strong> Loud Noise (Thunder etc.)</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="https://vndb.org/c77134?view=0S-rr2moiyj"
                className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                VNDB
              </a>
              <a
                href="https://circus-co.jp/product/dc4ph/character/arisu/"
                className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                Official Website
              </a>
            </div>
          </div>
        </article>

        {/* Section 3 */}
        <div className="bg-black/80 p-6 sm:p-10 min-h-screen snap-start text-white">
          <h1 className="text-xl sm:text-2xl font-bold mb-6 text-center">
            What have I done for the osu! Community
          </h1>
          <Project />
        </div>
      </div>
    </>
  )
}

export default App