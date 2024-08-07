
function StoreAddress(props){
    return(
        <>
        <div>
        <div className="flex-column text-4xl text-blue-600 h-4rem mr-4">Store Address</div>
            <span className='flex text-xl'>{props?.storeObj?.storeAddress?.phone}</span>
            <span className='flex py-2 text-xl'>{props?.storeObj?. storeAddress?.address}</span>
            <span></span>
        </div>
        </>
    );
    }
    export default  StoreAddress;