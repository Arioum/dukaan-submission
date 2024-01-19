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
        <main className='max-w-[1152px] mx-auto relative top-[24px] flex flex-col gap-[32px] overflow-y-auto h-[calc(100%-64px-48px)] overflow-hidden hide-scroll'>
          <OverView />
          <Transaction />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
