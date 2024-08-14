import logo from '../logo.svg'
import './Home.css';
import { Avatar } from 'primereact/avatar';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import StoreList from '../store-list/Store-List';
import React, { useState } from 'react';
import StoreTimings from '../store-timings/Store-Timings';
import StoreAddress from '../store-address/Store-Address';
import { Menu } from 'primereact/menu';
import StoreMap from '../store-map/Store-Map';
import About from '../about/About';
import StoreForm from '../store-form/Store-Form';




function Home(props) {
  const [showAbout, setShowAbout] = useState(false);
  const [selectedStoreObj, setSelectedStoreObj] = useState(null);
  const onlogoutClicked = () =>{
    props.LogoutSuccess();
  }
  const [showStoreForm, setShowStoreForm] = useState(false);

  const menuRight = useState(null);
  
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
                command:() =>{
                  props.LogoutSuccess();
                }
            }
        ]
    }
];
  
  

  const onLogoutClicked= ()=>{
    props.LogoutSuccess();
  }
  
  return (
    <div className="App flex-column">
      <div className='flex justify-content-center h-8rem navigation-bar'>
        <div className='flex align-items-center justify-content-center text-7xl store-container w-full '>
             Store Locator
        </div>
        <div className='flex  align-items-center justify-content-center avatar w-8rem text-6xl mr-5 '>
        {/* <Button label="Logout" severity="danger"  raised onClick={()=>onLogoutClicked()} size="small" className='flex mr-4 pl-2'/> */}
        <Menu model={items} popup ref={menuRight} id="popup_menu_right" popupAlignment="right" />
        <StoreForm visible={showStoreForm} label="StoreForm" icon="pi pi-exclamation-circle" onClose={() =>setShowStoreForm(false)}/>
        <Avatar raised onClick={() => setShowStoreForm(true) }   icon="pi pi-shop"  size="xlarge" shape="circle" className='text-black-alpha-60 mr-2' aria-controls="popup_menu_right" aria-haspopup  />
        <Avatar label="SR" mr-9 size="xlarge"   shape="circle" onClick={(event) => menuRight.current.toggle(event)} aria-controls="popup_menu_right" aria-haspopup/>
        
        <About visible={showAbout} label="About" icon="pi pi-exclamation-circle" onClose={()=> setShowAbout(false)}/>
        

        </div>
      </div>
      <div className='flex h-full'>
        <div className='flex-column h-40rem w-30rem bg-white store-list'>
        {/* <InputText type="" placeholder=""/> */}
        <StoreList selectedStore={(value) => setSelectedStoreObj(value) }/>
        

        </div>
        <div className='flex-column  w-full bg-orange-200'>
           <div className='flex h-25rem'>
              <div className='flex-column w-full bg-pink-500 text-4xl'>   
        <StoreMap storeObj={selectedStoreObj}/>
        </div>

        

        </div>
        <div className='flex h-15rem text-2xl  align-items-center justify-content-center Store-Timings px-8 bg-white text-black-alpha-60'>
        <div className='flex text-blue-700 w-6 '>
           <StoreTimings storeObj={selectedStoreObj}/>

        </div>
        <div className='flex-row  text-black-alpha-90 w-6 '>
          <div className='flex align-items-center justify-content-center'>
          <StoreAddress storeObj={selectedStoreObj}/>
          </div>
          </div>
        </div>
       </div> 
       </div>
    </div>
    
  );
}


export default Home;
