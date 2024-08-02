import logo from '../logo.svg'
import './store-list.css';
import { ListBox } from 'primereact/listbox';
import { InputText } from 'primereact/inputtext';
import { mergeprops } from 'primereact/utils';
function StoreList(props) {
   const storeDirectory=[
    
    {
        "id":1002,
        "storeName":"Jyothi mall",
        "storeDetails":"Groceries",
        "storeTimings":[
                          "Thus-Fri 5am to 5pm",
                          "Wed-Sun 7am to 06pm"

        ],
        "storeContact":{
            "phone":"Phone: +61 665 678 987",
            "address":"Address: 54-54 ganesh nagar"
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
            "phone":"Phone: +61 276 487 564",
            "address":"Address: 54-76-laksmi nagar"
        },
        "storeMapLocation":{
            "latitute":65.748,
            "logitude":23.345
        }
    },
    {
        "id":1004,
        "storeName":"Wollonong",
        "storeDetails":"Textailes",
        "storeTimings":[
                          "Tue-Fri 8 to 10pm",
                          "Fri-Sun 8 to 05pm"

        ],
        "storeContact":{
            "phone":"Phone: +61 888 768 564",
            "address":"Address: 35-66-check post"
        },
        "storeMapLocation":{
            "latitute":66.888,
            "logitude":22.345
        }
    },
    {
        "id":1005,
        "storeName":"Restaurent",
        "storeDetails":"Food Items",
        "storeTimings":[
                          "Mon-Fri 8 to 11pm",
                          "Mon-Sun 8 to 05pm"

        ],
        "storeContact":{
            "phone":"Phone: +61 276 487 564",
            "address":"Address: 54-55 old bustand"
        },
        "storeMapLocation":{
            "latitute":90.444,
            "logitude":75.333
        }
    },
    {
        "id":1006,
        "storeName":"Skanda",
        "storeDetails":"realestate",
        "storeTimings":[
                          "Tue-Fri 8 to 6pm",
                          "Fri-Sun 8 to 4pm"

        ],
        "storeContact":{
            "phone":"Phone: +61 276 487 564",
            "address":"Address: 54-76-birlagate"
        },
        "storeMapLocation":{
            "latitute":65.748,
            "logitude":23.345
        }
    },
    {
        "id":1007,
        "storeName":"Mobile shop",
        "storeDetails":"Mobiles,chargers",
        "storeTimings":[
                          "Tue-Fri 8 to 10pm",
                          "Fri-Sun 8 to 05pm"

        ],
        "storeContact":{
            "phone":"Phone: +61 276 487 564",
            "address":"Address: 54-76-deva Nagar"
        },
        "storeMapLocation":{
            "latitute":65.748,
            "logitude":23.345
        }
    },
    
 
   ];

 const storeTemplate = (store) => {
    
        return (
            <div className="flex-column border-500 surface-overlay border-1 border-round p-3 text-blue-900 text-xl">
            <div className="flex column align-items-center w-8rem">
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
            <InputText value={'Wollong'} className='text-black-alpha-90 text-3xl border-700 surface-overly border-round m-3'/>
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
