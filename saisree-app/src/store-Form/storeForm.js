import { Dialog } from 'primereact/dialog';
import { useState } from 'react';
function StoreForm(props){

     const [visible, setVisible] = useState(false);
    
    return(
        <>
        <div className="card flex justify-content-center">
        <Dialog header="About" visible={props.visible} style={{ width: '25vw'}} onHide={() =>  {props.onClick(true)}}>
                <p className="m-0 mb-2 font-bold text-1xl">
                    Show Store
                </p>
                <p className="m-0 mb-2 animation-fill-forwards">
                   
                </p> 


            </Dialog>
        </div>

        </>
);
}
export default StoreForm;