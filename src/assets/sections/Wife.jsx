import React from 'react'

function Wife() {
  return (
    <section
      id="wife"
      aria-labelledby="wife-title"
      className="bg-black/80 flex flex-col md:flex-row items-center justify-center p-6 md:p-10 h-screen snap-start text-white"
    >
      <div className="flex justify-center md:justify-end mb-6 md:mb-0">
        <img
          src="/Arisu.jpg"         
          alt="My Wife"
          className="w-64 h-72 sm:w-80 sm:h-96 md:w-[520px] md:h-[560px] object-cover rounded-2xl shadow-lg border-4 border-white"
        />
      </div>

      <div className="flex flex-col max-w-md md:ml-8 text-center md:text-left">
        <h2 id="wife-title" className="sm:text-7xl font-bold mb-4">
          My Wife!
        </h2>

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
          >
            VNDB
          </a>
          <a
            href="https://circus-co.jp/product/dc4ph/character/arisu/"
            className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition"
            target="_blank"
          >
            Official Website
          </a>
        </div>
      </div>
    </section>
  )
}

export default Wife
