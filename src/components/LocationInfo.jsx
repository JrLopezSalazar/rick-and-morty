import React from 'react'

const LocationInfo = ({currentLocation}) => {
  
  return (
    <article className="bg-slate-500/30 relative flex items-center flex-col text-white pt-6 mt-7 w-[50%] left-[25%]">
      <h2 className="py-1 font-fira-code font-bold text-xl">{currentLocation?.name}</h2>
      <ul className="items-center flex content-baseline gap-8 p-3 m-3 h-[80px]">
        <li className="justify-center">
          <span className="flex font-fira-code">Type:</span>
          <span className="flex w-[100%] p-2 font-fira-code font-semibold">{currentLocation?.type}</span>
        </li>
        <li className="">
          <span className="flex font-fira-code">Dimension:</span>
          <span className="flex p-2 font-fira-code font-semibold">{currentLocation?.dimension}</span>
        </li>
        <li className="">
          <span className="flex font-fira-code">Population:</span>
          <span className="flex p-2 font-fira-code font-semibold">{currentLocation?.residents.length}</span>
        </li>
      </ul>
    </article> 
  )
}

export default LocationInfo