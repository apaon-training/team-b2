import { Dialog } from 'primereact/dialog';
import './About.css';
function About (props) {

    return (
        <div className="card flex justify-content-center">
            <Dialog header="About"  visible={props.visible} style={{ width: '25vw'}} onHide={() => {props.onClose(false)}}>
                <p className="m-0 py-4">
                   Store Locator Web 
                </p>
                <p className="m-0 mt-2">
                   &copy; Designed and developed by 
                </p>
                <p className="m-0 mt-2">
                   <a href="https://www.apaon.com.au" target='blank' className='text-white'>www.apaon.com.au</a> - Batch B2
                </p>
                <p className="m-0 mt-2 text-sm">
                   By K.Gayathri
                </p>
            </Dialog>
        </div>
    )
}

export default About;