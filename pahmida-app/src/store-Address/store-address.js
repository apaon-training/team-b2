
function StoreAddress(props){
    return(
        <>
        <div>
        <div className="flex-column text-3xl text-blue-600 ">Store Address</div>
            <span className='flex'>{props?.storeObj?.storeAddress?.phone}</span>
            <span className='flex'>{props?.storeObj?. storeAddress?.address}</span>
            <span></span>
        </div>
        </>
    );
    }
    export default  StoreAddress;