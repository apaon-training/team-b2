import { Dialog } from 'primereact/dialog';
import React, { useState } from "react";
import './Store-Form.css';
import { InputText } from 'primereact/inputtext';


function StoreForm (props) {

    const [visible, setVisible] = useState(false);

    return (
        <>
        <div className="card flex justify-content-center  ">

        <Dialog header="About" visible={props.visible}  style={{ width: '50vw',height:"50vh"}} onHide={() => {props.onClose(false)}}>
               
                <p className="m-0 mb-2 font-bold text-1xl  ">
                    Add Store
                </p>
                <div className='flex  gap-6  my-3 '>
                    <div className=''>
                        Name:
                    </div>
                    <div className=''>
                        <input></input>
                    </div>
                </div>
                <div className='flex  gap-6 my-3 '>
                    <div className=''>
                        Details:
                    </div>
                    <div className=''>
                        <input></input>
                    </div>
                </div>
                <div className='flex  gap-6 my-3 '>
                    <div className=''>
                        Timings1:
                    </div>
                    <div className=''>
                        <input></input>
                    </div>
                </div>
                <div className='flex gap-6  my-2 '>
                    <div className=''>
                        Timings2:
                    </div>
                    <div className=''>
                        <input></input>
                    </div>
                </div>
                <div className='flex gap-6  my-3 '>
                    <div className=''>
                        Phone:
                    </div>
                    <div className=''>
                        <input></input>
                    </div>
                </div>
                <div className='flex gap-6 my-3 '>
                    <div className=''>
                        Address:
                    </div>
                    <div className=''>
                        <input></input>
                    </div>
                </div>
                <div className='flex gap-6 my-3 '>
                    <div className=''>
                        Latitude:
                    </div>
                    <div className=''>
                        <input></input>
                    </div>
                </div>
                <div className='flex gap-6  my-3 '>
                    <div className=''>
                        Longitude:
                    </div>
                    <div className=''>
                        <input></input>
                    </div>
                </div>
                <div className='flex align-items-center justify-content-center my-3 gap-5'>
                    <button className=''>
                        cancel
                    </button>
                    <button className='save'>
                        save
                    </button>
                </div>
                <p className="m-0 mb-2 animation-fill-forwards">

                </p>
                   
                
            </Dialog>
            </div>
            </>


    );
}

export default StoreForm;