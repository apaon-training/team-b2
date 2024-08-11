import { Dialog } from 'primereact/dialog';
import { useState } from 'react';
function About(props){

    const [visible, setVisible] = useState(false);
    
    return(
        <>
        <div className="card flex justify-content-center bg-blue">
        <Dialog header="About" visible={props.visible} style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVisible(false); }}>
                <p className="m-0">
                    store Locator Web
                </p>
                <p className="m-0">
                    Designed and developed by
                </p>
            </Dialog>
        </div>

        </>
);
}
export default About;