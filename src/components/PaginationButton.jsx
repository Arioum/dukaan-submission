const PaginationButton = ({ pageNo, selected,clickPage }) => {
  return (
    <button
      className={`w-[28px] h-[28px] rounded-[4px] text-[#4D4D4D] ${
        selected===pageNo && 'bg-[#146EB4] text-[#fff]'
      }`}
      onClick={() => clickPage(pageNo)}
    >
      {pageNo}
    </button>
  );
};

export default PaginationButton;
