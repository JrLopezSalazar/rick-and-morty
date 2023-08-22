import React, { useEffect, useState } from "react";
import axios from "axios";

const ResidentCard = ({ residentUrl }) => {
  const [residentInfo, setResidentInfo] = useState(null);

  useEffect(() => {
    axios
      .get(residentUrl)
      .then(({data})=> setResidentInfo(data))
      .catch((err) => console.log(err));
  }, []);

  const statusResident = {
    Alive: "bg-green-500",
    Dead: "bg-red-500",
    unknown: "bg-slate-500",
  };

  return (
    

     
  <article className=" gap-3  hover:scale-125 transition duration-500 cursor-pointer  ">
    <header className="  relative overflow-hidden  border-green-500/100 border-y-4 border-x-4 rounded-t-lg">
      <img
        className="h-[402px] w-[440px]  z-10  object-cover overflow-hidden flex "
        src={residentInfo?.image}
        alt=""
      />
      <div className="bg-slate-950/75 w-[108px]  h-[42px] border-2 border-green-500/100 absolute flex items-center gap-2 pl-2 right-[36%] top-[83%] ">
        <div
          className={`h-[18px] aspect-square bg-green-500 rounded-full ${
            statusResident[residentInfo?.status]
          }`}
        ></div>
        <span className="text-white text-sm md:text-base">{residentInfo?.status}</span>
      </div>
    </header>

    <section className="h-[238px] bg-stone-400  flex-wrap border-green-500/100 border-y-4 border-x-4 rounded-b-lg ">
      <h3 className="font-fira-code font-bold text-white py-3 text-3xl justify-center flex ">{residentInfo?.name}</h3>
      <hr className="p-1 mb-2" />
      <ul className=" text-xl">
        <li className="py-2">
          <span className="text-amber-900 px-2 md:px-10 font-fira-code ml-4 ">Specie</span>
          <span className="text-white  md:px-10 font-fira-code font-semibold">{residentInfo?.species}</span>
        </li>
        <li className="py-2">
          <span className="text-amber-900 px-2 md:px-10 font-fira-code ml-4">Origin</span>
          <span className="text-white  md:px-10 font-fira-code font-semibold">{residentInfo?.origin.name}</span>
        </li>
        <li className="py-2">
          <span className="text-amber-900 px-2 md:px-10 font-fira-code ml-4">Episodes where appear</span>
          <span className="text-white  md:px-10 font-fira-code font-semibold">{residentInfo?.episode.length}</span>
        </li>
      </ul>
    </section>
  </article>



  );
};

export default ResidentCard;
