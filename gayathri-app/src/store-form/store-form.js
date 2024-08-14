import { Dialog } from 'primereact/dialog';
import './store-form.css';
import { InputText } from 'primereact/inputtext';
import { useState } from 'react';
function StoreForm (props) {
    return (
        <div className="card flex justify-content-center">
            <Dialog header="Add store"  visible={props.visible} style={{ width: '65vh', height: '75vh'}} onHide={() => {props.onClose(false)}}>
                <div className='flex-column  h-auto'>
                </div>
                <div className='flex gap-6 h-1rem my-3'>
                    <div className=''>
                        Name    :
                    </div>
                    <div className=''>
                        <input></input>
                    </div>
                </div>
                <div className='flex gap-6 h-2rem my-3'>
                    <div className=''>
                        Details :
                    </div>
                    <div className=''>
                        <input></input>
                    </div>
                </div>
                <div className='flex gap-5 h-1rem my-3'>
                    <div className=''>
                        Timings1 :
                    </div>
                    <div className=''>
                        <input></input>
                    </div>
                </div>
                <div className='flex gap-5 h-2rem my-3'>
                    <div className=''>
                        Timings2 :
                    </div>
                    <div className=''>
                        <input></input>
                    </div>
                </div>
                <div className='flex gap-6 h-1rem my-3'>
                    <div className=''>
                        Phone    :
                    </div>
                    <div className=''>
                        <input></input>
                    </div>
                </div>
                <div className='flex gap-5 h-2rem my-3'>
                    <div className=''>
                        Address  :
                    </div>
                    <div className=''>
                        <input></input>
                    </div>
                </div>
                <div className='flex gap-5 h-1rem my-3'>
                    <div className=''>
                        Latitude  :
                    </div>
                    <div className=''>
                        <input></input>
                    </div>
                </div>
                <div className='flex gap-4 my-3'>
                    <div className=''>
                        Longitude :
                    </div>
                    <div className=''>
                        <input></input>
                    </div>
                </div>
                <div className='flex align-items-center justify-content-center gap-5 md:h-5rem'>
                    <button className='ml-8 '>
                        Cancel 
                    </button>
                    <button className='bg-blue-900 text-white'>
                        Save 
                    </button>
                </div>
            </Dialog>
        </div>
    )
}

export default StoreForm;