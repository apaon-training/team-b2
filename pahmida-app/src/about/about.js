import { Dialog } from 'primereact/dialog'; 
import { useState } from 'react';
import './about.css';
 
function About(props){
    const [visible, setVisible]=useState(false);
    return(
        <>
         <div className="flex column text-white bg-blue"> 
        <Dialog header="About" visible={props.visible} style={{ width: '25vw'}} onHide={() => {props.onClose(false)}}>
                   
                    <p className="m-0 mb-2 font-bold py-2">
                        Store Locator Web </p> 
                        <p className='m-0'>
                            &copy;Designed and developed by
                        </p>
                        <p className="m-0 mt-2 ">
                                Pinjari Pahmida(apaon intern)
                                </p>
                        <p className="m-0 mt-2">
                            <a href="https://www.apaon.com.au" target='blank' className='text-white'>www.apaon.com.au</a>-Batch B2
                            </p>
                  
                     
            </Dialog>
        </div>
        </>
    );
}
    export default About;
