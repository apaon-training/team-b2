function StoreTimings(props) {


    return(
        <>
        <div className="flex-column">
            <div className="flex py-3 ml-8 text-3xl">Store Timings</div>
            <span className="flex py-2 ml-8">{props?.storeObj?.storeTimings[0]}</span>
            <span className="flex ml-8">{props?.storeObj?.storeTimings[1]}</span>
            <span></span>
        </div>
        </>
    )

}

export default StoreTimings;