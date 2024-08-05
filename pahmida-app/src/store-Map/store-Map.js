function StoreMap(props){
    return(
        <>
        <div>
        <div className="flex-column align-items-center justify-content-center text-3xl text-blue-600 ">Store Map</div>
            <span className='flex align-items-center justify-content-center'>{props?.storeObj?.storeMapLocation?.Lattitudes}</span>
            <span className='flex align-items-center justify-content-center'>{props?.storeObj?.storeMapLocation?.Longitudes}</span>
            <span></span>
        </div>
        </>
    );
    }
    export default  StoreMap;