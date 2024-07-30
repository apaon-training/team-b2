import { Suspense } from 'react';
import logo from '../logo.svg'
import './Home.css';
import { ListBox } from 'primereact/listbox';
import { InputText } from 'primereact/inputtext';


function StoreList(){
const StoreDirectory=[
{
        "id":10001,
        "storeName":"Wollong",
        "storeDetails":"D-mart",
        "storeTimings":["Mon-Fri- 9 to 10 pm",
            "Sat-Sun-9 to 5pm",
        ],
        "storeAddress":{
            "phoneNumber":"+91 799 339 2948",
            "Address": "71-127 kallur",
         },
         "storeMapLocator":{
            "Lattitudes":45.8965,
            "Longitudes":65.8923
         }
        

    }
];
}

[
    {
        "id":10002,
        "storeName":"Jothi Mall",
        "storeDetails":"cloths",
        "storeTimings":["Mon-Fri- 3 to 10 pm",
            "Sat-Sun-10 to 4pm",
        ],
        "storeAddress":{
            "phoneNumber":"+91 564 237 8907",
            "Address": "23-123 kurnool",
         },
         "storeMapLocator":{
            "Lattitudes":31.87535,
            "Longitudes":11.82178
         }
        

    }
];
}

[
    {
        "id":10003,
        "storeName":"Jewellary ",
        "storeDetails":"Gold",
        "storeTimings":["Mon-Fri- 9:30 to 11 pm",
            "Sat-Sun-10 to 6pm",
        ],
        "storeAddress":{
            "phoneNumber":"+91 456 896 3457",
            "Address": "34-189 new york",
         },
         "storeMapLocator":{
            "Lattitudes":21.7890,
            "Longitudes":91.2346
         }
        

    }
];
}

    const storeTemplate = (store) => {
        return (
            <div className="flex align-items-center">
                className=""/
                <div>{store.storeaddress}</div>
            </div>
        );
    };
    return(
    <>
      <span className="title">
      <InputText value={'test'} className='m-3'/>
      <div className="card xl:flex xl:justify-content-center">

      <ListBox options={StoreDirectory}
          itemTemplate={storeTemplate}
          className="w-full"
          />
      </div>
      </span>
    </>
)


    




    );

}
export default StoreList;