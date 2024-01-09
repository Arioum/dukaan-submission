import DropDown from '../components/DropDown';
import StatLabel from '../components/StatLabel';

const OverView = () => {
  return (
    <section className='flex flex-col gap-[24px]'>
      <div className='flex justify-between items-center'>
        <h2 className='text-[20px] leading-[28px] font-[500]'>Overview</h2>
        <DropDown
          defaultText={'Last month'}
          tailwindClasses={
            'border-[1px] border-[#D9D9D9] text-[16px] leading-[24px] outline-0 font-[400] text-[#4D4D4D] h-[36px] w-[137px] rounded-[4px] px-[12px]'
          }
          iconCss={'w-[12px] h-[16px] absolute mx-[-26px] my-[14px]'}
          imgUrl={'/caret-down-2.svg'}
        />
      </div>
      <div className='grid gap-[20px] grid-cols-2'>
        <StatLabel title={'Online Orders'} metric={'231'} />
        <StatLabel title={'Amount received'} metric={'₹23,92,312.19'} />
      </div>
    </section>
  );
};

export default OverView;
