function StoreTimings(props) {
    return (
        <>
        <div className="flex-column">
            <span className="flex">{props?.storeObj?.storeTimings[0]}</span>
            <span className="flex">{props?.storeObj?.storeTimings[1]}</span>
            <span></span>
        </div>
        </>
    )
}
export default StoreTimings;