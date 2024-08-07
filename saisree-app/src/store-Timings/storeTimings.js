function storeTimings(props){
    
        return(
            <>
            <div>
            <div className="flex mr-4 h-4rem text-5xl"> Store Timings</div>
            <span className="flex">{props?.storeObj?.storeTimings[0]}</span>
            <span className="flex py-2">{props?.storeObj?.storeTimings[1]}</span>
            </div>

            </>
    );
}
export default storeTimings;