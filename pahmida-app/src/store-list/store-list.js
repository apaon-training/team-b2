import logo from '../logo.svg';
import './store-list.css';
import { ListBox } from 'primereact/listbox';
import { InputText } from 'primereact/inputtext';
import { Props } from 'primereact/utils';
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
        "Lattitudes":23.45,
        "Longitudes":45.23
    }
},
{
"id":5002,
"storeName":" blue berry",
"storeDetails":"Groceries",
"storeTimings": ["Mon-Fri-9am t0 10pm",
                 "Sat-Sun-9am to 05pm"],
"storeAddress":{
         "phone" :  "+61 234 4556",
         "address": "nh"
        },
"storeMapLocation":{
    "Lattitudes":23.45,
    "Longitudes":45.23
}
},
{
    "id":5003,
    "storeName":"Wollong-A",
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
    "id":5003,
    "storeName":"Wollong-B",
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
    "id":5003,
    "storeName":"Wollong-A",
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
    "id":5003,
    "storeName":"Wollong-c",
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
}

];

 const storeTemplate = (store) => {
    return (
       
        <div className="flex-cloumn"> 
        <div className="flex align-items-center w-8rem ">
            <div>{store.storeName}
            </div>
            </div>
            <div className="flex-cloumn">   
        <div className="flex align-items-center w-8rem "></div>
            <div>{store.storeDetails}</div>
        </div>
        </div>
    );
 }; 
 const setSelectedStore=(value)=>{   
    props.setSelectedStore(value);
} 
    return (
        <>
         <div className="title">
            <InputText value={'test'} className='Hi'/>
            <div className="card xl:flex xl:justfy-content-center">
                <ListBox options={storeDirectory }
                onChange={(e) => setSelectedStore(e.value)}
                itemTemplate={storeTemplate}
                className= 'List' w-10rem/>
                </div>
                </div>
        </>

);
 };
export default StoreList;