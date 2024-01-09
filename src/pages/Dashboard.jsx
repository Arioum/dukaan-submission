import OverView from '../layouts/OverView';
import SearchBar from '../layouts/SearchBar';
import SideBar from '../layouts/SideBar';
import Transaction from '../layouts/Transaction';

const Dashboard = () => {
  return (
    <div className='flex'>
      <SideBar />
      <div className='bg-[#FAFAFA] h-[100vh]'>
        <SearchBar />
        <main className='w-[1152px] relative top-[24px] left-[calc(256px-224px)] flex flex-col gap-[32px] overflow-y-auto h-[calc(100%-64px-48px)] overflow-hidden hide-scroll'>
          <OverView />
          <Transaction />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
