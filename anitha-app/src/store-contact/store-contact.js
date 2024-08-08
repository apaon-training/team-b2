function StoreContact(props) {
    return (
        <>
        <div className="flex-column">
        <div className="flex mr-4 text-blue-600 text-5xl py-3">Store Contact</div>
            <span className="flex">{props?.storeObj?.storeContact?.phone}</span>
            <span className="flex py-2">{props?.storeObj?.storeContact?.address}</span>
            <span></span>
        </div>
        </>
    )
}
export default StoreContact;