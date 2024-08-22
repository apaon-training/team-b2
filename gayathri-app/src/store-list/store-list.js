import { InputText } from 'primereact/inputtext';
import './store-list.css';
import { ListBox } from 'primereact/listbox';
import { useState } from 'react';

function StoreList(props) {
    const storeDirectory=[

    {
        "id":1001,
        "storeName": "Joyalukkas",
        "storeDetails": "Jewellery Store",
        "storeTimings": ["Mon-Fri-10:30 to 8:30 pm", 
            "Sat-Sun-11 to 8 pm"

        ],
        "storeContact": {
            "phone": "Phone: +08 518 289 888",
            "address": "Address: 40-29-SP Square Park road"
        },
        "storeMapLocation": {
            "lat":15.82962667811701,
            "lng":78.04052562119666
        }
    },

    {
        "id":1002,
        "storeName": "Foresta",
        "storeDetails": " Cafe and Restaurant",
        "storeTimings": ["Mon-Fri-11 to 11 pm", 
            "Sat-Sun-12 to 12 pm"

        ],
        "storeContact": {
            "phone": "Phone: +91 100 549 951",
            "address": "Address: Bangarpet Road"
        },
        "storeMapLocation": {
            "lat":15.827545019755528,
            "lng":78.0360307362676
        }
    },

    {
        "id":1003,
        "storeName": "Polar Bear",
        "storeDetails": "Ice Cream Parlour",
        "storeTimings": ["Mon-Fri-11 to 11:30 pm", 
            "Sat-Sun-12 to 11:30 pm"

        ],
        "storeContact": {
            "phone": "Phone: +09 741 130 033",
            "address": "Address: Nandyal Check Post-Sree Rama Nagar"
        },
        "storeMapLocation": {
            "lat":15.799024873087912,
            "lng":78.05193162754628
        }
    },

    {
        "id":1004,
        "storeName": "City Square",
        "storeDetails": "Shopping and Entertainment",
        "storeTimings": ["Mon-Fri-10 to 10 pm", 
            "Sat-Sun-11 to 10 pm"

        ],
        "storeContact": {
            "phone": "Phone: +06 303 801 585",
            "address": "Address: 40-37-M-Bus Stand road"
        },
        "storeMapLocation": {
            "lat":15.82679589538261,
            "lng":78.03578543548318
        }
    },


       {
        "id":1005,
        "storeName": "Vishal Mart",
        "storeDetails": "Hyper Market",
        "storeTimings": ["Mon-Fri-9 to 8 pm", 
            "Sat-Sun-10 to 6 pm"
        ],
        "storeContact": {
            "phone":"Phone: +07 678 260 655",
            "address":"Address: Venkata Ramana Colony"
        },
        "storeMapLocation":{
            "lat":15.836253520256038,
            "lng":78.02349759613018
        }
        
    }
    ];

    const [displayedStoreDirectory, setDisplayedStoreDirectory] = useState(props.storeDirectory);


    const storeTemplate = (store) => {
       
        return (
            <div className="flex-column border-700 surface-overlay border-1 border-round p-3 text-blue-800 text-lg">
                <div className="flex column w-8rem">
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
    const searchDirectory = (value) => {
        const filteredValues = props.storeDirectory.filter((item) => {
            if(JSON.stringify(item).indexOf(value) > -1) {
                return true;
            }else{
                return false;
            }
        })
        setDisplayedStoreDirectory(filteredValues);
    }

    return(
        <>
        <span className="title"/>
        <InputText onChange={ (e) => searchDirectory(e.target.value)} className=' text-black-alpha-90 text-xl w-20rem p-2 border-700 surface-overlay border-1 border-round m-4'/>
        <div className="card xl:flex xl:justify-content-center">
            <ListBox options={displayedStoreDirectory}
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