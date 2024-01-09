const CreditBalance = () => {
  return (
    <div className='bg-[#353C53] rounded-[4px] px-[12px] py-[8px] py-[6px] w-[192px] flex gap-[12px] justify-start items-center relative bottom-[16px]'>
      <div className='text-white p-[6px] bg-[#ffffff1A] rounded-[4px]'>
        <img src='/wallet.svg' alt='wallet' className='w-[24px] h-[24px]' />
      </div>
      <div className='flex flex-col gap-[2px]'>
        <p className='leading-[16px] text-[13px] text-white/80'>
          Available credits
        </p>
        <p className='leading-[24px] text-[16px] text-white'>222.10</p>
      </div>
    </div>
  );
};

export default CreditBalance;
