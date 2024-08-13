import { Dialog } from 'primereact/dialog';
function StoreForm (props) {

    return (
        <div className="card flex justify-content-center">
            <Dialog header="About"  visible={props.visible} style={{ width: '25vw'}} onHide={() => {props.onClose(false)}}>

            </Dialog>
        </div>
    )
}

export default StoreForm;