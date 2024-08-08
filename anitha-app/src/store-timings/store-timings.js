function StoreTimings(props) {
    return (
        <>
        <div className="flex-column">
            <div className="flex mr-4 text-blue-600 text-5xl py-3">Store Timings</div>
            <span className="flex">{props?.storeObj?.storeTimings[0]}</span>
            <span className="flex py-2">{props?.storeObj?.storeTimings[1]}</span>
            <span></span>
        </div>
        </>
    );
}
export default StoreTimings;