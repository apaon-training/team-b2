import { Dialog } from 'primereact/dialog';
import { mergeProps } from 'primereact/utils';
import { useState } from 'react';

function StoreForm(props) {
    const [visible,setVisible]=useState(false);
    return (
        <>
        <div className='card flex justify-content-center bg-white'>
       <Dialog header="Store Form" visible={props.visible} style={{ width: '25vw'}} onHide={() => {props.onClose(false)}}>
              
            
            </Dialog>
            </div>
        </>
    )
}
export default StoreForm;