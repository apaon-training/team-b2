import './store-list.css'
import { InputText } from 'primereact/inputtext';
import { OrderList } from 'primereact/orderlist';
import React, { useState, useEffect } from 'react';
import { ListBox } from 'primereact/listbox';

function StoreList(){

  const storeDirectory = [
    //First store object
    {
        "id": 1001,
        "storeName": "Wollongong",
        "storeDetails": "Textile mall",
        "storeTimings": [
            "Mon - Fri - 9 to 10 PM",
            "Sat - Sun - 9 to 05 PM",
        ],
        "storeContact": {
            "phone": "+61 253 435 334",
            "address":  "10-20 station road, NSW",
        },
        "storeMapLocation": {
            "latitude": 61.0032,
            "longitude": 53.03003
        }

    },
    //Second object
    {
        "id": 1002,
        "storeName": "Bird Way",
        "storeDetails": "Groceries mall",
        "storeTimings": [
            "Mon - Fri - 9 to 07 PM",
            "Sat - Sun - 9 to 05 PM",
        ],
        "storeContact": {
            "phone": "+61 123 434 763",
            "address":  "Near Junction road - NSW",
        },
        "storeMapLocation": {
            "latitude": 45.0034,
            "longitude": 54.03043
        }

    },
        //Second object
        {
            "id": 1003,
            "storeName": "aad Way",
            "storeDetails": "Groceries mall",
            "storeTimings": [
                "Mon - Fri - 9 to 07 PM",
                "Sat - Sun - 9 to 05 PM",
            ],
            "storeContact": {
                "phone": "+61 123 434 763",
                "address":  "Near Junction road - NSW",
            },
            "storeMapLocation": {
                "latitude": 45.0034,
                "longitude": 54.03043
            }
    
        },
            //Second object
    {
        "id": 1004,
        "storeName": "adadsfdsf Way",
        "storeDetails": "Groceries mall",
        "storeTimings": [
            "Mon - Fri - 9 to 07 PM",
            "Sat - Sun - 9 to 05 PM",
        ],
        "storeContact": {
            "phone": "+61 123 434 763",
            "address":  "Near Junction road - NSW",
        },
        "storeMapLocation": {
            "latitude": 45.0034,
            "longitude": 54.03043
        }

    }
  ];

  const storeTemplate = (store) => {
        return (
            <div className="flex-column align-items-center">
                <div className="text-2xl">{store.storeName}</div>
                <div className="text-3xl">{store.storeDetails}</div>
            </div>
        );
    };


    return (
        <>
            <span className="title">
            <InputText value={'test'}  className='m-3'/>
            <div className="card xl:flex xl:justify-content-center">
            <ListBox options={storeDirectory}  
                itemTemplate={storeTemplate} 
                className="w-full" 
                />

        </div>
            </span>
        </>
    )
}

export default StoreList;