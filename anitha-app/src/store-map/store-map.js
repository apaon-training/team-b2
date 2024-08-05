function StoreMap(props) {
    return (
        <>
        <div className="flex-column">
        <div className="flex align-items-center justify-content-center text-blue-900 text-4xl p-2">Store MapLocation</div>
            <span className="flex align-items-center justify-content-center">{props?.storeObj?.storeMapLocation?.latitude}</span>
            <span className="flex align-items-center justify-content-center">{props?.storeObj?.storeMapLocation?.longitude}</span>
            <span></span>
        </div>
        </>
    )
}
export default StoreMap;