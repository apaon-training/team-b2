function storeAddress(props){
    
    return(
        <>
        <div>
        <div className="flex mr-4 h-4rem text-4xl">StoreAddress</div>
        <span className="flex">{props?.storeObj?.storeAddress?.phone}</span>
        <span className="flex py-2">{props?.storeObj?.storeAddress?.address}</span>
        </div>

        </>
);
}
export default storeAddress;