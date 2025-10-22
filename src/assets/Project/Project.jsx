import React from 'react'
import beststaff from '/beststaff2020.png'
import beststaff1 from '/beststaff2022.png'
import Laphii from '/Laphii.png'

function Project() {
  return (
    <div className="grid grid-cols-3 grid-rows-1 gap-2 p-4">
      <img
        src={beststaff}
        alt="Best Staff 2020"
        className="object-cover transition-transform duration-300 hover:scale-110"
      />
      <img
        src={beststaff1}
        alt="Best Staff 2022"
        className="object-cover transition-transform duration-300 hover:scale-110"
      />
      <img
        src={Laphii}
        alt="Laphii"
        className="object-cover transition-transform duration-300 hover:scale-110"
      />
    </div>
  )
}

export default Project
