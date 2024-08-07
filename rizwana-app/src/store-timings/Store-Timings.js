


function StoreTimings(props) {

    return(
        <>
        <div>
        <div className="flex mr-4 h-4rem text-5xl text-blue-600">Store Timings</div>
            <span className="flex">{props?.storeObj?.storeTimings[0]}</span>
            <span className="flex">{props?.storeObj?.storeTimings[1]}</span>
            
        </div>
        </>
    );

    
}

export default StoreTimings;