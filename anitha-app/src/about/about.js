import { Dialog } from 'primereact/dialog';
import { mergeProps } from 'primereact/utils';
import { useState } from 'react';
import './about.css';
function About(props) {
    const [visible,setVisible]=useState(false);
    return (
        <>
        <div className='card flex justify-content-center bg-color-blue-900 text-white'>
       <Dialog header="About" visible={props.visible} style={{ width: '25vw'}} onHide={() => {props.onClose(false)}}>
              
              <p className='m-0 py-4'>
                Store Locator Web
                </p>  
                <p className='m-0 mt-2'>
                &copy; Designed and developed by 
                </p>  
                <p className='m-0 mt-2'>
              <a href="http://www.apaon.com.au" target='black' className='text-white'>www.apaon.com.au</a> -Batch B2
                </p>  
                <p className='m-0 mt-2 text-sm'>
                By (V.Anitha)
                </p>  
            </Dialog>
            </div>
        </>
    )
}
export default About ;