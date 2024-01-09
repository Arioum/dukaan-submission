import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';
import PaginationButton from '../components/PaginationButton';
import { useState } from 'react';

const Pagination = () => {
  const [activePage, setActivePage] = useState(2);

  const handleActivePage = (pageNo) => setActivePage(pageNo);

  return (
    <section className='flex gap-[24px] justify-center items-center'>
      <button className='border-[1px] border-[#D9D9D9] bg-white h-[36px] rounded-[4px] flex justify-center items-center gap-[4px] py-[6px] pr-[12px] pl-[6px] font-[500]'>
        <PiCaretLeftBold />
        <span className='text-[14px] leading-[20px] text-[#000]'>Previous</span>
      </button>
      <div className='flex gap-[8px] w-[388px]'>
        <PaginationButton pageNo={1} />
        <PaginationButton pageNo={'...'} />
        {Array.from({ length: 8 }, (_, index) => (
          <PaginationButton
            pageNo={index + 2}
            clickPage={handleActivePage}
            selected={activePage}
          />
        ))}
        <PaginationButton pageNo={18} />
      </div>
      <button className='border-[1px] border-[#D9D9D9] bg-white h-[36px] rounded-[4px] flex justify-center items-center gap-[4px] py-[6px] pr-[6px] pl-[12px] font-[500]'>
        <span className='text-[14px] leading-[20px] text-[#000]'>Next</span>
        <PiCaretRightBold />
      </button>
    </section>
  );
};

export default Pagination;
