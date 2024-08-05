import logo from '../logo.svg'
import './store-list.css';
import { ListBox } from 'primereact/listbox';
import { InputText } from 'primereact/inputtext';
import { mergeprops } from 'primereact/utils';
function StoreList(props) {
   const storeDirectory=[
    
    {
        "id":1001,
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
            "latitude":15.830749264964458,
            "longitude":78.04023528591568
        }
    },
    {
        "id":1002,
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
            "latitude":15.828495179688767,
            "longitude":78.03667830227081
        }
    },
    {
        "id":1003,
        "storeName":"Wollonong",
        "storeDetails":"Textiles",
        "storeTimings":[
                          "Tue-Fri 8 to 10pm",
                          "Fri-Sun 8 to 05pm"

        ],
        "storeContact":{
            "phone":"Phone: +61 888 768 564",
            "address":"Address: 35-66-check post"
        },
        "storeMapLocation":{
            "latitude":-34.422799442100015,
            "longitude":150.8800977947275
        }
    },
    {
        "id":1004,
        "storeName":" Ajwa Restaurent",
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
            "latitude":15.834460563102077, 
            "longitude":78.03137544089209
        }
    },
    {
        "id":1005,
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
            "latitude":15.830923273187274, 
            "latitude":78.03962773380324
            
        }
    },
    {
        "id":1006,
        "storeName":"D mart",
        "storeDetails":"All items",
        "storeTimings":[
                          "Tue-Fri 8 to 10pm",
                          "Fri-Sun 8 to 05pm"

        ],
        "storeContact":{
            "phone":"Phone: +61 276 487 564",
            "address":"Address: 54-76-deva Nagar"
        },
        "storeMapLocation":{
            "latitude":15.832909613449454,
            "latitude":15.832909613449454
            
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
