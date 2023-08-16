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
    <article className=" h-[640px] w-[437px] border-4 border-green-500/100 m-5 justify-center overflow-hidden transition duration-300 ease-in-out hover:scale-110">
      <header className="transition duration-700 ease-in-out relative">
        <img
          className="border-b-4 border-green-500/100 h-[402px] w-[100%] object-cover z-10 "
          src={residentInfo?.image}
          alt=""
        />
        <div className= "bg-slate-950/75 w-[108px] h-[42px] border-2 border-green-500/100 absolute flex items-center gap-2 pl-2 right-[36%] top-[83%]">
          <div
            className={`h-[18px] aspect-square bg-green-500 rounded-full ${
              statusResident[residentInfo?.status]
            }`}
          ></div>
          <span className="text-white ">{residentInfo?.status}</span>
        </div>
      </header>

      <section className=" h-[238px] bg-stone-400 bg-cover ">
        <h3 className="font-fira-code font-bold text-white py-2 text-2xl">{residentInfo?.name}</h3>
        <hr className="p-1" />
        <ul className=" grid">
          <li className=" py-4 ">
            <span className="text-amber-900 px-10s font-fira-code">Specie</span>
            <span className="text-white px-10 font-fira-code font-semibold">{residentInfo?.species}</span>
          </li>
          <li className="py-4 ">
            <span className="text-amber-900 font-fira-code">Origin</span>
            <span className="text-white px-10 font-fira-code font-semibold ">{residentInfo?.origin.name}</span>
          </li>
          <li className=" py-4">
            <span className="text-amber-900 font-fira-code">Episodes where appear</span>
            <span className="text-white px-10 font-fira-code font-semibold ">{residentInfo?.episode.length}</span>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default ResidentCard;
