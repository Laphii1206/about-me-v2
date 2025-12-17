import React from 'react'
import Project from '../Project/Project.jsx'

function OsuCommunity() {
  return (
    <section id="osu-community" aria-labelledby="osu-community-title"
      className="bg-black/80 p-6 sm:p-10 min-h-screen snap-start text-white">
      <h2 id="osu-community-title" className="text-xl sm:text-2xl font-bold mb-6 text-center">
        What have I done for the osu! Community </h2>
      <Project />
    </section>
  )
}

export default OsuCommunity