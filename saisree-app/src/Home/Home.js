import './Home.css';
import { Avatar } from 'primereact/avatar';
// import { Button } from 'primereact/button';
import Storelist from '../store-list/storelist';
import React, { useState } from 'react';
import StoreTimings from '../store-Timings/storeTimings';
import StoreAddress from '../store-Address/storeAddress';
import { Menu } from 'primereact/menu';
import StoreMap from '../store-Map/storeMap';
import About from '../About/about';
import StoreForm from '../store-Form/storeForm';


function Home(props) {
  let storeDirectory = [{
    "id":1001,
    "storeName":"Birdsway",
    "storeDetails":"Near Juction",
    "storeTimings":["Mon-Fri-8am to 9pm", 
                    "Sat-Sun-9am to 5pm"
                   ],
    "storeAddress":{
       "phone": "Phone: +61 234 453 654",
       "address":"Address: 2,12-20 jam RadioNodeList"
    },
    "storeMaplocation":{
       "lat":15.8337677,
       "lng":78.0340215
    }
},
 {
   "id":1002,
   "storeName":"wollongong",
    "storeDetails":"Textile mall",
    "storeTimings":["Mon-Fri-7am to 8pm", 
                    "Sat-Sun-10am to 4pm"
                   ],
    "storeAddress":{
       "phone": "Phone: +61 253 453 654",
       "address":"Address: 10-20 station road, NSW"
    },
    "storeMaplocation":{
       "lat":15.8224004,
       "lng":78.0418776
    }
 },
 {
   "id":1004,
   "storeName":"wallmart",
    "storeDetails":"grocery",
    "storeTimings":["Mon-Fri-10am to 8pm", 
                    "Sat-Sun-8am to 6pm"
                   ],
    "storeAddress":{
       "phone" :"phone: +61 253 483 654",
       "address":"Address: 10-20 station road"
    },
    "storeMaplocation":{
       "lat":15.8261087,
       "lng":78.0196085
    }
},
{
   "id":1005,
   "storeName":"Jyothi",
    "storeDetails":"grocery",
    "storeTimings":["Mon-Fri-8am to 9pm", 
                    "Sat-Sun-9am to 5pm"
                   ],
    "storeAddress":{
       "phone": "Phone: +61 253 483 654",
       "address":"Address: 10-20 Near Abdullah Khan estate"
    },
    "storeMaplocation":{
       "lat":15.8125994,
       "lng":78.0121861
    }
},
  {
  "id":1006,
    "storeName":"Birdsway",
    "storeDetails":"Near Juction",
    "storeTimings":["Mon-Fri-8am to 9pm", 
                    "sat-sun-9am to 5pm"
                   ],
    "storeAddress":{
       "phone": "Phone: +61 234 453 654",
       "address":"Address: 2, 12-20 jam RadioNodeList"
    },
    "storeMaplocation":{
       "lat":15.8125994,
       "lng":78.0121861
    }
},
 {
   "id":1008,
   "storeName":"wallmart",
    "storeDetails":"grocery",
    "storeTimings":["Mon-Fri-10am to 8pm", 
                    "Sat-Sun-8am to 6pm"
                   ],
    "storeAddress":{
       "phone": "Phone: +61 253 483 654",
       "address":"Address: 10-20 station road"
    },
    "storeMaplocation":{
       "lat":15.7551875,
       "lng":77.8634611,
    }
}];
  const [storesData, setStoresData] = useState(storeDirectory);
//   const [storeShop, setStoreShop] = useState(storeDirectory);


  const [selectedstoreObj, setselectedstoreObj]=useState(null);
  const onLogoutclicked = ()=>{
  props.LogoutSuccess();
  }

  const [showAbout, setShowAbout]=useState(false);
 /* const setVisible = () => {
        props.showAbout();
  }*/
 const[showStoreForm, setShowStoreForm]=useState(false);
  
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
                    command: () =>{
                      props.LogoutSuccess();

                    }
                }
            ]
        }
    ];

    const updatestoreObj = (values)=>{

      const index = storeDirectory.findIndex((item) => item?.id === values?.id);
      if(index  > -1){
        storeDirectory[index] = values;
        setStoresData(storeDirectory);

     }
      // setStoreShop(storeDirectory)
       setselectedstoreObj(values);
          setShowStoreForm(false);

    }
    return (
    <div className="App flex-column">
      <div className='flex justify-content-center h-8rem navbar'>
        <div className='flex align-items-center justify-content-center w-full text-6xl'>
             Store Locator
        </div>
        <div className='flex align-items-center justify-content-center w-8rem text-6xl mr-6'>
        {/* <Button label="logout" severity="danger" raised onClick={() => onLogoutclicked()} size= "small" className='flex mr-4 pl-2'/> */}
        <Menu model={items} popup ref={menuRight} id="popup_menu_right" popupAlignment="right" label="logout" raised onClick={() => onLogoutclicked()}/>
          {
            showStoreForm &&(
        <StoreForm visible={showStoreForm} storeObj={selectedstoreObj}   icon="pi pi-exclamation-circle" onClose={(values)=>{
         //  setselectedstoreObj(values);
         //  setShowStoreForm(false);

          updatestoreObj(values);
        }}/>
      )
      }
        <Avatar  raised onClick={() => setShowStoreForm(true)} icon="pi pi-shop" size="xlarge" shape="circle" className='text-black-alpha-60 mr-2'/>
        <Avatar label="sv" size="xlarge" className='text-black-alpha-60 text-5xl' shape="circle" onClick={(event) => menuRight.current.toggle(event)} aria-controls="popup_menu_right" aria-haspopup />
        

        <About  visible={showAbout} label="About" icon="pi pi-exclamation-circle" onClose={() => setShowAbout(false)}/>    
        </div>
     </div>
     <div className='flex h-full'>
      <div className='flex-column h-40rem w-30rem bg-white store-list'>
      {/* <InputText type="text" placeholder="Search" /> */}
      <Storelist selectedstore={(value)=>setselectedstoreObj(value)} storeDirectory={storesData}/>
      </div>

      <div className='flex-column w-full'>
        <div className='flex h-25rem'>

   
       <StoreMap storeObj={selectedstoreObj}/>
   
       </div>
       <div className='flex h-15rem text-xl align-items-center justify-content-center px-8 bg-white text-black-alpha-60'>
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