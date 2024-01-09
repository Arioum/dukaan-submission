const TableEntry = ({ order }) => {
  return (
    <tr className='text-[14px] leading-[20px] text-[#4D4D4D] px-[12px] py-[14px] grid gap-[40px] grid-cols-4 border-b-[1px] border-[#E6E6E6] h-[48px] font-[400]'>
      <td className='text-[#146EB4] font-[500]'>#{order.id}</td>
      <td>{order.date}</td>
      <td className='flex grow justify-end font-[500]'>₹{order.amount}</td>
      <td className='flex grow justify-end font-[500]'>₹{order.fees}</td>
    </tr>
  );
};

export default TableEntry;
