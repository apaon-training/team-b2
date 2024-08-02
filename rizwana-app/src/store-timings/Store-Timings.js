


function StoreTimings(props) {

    return(
        <>
        <div>
        <div className="felx mr-4 h-4rem text-4xl">StoreTimings</div>
            <span className="flex">{props?.storeObj?.storeTimings[0]}</span>
            <span className="flex">{props?.storeObj?.storeTimings[1]}</span>
            
        </div>
        </>
    );

    
}

export default StoreTimings;