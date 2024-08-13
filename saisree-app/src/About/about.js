import { Dialog } from 'primereact/dialog';
import { useState } from 'react';
import './about.css';
function About(props){

    const [visible, setVisible] = useState(false);
    
    return(
        <>
        <div className="card flex justify-content-center bg-blue">
        <Dialog header="About" visible={props.visible} style={{ width: '25vw'}} onHide={() => {props.onClose(false)}}>
                <p className="m-0 mb-2 font-bold text-1xl">
                    Store Locator Web
                </p>
                <p className="m-0 mb-2 animation-fill-forwards">
                   &copy; Designed and developed by B2 team - Sai Sree
                </p>
                <p className='m-0 mt-2'>
                   <a href='https://www.apaon.com.au' target='blank' className='text-white'> www.apaon.com.au</a> - Batch B2
                   </p>

            </Dialog>
        </div>

        </>
);
}
export default About;