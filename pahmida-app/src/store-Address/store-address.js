
function StoreAddress(props){
    return(
        <>
        <div className="flex-column">
            <span className='flex'>{props?.storeObj?.storeAddress?.phone}</span>
            <span className='flex'>{props?.storeObj?. storeAddress?.address}</span>
            <span></span>
        </div>
        </>
    );
    }
    export default  StoreAddress;