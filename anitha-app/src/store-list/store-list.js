import logo from '../logo.svg'
import './store-list.css';
import { ListBox } from 'primereact/listbox';
function StoreList() {
   const StoreDirectory=[
    {
        "id":1001,
        "storeName":"Wollong",
        "storeDetails":"D-mart",
        "sttoreTimings":[
                          "Mon-Fri 9 to 10pm",
                          "Sat-Sun 9 to 05pm",

        ],
        "storeAddress":{
            "phone":+"61 224 445 665",
            "address":"54-76-sri rama nagar",
        },
        "storeMapLocation":{
            "latitute":65.657,
            "longitude":76.876
        }
    },
    {
        "id":1002,
        "storeName":"Birds way",
        "storeDetails":"Jyothi mall",
        "sttoreTimings":[
                          "Mon-Fri 9 to 8pm",
                          "Sat-Sun 9 to 06pm",

        ],
        "storeAddress":{
            "phone":+"61 665 678 987",
            "address":"54-54 ganesh nagar",
        },
        "storeMapLocation":{
            "latitute":34-378,
            "logitude":98.765
        }
    },
    {
        "id":1003,
        "storeName":"Cross road store",
        "storeDetails":"Digital",
        "sttoreTimings":[
                          "Mon-Fri 8 to 10pm",
                          "Sat-Sun 8 to 05pm",

        ],
        "storeAddress":{
            "phone":+"61 276 487 564",
            "address":"54-76-laksmi nagar",
        },
        "storeMapLocation":{
            "latitute":65.748,
            "logitude":23.345
        }
    }
   ];
}
 const storeTemplate = (store) => {
        return (
            <div className="flex column align-items-center w-8rem ">
                
                <div>{store.storeAddress}</div>
            </div>
    return (
        <>
        <span className="title">
            <InputText value={'test'} className='m-3/>
            <div className="card xl:flex xl:justify-content-center"
        <ListBox options={storeDirectory} 
        itemTemplate={storeTemplate}
        className="w-full"
        />
        </div>
        </span>
        </>
    );
    export default StoreList;
