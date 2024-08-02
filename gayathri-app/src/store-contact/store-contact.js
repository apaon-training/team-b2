function StoreContact(props) {

    return(
        <>
        <div className="flex-column">
            <div className="flex text-blue-800 py-3 text-3xl">Store Contact</div>
            <span className="flex">{props?.storeObj?.storeContact?.phone}</span>
            <span className="flex">{props?.storeObj?.storeContact?.address}</span>
            <span></span>
        </div>
        </>
    )

}

export default StoreContact;