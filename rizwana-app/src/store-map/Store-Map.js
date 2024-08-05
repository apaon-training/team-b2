

function StoreMap(props) {

    return(
        <>
        <div >
        <div className="flex mr-4 h-4rem text-4xl  text-blue-600">Store Map </div>
            <span className="flex align-items-center justify-content-center ">{props?.storeObj?.storeMapLocator?.Lattitudes}</span>
            <span className="flex align-items-center justify-content-center">{props?.storeObj?.storeMapLocator?.Longitudes}</span>
           
        </div>
        </>
    )

    
}

export default StoreMap;