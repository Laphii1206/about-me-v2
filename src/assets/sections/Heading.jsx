import React from 'react'
import Button from '../Button/Button.jsx'

function Heading() {
  return (
    <header id="home">
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
    </header>
  )
}

export default Heading