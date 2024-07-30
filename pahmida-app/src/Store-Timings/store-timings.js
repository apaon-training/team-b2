



function StoreTimings(props){
return(
    <>
    <div className="flex-column">
        <span className="flex">{props?.storeObj.StoreTimings}[0]</span>
        <span className="flex">{props?.storeObj.StoreTimings}[1]</span>
    </div>
    </>
);
}
export default  StoreTimings;

