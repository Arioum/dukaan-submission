import { LuSearch } from 'react-icons/lu';

const SearchInput = ({ placeHolderText, tailwindClasses }) => {
  return (
    <div>
      <LuSearch className='text-[#999999] absolute w-[14px] text-[14px] m-[13px]' />
      <input
        type='text'
        placeholder={placeHolderText}
        className={tailwindClasses}
      />
    </div>
  );
};

export default SearchInput;
