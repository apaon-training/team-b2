import logo from '../logo.svg'
import './Home.css';
import { Avatar } from 'primereact/avatar';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import StoreList from '../store-list/Store-List';
import React, { useState } from 'react';
import StoreTimings from '../store-timings/Store-Timings';
import StoreAddress from '../store-address/Store-Address';

function Home(props) {
  const [selectedStoreObj, setSelectedStoreObj] = useState(null);
  
  

  const onLogoutClicked= ()=>{
    props.LogoutSuccess();
  }
  
  return (
    <div className="App flex-column">
      <div className='flex justify-content-center h-8rem navigation-bar'>
        <div className='flex align-items-center justify-content-center text-7xl store-container w-full '>
             Store Locator
        </div>
        <div className='flex  align-items-center justify-content-center w-8rem text-6xl mr-6 '>
        <Button label="Logout" severity="danger"  raised onClick={()=>onLogoutClicked()} size="small" className='flex mr-4 pl-2'/>
        <Avatar label="SR" size="xlarge" shape="circle" />
        
       

        </div>
      </div>
      <div className='flex h-full  '>
        <div className='flex-column w-30rem bg-white'>
        {/* <InputText type="text" placeholder=" "/> */}
        <StoreList selectedStore={(value) => setSelectedStoreObj(value) }/>
        

        </div>
        <div className='flex-column  w-full bg-orange-200'>
           <div className='flex h-25rem'>
              <div className='flex-column w-full bg-pink-500 text-4xl'>   
        Detail container</div>   
        </div>
        <div className='flex h-23rem text-xl align-items-center justify-content-center px-8 bg-white text-black-alpha-60'>
        <div className='flex-row text-blue-700 w-6 '>
           <StoreTimings storeObj={selectedStoreObj}/>
        </div>
        <div className='flex-row  text-black-alpha-90 w-6 '>
          <StoreAddress storeObj={selectedStoreObj}/>
          </div>
        </div>
       </div> 
       </div>
    </div>
  );
}

export default Home;
