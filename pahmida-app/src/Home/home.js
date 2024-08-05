import logo from '../logo.svg';
import './home.css';
import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';
import { InputText } from 'primereact/inputtext';
import StoreList from '../store-list/store-list';
import StoreMap from '../store-Map/store-Map';
 
import { Menu } from 'primereact/menu';
 
import React, { useState } from 'react';
import StoreTimings from '../store--Timings/store-timings';
import StoreAddress from '../store-Address/store-address';

function Home(props) {
  const [SelectedstoreObj, setSelectedstoreObj] = useState(null);
  const onLogoutClicked=()=>{
  props.logoutSuccess();
  }
  const menuRight = useState(null);
  const items = [
      {
          // label: 'Options',
          items: [
              {
                label: 'About',
                icon: ' pi pi-exclamation-circle'
              },
              {
                   label: ' LogOut',
                  icon: ' pi pi-sign-out',
                  command:()=>{props.logoutSuccess()

                  }
              }
          ]
      }
    ];
  return (
    //Main container
    <div className='home flex-column'>
     <div className='flex justify-content-center h-7rem main'>
      <div className='flex align-items-center justify-content-center w-full text-6xl textcolor'>
       store Locator
      </div>
        <div className='flex align-items-center justify-content-center w-9rem text-6xl mr-4'>
        {/* <Button label="Logout" severity="danger" onClick={()=> onLogoutClicked()} /> */}
        <Menu model={items} popup ref={menuRight} id="popup_menu_right" popupAlignment="right" />
            <Avatar label="PP" size="xlarge" shape="circle" className='text'   onClick={(event) => menuRight.current.toggle(event)} aria-controls="popup_menu_right" aria-haspopup />
        </div>
     </div>
     <div className='flex h-full'>
      <div className='flex-column w-30rem  bg-white'>
         {/* <InputText type="text" placeholder=" "/> */}
          <StoreList Selectedstore={(value)=>setSelectedstoreObj(value)}/>
         
      </div>
      <div className='flex-column w-full '>
        <div className='flex h-26rem'>
          <div className='flex-column w-full'>
          <StoreMap storeObj={SelectedstoreObj}/> 
          </div>
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
