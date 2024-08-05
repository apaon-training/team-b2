 
function StoreTimings(props){
return(
    <>
    <div>
    <div className="flex-column  text-3xl mt-auto text-blue-600">Store Timings</div>
        <span className='flex'>{props?.storeObj?.storeTimings[0]}</span>
        <span className='flex'>{props?.storeObj?.storeTimings[1]}</span>
    </div>
    </>
);
}
export default StoreTimings;

