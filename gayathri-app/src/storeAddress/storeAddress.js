function StoreAddress (props) {
    return(
    <>
    <div className="flex-column">
        <span className="flex">{props?.storeCon?.storeAddress[0]}</span>
        <span className="flex">{props?.storeCon?.storeAddress[1]}</span>
    </div>
    </>
    )
}

export default StoreAddress;