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
  let storeDirectory=[
    
    {
        "id":1001,
        "storeName":"Jyothi Mall",
        "storeDetails":"Groceries",
        "storeTimings":[
                          "Thus-Fri 5am to 5pm",
                          "Wed-Sun 7am to 06pm"

        ],
        "storeContact":{
            "phone":"Phone: +61 665 678 987",
            "address":"Address: 54-54 Ganesh Nagar, Kurnool-518002"
        },
        "storeMapLocation":{
            "lat":15.830749264964458,
            "lng":78.04023528591568
        }
    },
    {
        "id":1002,
        "storeName":"Big C",
        "storeDetails":"Appliances",
        "storeTimings":[
                          "Tue-Fri 08am to 10pm",
                          "Fri-Sun 07am to 03pm"

        ],
        "storeContact":{
            "phone":"Phone: +61 276 487 564",
            "address":"Address: 54-76 Laksmi Nagar, Kurnool-518002"
        },
        "storeMapLocation":{
            "lat":15.828495179688767,
            "lng":78.03667830227081
        }
    },
    
    {
        "id":1003,
        "storeName":" AjwaRestaurent",
        "storeDetails":"Food Items",
        "storeTimings":[
                          "Mon-Fri 09am to 11pm",
                          "Mon-Sun 10amto 05pm"

        ],
        "storeContact":{
            "phone":"Phone: +61 276 487 564",
            "address":"Address: 54-55 Old Bustand, Kurnool-518002"
        },
        "storeMapLocation":{
            "lat":15.834460563102077, 
            "lng":78.03137544089209
        }
    },
    {
        "id":1004,
        "storeName":"Skandha",
        "storeDetails":"realestate",
        "storeTimings":[
                          "Tue-Fri 05am to 06pm",
                          "Fri-Sun 09am to 04pm"

        ],
        "storeContact":{
            "phone":"Phone: +61 276 487 564",
            "address":"Address: 54-76 Birlagate, Kurnool-518002"
        },
        "storeMapLocation":{
            "lat":15.830923273187274, 
            "lng":78.03962773380324
            
        }
    },
    {
        "id":1005,
        "storeName":"D mart",
        "storeDetails":"All items",
        "storeTimings":[
                          "Tue-Fri 07am to 09pm",
                          "Fri-Sun 06am to 05pm"

        ],
        "storeContact":{
            "phone":"Phone: +61 276 487 564",
            "address":"Address: 54-76 Deva Nagar, Kurnool-518002"
        },
        "storeMapLocation":{
            "lat":15.796829980130903, 
            "lng": 78.06907243908894
            
        }
    }
    
 
   ];
  const onLogoutClicked = () => {
    props.logoutSuccess()
  };

  let emptyStoreObj = {      
   "id":0,
  "storeName":"",
  "storeDetails":"",
  "storeTimings":[
                    "",
                    "" ],
  "storeContact":{
      "phone":"",
      "address":""
  },
  "storeMapLocation":{
      "lat":0,
      "lng":0 
      
  }
};
  const [showAbout ,setShowAbout] = useState(false);
  const [showStoreForm ,setShowStoreForm] = useState(false);

  const [selectedStoreObj,setSelectedStoreObj] = useState(emptyStoreObj);

  const [storesData,setStoresData]=useState(storeDirectory);
  
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

  const updateStoreObject = (values) =>{

const index = storeDirectory.findIndex((item) => item?.id === values?.id);
if(index > -1) {
  storeDirectory[index] = values;
  setStoresData(storeDirectory);
}else{
 const lastId = storeDirectory[storeDirectory.length -1].id;
 values.id = lastId + 1;
 storeDirectory.unshift(values);
 setStoresData(storeDirectory);
}

    setSelectedStoreObj(values);
    setShowStoreForm (false);
  }
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
  // setSelectedStoreObj(values);
  // setShowStoreForm (false);
  updateStoreObject(values);
}}/>
  )
}


             {/* <StoreForm visible={showStoreForm} storeObj={selectedStoreObj} label="StoreForm" icon="pi pi-exclamation-circle" onClose={()=> setShowStoreForm (false)}/> */}
        </div>
      </div>
      <div className='flex h-auto'>
        <div className='flex-column text-white-alpha-90 w-30rem bg-pink-100 surface-500'>
          <StoreList selectedStore={(value) => setSelectedStoreObj(value)} storeDirectory={storesData} />
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