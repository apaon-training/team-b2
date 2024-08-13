import { Dialog } from 'primereact/dialog';
import { mergeProps } from 'primereact/utils';
import { useState } from 'react';
function About(props) {
    const [visible,setVisible]=useState(false);
    return (
        <>
        <div className='card flex justify-content-center bg-color-blue-900 text-white'>
       <Dialog header="about" visible={props.visible} style={{ width: '50vw' }} onHide={() => {props.onClose(false)}}>
              
              <p className='m-0'>
                Store Locator Web
                </p>  
                <p className='m-0'>
                Designed and Developed by 
                </p>  
                <p className='m-0'>
                WWW.apaon.com.au-Batch B2 (v.Anitha)
                </p>  
                
            </Dialog>
            </div>
        </>
    )
}
export default About ;