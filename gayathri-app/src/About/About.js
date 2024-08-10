import { Dialog } from 'primereact/dialog';
import React, { useState } from "react";
function About (props) {

    const [visible, setVisible] = useState(false);
        props.visible()

    return (
        <div className="card flex justify-content-center">
            <Dialog header="About" visible={visible} style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVisible(false); }}>
                <p className="m-0">
                   Store Locator Web 
                </p>
                <p className="m-0">
                   Designed and developed by 
                </p>
                <p className="m-0">
                   WWW.apaon.com.au-Batch B2 (k.Gayathri)
                </p>
            </Dialog>
        </div>
    )
}

export default About;