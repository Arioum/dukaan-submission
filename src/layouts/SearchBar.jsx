import { FiHelpCircle } from 'react-icons/fi';
import { RiMessage2Fill } from 'react-icons/ri';
import { FaCaretDown } from 'react-icons/fa';
import SearchInput from '../components/SearchInput';

const SearchBar = () => {
  return (
    <header className='flex border-b-2 px-[32px] py-[16px] w-[calc(100vw-224px)] justify-between'>
      <div className='flex gap-[16px] items-center justify-between'>
        <h2 className='text-[15px] leading-[22px]'>Payments</h2>
        <span className='flex justify-center items-center justify-center text-[12px] leading-[16px] gap-[6px]'>
          <FiHelpCircle className='w-[14px]' />
          How it works
        </span>
      </div>
      <SearchInput
        placeHolderText={'Search features, tutorials, etc.'}
        tailwindClasses={
          'bg-[#F2F2F2] text-[15px] outline-0 rounded-[6px] py-[9px] px-[32px] w-[400px] placeholder:font-[300] placeholder-[#999999]'
        }
      />
      <div className='flex gap-[12px] text-[#4D4D4D]'>
        {/* <RiMessage2Fill /> */}
        <div className='w-[40px] h-[40px] rounded-[50em] flex justify-center items-center bg-[#E6E6E6]'>
          <img
            src='/messages.svg'
            alt='messages'
            className='w-[20px]'
          />
        </div>
        <div className='w-[40px] h-[40px] rounded-[50em] flex justify-center items-center bg-[#E6E6E6]'>
          <img src='/caret-down.svg' alt='messages' className='w-[10px]' />
        </div>
      </div>
    </header>
  );
};

export default SearchBar;
