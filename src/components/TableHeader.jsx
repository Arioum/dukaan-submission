import { FiInfo } from 'react-icons/fi';
import { BsCaretDownFill } from 'react-icons/bs';

const TableHeader = () => {
  return (
    <tr className='bg-[#F2F2F2] text-[14px] leading-[20px] text-[#4D4D4D] px-[10px] py-[12px] grid gap-[40px] grid-cols-4 rounded-[4px]'>
      <th className='flex grow font-[500]'>Order ID</th>
      <th className='flex grow font-[500] flex gap-[4px] items-center'>
        Order Date
        <span>
          <BsCaretDownFill />
        </span>
      </th>
      <th className='flex grow justify-end font-[500]'>Order amount</th>
      <th className='flex grow justify-end font-[500] gap-[4px] items-center'>
        Transaction fees
        <button className='hover:cursor-pointer group'>
          <FiInfo />
          <span class='group-hover:opacity-100 transition-opacity px-[8px] py-[4px] text-[12px] leading-[16px] text-[#fff] font-[400] rounded-[4px] w-[294px] h-[40px] absolute translate-y-[15px] translate-x-[-280px] opacity-0 bg-[#4D4D4D] text-left'>
            Transaction fees are charged as a percentage of the order amount
            according to your plan.
          </span>
        </button>
      </th>
    </tr>
  );
};

export default TableHeader;
