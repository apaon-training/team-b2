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
  let storeDirectory=[
    {
        "id": 10001,
        "storeName": "Wollong",
        "storeDetails": "D-mart",
        "storeTimings": [
            "Mon-Fri- 9 to 12 pm",
            "Sat-Sun-9 to 4 pm"
        ],
        "storeAddress": {
            "phoneNumber": "Phone: +91 799 339 2948",
            "Address": "Address: 71-127 kallur"
        },
        "storeMapLocator": {
            "lat": 15.818716285887168,
            "lng": 78.02985281909494
        }
    },
    {
        "id": 10002,
        "storeName": "jewellery",
        "storeDetails": "chains",
        "storeTimings": [
            "Mon-Fri- 9 to 8 pm",
            "Sat-Sun-9 to 5 pm"
        ],
        "storeAddress": {
            "phoneNumber": "Phone: +91 897 567 2345",
            "Address": "Address: 32-890 hyderabad"
        },
        "storeMapLocator": {
            "lat": 17.44110669506619,
            "lng": 78.44167294347916
        }
    },
    {
        "id": 10003,
        "storeName": "Market",
        "storeDetails": "vegetables",
        "storeTimings": [
            "Mon-Fri- 9:30 to 7pm",
            "Sat-Sun-9 to 8 pm"
        ],
        "storeAddress": {
            "phoneNumber": "Phone: +91 567 894 2345",
            "Address": "Address: 34-90 kerala"
        },
        "storeMapLocator": {
            "lat": 11.151132974584387, 
            "lng": 76.37419758584075
        }
    },
    {
        "id": 10004,
        "storeName": "Resturant",
        "storeDetails": "Biriyani",
        "storeTimings": [
            "Mon-Fri-11 to 9 pm",
            "Sat-Sun-10 to 7 pm"
        ],
        "storeAddress": {
            "phoneNumber": "Phone: +91 907 345 2309",
            "Address": "Address: 89-12 kurnool"
        },
        "storeMapLocator": {
            "lat": 15.835003101525297,
            "lng": 78.03019970361444
        }
    },
    {
        "id": 10005,
        "storeName": "Dress Circle",
        "storeDetails": "Cloths",
        "storeTimings": [
            "Mon-Fri- 8 to 11:30 pm",
            "Sat-Sun-8:30 to 11 pm"
        ],
        "storeAddress": {
            "phoneNumber": "Phone: +91 789 345 7865",
            "Address": "Address: 45-96 old bustand"
        },
        "storeMapLocator": {
            "lat": 15.83069524947175, 
            "lng": 78.03865625424572
        }
    },
    {
        "id": 10006,
        "storeName": "Industry",
        "storeDetails": "Products",
        "storeTimings": [
            "Mon-Fri- 10 to 10:30 pm",
            "Sat-Sun-10:30 to 7 pm"
        ],
        "storeAddress": {
            "phoneNumber": "Phone: +91 567 890 2345",
            "Address": "Address: 12-67 Banglore"
        },
        "storeMapLocator": {
            "lat": 12.963316049614443, 
            "lng": 77.52624223337875
        }
    },
    {
        "id": 10007,
        "storeName": "carpenter",
        "storeDetails": "woods",
        "storeTimings": [
            "Mon-Fri- 9 to 11 pm",
            "Sat-Sun-9 to 6pm"
        ],
        "storeAddress": {
            "phoneNumber": "Phone: +91 789 567 2345",
            "Address": "Address: 89-34 nanoor"
        },
        "storeMapLocator": {
            "lat": 89.7890,
            "lng": 23.2345
        }
    },
    // {
    //     "id": 10008,
    //     "storeName": "food stall",
    //     "storeDetails": "items",
    //     "storeTimings": [
    //         "Mon-Fri- 9 to 6 pm",
    //         "Sat-Sun-9 to 10pm"
    //     ],
    //     "storeAddress": {
    //         "phoneNumber": "Phone: +91 678 456 0978",
    //         "Address": "Address: 34-12 assom"
    //     },
    //     "storeMapLocator": {
    //         "lat": 43.9087,
    //         "lng": 90.7432
    //     }
    // },
];

let emptyStoreObj = {
    "id": 0,
    "storeName": "",
    "storeDetails": "",
    "storeTimings": [
        "",
        ""
    ],
    "storeAddress": {
        "phoneNumber": "",
        "Address": "" 
    },
    "storeMapLocator": {
        "lat": 0,
        "lng": 0
    } 
};


  const [showAbout, setShowAbout] = useState(false);
  const [selectedStoreObj, setSelectedStoreObj] = useState(emptyStoreObj);
  const [storesData,setStoresData] = useState(storeDirectory);
  
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

  const updateStoreObj = (values) =>{
    if(JSON.stringify(values) !== JSON.stringify(emptyStoreObj)){

    const index = storeDirectory.findIndex((item) => item?.id === values?.id);
    if(index > -1){
        storeDirectory[index] = values;
        setStoresData(storeDirectory);
    }else{
    const lastId = storeDirectory[storeDirectory.length - 1].id ;
    values.id = lastId +1;
    storeDirectory.unshift(values);
    setStoresData(storeDirectory);
    }
   
    

    setSelectedStoreObj(values);
}
    setShowStoreForm(false);
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
        {
          showStoreForm && (
            <StoreForm visible={showStoreForm} storeObj={selectedStoreObj} label="StoreForm" icon="pi pi-exclamation-circle" onClose={(values) =>{
            //   setSelectedStoreObj(values);
            //   setShowStoreForm(false);
            updateStoreObj(values);
            }}/> 
          )
        }
        {/* <StoreForm visible={showStoreForm} storeObj={selectedStoreObj} label="StoreForm" icon="pi pi-exclamation-circle" onClose={() =>setShowStoreForm(false)}/> */}
        <Avatar raised onClick={() => setShowStoreForm(true) }   icon="pi pi-shop"  size="xlarge" shape="circle" className='text-black-alpha-60 mr-2' aria-controls="popup_menu_right" aria-haspopup  />
        <Avatar label="SR" mr-9 size="xlarge"   shape="circle" onClick={(event) => menuRight.current.toggle(event)} aria-controls="popup_menu_right" aria-haspopup/>
        
        <About visible={showAbout} label="About" icon="pi pi-exclamation-circle" onClose={()=> setShowAbout(false)}/>
        

        </div>
      </div>
      <div className='flex h-full'>
        <div className='flex-column h-40rem w-30rem bg-white store-list'>
        {/* <InputText type="" placeholder=""/> */}
        <StoreList selectedStore={(value) => setSelectedStoreObj(value)} storeDirectory={storesData}/>
        

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
