import { ListBox } from 'primereact/listbox';
import { InputText } from 'primereact/inputtext';

         
function Storelist(props){
    const storeDirectory = [{
     "id":1001,
     "storeName":"Birdsway",
     "storeDetails":"Near Juction road",
     "storeTimings":["Mon-Fri-8am to 9pm", 
                     "sat-sun-9am to 5pm"
                    ],
     "storeAddress":{
        "phone": "+61 234 453 654",
        "address":"2, 12-20 jam RadioNodeList, wollongong-2432"
     },
     "storeMaplocation":{
        "latitude":16.43,
        "logitude":14.56
     }
 },
  {
    "id":1002,
    "storeName":"wollongong",
     "storeDetails":"Textile mall",
     "storeTimings":["Mon-Fri-7am to 8pm", 
                     "sat-sun-10am to 4pm"
                    ],
     "storeAddress":{
        "phone": "+61 253 453 654",
        "address":"10-20 station road, NSW"
     },
     "storeMaplocation":{
        "lattitudes":16.33,
        "logitudes":14.65
     }
  },
  {
    "id":1004,
    "storeName":"wallmart",
     "storeDetails":"grocery",
     "storeTimings":["Mon-Fri-10am to 8pm", 
                     "sat-sun-8am to 6pm"
                    ],
     "storeAddress":{
        "phone": "+61 253 483 654",
        "address":"10-20 station road"
     },
     "storeMaplocation":{
        "lattitudes":16.73,
        "logitudes":14.85
     }
},
{
    "id":1005,
    "storeName":"Jyothi",
     "storeDetails":"grocery",
     "storeTimings":["Mon-Fri-8am to 9pm", 
                     "sat-sun-9am to 5pm"
                    ],
     "storeAddress":{
        "phone": "+61 253 483 654",
        "address":"10-20 Near Abdullah Khan estate"
     },
     "storeMaplocation":{
        "lattitudes":18.73,
        "logitudes":19.85
     }
},
   {
   "id":1006,
     "storeName":"Birdsway",
     "storeDetails":"Near Juction road",
     "storeTimings":["Mon-Fri-8am to 9pm", 
                     "sat-sun-9am to 5pm"
                    ],
     "storeAddress":{
        "phone": "+61 234 453 654",
        "address":"2, 12-20 jam RadioNodeList, wollongong-2432"
     },
     "storeMaplocation":{
        "latitude":16.43,
        "logitude":14.56
     }
 },
  {
    "id":1007,
    "storeName":"wollongong",
     "storeDetails":"Textile mall",
     "storeTimings":["Mon-Fri-7am to 8pm", 
                     "sat-sun-10am to 4pm"
                    ],
     "storeAddress":{
        "phone": "+61 253 453 654",
        "address":"10-20 station road, NSW"
     },
     "storeMaplocation":{
        "lattitudes":16.33,
        "logitudes":14.65
     }
  },
  {
    "id":1008,
    "storeName":"wallmart",
     "storeDetails":"grocery",
     "storeTimings":["Mon-Fri-10am to 8pm", 
                     "sat-sun-8am to 6pm"
                    ],
     "storeAddress":{
        "phone": "+61 253 483 654",
        "address":"10-20 station road"
     },
     "storeMaplocation":{
        "lattitudes":16.73,
        "logitudes":14.85
     }
},
{
    "id":1009,
    "storeName":"Jyothi",
     "storeDetails":"grocery",
     "storeTimings":["Mon-Fri-8am to 9pm", 
                     "sat-sun-9am to 5pm"
                    ],
     "storeAddress":{
        "phone": "+61 253 483 654",
        "address":"10-20 Near Abdullah Khan estate"
     },
     "storeMaplocation":{
        "lattitudes":18.73,
        "logitudes":19.85
     }
}];

       const storeTemplate = (store) => {
       return (
        <div className='flex-column border-500 surface-overlay border-1 border-round font-bold'>
        <div className='flex align-items-center w-8rem'>
            <div>{store.storeName}</div></div>
               <div className='flex align-items-center'>
               <div>{store.storeDetails}</div>
               </div>
            </div>
            
    );
};
const setselectedstore =(value)=>{
   props.selectedstore(value);
}

   return(
        <>
        <div className="title">
        <InputText type={"text"} placeholder="Search"/>
        <div className="card xl:flex xl:justify-content-center">
        <ListBox options={storeDirectory} 
                 onChange={(e) => setselectedstore(e.value)}
                 itemTemplate={storeTemplate} className="w-full"/>
        </div>
            </div>
        </>
    );


}
export default Storelist;
