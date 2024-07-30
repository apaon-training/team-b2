import logo from '../logo.svg'
import { ListBox } from 'primereact/listbox';
import { InputText } from 'primereact/inputtext';
import { useState } from 'react';
         
function storelist(){
    const [selectedstore, setselectedstore] = useState();
    const storeDirectory = [{
     "id":1001,
     "storeName":"Birdsway",
     "storeDetails":"Near Juction road",
     "storeTimings":["Mon-Fri-8am to 9pm", 
                     "sat-sun-9am to 5pm",
                    ],
     "storeContact":{
        "phone": "+61 234 453 654",
        "address":"2, 12-20 jam RadioNodeList, wollongong-2432"
     },
     "storeMaplocation":{
        "latitude":"16,33",
        "logitude":14.56
     }
 },
  {
    "id":1002,
    "storeName":"wollongong",
     "storeDetails":"Textile mall",
     "storeTimings":["Mon-Fri-8am to 9pm", 
                     "sat-sun-9am to 5pm",
                    ],
     "storeContact":{
        "phone": "+61 253 453 654",
        "address":"10-20 station road, NSW",
     },
     "storeMaplocation":{
        "latitude":"16,33",
        "logitude":14.56
     }
  }];
  const storeTemplate = (store) => {
    return (
        <div className="flex align-items-center gap-2">
           <div className='flex-column'></div>
            <div>{store.storeAddress}</div>
            </div>
    );
};
    return(
        <>
        <span className="title">
        <InputText value={'text'} className='m-3'/>
        <div className="card xl:flex xl:justify-content-center">
        <ListBox value={selectedstore} onChange={(e) = setselectedstore(e.value)} options={storeDirectory} 
                itemTemplate={storeTemplate} className="w-full"/>
        </div>
            </span>
        </>
    );

}
export default storelist;
