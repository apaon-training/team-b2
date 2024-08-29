import { Dialog } from 'primereact/dialog';
import './store-form.css';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';
function StoreForm (props) {
    const [storeObj, setStoreObj] = useState(
        {
        "id":1003,
        "storeName": "Polar Bear",
        "storeDetails": "Ice Cream Parlour",
        "storeTimings": ["Mon-Fri-11 to 11:30 pm", 
            "Sat-Sun-12 to 11:30 pm"

        ],
        "storeContact": {
            "phone": "Phone: +09 741 130 033",
            "address": "Address: Nandyal Check Post-Sree Rama Nagar"
        },
        "storeMapLocation": {
            "lat":15.799024873087912,
            "lng":78.05193162754628
        }
    });

    const storevalidation = Yup.object
    ( { 
    storeName : Yup.string().min(5,'Too short name').max(50, 'Too long name').required('storeName is required'),
    storeDetails : Yup.string().min(5,'Too short name').max(50, 'Too long name').required('storeDetails is required'),
    storeTimings : Yup.array()
    .of(
        Yup.string()
        .required('Please enter storeTimings'),
    )
        .min(2,'Please enter both timings').required("Timings are required"),

    storeContact: Yup.object({
        phone: Yup.string()
            .min(5,'Minimum 5 characters for phone number')
            .max(50,'Maximum 50 characters for phone number')
            .required('Please enter phone number'),
        address: Yup.string()
            .min(5,'Minimum 5 characters for address')
            .max(50,'Maximum 50 characters for address')
            .required('Please enter address')
        }),

        storeMapLocation: Yup.object({
            lat: Yup.number()
            .required('Latitude is required'),
            lng: Yup.number()
            .required('Longitude is required')
            })
    })

const isFormFieldInvalid = (name) => !!(formik.touched[name]&&formik.errors[name]);
const getFromErrorMessage = (name) => {
    return isFormFieldInvalid(name)
    ?<small className='p-error' >
        {formik.errors[name]}
    </small>
    :<small className='p-error'>&nbsp;</small>
}

const getFromErrorMessageNested = (name, subname) => {
    return isFormFieldInvalid(name)
    ?<small className='p-error' >
    {formik.errors[name][subname]}
    </small>
    :<small className='p-error'>&nbsp;</small>
}

    const formik = useFormik({
        initialValues: props?.storeObj,
        validationSchema:storevalidation,
        onSubmit: values => {
        //   alert(JSON.stringify(values, null, 2));
        props.onClose(values);

        },
      });

      const saveClicked = () => {
        console.log('Login Successful !');
      }

      const cancelClicked = () => {
        console.log('cancel Clicked !');
        props.onClose({})
      }

    return (
        <div className="card flex justify-content-center">
            <Dialog header="Add store"  visible={props.visible} style={{ width: '70vh', height: '100vh'}} onHide={() => {props.onClose(formik.values)}}>
                <div className='flex-column'>
                    <form onSubmit={formik.handleSubmit}>
                <div className='flex gap-6 mb-2 ml-2 mt-4'>
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
                    <span>{getFromErrorMessageNested('storeTimings', '0')}</span>
                    </div>
                </div>
                <div className='flex gap-5 mb-4'>
                    <div className=''>
                        Timings2 :
                    </div>
                    <div className=''>
                    <InputText value={formik.values.storeTimings[1]} onChange={(e) => formik.setFieldValue('storeTimings[1]',e.target.value)} />
                    <span>{getFromErrorMessageNested('storeTimings', '1')}</span>
                    </div>
                </div>
                <div className='flex gap-6 mb-2'>
                    <div className=''>
                        Phone    :
                    </div>
                    <div className=''>
                    <InputText value={formik.values.storeContact.phone} onChange={(e) => formik.setFieldValue('storeContact.phone',e.target.value)} />
                    <span>{getFromErrorMessageNested('storeContact', 'phone')}</span>
                    </div>
                </div>
                <div className='flex gap-5 mb-4 ml-1'>
                    <div className=''>
                        Address  :
                    </div>
                    <div className=''>
                    <InputText value={formik.values.storeContact.address} onChange={(e) => formik.setFieldValue('storeContact.address',e.target.value)} />
                    <span>{getFromErrorMessageNested('storeContact', 'address')}</span>
                    </div>
                </div>
                <div className='flex gap-5 mb-2 ml-1'>
                    <div className=''>
                        Latitude  :
                    </div>
                    <div className=''>
                    <InputNumber useGrouping={false} minFractionDigits={2} mode="decimal" value={formik.values.storeMapLocation.lat} onChange={(e) => formik.setFieldValue('storeMapLocation.lat',e.value)} />
                    <span>{getFromErrorMessageNested('storeMapLocation', 'lat')}</span>
                    </div>
                </div>
                <div className='flex gap-4 mb-4'>
                    <div className=''>
                        Longitude :
                    </div>
                    <div className=''>
                    <InputNumber useGrouping={false} minFractionDigits={2} mode="decimal" value={formik.values.storeMapLocation.lng} onChange={(e) => formik.setFieldValue('storeMapLocation.lng',e.value)} />
                    <span>{getFromErrorMessageNested('storeMapLocation', 'lng')}</span>
                    </div>
                </div>
                <div className='flex align-items-center justify-content-end gap-5'>
                <Button label="Cancel" type="button" severity="secondary" outlined size='small' onClick={() => cancelClicked ()}/>
                <Button label="Save" type="submit" severity="info" raised size='small' onClick={() => saveClicked ()}/> 
                </div>
                </form>
                </div>
            </Dialog>
            
        </div>
    )
}

export default StoreForm;