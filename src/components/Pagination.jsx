const Pagination = ({ pages, setCurrentPage, currentPage }) => {
  return (
    <ul className="bg-slate-500/30 flex items-center justify-center gap-3 h-14 active:bg-green-600 cursor-pointer"  >
      {pages.map((page) => (
        <li 
          className={`${currentPage === page && "text-green-500"}`}
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
