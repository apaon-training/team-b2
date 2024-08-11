import './Home.css';
import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';
import Storelist from '../store-list/storelist';
import React, { useState } from 'react';
import StoreTimings from '../store-Timings/storeTimings';
import StoreAddress from '../store-Address/storeAddress';
import { Menu } from 'primereact/menu';
import StoreMap from '../store-Map/storeMap';
import About from '../About/about';


function Home(props) {
  const [selectedstoreObj, setselectedstoreObj]=useState(null);
  const onLogoutclicked = ()=>{
  props.LogoutSuccess();
  }
  const menuRight = useState(null);
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
                      props.LogoutSuccess();

                    }
                }
            ]
        }
    ];
  return (
    <div className="App flex-column">
      <div className='flex justify-content-center h-8rem navbar'>
        <div className='flex align-items-center justify-content-center w-full text-6xl'>
             Store Locator
        </div>
        <div className='flex align-items-center justify-content-center w-8rem text-6xl mr-6'>
        {/* <Button label="logout" severity="danger" raised onClick={() => onLogoutclicked()} size= "small" className='flex mr-4 pl-2'/> */}
        <Menu model={items} popup ref={menuRight} id="popup_menu_right" popupAlignment="right" label="logout" raised onClick={() => onLogoutclicked()}/>
        <Avatar label="sv" size="xlarge" className='text-black-alpha-60 text-5xl' shape="circle" onClick={(event) => menuRight.current.toggle(event)} aria-controls="popup_menu_right" aria-haspopup />
        <About/>    
        </div>
     </div>
     <div className='flex h-full'>
      <div className='flex-column  w-30rem bg-white'>
      {/* <InputText type="text" placeholder="Search" /> */}
      <Storelist selectedstore={(value)=>setselectedstoreObj(value)}/>
      </div>

      <div className='flex-column w-full'>
        <div className='flex h-25rem'>
   
       <StoreMap storeObj={selectedstoreObj}/>
   
       </div>
       <div className='flex h-12rem text-xl align-items-center justify-content-center px-8 bg-white text-black-alpha-60'>
        <div className='flex-row w-6'>
          <StoreTimings storeObj={selectedstoreObj}/>
      </div>
      <div className=' flex-row w-6 '>
             <StoreAddress storeObj={selectedstoreObj}/>
        </div>
      </div>
      </div>
      </div>
      </div>
    
  );
}

export default Home;