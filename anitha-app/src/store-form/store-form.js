import { Dialog } from 'primereact/dialog';
import { props } from 'primereact/utils';
import { useState } from 'react';
import './store-form.css';
function StoreForm(props) {
    const [visible,setVisible]=useState(false);
    return (
        <>
        <div className='card flex justify-content-center bg-white'>
       <Dialog header="Store Form" visible={props.visible} style={{ width: '50vw', height: '50vh'}} onHide={() => {props.onClose(false)}}>
       <p className='m-1 py-4'>
                Add Store
              </p>
            
            </Dialog>
            </div>
        </>
    );
}
export default StoreForm;