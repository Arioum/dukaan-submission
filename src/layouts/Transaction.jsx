import { LuSearch } from 'react-icons/lu';
import { FiDownload } from 'react-icons/fi';
import TransactionTable from './TransactionTable';
import SearchInput from '../components/SearchInput';

const Transaction = () => {
  return (
    <section className='flex flex-col gap-[20px]'>
      <h2 className='text-[20px] leading-[28px] font-[500]'>
        Transactions | This Month
      </h2>
      <div className='bg-[#fff] px-[12px] pt-[12px] pb-[24px] flex flex-col gap-[12px] rounded-[8px] shadow-[0_2px_6px_0px] shadow-[#1A181E0A]'>
        <div className='flex justify-between'>
          <SearchInput
            placeHolderText={'Search by order ID...'}
            tailwindClasses={
              'text-[14px] leading-[20px] outline-0 rounded-[4px] py-[9px] px-[32px] w-[248px] placeholder:font-[300] placeholder-[#999999] border-[1px] border-[#D9D9D9]'
            }
          />
          <div className='flex gap-[12px]'>
            <select className='border-[1px] border-[#D9D9D9] text-[16px] leading-[24px] outline-0 font-[400] text-[#4D4D4D] h-[36px] w-[79px] py-[6px] px-[12px]'>
              <option value=''>Sort</option>
            </select>
            <button className='border-[1px] border-[#D9D9D9] bg-white h-[36px] rounded-[4px] w-[36px] flex justify-center items-center'>
              <FiDownload className='text-[20px]' />
            </button>
          </div>
        </div>
        <div className=''>
          <TransactionTable />
        </div>
      </div>
    </section>
  );
};

export default Transaction;
