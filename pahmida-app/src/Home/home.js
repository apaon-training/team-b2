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
import About from '../about/about';
import Form from '../form/form';
 

function Home(props) {
  let storeDirectory=[
    {
    "id":5001,
    "storeName":"Wollong",
    "storeDetails":"textile",
    "storeTimings": ["Mon-Fri-9am to 10pm",
                     "Sat-Sun-9am to 05pm"],
    "storeAddress":{
             "phone" :  "Phone: +61 234 453 656",
             "address" :"Address: jam radionodelist"
            },
    "storeMapLocation":{
        "lat": 17.446347238455438, 
        "lng": 78.48424496412154
    }
},
{
"id":5002,
"storeName":" blue berry",
"storeDetails":"Groceries",
"storeTimings": ["Mon-Fri-9am to 10pm",
                 "Sat-Sun-9am to 07pm"],
"storeAddress":{
         "phone" :  "Phone: +61 234 4556",
         "address": "Address: nh"
        },
"storeMapLocation":{
    "lat": 13.030867019063377,
    "lng":77.5864833777009
}
},
{
    "id":5003,
    "storeName":"Wollong-A",
    "storeDetails":"textile",
    "storeTimings": ["Mon-tue-9am to 10pm",
                     "wed-sun-9am to 05pm"],
    "storeAddress":{
             "phone" :  "Phone: +61 234 453 656",
             "address" :"Address: jam radionodelist"
            },
    "storeMapLocation":{
        "lat": 28.613486438560322, 
        "lng": 77.20072864423555
    }
},
{
    "id":5003,
    "storeName":"Wollong-B",
    "storeDetails":"textile",
    "storeTimings": ["Mon-Fri-9am to 11pm",
                     "Sat-Sun-9am to 05pm"],
    "storeAddress":{
             "phone" :  "Phone: +61 234 453 656",
             "address" :"Address: jam radionodelist"
            },
    "storeMapLocation":{
        "lat": 25.209921150048142,  
        "lng": 55.272737096350745
    }
},
{
    "id":5003,
    "storeName":"Wollong-A",
    "storeDetails":"textile",
    "storeTimings": ["Mon-Fri-10am to 10pm",
                     "Sat-Sun-9am to 05pm"],
    "storeAddress":{
             "phone" :  "Phone: +61 234 453 656",
             "address" :"Addeess: jam radionodelist"
            },
    "storeMapLocation":{
        "lat":  34.07578285886236,   
        "Longitudes": 105.3599225695611,
    }


},{
    "id":5003,
    "storeName":"Wollong-c",
    "storeDetails":"textile",
    "storeTimings": ["Mon-Fri-10am to 10pm",
                     "Sat-Sun-9am to 05pm"],
    "storeAddress":{
             "phone" :  "Phone: +61 234 453 656",
             "address" :"Address: jam radionodelist"
            },
    "storeMapLocation":{
        "lat": 28.524532281697493,
        "lng":  77.18548550938071
    }
}
];
 let emptyStoreObj = {
  "id":0,
    "storeName":"",
    "storeDetails":"",
    "storeTimings": ["",""],
    "storeAddress":{
             "phone" :  "",
             "address" :""
            },
    "storeMapLocation":{
        "lat": 0, 
        "lng": 0
    }
};
  
  const [SelectedstoreObj, setSelectedstoreObj] = useState(emptyStoreObj);
  const onLogoutClicked=()=>{
  props.logoutSuccess();
  }
  const [showAbout, setShowAbout]=useState(false);
  const [showForm, setShowForm]=useState(false);
  const menuRight = useState(null);
  const [storesData,setStoresData]= useState(storeDirectory);
  const items = [
      {
          // label: 'Options',
          items: [
              {
                label: 'About',
                icon: ' pi pi-exclamation-circle',
                command:()=>
                  {
                    setShowAbout(true);

                  }
              },
              {
                   label: ' LogOut',
                  icon: ' pi pi-sign-out',
                  command:()=>{props.logoutSuccess();

                  }
              }
          ]
      }
    ];
    
    const updatestoreObj =(values)=>{
    const index = storeDirectory.findIndex((item)=> item?.id === values?.id);
     if(index> -1){
      storeDirectory[index] = values;
      setStoresData(storeDirectory);
     }else{
      //for new obj
      //first generate new id
      const lastId = storeDirectory[storeDirectory.length - 1].id;
      values.id = lastId + 1;
    storeDirectory.unshift(values);
    setStoresData(storeDirectory);    
  }
     setSelectedstoreObj(values);
       setShowForm(false);
    }
  return (
    //Main container
    <div className='home flex-column'>
     <div className='flex justify-content-center h-7rem main'>
      <div className='flex align-items-center justify-content-center w-full text-6xl textcolor'>
       Store Locator
      </div>
        <div className='flex align-items-center justify-content-center w-9rem text-6xl mr-4'>
        {/* <Button label="Logout" severity="danger" onClick={()=> onLogoutClicked()} /> */}
        <Menu model={items} popup ref={menuRight} id="popup_menu_right" popupAlignment="right" raised onClick={()=>onLogoutClicked()}/>
          {
            showForm && (
              <Form visible={showForm} storeObj={SelectedstoreObj} label ="Form" icon="pi pi-exclamation-circle" onClose={(values) =>{
              // setSelectedstoreObj(values);
              // setShowForm(false);
            updatestoreObj(values);
            }}/>
            )
          }
{/* 

      <Form visible={showForm} label ="Form" icon="pi pi-exclamation-circle" onClose={() => setShowForm(false)}/> */}
        <Avatar raised onClick={()=>setShowForm(true)} icon="pi pi-shop"size="xlarge" shape="circle" className="text-black-alpga-70 mr-3"/>
            <Avatar label="PP" size="xlarge" shape="circle" className='text' onClick={(event) => menuRight.current.toggle(event)} aria-controls="popup_menu_right" aria-haspopup  />
     <About visible={showAbout} label ="About" icon="pi pi-exclamation-circle" onClose={() => setShowAbout(false)}/>
     </div>
     </div>
     <div className='flex h-full'>
      <div className='flex-column w-30rem  bg-white'>
         {/* <InputText type="text" placeholder=" "/> */}  
          <StoreList Selectedstore={(value)=>setSelectedstoreObj(value) } storeDirectory={ storesData}/>
         
      </div>
      <div className='flex-column w-full '>
        <div className='flex h-26rem'>
          <div className='flex-column w-full'>
          <StoreMap storeObj={SelectedstoreObj}/> 
          </div>
         </div>
        <div className='flex align-items-center justify-content-center h-15rem bg-white px-8'>
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
