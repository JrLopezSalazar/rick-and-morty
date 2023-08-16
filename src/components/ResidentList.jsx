import { useState, useEffect } from "react";
import ResidentCard from "./ResidentCard";
import Pagination from "./Pagination";

//Magic string
const INITIAL_PAGE = 1;

const ResidentList = ({ residents, currentLocation }) => {
  const [currentPage, setCurrentPage] = useState(INITIAL_PAGE);

  //Cantidad de residentes por pagina
  const RESIDENTS_PER_PAGE = 20;

  //Cantidad total de paginas
  const totalPages = Math.ceil(residents.length / RESIDENTS_PER_PAGE);

  //Residentes que se van a mostrar en la pagina actual
  const sliceStart = (currentPage - 1) * RESIDENTS_PER_PAGE;
  const sliceEnd = sliceStart + RESIDENTS_PER_PAGE;
  const residentsInPage = residents.slice(sliceStart, sliceEnd);

  //Generación del arreglo de las paginas que se van a mostrar
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  useEffect(() => {
    setCurrentPage(INITIAL_PAGE);
  }, [currentLocation]);

  return (
    <article className="">
      <section className="pt-10 grid gap-8 justify-center grid-cols-[repeat(auto-fit,_460px)] max-w-[1200px] mx-auto">
        {residentsInPage.map((resident) => (
          <ResidentCard key={resident} residentUrl={resident} />
        ))}
      </section>
      <Pagination
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </article>
  );
};

export default ResidentList;
