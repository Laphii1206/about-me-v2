import React from 'react'
import Project from '../Project/Project.jsx'

function OsuCommunity() {
  return (
      <div className="bg-black/80 p-6 sm:p-10 min-h-screen snap-start text-white">
        <h1 className="text-xl sm:text-2xl font-bold mb-6 text-center">
          What have I done for the osu! Community
        </h1>
        <Project />
      </div>  )
}

export default OsuCommunity