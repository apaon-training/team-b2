import { InputText } from 'primereact/inputtext';
import './store-list.css';
import { ListBox } from 'primereact/listbox';
import { useEffect, useState } from 'react';

function StoreList(props) {

    const [displayedStoreDirectory, setDisplayedStoreDirectory] = useState(props.storeDirectory);



    useEffect(() =>{

        setDisplayedStoreDirectory(props.storeDirectory)
    },[props.storeDirectory])

    const storeTemplate = (store) => {
       
        return (
            <div className="flex-column border-700 surface-overlay border-1 border-round p-3 text-blue-800 text-lg">
                <div className="flex column w-8rem">
                    {store.storeName}
                </div>
                <div className="flex align-items-center">
                    {store.storeDetails}
                </div>
                </div>
             );
    };

    const setSelectedStore = (value)=>{
        props.selectedStore(value);
    }
    const searchDirectory = (value) => {
        const filteredValues = props.storeDirectory.filter((item) => {
            if(JSON.stringify(item).indexOf(value) > -1) {
                return true;
            }else{
                return false;
            }
        })
        setDisplayedStoreDirectory(filteredValues);
    }

    return(
        <>
        <span className="title"/>
        <InputText onChange={ (e) => searchDirectory(e.target.value)} className=' text-black-alpha-90 text-xl w-20rem p-2 border-700 surface-overlay border-1 border-round m-4'/>
        <div className="card xl:flex xl:justify-content-center">
            <ListBox options={displayedStoreDirectory}
            onChange={(e) => setSelectedStore(e.value)}
            itemTemplate={storeTemplate}
            className="w-full"
            />
        </div>
        <span/>
        </>

    );
}
export default StoreList;