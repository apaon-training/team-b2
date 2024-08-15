import { Dialog } from 'primereact/dialog';
import React, { useState } from "react";
import './Store-Form.css';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';




function StoreForm (props) {

    const [visible, setVisible] = useState(false);
    const setName = (value)=>{
        setName(value);
        
    }
    const setDetails = (value)=>{
        setDetails(value);
        
    }
    const setTimings1= (value)=>{
        setTimings1(value);
        
    }
    const setTimings2 = (value)=>{
        setTimings2(value);
        
    }
    const setPhone = (value)=>{
        setPhone(value);
        
    }
    const setAddress = (value)=>{
        setAddress(value);
        
    }
    const setLatitude= (value)=>{
        setLatitude(value);
        
    }
    const setLongitude= (value)=>{
        setLongitude(value);
        
    }
    const saveClicked =() =>{
        {
            console.log('Login Successful !');
           
        }
        
    }

    const cancelClicked =() =>{
        
        console.log('cancel Clicked');
    }




    return (
        <>
        <div className="card flex justify-content-center ">

        <Dialog header="Add Store" visible={props.visible}  style={{ width: '65vh',height:"95vh"}} onHide={() => {props.onClose(false)}}>
               
                <div className='flex-column '>

                </div>
                <div className='flex  gap-6 mb-2'>
                    <div className='Name'>
                        Name:
                    </div>
                    <div className=''>
                        {/* <input></input> */}
                        <InputText value={ Text } onChange={(e) => setName(e.target.value)} />
                    </div>
                </div>
                <div className='flex  gap-6 mb-4'>
                    <div className='Details'>
                        Details:
                    </div>
                    <div className=''>
                        {/* <input></input> */}
                        <InputText value={ Text } onChange={(e) => setDetails(e.target.value)} />
                    </div>
                </div>
                <div className='flex  gap-6 mb-2  '>
                    <div className='Timings1'>
                        Timings1:
                    </div>
                    <div className=''>
                        {/* <input></input> */}
                        <InputText value={ Text } onChange={(e) => setTimings1(e.target.value)} />
                    </div>
                </div>
                <div className='flex  gap-6 mb-4'>
                    <div className='Timings2'>
                        Timings2:
                    </div>
                    <div className=''>
                        {/* <input></input> */}
                        <InputText value={ Text } onChange={(e) => setTimings2(e.target.value)} />
                    </div>
                </div>
                <div className='flex  gap-6 mb-2'>
                    <div className='Phone'>
                        Phone:
                    </div>
                    <div className=''>
                        {/* <input></input> */}
                        <InputText value={ Text } onChange={(e) => setPhone(e.target.value)} />
                    </div>
                </div>
                <div className='flex  gap-6 mb-4'>
                    <div className='Address'>
                        Address:
                    </div>
                    <div className=''>
                        {/* <input></input> */}
                        <InputText value={ Text } onChange={(e) => setAddress(e.target.value)} />
                    </div>
                </div>
                <div className='flex  gap-6 mb-2'>
                    <div className='Latitude'>
                        Latitude:
                    </div>
                    <div className=''>
                        {/* <input></input> */}
                        <InputText value={ Text } onChange={(e) => setLatitude(e.target.value)} />
                    </div>
                </div>
                <div className='flex  gap-6 mb-4'>
                    <div className='Longitude'>
                        Longitude:
                    </div>
                    <div className=''>
                        {/* <input></input> */}
                        <InputText value={ Text } onChange={(e) => setLongitude(e.target.value)} />
                    </div>
                </div>

                
                <div className="flex  align-items-center justify-content-end text-xl mr-3 gap-3">
        {/*<button className="cancel">Cancel</button>
        <button className="submit">Submit</button>*/}
        <Button label="Cancel" severity="secondary" outlined size="small"  onClick={() => cancelClicked()} />
        <Button label="Save"  severity="info" raised size="small" onClick={() => saveClicked()}  />
        </div>
               
                
            </Dialog>
            </div>
            </>


    );
}

export default StoreForm;