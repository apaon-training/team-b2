import './home.css';
import {Avatar} from 'primereact/avatar';
import StoreList from '../store-list/store-list';
import { useState } from 'react';
import StoreTimings from '../store-timings/store-timings';
import StoreContact from '../store-contact/store-contact';
import { Menu } from 'primereact/menu';
import React, { useRef } from 'react';
import StoreMap from '../store-map/store-map';
import About from '../About/About';
import StoreForm from '../store-form/store-form';

function Home(props) {
  const [showAbout, setShowAbout] = useState(false);
  const [showStoreForm, setShowStoreForm] = useState(false);
  const [selectedStoreObj,setSelectedStoreObj]=useState(null);
  const menuRight = useRef(null);
  const items = [
    {
        items: [
            {
                label: 'About',
                icon: 'pi pi-exclamation-circle',
                command: () =>{
                  setShowAbout(true);
                }
                
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
    <div className="App flex-column">
      <div className='flex justify-content-center navigation-bar h-8rem'>
        <div className='flex align-items-center justify-content-center store-locator-container text-6xl w-full'>
          Store Locator
        </div>
        <div className='flex align-items-center justify-content-center w-11rem'>
        <Avatar icon= 'pi pi-shop' size="xlarge" shape="circle" className='mr-4' raised onClick={ () => setShowStoreForm(true)}/>
        {
          showStoreForm && (<StoreForm visible={showStoreForm} storeObj = {selectedStoreObj} onClose={ (values) =>{
            setSelectedStoreObj(values);
            setShowStoreForm(false);
          } }/>

          )
        }
        {/* <StoreForm visible={showStoreForm} onClose={ () => setShowStoreForm(false) }/> */}
        <Menu model={items} popup ref={menuRight} id="popup_menu_right" popupAlignment="right" />
          <Avatar label="BA" size="xlarge" shape="circle" className='mr-4' onClick={(event) => menuRight.current.toggle(event)} aria-controls="popup_menu_right" aria-haspopup/>
            <About visible={showAbout} label="About" icon="pi pi-exclamation-circle" onClose={ () => setShowAbout(false) }/>
        </div>
      </div>
      <div className='flex h-auto'>
        <div className='flex-column justify-content-center align-items-center text-white-alpha-90 font-bold w-30rem bg-white'>
          <StoreList selectedStore={ (value) => setSelectedStoreObj (value) }/>
        </div>
        <div className='flex-column justify-content-center align-items-center text-black-alpha-90 text-right w-full bg-green-600'>
        <div className='flex h-25rem'>
          <StoreMap storeObj={selectedStoreObj}/> 
        </div>
        <div className='flex h-15rem'>
        <div className='flex w-6 p-1 text-blue-800 text-xl bg-white'>
          <StoreTimings storeObj={selectedStoreObj}/>
          </div>
        <div className='flex w-6 p-1 justify-content-center text-black-alpha-90 text-xl bg-white'>
          <StoreContact storeObj={selectedStoreObj}/>
          </div>
      </div>
    </div>
  </div>
 </div>

  );
}

export default Home;
