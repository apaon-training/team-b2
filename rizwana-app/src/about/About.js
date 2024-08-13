import { Dialog } from 'primereact/dialog';
import React, { useState } from "react";
import './About.css';



function About (props) {

    const [visible, setVisible] = useState(false);

    return (
        <div className="card flex justify-content-center  ">

        <Dialog header="About" visible={props.visible}  style={{ width: '25vw'}} onHide={() => {props.onClose(false)}}>
               
                <p className="m-0 py-4  ">
                    Store Locator Web
                </p>
                <p className="m-0 ">&copy; Designed and developed by 
                </p>
                <p className="m-0 mt-2 ">
                    <a href="https://www.apaon.com.au" target='blank' className='text-white'>www.apaon.com.au</a> - Batch B2
                </p>
                <p className="m-0 mt-2 text-sm ">
                    By Shaik Rizwana (apaon intern)
                </p>
                
                
               
                
            </Dialog>
            </div>


    )
}

export default About;