import { Dialog } from 'primereact/dialog';
import { props } from 'primereact/utils';
import { useState } from 'react';
import './store-form.css';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber';
import { useFormik } from 'formik';

function StoreForm(props) {
    const [visible,setVisible]=useState(false);

    const tempObg = {
        "id":1001,
        "storeName":"Jyothi Mall",
        "storeDetails":"Groceries",
        "storeTimings":[
                          "Thus-Fri 5am to 5pm",
                          "Wed-Sun 7am to 06pm"

        ],
        "storeContact":{
            "phone":"Phone: +61 665 678 987",
            "address":"Address: 54-54 Ganesh Nagar, Kurnool-518002"
        },
        "storeMapLocation":{
            "lat":15.830749264964458,
            "lng":78.04023528591568
        }
    };
    const formik = useFormik({
        initialValues: tempObg,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });
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
        <div className='card flex justify-content-center'>
       <Dialog header=" Add Store" visible={props.visible} style={{ width: '65vh', height: '80vh'}} onHide={() => {props.onClose(false)}}>
       <div className='flex-column h-auto'>
     <form>

     
            <div className='flex gap-6 mb-2 mt-2'>
                <div className='Name'>
                    Name:
                </div>
                <div className=''>
                    <InputText onChange={(e) => setName (e.target.value)} value={formik.values.storeName}/>
                    
                </div>
            </div>
            <div className='flex gap-6 mb-5'>
                <div className='Details'>
                    Details:
                </div>
                <div className=''>
                    <InputText value={formik.values.storeDetails} onChange={(e) => setDetails (e.target.value)}/>
                </div>
            </div>
            <div className='flex gap-5 mb-2'>
                <div className='Timings1'>
                    Timings1:
                </div>
                <div className=''>
                    <InputText value={formik.values.storeTimings[0] } onChange={(e) => setTiming1 (e.target.value)}/>
                </div>
            </div>
            <div className='flex gap-5 mb-5'>
                <div className='Timings2'>
                    Timings2:
                </div>
                <div className=''>
                    <InputText value={formik.values.storeTimings[1]} onChange={(e) => setTiming2 (e.target.value)}/>
                </div>
            </div>
            <div className='flex gap-6 mb-2'>
                <div className='Phone'>
                    Phone:
                </div>
                <div className=''>
                    <InputText value={formik.values.storeContact.phone} onChange={(e) => setPhone (e.target.value)}/>
                </div>
            </div>
            <div className='flex gap-5 mb-5'>
                <div className='Address'>
                    Address:
                </div>
                <div className=''>
                    <InputText value={formik.values.storeContact.address} onChange={(e) => setAddress (e.target.value)}/>
                </div>
            </div>
            <div className='flex gap-5 mb-2'>
                <div className='Latitude'>
                
                   Latitude :
                </div>
                <div className=''>
                    <InputNumber value={formik.values.storeMapLocation.lat} onChange={(e) => setLatitude (e.target.value)}/>
                </div>
            </div>
            <div className='flex gap-5 mb-5'>
                <div className='Longitude'>
                    Longitude:
                </div>
                <div className=''>
                    <InputNumber value={formik.values.storeMapLocation.lng} onChange={(e) => setLongitude (e.target.value)}/>
                </div>
            </div>
            <div className="flex align-items-center justify-content-end text-xl gap-3 mr-3 ">
            <Button label="Cancel" severity="secondary" outlined size='small' onClick={() => cancelClicked()} />
            <Button label="Save" type="submit" severity="info" raised size='small' onClick={() => saveClicked()} />
            </div>
            </form>
            </div>
            
            </Dialog>
            </div>
        </>
    );
}
export default StoreForm;