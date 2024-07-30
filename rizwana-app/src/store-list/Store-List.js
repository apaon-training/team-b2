import logo from '../logo.svg'
import './Store-List.css';
import { ListBox } from 'primereact/listbox';
import { InputText } from 'primereact/inputtext';




function StoreList(){
const storeDirectory=[
    {
        "id": 10001,
        "storeName": "Wollong",
        "storeDetails": "D-mart",
        "storeTimings": [
            "Mon-Fri- 9 to 10 pm",
            "Sat-Sun-9 to 5pm"
        ],
        "storeAddress": {
            "phoneNumber": "+91 799 339 2948",
            "Address": "71-127 kallur"
        },
        "storeMapLocator": {
            "Lattitudes": 45.8965,
            "Longitudes": 65.8923
        }
    },
    {
        "id": 10001,
        "storeName": "Wollong",
        "storeDetails": "D-mart",
        "storeTimings": [
            "Mon-Fri- 9 to 10 pm",
            "Sat-Sun-9 to 5pm"
        ],
        "storeAddress": {
            "phoneNumber": "+91 799 339 2948",
            "Address": "71-127 kallur"
        },
        "storeMapLocator": {
            "Lattitudes": 45.8965,
            "Longitudes": 65.8923
        }
    },
    {
        "id": 10001,
        "storeName": "Wollong",
        "storeDetails": "D-mart",
        "storeTimings": [
            "Mon-Fri- 9 to 10 pm",
            "Sat-Sun-9 to 5pm"
        ],
        "storeAddress": {
            "phoneNumber": "+91 799 339 2948",
            "Address": "71-127 kallur"
        },
        "storeMapLocator": {
            "Lattitudes": 45.8965,
            "Longitudes": 65.8923
        }
    }
];

    const storeTemplate = (store) => {
        return (
            <div className='flex-cloumn'>
            <div className="flex align-items-center w-8rem">
                 <div>{store.storeName}
                 </div>
                 </div>
                 <div className='flex-cloumn'>
                    <div className='flex align-items-center w-8rem'></div>
                <div>{store.storeDetails}</div>
            </div>
            
            
        );
    };
    return(
    <>
      <div className="title">
      <InputText value={'test'} className='m-3' />
      <div className="card xl:flex xl:justify-content-center">

      <ListBox options={storeDirectory}
          itemTemplate={storeTemplate}
          className="w-full"
          />
      </div>
      </div>
    </>
);


}
export default StoreList;