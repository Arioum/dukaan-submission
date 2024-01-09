const StatLabel = ({ title, metric }) => {
  return (
    <article className='bg-[#fff] p-[20px] flex flex-col gap-[16px] shadow-[0_2px_6px_0px] shadow-[#1A181E0A]'>
      <h5 className='text-[16px] leading-[24px] text-[#4D4D4D]'>{title}</h5>
      <span className='text-[32px] leading-[38px] text-[#1A181E] font-[500]'>
        {metric}
      </span>
    </article>
  );
};

export default StatLabel;

// box-shadow: 0px 2px 6px 0px #1A181E0A;
