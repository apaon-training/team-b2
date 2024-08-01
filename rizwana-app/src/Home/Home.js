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
        <div className='flex  align-items-center justify-content-center mr-3  w-8rem '>
        <Button label="Logout" severity="danger"  raised size='small' onClick={()=>onLogoutClicked()} />
        <Avatar label="SR" size="xlarge" shape="circle" />
        
       

        </div>
      </div>
      <div className='flex h-full'>
        <div className='flex-column  w-30rem bg-purple-400'>
        {/* <InputText type="text" placeholder=" "/> */}
        <StoreList selectedStore={(value) => setSelectedStoreObj(value) }/>
        

        </div>
        <div className='flex-column  w-full bg-orange-200'>
           <div className='flex h-25rem'>
              <div className='flex-column w-full bg-indigo-100'>   
        Detail container</div>   
        </div>
        <div className='flex h-20rem'>
        <div className='flex align-items-center justify-content-center w-6 bg-yellow-300'>
           <StoreTimings storeObj={selectedStoreObj}/>
        </div>
        <div className='flex align-items-center justify-content-center w-6 bg-green-300'>
          <StoreAddress storeObj={selectedStoreObj}/>
          </div>
        </div>
       </div> 
       </div>
    </div>
  );
}

export default Home;
