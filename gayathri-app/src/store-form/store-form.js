import { Dialog } from 'primereact/dialog';
import './store-form.css';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber';
import { useFormik } from 'formik';
import React from 'react';
function StoreForm (props) {
    const tempObg = {
        "id":1001,
        "storeName": "Joyalukkas",
        "storeDetails": "Jewellery Store",
        "storeTimings": ["Mon-Fri-10:30 to 8:30 pm", 
            "Sat-Sun-11 to 8 pm"

        ],
        "storeContact": {
            "phone": "Phone: +08 518 289 888",
            "address": "Address: 40-29-SP Square Park road"
        },
        "storeMapLocation": {
            "lat":15.82962667811701,
            "lng":78.04052562119666
        }
    };
    const formik = useFormik({
        initialValues: tempObg,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });
    const setName = (value) =>{}
    const setDetails = (value) =>{}
    const setPhone = (value) =>{}
    const setAddress = (value) =>{}
    const setTimings1 = (value) =>{}
    const setTimings2 = (value) =>{}
    const setLatitude = (value) =>{}
    const setLongitude = (value) =>{}
    return (
        <div className="card flex justify-content-center">
            <Dialog header="Add store"  visible={props.visible} style={{ width: '70vh', height: '100vh'}} onHide={() => {props.onClose(false)}}>
                <div className='flex-column'>
                    <form>
                <div className='flex gap-6 mb-2 mt-4'>
                    <div className=''>
                        Name    :
                    </div>
            <div className="">
            <InputText onChange={(e) => setName(e.target.value)} value={formik.values.storeName} />
            </div>
            </div>
                <div className='flex gap-6 mb-4'>
                    <div className=''>
                        Details :
                    </div>
                    <div className=''>
                    <InputText value={formik.values.storeDetails} onChange={(e) => setDetails(e.target.value)} />
                    </div>
                </div>
                <div className='flex gap-5 mb-2'>
                    <div className=''>
                        Timings1 :
                    </div>
                    <div className=''>
                    <InputText value={formik.values.storeTimings[0]} onChange={(e) => setTimings1(e.target.value)} />
                    </div>
                </div>
                <div className='flex gap-5 mb-4'>
                    <div className=''>
                        Timings2 :
                    </div>
                    <div className=''>
                    <InputText value={formik.values.storeTimings[1]} onChange={(e) => setTimings2(e.target.value)} />
                    </div>
                </div>
                <div className='flex gap-6 mb-2'>
                    <div className=''>
                        Phone    :
                    </div>
                    <div className=''>
                    <InputText value={formik.values.storeContact.phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                </div>
                <div className='flex gap-5 mb-4'>
                    <div className=''>
                        Address  :
                    </div>
                    <div className=''>
                    <InputText value={formik.values.storeContact.address} onChange={(e) => setAddress(e.target.value)} />
                    </div>
                </div>
                <div className='flex gap-5 mb-2'>
                    <div className=''>
                        Latitude  :
                    </div>
                    <div className=''>
                    <InputNumber value={formik.values.storeMapLocation.lat} onChange={(e) => setLatitude(e.target.value)} />
                    </div>
                </div>
                <div className='flex gap-4 mb-4'>
                    <div className=''>
                        Longitude :
                    </div>
                    <div className=''>
                    <InputNumber value={formik.values.storeMapLocation.lng} onChange={(e) => setLongitude(e.target.value)} />
                    </div>
                </div>
                <div className='flex align-items-center justify-content-end gap-5'>
                <Button label="Cancel" severity="secondary" outlined size='small'/>
                <Button label="Save" type="submit" severity="info" raised size='small'/> 
                </div>
                </form>
                </div>
            </Dialog>
            
        </div>
    )
}

export default StoreForm;