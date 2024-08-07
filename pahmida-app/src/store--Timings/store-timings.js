 
function StoreTimings(props){
return(
    <>
    <div>
    <div className="flex-column  text-4xl mt-auto text-blue-600 h-4rem mr-4">Store Timings</div>
        <span className='flex text-xl'>{props?.storeObj?.storeTimings[0]}</span>
        <span className='flex py-2 text-xl'>{props?.storeObj?.storeTimings[1]}</span>
    </div>
    </>
);
}
export default StoreTimings;

