import logo from '../logo.svg'
import './store-list.css';
import { ListBox } from 'primereact/listbox';
import { InputText } from 'primereact/inputtext';
import { mergeprops } from 'primereact/utils';
function StoreList(props) {
   const storeDirectory=[
    {
        "id": 1001,
        "storeName": "beauty parlour",
        "storeDetails": "Make up kits",
        "storeTimings": [
            "Sat-Fri 8am to 10pm",
            "Mon-Sun 10am to 05pm"
        ],
        "storeContact": {
           "phone": "+61 224 445 665",
            "address": "54-76-sri rama nagar"
        },
        "storeMapLocation": {
            "latitute": 65.657,
            "longitude": 76.876
        }
    },
    {
        "id":1001,
        "storeName":"Denny shop",
        "storeDetails":"clothes",
        "storeTimings":[
                          "Mon-Fri 9 to 10pm",
                          "Sat-Sun 9 to 05pm"

        ],
        "storeContact":{
            "phone":"+61 224 445 665",
            "address":"54-76- ashok nagar"
        },
        "storeMapLocation":{
            "latitute":65.657,
            "longitude":76.876
        }
    },
    {
        "id":1002,
        "storeName":"Jyothi mall",
        "storeDetails":"Groceries",
        "storeTimings":[
                          "Thus-Fri 5am to 5pm",
                          "Wed-Sun 7am to 06pm"

        ],
        "storeContact":{
            "phone":"+61 665 678 987",
            "address":"54-54 ganesh nagar"
        },
        "storeMapLocation":{
            "latitute":34-378,
            "logitude":98.765
        }
    },
    {
        "id":1003,
        "storeName":"Big C",
        "storeDetails":"Appliances",
        "storeTimings":[
                          "Tue-Fri 8 to 10pm",
                          "Fri-Sun 8 to 05pm"

        ],
        "storeContact":{
            "phone":"+61 276 487 564",
            "address":"54-76-laksmi nagar"
        },
        "storeMapLocation":{
            "latitute":65.748,
            "logitude":23.345
        }
    } 
   ];

 const storeTemplate = (store) => {
    
        return (
            <div className='flex-column border-500 surface-overlay border-1 border-round p-3'>
            <div className='flex column align-items-center w-8rem'>
                  {store.storeName}
                
                </div>
                <div className='flex align-items-center'>
                  {store.storeDetails}
                </div>
            </div>
        )
    };
    const setSelectedStore = (value) => {
        props.selectedStore(value);
    }
    
    return (
        <>
        <span className="title">
            <InputText value={'Wollong'} className='m-3'/>
            <div className="card xl:flex xl:justify-content-center">
        <ListBox options={storeDirectory} 
        onChange={(e) => setSelectedStore(e.value)}
        itemTemplate={storeTemplate}
        className="w-full"
        />
        </div>
        </span>
        </>
    );
}
export default StoreList;
