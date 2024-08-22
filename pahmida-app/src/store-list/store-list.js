import logo from '../logo.svg';
import './store-list.css';
import { ListBox } from 'primereact/listbox';
import { InputText } from 'primereact/inputtext';
import {props} from 'primereact/utils';
import { useEffect, useState } from 'react';
function StoreList(props){
// const storeDirectory=[
//     {
//     "id":5001,
//     "storeName":"Wollong",
//     "storeDetails":"textile",
//     "storeTimings": ["Mon-Fri-9am to 10pm",
//                      "Sat-Sun-9am to 05pm"],
//     "storeAddress":{
//              "phone" :  "Phone: +61 234 453 656",
//              "address" :"Address: jam radionodelist"
//             },
//     "storeMapLocation":{
//         "lat": 17.446347238455438, 
//         "lng": 78.48424496412154
//     }
// },
// {
// "id":5002,
// "storeName":" blue berry",
// "storeDetails":"Groceries",
// "storeTimings": ["Mon-Fri-9am to 10pm",
//                  "Sat-Sun-9am to 07pm"],
// "storeAddress":{
//          "phone" :  "Phone: +61 234 4556",
//          "address": "Address: nh"
//         },
// "storeMapLocation":{
//     "lat": 13.030867019063377,
//     "lng":77.5864833777009
// }
// },
// {
//     "id":5003,
//     "storeName":"Wollong-A",
//     "storeDetails":"textile",
//     "storeTimings": ["Mon-tue-9am to 10pm",
//                      "wed-sun-9am to 05pm"],
//     "storeAddress":{
//              "phone" :  "Phone: +61 234 453 656",
//              "address" :"Address: jam radionodelist"
//             },
//     "storeMapLocation":{
//         "lat": 28.613486438560322, 
//         "lng": 77.20072864423555
//     }
// },
// {
//     "id":5003,
//     "storeName":"Wollong-B",
//     "storeDetails":"textile",
//     "storeTimings": ["Mon-Fri-9am to 11pm",
//                      "Sat-Sun-9am to 05pm"],
//     "storeAddress":{
//              "phone" :  "Phone: +61 234 453 656",
//              "address" :"Address: jam radionodelist"
//             },
//     "storeMapLocation":{
//         "lat": 25.209921150048142,  
//         "lng": 55.272737096350745
//     }
// },
// {
//     "id":5003,
//     "storeName":"Wollong-A",
//     "storeDetails":"textile",
//     "storeTimings": ["Mon-Fri-10am to 10pm",
//                      "Sat-Sun-9am to 05pm"],
//     "storeAddress":{
//              "phone" :  "Phone: +61 234 453 656",
//              "address" :"Addeess: jam radionodelist"
//             },
//     "storeMapLocation":{
//         "lat":  34.07578285886236,   
//         "Longitudes": 105.3599225695611,
//     }


// },{
//     "id":5003,
//     "storeName":"Wollong-c",
//     "storeDetails":"textile",
//     "storeTimings": ["Mon-Fri-10am to 10pm",
//                      "Sat-Sun-9am to 05pm"],
//     "storeAddress":{
//              "phone" :  "Phone: +61 234 453 656",
//              "address" :"Address: jam radionodelist"
//             },
//     "storeMapLocation":{
//         "lat": 28.524532281697493,
//         "lng":  77.18548550938071
//     }
// }

// ];
const [displayedStoreDirectory, setDisplayedStoreDirectory]= useState(props.storeDirectory);
useEffect(()=> setDisplayedStoreDirectory(props.storeDirectory),[props.storeDirectory])
 const storeTemplate = (store) => {
    return (
       
        <div className="flex-cloumn border-800 surface-overlay border-1 border-round font-bold line-height-3 lg:2 w-full h-4rem py-0.5 "> 
        <div className="flex-column w-25rem md:p-3">
            <div>{store.storeName}
            </div>
            <div>{store.storeDetails}</div>
        </div>
        {/* <div className="flex-cloumn">   
        <div className="flex text-center w-10rem "></div>
            <div>{store.storeDetails}</div>
        </div> */}
        </div>
    );
 }; 
 const SetSelectedstore=(value)=>{   
    props.Selectedstore(value);
} 

const searchDirectory=(value)=>{
     const filteredvalues = props.storeDirectory.filter((item)=>{
        if(JSON.stringify(item).indexOf(value)>-1){
            return true;
        }
        else{
            return false;
        }
     })
     setDisplayedStoreDirectory(filteredvalues);
}
        return (
        <>
         <div className="title">
           <InputText onChange={(e)=> searchDirectory(e.target.value)} className="flex-black-apha-90 text-xl w-20rem border-800 surface-overlay border-1 border-round ml-7 lg:2 py:1 md:p-5 h-3rem w-3"/>
            <div className="card xl:flex xl:justfy-content-center">
                <ListBox options={displayedStoreDirectory}
                onChange={(e) => SetSelectedstore(e.value)}
                itemTemplate={storeTemplate}
                className=  "w-full"/>
                </div>
                </div>
        </>

);
 };
export default StoreList;