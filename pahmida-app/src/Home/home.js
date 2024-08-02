import logo from '../logo.svg';
import './home.css';
import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';
import { InputText } from 'primereact/inputtext';
import StoreList from '../store-list/store-list';
 
import React, { useState } from 'react';
import StoreTimings from '../store--Timings/store-timings';
import StoreAddress from '../store-Address/store-address';

function Home(props) {
  const [SelectedstoreObj, setSelectedstoreObj] = useState(null);
  const onLogoutClicked=()=>{
  props.logoutSuccess();
  }
  return (
    //Main container
    <div className='home flex-column'>
     <div className='flex justify-content-center h-7rem main'>
      <div className='flex align-items-center justify-content-center w-full text-6xl textcolor'>
       store Locator
      </div>
        <div className='flex align-items-center justify-content-center w-9rem text-6xl mr-4'>
        <Button label="Logout" severity="danger" onClick={()=> onLogoutClicked()} />
            <Avatar label="PP" size="xlarge" shape="circle" className='text'/>
        </div>
     </div>
     <div className='flex h-full'>
      <div className='flex-column w-30rem  bg-white'>
         {/* <InputText type="text" placeholder=" "/> */}
          <StoreList Selectedstore={(value)=>setSelectedstoreObj(value)}/>
         
      </div>
      <div className='flex-column w-full bg-pink-500'>
        <div className='flex h-25rem'>
          <div className='flex-column w-full bg-pink-300'>
          map  Details</div>
         </div>
        <div className='flex align-items-center justify-content-center h-20rem bg-white px-8'>
          <div className='flex w-6 bg-white'>
             <StoreTimings storeObj={SelectedstoreObj}/>
             <div className='timings'> 
          </div>
          </div>
          <div className='flex w-6 jutify bg- white justify-content-center'>
            <div className='flex align-items-center justify-content-center'>
            
            <StoreAddress storeObj={SelectedstoreObj}/>
          </div>
          </div>
        </div>
      </div>
   </div>
  </div>
  );
}
export default Home;
