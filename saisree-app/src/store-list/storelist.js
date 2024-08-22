import { ListBox } from 'primereact/listbox';
import { InputText } from 'primereact/inputtext';
import './storelist.css';
import { useState } from 'react';

         
function Storelist(props){
   
const [displayedstoreDirectory, setDisplayedstoreDirectory] = useState(props.storeDirectory);

       const storeTemplate = (store) => {
      
      
       return (
        <div className='flex-column text-align: left; border-500 surface-overlay border-1 border-round font-medium line-height-3 lg:2 w-full h-4rem'>
        <div className='flex ml-2 w-8rem'>
            <div>{store.storeName}</div></div>
               <div className='flex ml-2 w-8rem'>
               <div>{store.storeDetails}</div>
               </div>
            </div>
            
    );
};
const setselectedstore =(value)=>{
   props.selectedstore(value);
}
const searchDirectory = (value) =>{
  const filteredValues = props.storeDirectory.filter((item)=>{
     if(JSON.stringify(item).indexOf(value) > -1){
        return true;
     }else{
        return false;
     }
  })
  setDisplayedstoreDirectory(filteredValues);
}

   return(
        <>
        <div className="title">
        <InputText onChange={(e)=> searchDirectory(e.target.value)} className='text-black-alpha-60 text-3xl border-700 surface-overly border-round m-3'/>
        <div className="card xl:flex xl:justify-content-center ">
        <ListBox options={displayedstoreDirectory} 
                 onChange={(e) => setselectedstore(e.value)}
                 itemTemplate={storeTemplate} 
                 className="w-full"/>
        </div>
            </div>   ``
        </>
    );


}
export default Storelist;
