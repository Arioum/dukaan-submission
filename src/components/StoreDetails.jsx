import { FaAngleDown } from 'react-icons/fa6';

const StoreDetails = () => {
  return (
    <section className='flex w-[192px] gap-[12px] items-center justify-center'>
      <div className='w-[40px] h-[40px] rounded-[4px] overflow-hidden'>
        <img src='/store-img.png' alt='store-img' />
      </div>
      <div className='flex flex-col text-white w-[108px]'>
        <p className='text-[15px] leading-[22px]'>Nishyan</p>
        <a
          className='text-[13px] leading-[16px] text-white/80 underline'
          href='/'
        >
          Visit Store
        </a>
      </div>
      <div className='w-[20px] h-[20px] text-white'>
        <FaAngleDown />
      </div>
    </section>
  );
};

export default StoreDetails;
