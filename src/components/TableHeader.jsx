import { FiInfo } from 'react-icons/fi';
import { BsCaretDownFill } from 'react-icons/bs';

const TableHeader = () => {
  return (
    <tr className='bg-[#F2F2F2] text-[14px] leading-[20px] text-[#4D4D4D] px-[10px] py-[12px] grid gap-[40px] grid-cols-4'>
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
        <span>
          <FiInfo />
        </span>
      </th>
    </tr>
  );
};

export default TableHeader;
