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
            "phoneNumber": "Phone: +91 799 339 2948",
            "Address": "Address: 71-127 kallur"
        },
        "storeMapLocator": {
            "Lattitudes": 45.8965,
            "Longitudes": 65.8923
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
            "Lattitudes": 15.3456,
            "Longitudes": 89.0912
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
            "Lattitudes": 89.7890,
            "Longitudes": 34.7098
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
            "Lattitudes": 67.7890,
            "Longitudes": 78.1267
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
            "Lattitudes": 87.1287,
            "Longitudes": 43.5678
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
            "Lattitudes": 89.6543,
            "Longitudes": 32.9023
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
            "Lattitudes": 89.7890,
            "Longitudes": 23.2345
        }
    },
    {
        "id": 10008,
        "storeName": "food stall",
        "storeDetails": "items",
        "storeTimings": [
            "Mon-Fri- 9 to 6 pm",
            "Sat-Sun-9 to 10pm"
        ],
        "storeAddress": {
            "phoneNumber": "Phone: +91 678 456 0978",
            "Address": "Address: 34-12 assom"
        },
        "storeMapLocator": {
            "Lattitudes": 43.9087,
            "Longitudes": 90.7432
        }
    },
];

    const storeTemplate = (store) => {
        return (

            <div className='flex-cloumn border-500 surface-overlay border-1 border-round font-medium line-height-3 1g:2 w-full h-4rem'>
            <div className='flex align-items-center ml-2 w-8rem'>
                 <div>{store.storeName}
                 </div>
                 </div>
                 
                    <div className='flex align-items-center ml-2 w-8rem'>
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
      <InputText value={'wollong'} className="text-black-alpha-90 text-3xl border-700 surface-overly border-round m-3" />
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