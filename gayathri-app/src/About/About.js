import { Dialog } from 'primereact/dialog';
import React, { useState } from "react";
function About (props) {

    const [visible, setVisible] = useState(false);

    return (
        <div className="card flex justify-content-center">
            <Dialog header="About" visible={props.visible} style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVisible(false); }}>
            <div className="flex-row about-bar text-white">
                <p className="m-0">
                   Store Locator Web 
                </p>
                <p className="m-0">
                   Designed and developed by 
                </p>
                <p className="m-0">
                   WWW.apaon.com.au-Batch B2 (k.Gayathri)
                </p>
                </div>
            </Dialog>
        </div>
    )
}

export default About;