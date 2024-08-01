function StoreContact(props) {

    return(
        <>
        <div className="flex-column">
            <span className="flex">{props?.storeObj?.storeContact?.phone}</span>
            <span className="flex">{props?.storeObj?.storeContact?.address}</span>
            <span></span>
        </div>
        </>
    )

}

export default StoreContact;