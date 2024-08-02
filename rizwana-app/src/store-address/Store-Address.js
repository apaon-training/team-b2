

function StoreAddress(props) {

    return(
        <>
        <div >
        <div className="felx mr-4 h-4rem text-4xl  text-blue-600">Store Address </div>
            <span className="flex ">{props?.storeObj?.storeAddress?.phoneNumber}</span>
            <span className="flex">{props?.storeObj?.storeAddress?.Address}</span>
           
        </div>
        </>
    )

    
}

export default StoreAddress;