import { InputText } from 'primereact/inputtext';
import logo from '../logo.svg';
import './home.css';
import {Avatar} from 'primereact/avatar';
import { Button } from 'primereact/button';
import StoreList from '../store-list/store-list';
import { useState } from 'react';

function Home(props) {
  const [selectedStoreObj,setSelectedStoreObj]=useState(null);
  const [selectedStorecon,setSelectedStoreCon]=useState(null);
  const onLogoutClicked = () =>{
    props.logoutSuccess()
  }

  return (
    <div className="App flex-column">
      <div className='flex justify-content-center navigation-bar h-8rem'>
        <div className='flex align-items-center justify-content-center store-locator-container text-6xl w-full'>
          Store Locator
        </div>
        <div className='flex align-items-center justify-content-center w-10rem'>
        <Button label="Logout" severity="danger" raised  size='small' onClick={() => onLogoutClicked ()} />
          <Avatar label="BA" size="xlarge" shape="circle" className='mr-3'/>
        </div>
      </div>
      <div className='flex h-auto'>
        <div className='flex-column text-white-alpha-90 font-bold w-30rem bg-pink-400'>
          <StoreList selectedStore={ (value) => setSelectedStoreObj (value) }/>
        </div>
        <div className='flex-column text-white-alpha-90 text-right font-bold w-full bg-green-600'>
        <div className='flex h-30rem'>
          Map container 
        </div>
        <div className='flex align-items-stretch flex-wrap h-15rem'>
        <div className='flex w-6 justify-content-center text-white-alpha-90 font-bold bg-indigo-700'>
          <storeTimings storeObj={selectedStoreObj}/>
          </div>
        <div className='flex w-6 justify-content-center text-white-alpha-90 font-bold bg-indigo-800'>
          <storeAddress storeCon={selectedStorecon}/>
          </div>
      </div>
    </div>
  </div>
 </div>

  );
}

export default Home;
