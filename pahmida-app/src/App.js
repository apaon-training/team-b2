import logo from './logo.svg';
import './App.css';

import { Avatar } from 'primereact/avatar';


function App() {
  return (
    //Main container
    <div className="App flex-column">
     <div className='flex h-10rem'>
      <div className='flex-column w-full bg-pink-200'>
       store locator
      </div>
        <div className='flex-column shadow-8 w-5rem bg-pink-300'>
            <Avatar label="PP" size="xlarge" shape="circle" />
        </div>
     </div>
     <div className='flex h-full'>
      <div className='flex-column w-30rem bg-pink-400'>
         list container
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
export default App;
