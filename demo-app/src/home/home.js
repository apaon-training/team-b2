import logo from '../logo.svg';
import './home.css';
import { Avatar } from 'primereact/avatar';
import StoreList from '../store-list/store-list';

function Home() {
  return (
    //Main container
    <div className="App flex-column">
      {/* Top navigation bar */}
      <div className='flex justify-content-center h-8rem navigation-bar'>
        {/* Title column */}
        <div className='flex align-items-center justify-content-center store-locator-container text-6xl w-full'>
             Store Locator
        </div>
        <StoreList/>
        {/* Avatar column */}
        <div className='flex align-items-center justify-content-center w-5rem'>
             <Avatar label="BH" size="xlarge" shape="circle" className='mr-3' />
        </div>
      </div> 
      {/* Details container */}
      <div className='flex h-full'>
        {/* List container */}
        <div className='flex-column w-30rem bg-green-300'>
           <StoreList/>
        </div>  
        {/* Details container */}
        <div className='flex-column w-full bg-green-500'>
          <div className='flex h-30rem'>
            Map container
          </div>
        <div className='flex align-items-stretch flex-wrap h-20rem'>
            {/* Store details */}
            <div className='flex align-items-center w-6  justify-content-center bg-green-300'>
                Store details
            </div>
            {/* Store address */}
            <div className='flex align-items-center w-6  justify-content-center shadow-8  bg-green-700'>
                Address
            </div>
      </div>
    </div>
 </div> 
</div>
  );
}

export default Home;
