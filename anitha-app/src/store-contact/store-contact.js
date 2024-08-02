function StoreContact(props) {
    return (
        <>
        <div className="flex-column">
        <div className="flex text-blue-900 text-4xl p-2">StoreContact</div>
            <span className="flex">{props?.storeObj?.storeContact?.phone}</span>
            <span className="flex">{props?.storeObj?.storeContact?.address}</span>
            <span></span>
        </div>
        </>
    )
}
export default StoreContact;