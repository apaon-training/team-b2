import logo from '../logo.svg'
import './store-list.css';
import { ListBox } from 'primereact/listbox';
import { InputText } from 'primereact/inputtext';
import { props } from 'primereact/utils';
import { useState } from 'react';
function StoreList(props) {
   const storeDirectory=[
    
    {
        "id":1001,
        "storeName":"Jyothi Mall",
        "storeDetails":"Groceries",
        "storeTimings":[
                          "Thus-Fri 5am to 5pm",
                          "Wed-Sun 7am to 06pm"

        ],
        "storeContact":{
            "phone":"Phone: +61 665 678 987",
            "address":"Address: 54-54 Ganesh Nagar, Kurnool-518002"
        },
        "storeMapLocation":{
            "lat":15.830749264964458,
            "lng":78.04023528591568
        }
    },
    {
        "id":1002,
        "storeName":"Big C",
        "storeDetails":"Appliances",
        "storeTimings":[
                          "Tue-Fri 08am to 10pm",
                          "Fri-Sun 07am to 03pm"

        ],
        "storeContact":{
            "phone":"Phone: +61 276 487 564",
            "address":"Address: 54-76 Laksmi Nagar, Kurnool-518002"
        },
        "storeMapLocation":{
            "lat":15.828495179688767,
            "lng":78.03667830227081
        }
    },
    
    {
        "id":1003,
        "storeName":" AjwaRestaurent",
        "storeDetails":"Food Items",
        "storeTimings":[
                          "Mon-Fri 09am to 11pm",
                          "Mon-Sun 10amto 05pm"

        ],
        "storeContact":{
            "phone":"Phone: +61 276 487 564",
            "address":"Address: 54-55 Old Bustand, Kurnool-518002"
        },
        "storeMapLocation":{
            "lat":15.834460563102077, 
            "lng":78.03137544089209
        }
    },
    {
        "id":1004,
        "storeName":"Skandha",
        "storeDetails":"realestate",
        "storeTimings":[
                          "Tue-Fri 05am to 06pm",
                          "Fri-Sun 09am to 04pm"

        ],
        "storeContact":{
            "phone":"Phone: +61 276 487 564",
            "address":"Address: 54-76 Birlagate, Kurnool-518002"
        },
        "storeMapLocation":{
            "lat":15.830923273187274, 
            "lng":78.03962773380324
            
        }
    },
    {
        "id":1005,
        "storeName":"D mart",
        "storeDetails":"All items",
        "storeTimings":[
                          "Tue-Fri 07am to 09pm",
                          "Fri-Sun 06am to 05pm"

        ],
        "storeContact":{
            "phone":"Phone: +61 276 487 564",
            "address":"Address: 54-76 Deva Nagar, Kurnool-518002"
        },
        "storeMapLocation":{
            "lat":15.796829980130903, 
            "lng": 78.06907243908894
            
        }
    }
    
 
   ];

   const [displayedStoreDirectory, setDisplayedStoreDirectory] = useState(props.storeDirectory);
 const storeTemplate = (store) => {
    
        return (
            <div className="flex-column border-500 surface-overlay border-1 border-round p-4 text-blue-900 text-lg">
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
        
const searchDirectory = (value) =>{
const filteredValues = props.storeDirectory.filter((item) => {
        if(JSON.stringify(item).indexOf(value) > -1){
        return true;
    }else{
    return false;
    }
    })
        setDisplayedStoreDirectory(filteredValues);
    }
    
    return (
        <>
        <span className="title">
            <InputText onChange={(e) => searchDirectory(e.target.value)} className=' flex-black-alpha-90 text-xl w-20rem h-4rem border-500 surface-overlay border-1 border-round m-4 p-1'/>
            <div className="card xl:flex xl:justify-content-center">
        <ListBox options={displayedStoreDirectory} 
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
