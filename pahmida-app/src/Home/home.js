import logo from '../logo.svg';
import './home.css';

import { Avatar } from 'primereact/avatar';
import { InputText } from 'primereact/inputtext';
function Home() {
  return (
    //Main container
    <div className='home flex-column'>
     <div className='flex justify-content-center h-7rem main'>
      <div className='flex align-items-center justify-content-center w-full text-6xl textcolor'>
       store Locator
      </div>
        <div className='flex align-items-center justify-content-center w-5rem text-6xl mr-4'>
            <Avatar label="PP" size="xlarge" shape="circle" className='text'/>
        </div>
     </div>
     <div className='flex h-full'>
      <div className='flex-column w-30rem bg-pink-400'>
         <InputText type="text" placeholder="Search"/>
         
      </div>
      <div className='flex-column w-full bg-pink-500'>
        <div className='flex h-25rem'>
          <div className='flex-column w-full bg-pink-300'>
          map  Details</div>
         </div>
        <div className='flex h-20rem'>
          <div className='flex w-6 bg-pink-500'>
            store details
          </div>
          <div className='flex w-6 jutify bg-pink-600'>
            address
          </div>
        </div>
      </div>
   </div>
  </div>
  );
}
export default Home;
