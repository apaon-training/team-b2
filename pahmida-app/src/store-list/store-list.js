import logo from '../logo.svg';
import '.store-list.css';
import React, { useState } from "react";
import { ListBox } from 'primereact/listbox';
import { InputText } from 'primereact/inputtext';
function storelist(){
const storeDirectory=[{
    "id":5001,
    "storeName":"Wollong",
    "storeDetails":"textile",
    "storeTimings": ["Mon-Fri-9am t0 10pm",
                     "Sat-Sun-9am to 05pm"],
    "storeAddress":{
             "phone" :  "+61 234 453 656",
             "address" :"jam radionodelist"
            },
    "storeMapLocation":{
        "Lattitudes":23.45,
        "Longitudes":45.23
    }
},
{
"id":5001,
"storeName":"Wollong",
"storeDetails":"textile",
"storeTimings": ["Mon-Fri-9am t0 10pm",
                 "Sat-Sun-9am to 05pm"],
"storeAddress":{
         "phone" :  "+61 234 453 656",
         "address" :"jam radionodelist"
        },
"storeMapLocation":{
    "Lattitudes":23.45,
    "Longitudes":45.23
}
}];

 const storeTemplate = (store) => {
    return (
        <div className="flex-cloumn"> 
        <div className="flex align-items-center w-8rem">
            <div>{store.storeAddress}</div>
        </div>
        </div>
    );
 };      
    return (
        <>
         <span className="title">
            <InputText value={'test'} className='Hi'/>
            <div className="card xl:flex xl:justfy-content-center">
                <ListBox options={storeDirectory}
                itemTemplet={storeTemplate}
                className="w-full"/>
                </div>
                </span>
        </>
);
}
export default  storelist;