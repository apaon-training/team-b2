import { Dialog } from 'primereact/dialog';
import { useState } from 'react';
import './storeForm.css';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber';
function StoreForm(props){

     const [visible, setVisible] = useState(false);
    
    return(
        <>
        <div className="card flex justify-content-center">
        <Dialog header="Add Store" visible={props.visible} style={{ width: '50vw', height:"85vh"}} onHide={() =>  {props.onClose(false)}}>
                {/* <p className="m-0 mb-2 gap-2 font-bold text-3xl"> */}
            
                {/* </p> */}
                <div className=' flex gap-2 text-xl my-3'>
                <div className='pr-2'>
                        Name:
                        </div>
                        <div className='ml-5'>
                            {/* <input className='w-15rem'></input> */}
                            <InputText type="text" className=' p-inputtext-sm w-15rem' />
                        </div>
                        </div>
                        <div className='flex gap-2 text-xl my-3'>
                        <div className='pr-2'>
                        Details:
                        </div>
                        <div className='ml-4 w'>
                            {/* <input className='w-25rem'></input> */}
                            <InputText type="text" className= 'p-inputtext-sm w-25rem' />
                        </div>
                        </div>
                        <div className='flex gap-2 text-xl   my-3'>
                        <div className='pr-2'>
                        Timings1:
                        </div>
                        <div className='ml-2'>
                            {/* <input className='w-15rem'></input> */}
                            <InputText type="text" className=' p-inputtext-sm w-15rem' />
                        </div>
                        </div>
                        <div className='flex gap-2 text-xl   my-3'>
                        <div className='pr-2'>
                        Timings2:
                        </div>
                        <div className='ml-1'>
                            {/* <input className='w-15rem'></input> */}
                            <InputText type="text" className=' p-inputtext-sm w-15rem' />
                        </div>
                        </div>
                        <div className='flex gap-2 text-xl   my-3'>
                        <div className='pr-2'>
                        Phone:
                        </div>
                        <div className='ml-5'>
                            {/* <input className='w-15rem'></input> */}
                            <InputText type="text" className=' p-inputtext-sm w-15rem' />
                        </div>
                        </div>
                        <div className='flex gap-2 text-xl   my-3'>
                        <div className='pr-2'>
                        Address:
                        </div>
                        <div className='ml-3'>
                            {/* <input className='w-15rem'></input> */}
                            <InputText type="text" className=' p-inputtext-sm w-15rem' />
                        </div>
                        </div>
                        <div className='flex gap-2 text-xl   my-3'>
                        <div className='pr-2'>
                        Lattitude:
                        </div>
                        <div className='ml-2'>
                            {/* <input className='w-15rem'></input> */}
                            <InputNumber type="value1" className=' p-inputtext-sm w-15rem' />
                        </div>
                        </div>
                        <div className='flex gap-2 text-xl   my-3'>
                        <div className='pr-2'>
                        Longitude:
                        </div>
                        <div className='mr-1'>
                            {/* <input className='w-15rem'></input> */}
                            <InputNumber type="value2"  className=' p-inputtext-sm w-15rem' />
                        </div>
                        </div>
                            <div className='text-right text-2xl'>
                            <Button label="Cancel" severity="Cancel" raised className='mr-4 bg-white-600 w-2 h-2rem button'></Button>
                            <Button label="Save" severity="" raise className='mr-4 bg-blue-600 form w-2 h-2rem'></Button>
                                </div>
                {/* <p className="m-0 mb-2 animation-fill-forwards"> */}
                   
                {/* </p>  */}


            </Dialog>
        </div>

        </>
);
}
export default StoreForm;