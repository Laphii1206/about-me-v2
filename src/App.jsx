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
        <div className="bg-black/80 tracking-normal h-screen w-full backdrop-blur-[1px] flex items-center justify-center text-center text-white snap-start">
          <div className="leading-[3] space-y-5">
            <p className="text-4xl">Hi This is</p>
            <h1 className="text-8xl font-bold">Laphii</h1>
            <p className="text-4xl">Visual Novel Reader and a ex-osu! Tournament Staff</p>
            <Button />
          </div>
        </div>

        <article className="bg-black/80 flex items-center justify-center p-10 h-screen snap-start scroll-smooth">
          <div className="flex items-start gap-6">
            <div className="flex justify-end">
              <img
                src={arisu}
                alt="My Wife"
                className="w-[520px] h-[560px] object-cover rounded-2xl shadow-lg border-4 border-white"
              />
            </div>

            <div className="flex flex-col max-w-md my-10">
              <h1 className="text-5xl font-bold mb-4">My Wife!</h1>

              <p className="text-sm mb-4 font-semibold">
                天然でお日様のように明るく、周囲から好かれる生まれながらのお嬢様。
                飾らない人柄が男女ともに人気で、学園のアイドル的な存在になっている。
                特定の恋人を作る気はないようだが、
                お人好しで告白を断るのにいつも苦労しているらしい。
              </p>

              <div className="text-[21px] mb-5 space-y-2">
                <p><strong>Measurements:</strong> Height: 150cm, Weight: 41kg</p>
                <p><strong>Affiliation:</strong> 香々見学園本校1年1組</p>
                <p><strong>Birthday:</strong> 8 December</p>
                <p><strong>Personality:</strong> Cheerful, Sweets Lover</p>
                <p><strong>Favourite:</strong> Alice in Wonderland, Mystery Novel</p>
                <p><strong>Dislike:</strong> Loud Noise (Thunder etc.)</p>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://vndb.org/c77134?view=0S-rr2moiyj"
                  className="bg-blue-500 text-white py-2 px-10 rounded-lg hover:bg-blue-600 transition"
                  target="_blank"
                >
                  VNDB
                </a>
                <a
                  href="https://circus-co.jp/product/dc4ph/character/arisu/"
                  className="bg-blue-500 text-white py-2 px-10 rounded-lg hover:bg-blue-600 transition"
                  target="_blank"
                >
                  Official Website
                </a>
              </div>
            </div>
          </div>
        </article>
        <div className="bg-black/80 p-4 h-screen snap-start scroll-smooth">
          <h1 className="text-2xl font-bold mb-4 text-center">What have I done to the osu! Community</h1>
          <Project />
          <p className="text-center font-bold py-20 text-8xl">This site is still on construction</p>
          <p className="text-center font-bold  text-8xl">my bad</p>
        </div>
      </div>
    </>
  )
}

export default App