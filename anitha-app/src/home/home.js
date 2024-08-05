import { Button } from 'primereact/button';
import logo from '../logo.svg'
import './home.css';
import {Avatar} from 'primereact/avatar';
import { InputText } from 'primereact/inputtext';
import StoreList from '../store-list/store-list';
import React, { useRef } from 'react';
import StoreTimings from '../store-timings/store-timings';
import StoreContact from '../store-contact/store-contact';
import { Menu } from 'primereact/menu';
import { useState } from 'react';
import StoreMap from '../store-map/store-map';


function Home(props) {
  const onLogoutClicked = () => {
    props.logoutSuccess()
  }
  const [selectedStoreObj,setSelectedStoreObj] = useState(null);
  const menuRight = useRef(null);
  const items = [
      {
         // label: 'Options',
          items: [
              {
                  label: 'About',
                  icon: 'pi pi-exclamation-circle'
              },
              {
                  label: 'Logout',
                  icon: 'pi pi-sign-out',
                  command: () =>{
                    props.logoutSuccess()

                  }
              }
          ]
      }
  ];

  return (
    <>
    <div className="App flex-column">
      <div className='flex justify-content-center navigation-bar h-8rem'>
        <div className='flex align-items-center justify-content-center store-locator-container text-6xl text-white-alpha-90 w-full'>
          Store Locator
        </div>
        <div className='flex align-items-center justify-content-center gap-2 w-10rem'>
        
        <Menu model={items} popup ref={menuRight} id="popup_menu_right" popupAlignment="right"/>
          <Avatar label="VA" size="xlarge" shape="circle" className='mr-3'  onClick={(event) => menuRight.current.toggle(event)} aria-controls="popup_menu_right" aria-haspopup/>
        </div>
      </div>
      <div className='flex h-auto'>
        <div className='flex-column text-white-alpha-90 w-30rem bg-pink-100'>
          <StoreList selectedStore={(value) => setSelectedStoreObj(value)} />
        </div>
        <div className='flex-column text-black-alpha-90 text-right text-2xl w-full bg-green-200'>
        <div className='flex h-30rem'>
          <StoreMap storeObj={selectedStoreObj}/>
        </div>
        <div className='flex h-15rem'>
        <div className='flex w-6 justify-content-center align-items-center Store-Timings text-3xl text-blue-900 bg-white'>
          <StoreTimings storeObj={selectedStoreObj}/>
          </div>
        <div className='flex w-6 justify-content-center align-items-center Store-Contact-Details text-3xl text-blue-900 bg-white'>
        <StoreContact storeObj={selectedStoreObj}/>
          </div>
      </div>
    </div>
  </div>
 </div>
</>
  );
}

export default Home;