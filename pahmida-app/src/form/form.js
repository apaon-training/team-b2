import { Dialog } from 'primereact/dialog'; 
import { useState } from 'react';
import './form.css'; 
 
function Form(props){
    const [visible, setVisible]=useState(false);
    return(
        <>
         <div className="flex column text-white bg-blue"> 
        <Dialog header="About" visible={props.visible} style={{ width: '25vw'}} onHide={() => {props.onClose(false)}}>
                   
                    <p>
                        Form
                    </p>
                  
                     
            </Dialog>
        </div>
        </>
    );
}
    export default Form;