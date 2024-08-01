import logo from '../logo.svg'
import './Store-List.css';
import { ListBox } from 'primereact/listbox';
import { InputText } from 'primereact/inputtext';
import React, { useState, useEffect }from 'react';
import { OrderList } from 'primereact/orderlist';




function StoreList(props){
const storeDirectory=[
    {
        "id": 10001,
        "storeName": "Wollong",
        "storeDetails": "D-mart",
        "storeTimings": [
            "Mon-Fri- 9 to 12 pm",
            "Sat-Sun-9 to 4 pm"
        ],
        "storeAddress": {
            "phoneNumber": "+91 799 339 2948",
            "Address": "71-127 kallur"
        },
        "storeMapLocator": {
            "Lattitudes": 45.8965,
            "Longitudes": 65.8923
        }
    },
    {
        "id": 10001,
        "storeName": "Wollong",
        "storeDetails": "D-mart",
        "storeTimings": [
            "Mon-Fri- 9 to 10 pm",
            "Sat-Sun-9 to 5pm"
        ],
        "storeAddress": {
            "phoneNumber": "+91 799 339 2948",
            "Address": "71-127 kallur"
        },
        "storeMapLocator": {
            "Lattitudes": 45.8965,
            "Longitudes": 65.8923
        }
    },
    {
        "id": 10001,
        "storeName": "Wollong",
        "storeDetails": "D-mart",
        "storeTimings": [
            "Mon-Fri- 9 to 5pm",
            "Sat-Sun-9 to 9 pm"
        ],
        "storeAddress": {
            "phoneNumber": "+91 799 339 2948",
            "Address": "71-127 kallur"
        },
        "storeMapLocator": {
            "Lattitudes": 45.8965,
            "Longitudes": 65.8923
        }
    }
];

    const storeTemplate = (store) => {
        return (

            <div className='flex-cloumn'>
            <div className='flex align-items-center w-8rem'>
                 <div>{store.storeName}
                 </div>
                 </div>
                 
                    <div className='flex align-items-center'>
                <div>{store.storeDetails}</div>
            </div>
            </div>
            
            
        );
    };
    const setSelectedStore = (value)=>{
        props.selectedStore(value);
    }
    return (
    <>
      <div className="title">
      <InputText value={'test'} className='m-3' />
      <div className="card xl:flex xl:justify-content-center">

      <ListBox options={storeDirectory}
           onChange={(e) => setSelectedStore(e.value)}

          itemTemplate={storeTemplate}
          className="w-full"
          />
      </div>
      </div>
    </>
)

 }
export default StoreList;