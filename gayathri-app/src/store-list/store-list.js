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
        "storeTimings": ["Mon-Fri-9 to 10 pm", 
            "Sat-Sun-9 to 5 pm"

        ],
        "storeContact": {
            "phone": "Phone: +81 123 145 165",
            "address": "Address: 22-86-wollongong main road"
        },
        "storeMapLocation": {
            "latitude":54.0378,
            "longitude":65.0954
        }
    },

    {
        "id":1002,
        "storeName": "Dress Circle",
        "storeDetails": "Saree Retailers",
        "storeTimings": ["Mon-Fri-10 to 10 pm", 
            "Sat-Sun-11 to 9 pm"

        ],
        "storeContact": {
            "phone": "Phone: +08 886 989 992",
            "address": "Address: 40-320C-Abdullah Khan Estate"
        },
        "storeMapLocation": {
            "latitude":38.2134,
            "longitude":89.9604
        }
    },

    {
        "id":1003,
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
            "latitude":99.2548,
            "longitude":66.9632
        }
    },

    {
        "id":1004,
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
            "latitude":87.7896,
            "longitude":78.6897
        }
    },

    {
        "id":1005,
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
            "latitude":81.3456,
            "longitude":91.7890
        }
    },

    {
        "id":1006,
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
            "latitude":12.4567,
            "longitude":70.2846
        }
    },


       {
        "id":1007,
        "storeName": "Big Bazar",
        "storeDetails": "Appliances",
        "storeTimings": ["Mon-Fri-9 to 8 pm", 
            "Sat-Sun-10 to 6 pm"
        ],
        "storeContact": {
            "phone":"Phone: +61 987 765 543",
            "address":"Address: 33-98-chenamma circle"
        },
        "storeMapLocation":{
            "latitude":86.0435,
            "longitude":68.0398
        }
        
    }
    ];


    const storeTemplate = (store) => {
       
        return (
            <div className="flex-column border-700 surface-overlay border-2 border-round p-1 text-blue-800 text-xl">
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
        <InputText value={'wollong'} className=' text-black-alpha-90 text-xl  border-700 surface-overlay border-2 border-round m-4'/>
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