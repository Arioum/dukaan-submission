import { PiCaretLeftBold } from 'react-icons/pi';

const Button = () => {
  return (
    <button className='border-[1px] border-[#D9D9D9] bg-white h-[36px] rounded-[4px] flex justify-center items-center'>
      <PiCaretLeftBold />
      <span className='text-[14px] leading-[20px] text-[#000]'>Button</span>
    </button>
  );
};

export default Button;
