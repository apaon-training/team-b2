function storeTimings(props){
    
        return(
            <>
            <div className="flex-column">
            <span className="flex">{props?.storeObj?.storeTimings[0]}</span>
            <span className="flex">{props?.storeObj?.storeTimings[1]}</span>
            </div>

            </>
    );
}
export default storeTimings;