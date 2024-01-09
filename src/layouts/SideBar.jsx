import CreditBalance from '../components/CreditBalance';
import NavItem from '../components/NavItem';
import StoreDetails from '../components/StoreDetails';

const navItems = [
  { name: 'Home', img: '/Home.svg' },
  { name: 'Orders', img: '/Orders.svg' },
  { name: 'Products', img: '/Products.svg' },
  { name: 'Delivery', img: '/Delivery.svg' },
  { name: 'Marketing', img: '/Marketing.svg' },
  { name: 'Analytics', img: '/Analytics.svg' },
  { name: 'Payments', img: '/Payments.svg' },
  { name: 'Tools', img: '/Tools.svg' },
  { name: 'Discounts', img: '/Discounts.svg' },
  { name: 'Audience', img: '/Audience.svg' },
  { name: 'Appearance', img: '/Appearance.svg' },
  { name: 'Plugins', img: '/Plugins.svg' },
];

const SideBar = () => {
  return (
    <nav className='bg-[#1E2640] w-[224px] flex flex-col justify-between items-center h-screen'>
      <div className='flex flex-col gap-[24px] items-center relative top-[16px]'>
        <StoreDetails />
        <div className='flex flex-col gap-[4px] w-[208px] '>
          {navItems.map((item, index) => (
            <NavItem navItem={item} key={index} />
          ))}
        </div>
      </div>
      <CreditBalance />
    </nav>
  );
};

export default SideBar;
