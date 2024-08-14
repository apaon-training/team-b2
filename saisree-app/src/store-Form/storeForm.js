import { Dialog } from 'primereact/dialog';
import { useState } from 'react';
import './storeForm.css';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
function StoreForm(props){

     const [visible, setVisible] = useState(false);
    
    return(
        <>
        <div className="card flex justify-content-center">
        <Dialog header="About" visible={props.visible} style={{ width: '50vw', height:"50vh"}} onHide={() =>  {props.onClose(false)}}>
                <p className="m-0 mb-2 gap-2 font-bold text-3xl">
                Add Store
                </p>
                <div className=' flex gap-2 text-xl my-3'>
                <div className='pl-2'>
                        Name:
                        </div>
                        <div className=''>
                            <input></input>
                        </div>
                        </div>
                        <div className='flex gap-2 text-xl my-3'>
                        <div className='pl-2'>
                        Details:
                        </div>
                        <div className=''>
                            <input></input>
                        </div>
                        </div>
                        <div className='flex gap-2 text-xl   my-3'>
                        <div className='pl-2'>
                        Timings1:
                        </div>
                        <div className=''>
                            <input></input>
                        </div>
                        </div>
                        <div className='flex gap-2 text-xl   my-3'>
                        <div className='pl-2'>
                        Timings2:
                        </div>
                        <div className=''>
                            <input></input>
                        </div>
                        </div>
                        <div className='flex gap-2 text-xl   my-3'>
                        <div className='pl-2'>
                        Phone:
                        </div>
                        <div className=''>
                            <input></input>
                        </div>
                        </div>
                        <div className='flex gap-2 text-xl   my-3'>
                        <div className='pl-2'>
                        Address:
                        </div>
                        <div className=''>
                            <input></input>
                        </div>
                        </div>
                        <div className='flex gap-2 text-xl   my-3'>
                        <div className='pl-2'>
                        Lattitude:
                        </div>
                        <div className=''>
                            <input></input>
                        </div>
                        </div>
                        <div className='flex gap-2 text-xl   my-3'>
                        <div className='pl-2'>
                        Longitude:
                        </div>
                        <div className=''>
                            <input></input>
                        </div>
                        </div>
                        <div>
                            <div className=''>
                                <button>Cancel</button>
                            </div>
                        </div>
                        <div>
                            <div className=''>
                                <button>Submit</button>
                            </div>
                        </div>
    
                <p className="m-0 mb-2 animation-fill-forwards">
                   
                </p> 


            </Dialog>
        </div>

        </>
);
}
export default StoreForm;