const Pagination = ({ pages, setCurrentPage, currentPage }) => {
  return (
    <ul className="bg-yellow-500 flex items-center justify-center gap-3 h-14 active:bg-blue-600 cursor-pointer"  >
      {pages.map((page) => (
        <li 
          className={`${currentPage === page && "text-red-500"}`}
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
