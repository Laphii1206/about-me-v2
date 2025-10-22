import { useState } from 'react'
import './App.css'
import cover from '/cover.jpg'
import Button from './assets/button/button.jsx'
import arisu from '/Arisu.jpg'
function App() {

  return (
    <>
      <div
        className="relative h-screen bg-cover "
        style={{ backgroundImage: `url(${cover})` }}
      >

        <div className="tracking-normal h-full w-full bg-black/50 backdrop-blur-[1px] flex items-center justify-center text-center text-white">
          <div className="leading-[3] space-y-5">
            <p className="text-4xl">Hi This is</p>
            <h1 className="text-8xl font-bold">Laphii</h1>
            <p className="text-4xl">Visual Novel Reader and a ex-osu! Tournament Staff</p>
            <Button />
          </div>
        </div>
      </div>


      <div className="flex items-center justify-center p-10">
        <div className="flex items-start gap-6">
          <div className="flex justify-end">
            <img
              src={arisu}
              alt="My Wife"
              className="w-[520px] h-[560px] object-cover rounded-2xl shadow-lg border-4 border-white"
            />
          </div>

          <div className="flex flex-col max-w-md my-10">
            <p className="text-5xl font-bold mb-4">My Wife!</p>

            <p className="text-sm mb-4 font-semibold">
              天然でお日様のように明るく、周囲から好かれる生まれながらのお嬢様。
              飾らない人柄が男女ともに人気で、学園のアイドル的な存在になっている。
              特定の恋人を作る気はないようだが、
              お人好しで告白を断るのにいつも苦労しているらしい。
            </p>
            <div className="text-[22px] mb-5 space-y-2">
              <p>
                <strong>Measurements:</strong> Height: 150cm, Weight: 41kg
              </p>
              <p>
                <strong>Affiliation:</strong> 香々見学園本校1年1組
              </p>
              <p>
                <strong>Birthday:</strong> 8 December
              </p>
              <p>
                <strong>Personality:</strong> Cheerful, Sweets Lover
              </p>
              <p>
                <strong>Favourite:</strong> Alice in Wonderland, Mystery Novel
              </p>
              <p>
                <strong>Dislike:</strong> Loud Noise (Thunder etc.)
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href="https://vndb.org/c77134?view=0S-rr2moiyj"
                className="bg-blue-500 text-white py-2 px-10 rounded-lg hover:bg-blue-600 transition"
              >
                VNDB
              </a>
              <a
                href="https://circus-co.jp/product/dc4ph/character/arisu"
                className="bg-blue-500 text-white py-2 px-10 rounded-lg hover:bg-blue-600 transition"
              >
                Official Website
              </a>
            </div>
          </div>
        </div>
      </div>






    </>
  )
}

export default App
