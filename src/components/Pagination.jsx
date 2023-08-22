const Pagination = ({ pages, setCurrentPage, currentPage }) => {
  return (
    <ul className="bg-slate-500/30 items-center w-[384px] md:w-full gap-3 h-14 active:bg-green-600 cursor-pointer mt-8  bottom-1 justify-center flex mb-16"  >
      {pages.map((page) => (
        <li 
          className={`${currentPage === page && "text-green-500  "}`}
          onClick={() => setCurrentPage(page)}
          key={page}
        >
          {page}
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
