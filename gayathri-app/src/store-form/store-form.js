import { Dialog } from 'primereact/dialog';
import './store-form.css';
import { InputText } from 'primereact/inputtext';
import { useState } from 'react';
function StoreForm (props) {
    const [visible, setvisible] = useState(false); 
    
                            

    return (
        <div className="card flex justify-content-center">
            <Dialog header="Web store"  visible={props.visible} style={{ width: '50vw', height: '50vh'}} onHide={() => {props.onClose(false)}}>
                <div className='flex column h-screen'>
                    <div className='flex h-10rem text-4xl ml-3'>
                        <span>
                            Add Store
                        </span>
                    </div>
                </div>
                <div className='flex align-items-center justify-content-center gap-4 my-3'>
                    <div className='Name'>
                        Name :
                    </div>
                    <div className=''>
                        <InputText value={ Text } onChange={ (e) => setName (e.target.value)}/>
                    </div>
                </div>
                <div className='flex align-items-center justify-content-center gap-4 my-3'>
                    <div className='Details'>
                        Details :
                    </div>
                    <div className=''>
                        <InputText value={ Text } onChange={ (e) => setDetails (e.target.value)}/>
                    </div>
                </div>


            </Dialog>
        </div>
    )
}

export default StoreForm;