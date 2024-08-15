import { Dialog } from 'primereact/dialog';
import { props } from 'primereact/utils';
import { useState } from 'react';
import './store-form.css';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
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
    const saveClicked = () =>{
    {
            console.log('Login successful !');

        }
    }
        const cancelClicked =() =>{
            
            console.log('cancel Clicked');
        }
    return (
        <>
        <div className='card flex justify-content-center bg-white'>
       <Dialog header=" Add Store" visible={props.visible} style={{ width: '50vw', height: '250vh'}} onHide={() => {props.onClose(false)}}>
       <div className='flex-column h-screen'>
        <div className='flex h-10rem text-4xl ml-3'>
            <span>
                Add Store
            </span>
        </div>
       </div>
            <div className='flex gap-6 my-3'>
                <div className='Name'>
                    Name:
                </div>
                <div className=''>
                    <InputText value={ Text } onChange={(e) => setName (e.target.value)}/>
                </div>
            </div>
            <div className='flex gap-6 my-3'>
                <div className='Details'>
                    Details:
                </div>
                <div className=''>
                    <InputText value={ Text } onChange={(e) => setDetails (e.target.value)}/>
                </div>
            </div>
            <div className='flex gap-5 my-3'>
                <div className='Timings1'>
                    Timings1:
                </div>
                <div className=''>
                    <InputText value={ Text } onChange={(e) => setTiming1 (e.target.value)}/>
                </div>
            </div>
            <div className='flex gap-5 my-3'>
                <div className='Timings2'>
                    Timings2:
                </div>
                <div className=''>
                    <InputText value={ Text } onChange={(e) => setTiming2 (e.target.value)}/>
                </div>
            </div>
            <div className='flex gap-6 my-3'>
                <div className='Phone'>
                    Phone:
                </div>
                <div className=''>
                    <InputText value={ Text } onChange={(e) => setPhone (e.target.value)}/>
                </div>
            </div>
            <div className='flex gap-5 my-3'>
                <div className='Address'>
                    Address:
                </div>
                <div className=''>
                    <InputText value={ Text } onChange={(e) => setAddress (e.target.value)}/>
                </div>
            </div>
            <div className='flex gap-5 my-3'>
                <div className='Latitude'>
                   Latitude :
                </div>
                <div className=''>
                    <InputText value={ Text } onChange={(e) => setLatitude (e.target.value)}/>
                </div>
            </div>
            <div className='flex gap-5 my-3'>
                <div className='Longitude'>
                    Longitude:
                </div>
                <div className=''>
                    <InputText value={ Text } onChange={(e) => setLongitude (e.target.value)}/>
                </div>
            </div>
            <div className="flex text-xl gap-3 mr-3 ">
            <Button label="Cancel" color='white' size='small' onClick={() => cancelClicked()} />
            <Button label="Save" size='small' onClick={() => saveClicked()} />
            </div>
            </Dialog>
            </div>
        </>
    );
}
export default StoreForm;