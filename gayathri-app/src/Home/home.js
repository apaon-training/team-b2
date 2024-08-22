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

  let storeDirectory=[

    {
        "id":1001,
        "storeName": "Joyalukkas",
        "storeDetails": "Jewellery Store",
        "storeTimings": ["Mon-Fri-10:30 to 8:30 pm", 
            "Sat-Sun-11 to 8 pm"

        ],
        "storeContact": {
            "phone": "Phone: +08 518 289 888",
            "address": "Address: 40-29-SP Square Park road"
        },
        "storeMapLocation": {
            "lat":15.82962667811701,
            "lng":78.04052562119666
        }
    },

    {
        "id":1002,
        "storeName": "Foresta",
        "storeDetails": " Cafe and Restaurant",
        "storeTimings": ["Mon-Fri-11 to 11 pm", 
            "Sat-Sun-12 to 12 pm"

        ],
        "storeContact": {
            "phone": "Phone: +91 100 549 951",
            "address": "Address: Bangarpet Road"
        },
        "storeMapLocation": {
            "lat":15.827545019755528,
            "lng":78.0360307362676
        }
    },

    {
        "id":1003,
        "storeName": "Polar Bear",
        "storeDetails": "Ice Cream Parlour",
        "storeTimings": ["Mon-Fri-11 to 11:30 pm", 
            "Sat-Sun-12 to 11:30 pm"

        ],
        "storeContact": {
            "phone": "Phone: +09 741 130 033",
            "address": "Address: Nandyal Check Post-Sree Rama Nagar"
        },
        "storeMapLocation": {
            "lat":15.799024873087912,
            "lng":78.05193162754628
        }
    },

    {
        "id":1004,
        "storeName": "City Square",
        "storeDetails": "Shopping and Entertainment",
        "storeTimings": ["Mon-Fri-10 to 10 pm", 
            "Sat-Sun-11 to 10 pm"

        ],
        "storeContact": {
            "phone": "Phone: +06 303 801 585",
            "address": "Address: 40-37-M-Bus Stand road"
        },
        "storeMapLocation": {
            "lat":15.82679589538261,
            "lng":78.03578543548318
        }
    },


       {
        "id":1005,
        "storeName": "Vishal Mart",
        "storeDetails": "Hyper Market",
        "storeTimings": ["Mon-Fri-9 to 8 pm", 
            "Sat-Sun-10 to 6 pm"
        ],
        "storeContact": {
            "phone":"Phone: +07 678 260 655",
            "address":"Address: Venkata Ramana Colony"
        },
        "storeMapLocation":{
            "lat":15.836253520256038,
            "lng":78.02349759613018
        }
        
    }
    ];

  const [showAbout, setShowAbout] = useState(false);
  const [showStoreForm, setShowStoreForm] = useState(false);
  const [selectedStoreObj,setSelectedStoreObj]=useState(null);
  const [storesData, setStoresData]=useState(storeDirectory);
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

const updateStoreObj = (values) =>{
  
  const index = storeDirectory.findIndex((item) => item?.id === values?.id);
  if(index > -1){
    storeDirectory[index] = values;
    setStoresData(storeDirectory);
  }

  setSelectedStoreObj(values);
  setShowStoreForm(false);

}

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
            // setSelectedStoreObj(values);
            // setShowStoreForm(false);
            updateStoreObj(values);
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
        <StoreList selectedStore={ (value) => setSelectedStoreObj (value) } storeDirectory={storesData}/>
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
