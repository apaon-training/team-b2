import { Dialog } from 'primereact/dialog';
import './store-form.css';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber';
import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
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

    const storevalidation = Yup.object
    ( { 
    storeName : Yup.string().min(5 ,'Too short name').max(50, 'Too long name').required('storeName is required'),
    storeDetails : Yup.string().min(5 ,'Too short name').max(50, 'Too long name').required('storeDetails is required'),
    storeTimings : Yup.string().min(5 ,'Too short name').max(50, 'Too long name').required('storeTimings is required'),
    storeContact : Yup.string().min(5 ,'Too short name').max(50, 'Too long name').required('storeContact is required')
})

const isFormFieldInvalid = (name) => !!(formik.touched[name]&&formik.errors[name]);
const getFromErrorMessage = (name) => {
    return isFormFieldInvalid(name)
    ?<small className='p-error' >
    {formik.errors[name]}
    </small>
    :<small className='p-error'>&nbsp;</small>
}

    const formik = useFormik({
        initialValues: tempObg,
        validationSchema:storevalidation,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });

    return (
        <div className="card flex justify-content-center">
            <Dialog header="Add store"  visible={props.visible} style={{ width: '70vh', height: '100vh'}} onHide={() => {props.onClose(false)}}>
                <div className='flex-column'>
                    <form onSubmit={formik.handleSubmit}>
                <div className='flex gap-6 mb-2 mt-4'>
                    <div className=''>
                        Name    :
                    </div>
            <div className="">
            <InputText value={formik.values.storeName} onChange={(e) => formik.setFieldValue('storeName', e.target.value)} />
            <span>{getFromErrorMessage('storeName')}</span>
            </div>
            </div>
                <div className='flex gap-6 mb-4'>
                    <div className=''>
                        Details :
                    </div>
                    <div className=''>
                    <InputText value={formik.values.storeDetails} onChange={ (e) => formik.setFieldValue('storeDetails', e.target.value)} />
                    <span>{getFromErrorMessage('storeDetails')}</span>
                    </div>
                </div>
                <div className='flex gap-5 mb-2'>
                    <div className=''>
                        Timings1 :
                    </div>
                    <div className=''>
                    <InputText value={formik.values.storeTimings[0]} onChange={(e) => formik.setFieldValue('storeTimings[0]',e.target.value)} />
                    <span>{getFromErrorMessage('storeTimings')}</span>
                    </div>
                </div>
                <div className='flex gap-5 mb-4'>
                    <div className=''>
                        Timings2 :
                    </div>
                    <div className=''>
                    <InputText value={formik.values.storeTimings[1]} onChange={(e) => formik.setFieldValue('storeTimings[1]',e.target.value)} />
                    <span>{getFromErrorMessage('storeTimings')}</span>
                    </div>
                </div>
                <div className='flex gap-6 mb-2'>
                    <div className=''>
                        Phone    :
                    </div>
                    <div className=''>
                    <InputText value={formik.values.storeContact.phone} onChange={(e) => formik.setFieldValue('storeContact.phone',e.target.value)} />
                    <span>{getFromErrorMessage('storeContact')}</span>
                    </div>
                </div>
                <div className='flex gap-5 mb-4'>
                    <div className=''>
                        Address  :
                    </div>
                    <div className=''>
                    <InputText value={formik.values.storeContact.address} onChange={(e) => formik.setFieldValue('storeContact.address',e.target.value)} />
                    <span>{getFromErrorMessage('storeContact')}</span>
                    </div>
                </div>
                <div className='flex gap-5 mb-2'>
                    <div className=''>
                        Latitude  :
                    </div>
                    <div className=''>
                    <InputNumber value={formik.values.storeMapLocation.lat} onChange={(e) => formik.setFieldValue('storeMapLocation.lat',e.value)} />
                    </div>
                </div>
                <div className='flex gap-4 mb-4'>
                    <div className=''>
                        Longitude :
                    </div>
                    <div className=''>
                    <InputNumber value={formik.values.storeMapLocation.lng} onChange={(e) => formik.setFieldValue('storeMapLocation.lan',e.value)} />
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