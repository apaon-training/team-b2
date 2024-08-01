

function StoreAddress(props) {

    return(
        <>
        <div className="felx-column">
            <span className="flex">{props?.storeObj?.storeAddress?.phoneNumber}</span>
            <span className="flex">{props?.storeObj?.storeAddress?.Address}</span>
            <span></span>
        </div>
        </>
    )

    
}

export default StoreAddress;