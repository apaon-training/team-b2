

function StoreAddress(props) {

    return(
        <>
        <div className="felx-column">
            <span className="flex">{props?.storeObj?.storeAddress[0]}</span>
            <span className="flex">{props?.storeObj?.storeAddress[1]}</span>
            <span></span>
        </div>
        </>
    )

    
}

export default StoreAddress;