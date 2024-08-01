import { InputText } from 'primereact/inputtext';
import logo from '../logo.svg';
import './store-list.css';
import { ListBox } from 'primereact/listbox';

function StoreList(props) {
    const storeDirectory=[
    {
        "id":1001,
        "storeName": "Jyothi Mall",
        "storeDetails": "Groceries",
        "storeTimings": ["mon-Fri-9 to 10 pm", 
            "sat-Sun-9 to 5 pm"

        ],
        "storeContact": {
            "phone": "+81 123 145 165",
            "address": "22-86-wollongong main road"
        },
        "storeMapLocation": {
            "latitude":54.0378,
            "longitude":65.0954
        }
    },

    {
        "id":1002,
        "storeName": "City Square Mall",
        "storeDetails": "Shopping and Entertainment",
        "storeTimings": ["mon-Fri-10 to 10 pm", 
            "sat-Sun-11 to 10 pm"

        ],
        "storeContact": {
            "phone": "+06 303 801 585",
            "address": "40-37-M-Bus Stand road"
        },
        "storeMapLocation": {
            "latitude":12.4567,
            "longitude":70.2846
        }
    },


       {
        "id":1003,
        "storeName": "Big Bazar",
        "storeDetails": "Appliances",
        "storeTimings": ["mon-Fri-9 to 8 pm", 
            "sat-Sun-10 to 6 pm"
        ],
        "storeContact": {
            "phone":"+61 987 765 543",
            "address":"33-98-chenamma circle"
        },
        "storeMapLocation":{
            "latitude":86.0435,
            "longitude":68.0398
        }
        
    },
        {
        "id":1004,
        "storeName": "Gayathri Mall",
        "storeDetails":"Clothes",
        "storeTimings": ["mon-Fri-10 to 10 pm", 
            "sat-Sun-10 to 6 pm"
        ],
        "storeContact": {
            "phone":"+91 567 234 890",
            "address": "23-44-Near junction road"
        },
        "storeMapLocation":{
            "latitude":98.0132,
            "longitude":48.0965
        }
    }
    ];


    const storeTemplate = (store) => {
       
        return (
            <div className="flex-column border-500 surface-overlay border-2 border-round p-3">
                <div className="flex column align-items-center w-8rem">
                    {store.storeName}
                </div>
                <div className="flex align-items-center">
                    {store.storeDetails}
                </div>
                </div>
             );
    };

    const setSelectedStore = (value)=>{
        props.selectedStore(value);
    }
    return(
        <>
        <span className="title"/>
        <InputText value={'wollong'} className=' text-white-alpha-90 bg-pink-800 m-4'/>
        <div className="card xl:flex xl:justify-content-center">
            <ListBox options={storeDirectory}
            onChange={(e) => setSelectedStore(e.value)}
            itemTemplate={storeTemplate}
            className="w-full"
            />
        </div>
        <span/>
        </>

    );
}
export default StoreList;