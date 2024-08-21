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
import About from '../about/about';
import StoreForm from '../store-form/store-form';
import { validateYupSchema } from 'formik';


function Home(props) {
  const onLogoutClicked = () => {
    props.logoutSuccess()
  }
  const [showAbout ,setShowAbout] = useState(false);
  const [showStoreForm ,setShowStoreForm] = useState(false);

  const [selectedStoreObj,setSelectedStoreObj] = useState(null);
  const menuRight = useRef(null);
  const items = [
      {
         // label: 'Options',
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
    <>
    <div className="App flex-column">
      <div className='flex justify-content-center navigation-bar h-8rem'>
        <div className='flex align-items-center justify-content-center store-locator-container text-6xl text-white-alpha-90 w-full'>
          Store Locator
        </div>
        <div className='flex align-items-center justify-content-center gap-2 w-10rem'>
         <Menu model={items} popup ref={menuRight} id="popup_menu_right" popupAlignment="right"/>
           <Avatar  raised onClick={() => setShowStoreForm (true)} icon="pi pi-shop" size="xlarge" shape="circle" className='mr-3' aria-controls="popup_menu_right" aria-haspopup/>
            <Avatar label="VA" size="xlarge" shape="circle" className='mr-3'  onClick={(event) => menuRight.current.toggle(event)} aria-controls="popup_menu_right" aria-haspopup/>
             <About visible={showAbout} label="About" icon="pi pi-exclamation-circle" onClose={()=> setShowAbout(false)}/>
{
showStoreForm && (
  <StoreForm visible={showStoreForm} storeObj={selectedStoreObj} label="StoreForm" icon="pi pi-exclamation-circle" onClose={(values)=>{
  setSelectedStoreObj(values);
  setShowStoreForm (false);
}}/>
  )
}


             {/* <StoreForm visible={showStoreForm} storeObj={selectedStoreObj} label="StoreForm" icon="pi pi-exclamation-circle" onClose={()=> setShowStoreForm (false)}/> */}
        </div>
      </div>
      <div className='flex h-auto'>
        <div className='flex-column text-white-alpha-90 w-30rem bg-pink-100 surface-500'>
          <StoreList selectedStore={(value) => setSelectedStoreObj(value)} />
        </div>
        <div className='flex-column text-black-alpha-90 text-right text-2xl w-full bg-green-200'>
        <div className='flex h-30rem'>
          <StoreMap storeObj={selectedStoreObj}/>
        </div>
        <div className='flex h-15rem align-items-center justify-content-center Store-Timings px-8 text-black-alpha-60 bg-white'>
        <div className='flex-row text-blue-700 w-6'>
          <StoreTimings storeObj={selectedStoreObj}/>
          </div>
        <div className='flex w-6 justify-content-center Store-Contact-Details text-1xl text-black-900 bg-white'>
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