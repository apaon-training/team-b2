import logo from '../logo.svg';
import './store-list.css';
import { ListBox } from 'primereact/listbox';
import { InputText } from 'primereact/inputtext';
import {props} from 'primereact/utils';
function StoreList(props){
const storeDirectory=[
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
        "lat": 17.446347238455438, 
        "lng": 78.48424496412154
    }
},
{
"id":5002,
"storeName":" blue berry",
"storeDetails":"Groceries",
"storeTimings": ["Mon-Fri-9am t0 10pm",
                 "Sat-Sun-9am to 07pm"],
"storeAddress":{
         "phone" :  "+61 234 4556",
         "address": "nh"
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
    "storeTimings": ["Mon-tue-9am t0 10pm",
                     "wed-sun-9am to 05pm"],
    "storeAddress":{
             "phone" :  "+61 234 453 656",
             "address" :"jam radionodelist"
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
    "storeTimings": ["Mon-Fri-9am t0 11pm",
                     "Sat-Sun-9am to 05pm"],
    "storeAddress":{
             "phone" :  "+61 234 453 656",
             "address" :"jam radionodelist"
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
    "storeTimings": ["Mon-Fri-10am t0 10pm",
                     "Sat-Sun-9am to 05pm"],
    "storeAddress":{
             "phone" :  "+61 234 453 656",
             "address" :"jam radionodelist"
            },
    "storeMapLocation":{
        "lat":  34.07578285886236,   
        "Longitudes": 105.3599225695611,
    }


},{
    "id":5003,
    "storeName":"Wollong-c",
    "storeDetails":"textile",
    "storeTimings": ["Mon-Fri-10am t0 10pm",
                     "Sat-Sun-9am to 05pm"],
    "storeAddress":{
             "phone" :  "+61 234 453 656",
             "address" :"jam radionodelist"
            },
    "storeMapLocation":{
        "lat": 28.524532281697493,
        "lng":  77.18548550938071
    }
}

];

 const storeTemplate = (store) => {
    return (
       
        <div className="flex-cloumn border-500 surface-overlay border-1 border-round font-bold"> 
        <div className="flex-column w-20rem md:p-3">
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
    return (
        <>
         <div className="title">
            <InputText value={'test'} className="p-inputtext-lg w-full" />
            <div className="card xl:flex xl:justfy-content-center">
                <ListBox options={storeDirectory }
                onChange={(e) => SetSelectedstore(e.value)}
                itemTemplate={storeTemplate}
                className= 'List' w-10rem/>
                </div>
                </div>
        </>

);
 };
export default StoreList;