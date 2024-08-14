import { Dialog } from 'primereact/dialog';
import { props } from 'primereact/utils';
import { useState } from 'react';
import './store-form.css';
import { InputText } from 'primereact/inputtext';
function StoreForm(props) {
    const [visible,setVisible]=useState(false);
    const setName=(value)=>{
        setName(value);
    }
    const setDetails=(value)=>{
        setDetails(value);
    }
    const setTiming1=(value)=>{
        setTiming1(value);
    }
    const setTiming2=(value)=>{
        setTiming2(value);
    }
    const setPhone=(value)=>{
        setPhone(value);
    }
    const setAddress=(value)=>{
        setAddress(value);
    }
    const setLatitude=(value)=>{
        setLatitude(value);
    }
    const setLongitude=(value)=>{
        setLongitude(value);
    }
    return (
        <>
        <div className='card flex justify-content-center bg-white'>
       <Dialog header=" Add Store" visible={props.visible} style={{ width: '50vw', height: '50vh'}} onHide={() => {props.onClose(false)}}>
       <div className='flex-column h-screen'>
        <div className='flex h-10rem text-4xl ml-3'>
            <span>
                Add Store
            </span>
        </div>
       </div>
            <div className='flex align-item-center justify-content-center gap-4 my-3'>
                <div className='Name'>
                    Name:
                </div>
                <div className=''>
                    <InputText value={ Text } onChange={(e) => setName (e.target.value)}/>
                </div>
            </div>
            <div className='flex align-item-center justify-content-center gap-4 my-3'>
                <div className='Details'>
                    Details:
                </div>
                <div className=''>
                    <InputText value={ Text } onChange={(e) => setDetails (e.target.value)}/>
                </div>
            </div>
            <div className='flex align-item-center justify-content-center gap-4 my-3'>
                <div className='Timings1'>
                    Timings1:
                </div>
                <div className=''>
                    <InputText value={ Text } onChange={(e) => setTiming1 (e.target.value)}/>
                </div>
            </div>
            </Dialog>
            </div>
        </>
    );
}
export default StoreForm;