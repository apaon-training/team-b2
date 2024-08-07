

function StoreAddress(props) {

    return(
        <>
        <div >
        <div className="flex  mr-4 h-4rem text-5xl  text-blue-600">Store Address </div>
            <span className="flex ">{props?.storeObj?.storeAddress?.phoneNumber}</span>
            <span className="flex py-2">{props?.storeObj?.storeAddress?.Address}</span>
           
        </div>
        </>
    )

    
}

export default StoreAddress;