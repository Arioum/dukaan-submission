import TableEntry from '../components/TableEntry';
import TableHeader from '../components/TableHeader';
import orders from '../transactions.json';
import Pagination from './Pagination';

const TransactionTable = () => {
  return (
    <div className='flex flex-col  gap-[24px]'>
      <table className='grid w-[1128px]'>
        <TableHeader />
        {orders.map((order) => (
          <TableEntry order={order} />
        ))}
      </table>
      <Pagination />
    </div>
  );
};

export default TransactionTable;
