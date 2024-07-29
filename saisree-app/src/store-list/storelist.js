import logo from '../logo.svg'
import { ListBox } from 'primereact/listbox';
import { InputText } from 'primereact/inputtext';
         
function storelist(){
    const storeDirectory = [{
     "storeName":"Birdsway",
     "storeAddress":"Near Juction road",
     "storeTimings":["Mon-Fri-8am to 9pm", 
                     "sat-sun-9am to 5pm",
                    ],
     "storeDetails":{
        "phone": "+61 234 453 654",
        "address":"2, 12-20 jam RadioNodeList, wollongong-2432"
     },
     "storeMaplocation":{
        "latitude":16,33,
        "logitude":14.56
     }
 },
  {
    "storeName":"Birdsway",
     "storeAddress":"Near Juction road",
     "storeTimings":["Mon-Fri-8am to 9pm", 
                     "sat-sun-9am to 5pm",
                    ],
     "storeDetails":{
        "phone": "+61 234 453 654",
        "address":"2, 12-20 jam RadioNodeList, wollongong-2432"
     },
     "storeMaplocation":{
        "latitude":16,33,
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
    return(
        <span className="title">
        <InputText value={'test'} className='m-3'/>
        <div className="card flex justify-content-center">
                <ListBox options={storeDirectory}
                    itemTemplate={storeTemplate}
                     className="w-full"/>
            </div>
            </span>
    );

}
export default storelist;
