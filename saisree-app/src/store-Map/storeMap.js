function storeMap(props){
    
    return(
        <>
        <div>
        <div className="flex mr-4 h-4rem text-4xl ">storeMap</div>
        <span className="flex">{props?.storeObj?.storeMaplocation?.lattitudes}</span>
        <span className="flex py-2">{props?.storeObj?.storeMaplocation?.logitudes}</span>
        </div>

        </>
);
}
export default storeMap;