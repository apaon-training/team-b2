function StoreTimings(props) {
    return (
        <>
        <div className="flex-column">
            <div className="flex text-blue-900 text-4xl p-2">Store Timings</div>
            <span className="flex">{props?.storeObj?.storeTimings[0]}</span>
            <span className="flex">{props?.storeObj?.storeTimings[1]}</span>
            <span></span>
        </div>
        </>
    )
}
export default StoreTimings;