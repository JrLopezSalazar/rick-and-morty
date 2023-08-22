import React from 'react'

const LocationInfo = ({currentLocation}) => {
  
  return (
    <section className="  flex text-white justify-center my-8 mb-14">
      <div className='container bg-slate-500/30 max-w-[380px] h-max md:max-w-[640px] overflow-hidden px-2 justify-center items-center flex-grow'>
        
      <h2 className=" flex font-fira-code  font-bold  justify-center py-5 ">{currentLocation?.name}</h2>
      <ul className="  flex sm:w-[450px] mx-auto gap-6 text-sm  pb-6">
        <li className=" ">
          <span className=" font-fira-code">Type:</span>
          <span className="flex  p-3 font-fira-code font-semibold">{currentLocation?.type}</span>
        </li>
        <li className=" ">
          <span className=" font-fira-code">Dimension:</span>
          <span className="flex p-3 font-fira-code font-semibold">{currentLocation?.dimension}</span>
        </li>
        <li className=" ">
          <span className=" font-fira-code">Population:</span>
          <span className="flex p-3 font-fira-code font-semibold">{currentLocation?.residents.length}</span>
        </li>
      </ul>
      </div>
    </section> 
  )

//   <section className=" grid bg-slate-500/30 w-[360px] h-[160px] justify-center sm:flex sm:flex-wrap sm:w-[80vh] sm:items-center relative text-white pt-6 mt-7 right-4 sm:h-[25vh] sm:relative sm:justify-center sm:top-[5vh] sm:mt-10 sm:ml-[278px] ">
//   <h2 className=" flex font-fira-code sm:absolute font-bold  text-lg sm:text-3xl sm:w-[560px] sm:mb-[170px] justify-center  ">{currentLocation?.name}</h2>
//   <ul className=" items-center flex sm:w-[450px] sm:mt-8 w-[40vh] gap-8 h-[100px] text-sm sm:text-xl  justify-center sm:pl-28 sm:pr-8 sm:bg-center">
//     <li className="sm:mr-[100px] ">
//       <span className=" font-fira-code">Type:</span>
//       <span className="flex  p-3 font-fira-code font-semibold">{currentLocation?.type}</span>
//     </li>
//     <li className="sm:mr-[100px] mr-1 ">
//       <span className=" font-fira-code">Dimension:</span>
//       <span className="flex p-3 font-fira-code font-semibold">{currentLocation?.dimension}</span>
//     </li>
//     <li className="sm:mr-[100px] mr-1 ">
//       <span className=" font-fira-code">Population:</span>
//       <span className="flex p-3 font-fira-code font-semibold">{currentLocation?.residents.length}</span>
//     </li>
//   </ul>
// </section> 

}

export default LocationInfo