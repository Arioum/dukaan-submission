const NavItem = ({ navItem }) => {
  return (
    <article className='flex items-center gap-[12px] text-white/80 px-[16px] py-[8px] rounded-[4px] hover:bg-white/10 hover:cursor-pointer hover:text-[#fff]'>
      <div className='w-[20px] h-[20px] flex justify-center items-center'>
        <img src={navItem.img} alt='icon' className='opacity-80' />
      </div>
      <p className='text-[14px] leading-[20px] font-[500]'>{navItem.name}</p>
    </article>
  );
};

export default NavItem;
