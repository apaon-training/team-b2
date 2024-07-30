import { InputText } from 'primereact/inputtext';
import logo from '../logo.svg';
import './store-list.css';
import { ListBox } from 'primereact/listbox';

function StoreList() {
    const storeDirectory=[
    {
        "id":1001,
        "storeName": "Wollong",
        "storeDetails": "Jyothi mall",
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
        "storeName": "Cross roads store",
        "storeDetails": "Textile mall",
        "storeTimings": ["mon-Fri-9 to 8 pm", 
            "sat-Sun-10 to 6 pm"
        ],
        "storeAddress": {
            "phone":"+61 987 765 543",
            "address":"33-98-chenamma circle"
        },
        "storeMapLocation":{
            "latitude":86.0435,
            "longitude":68.0398
        }
    },
        {
        "id":1003,
        "storeName": "Birds way",
        "storeDetails":"cotton mall",
        "storeTimings": ["mon-Fri-10 to 10 pm", 
            "sat-Sun-10 to 6 pm"
        ],
        "storeAddress": {
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
            <div className="flex column align-items-center gap-2">
                <div>{store.storeName}</div>
                <div>{store.storeDetails}</div>
            </div>
        )
    };
    return(
        <>
        <span className="title"/>
        <InputText value={'test'} className='m-3'/>
        <div className="card xl:flex xl:justify-content-center">
            <ListBox options={storeDirectory}
            itemTemplate={storeTemplate}
            className="w-full"
            />
        </div>
        <span/>
        </>

    );
}










export default StoreList;