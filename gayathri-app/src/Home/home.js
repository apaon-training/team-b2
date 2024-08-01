import { InputText } from 'primereact/inputtext';
import logo from '../logo.svg';
import './home.css';
import {Avatar} from 'primereact/avatar';
import { Button } from 'primereact/button';
import StoreList from '../store-list/store-list';
import { useState } from 'react';
import StoreTimings from '../store-timings/store-timings';
import StoreContact from '../store-contact/store-contact';

function Home(props) {
  const [selectedStoreObj,setSelectedStoreObj]=useState(null);
  const onLogoutClicked = () =>{
    props.logoutSuccess()
  }

  return (
    <div className="App flex-column">
      <div className='flex justify-content-center navigation-bar h-8rem'>
        <div className='flex align-items-center justify-content-center store-locator-container text-6xl w-full'>
          Store Locator
        </div>
        <div className='flex align-items-center justify-content-center gap-3 w-11rem'>
        <Button label="Logout" severity="danger" raised  size='small' onClick={() => onLogoutClicked ()} />
          <Avatar label="BA" size="xlarge" shape="circle" className='mr-3'/>
        </div>
      </div>
      <div className='flex h-auto'>
        <div className='flex-column justify-content-center align-items-center text-white-alpha-90 font-bold w-30rem bg-orange-200'>
          <StoreList selectedStore={ (value) => setSelectedStoreObj (value) }/>
        </div>
        <div className='flex-column text-white-alpha-90 text-right w-full bg-green-600'>
        <div className='flex h-30rem'>
          Map container 
        </div>
        <div className='flex h-15rem'>
        <div className='flex w-6 justify-content-center align-items-center text-blue-800 font-bold text-xl bg-white'>
          <StoreTimings storeObj={selectedStoreObj}/>
          </div>
        <div className='flex w-6 justify-content-center align-items-center text-black-alpha-90 font-bold text-xl bg-white'>
          <StoreContact storeObj={selectedStoreObj}/>
          </div>
      </div>
    </div>
  </div>
 </div>

  );
}

export default Home;
