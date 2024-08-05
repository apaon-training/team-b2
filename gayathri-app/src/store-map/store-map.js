function StoreMap(props) {

    return(
        <>
        <div className="flex-column">
        <div className="flex justify-content-center align-items-center text-black-alpha-90 py-3 text-3xl"> Map Location</div>
            <span className="flex">{props?.storeObj?.storeMapLocation?.latitude}</span>
            <span className="flex">{props?.storeObj?.storeMapLocation?.longitude}</span>
            <span></span>
        </div>
        </>
    )

}

export default StoreMap;