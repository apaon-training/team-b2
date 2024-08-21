import { Dialog } from 'primereact/dialog';
import React, { useState } from "react";
import './Store-Form.css';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber';
import { useFormik } from 'formik';
import * as Yup from 'yup';



function StoreForm (props) {

    const [visible, setVisible] = useState(false);
    let tempObg = {
        "id": 10001,
        "storeName": "Wollong",
        "storeDetails": "D-mart",
        "storeTimings": [
            "Mon-Fri- 9 to 12 pm",
            "Sat-Sun-9 to 4 pm"
        ],
        "storeAddress": {
            "phoneNumber": "Phone: +91 799 339 2948",
            "Address": "Address: 71-127 kallur"
        },
        "storeMapLocator": {
            "lat": 15.818716285887168,
            "lng": 78.02985281909494
        }
    };
    const storeValidation=Yup.object({
        storeName: Yup.string()
        .min(5,'Too short name')
        .max(50,'Too long name')
        .required(
            'storeName is required'
        ),
        storeDetails: Yup.string()
        .min(5,'Too short name')
        .max(50,'Too long name')
        .required(
            'storeDetails is required'
        ),
        storeTimings: Yup.array()
        .of(
         Yup.string()
         .required( 'Please enter storeTimings'),
    )
        .min(2,'Please enter both timings')
        .required("Timings are required"),
        storeAddress:Yup.object({
           phone: Yup.string()
                   .min(5,'Min 5 characters for phone number')
                   .max(10,'Max 10 characters  for phone number')
                   .required('please enter phone number'),
            address: Yup.string()
                   .min(5,'Min 5 characters for address')
                   .max(10,'Max 10 characters  for address')
                   .required('please enter address'),


        })
        
     })
    
    const isFormFieldInvalid=(name)=>!!(formik.touched[name]&&formik.errors[name]);

    const getFormErrorMessage=(name)=>{
        return isFormFieldInvalid(name)
    ?<small className='p-error'>
        
       { formik.errors[name]}
       
        
        </small> 
    :<small className='p-error'>&nbsp;</small>
    }

    const getFormErrorMessageNested=(name, subname)=>{
        return isFormFieldInvalid(name)
    ?<small className='p-error'>
        
       {formik.errors[name][subname]}
       
        
        </small> 
    :<small className='p-error'>&nbsp;</small>
    }
       const formik = useFormik({
        initialValues: tempObg,
        validationSchema:storeValidation,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });
    // const setName = (value)=>{
    //     tempObg.storeName=value
        
    // }
    // const setDetails = (value)=>{
    //     tempObg.storeDetails=value
        
    // }
    // const setTimings1= (value)=>{
    //     tempObg.storeTimings=value
        
    // }
    // const setTimings2 = (value)=>{
    //     tempObg.storeTimings=value
        
    // }
    // const setPhone = (value)=>{
    //     tempObg.storePhone=value
        
    // }
    // const setAddress = (value)=>{
    //     tempObg.storeAddress=value
        
    // }
    // const setLatitude= (value)=>{
    //     tempObg.storeMapLocator.lat=value
        
    // }
    // const setLongitude= (value)=>{
    //     tempObg.storeLongitude=value
        
    // }
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
                    <form onSubmit={formik.handleSubmit}>

                
                <div className='flex mt-3 gap-6 mb-2'>
                    <div className='Name'>
                        Name:
                    </div>
                    <div className=''>
                        {/* <input></input> */}
                        <InputText  value={formik.values.storeName} onChange={(e) =>formik.setFieldValue('storeName',e.target.value)} />
                        {/* <InputText onChange={(e) => setName(e.target.value)} value={formik.values.storeName}  /> */}
                    <span>
                        {getFormErrorMessage('storeName')}
                    </span>
                    </div>
                </div>
                <div className='flex  gap-6 mb-4'>
                    <div className='Details'>
                        Details:
                    </div>
                    <div className=''>
                        {/* <input></input> */}
                        <InputText value={formik.values.storeDetails }   onChange={(e) =>formik.setFieldValue('storeDetails',e.target.value)}  />
                        <span>
                        {getFormErrorMessage('storeDetails')}
                    </span>
                    </div>
                </div>
                <div className='flex  gap-6 mb-2  '>
                    <div className='Timings1'>
                        Timings1:
                    </div>
                    <div className=''>
                        {/* <input></input> */}
                        <InputText value={formik.values.storeTimings[0]}  onChange={(e) =>formik.setFieldValue('storeTimings[0]',e.target.value)}  />
                        <span>
                        {getFormErrorMessage('storeTimings')}
                    </span>
                    </div>
                </div>
                <div className='flex  gap-6 mb-4'>
                    <div className='Timings2'>
                        Timings2:
                    </div>
                    <div className=''>
                        {/* <input></input> */}
                        <InputText value={formik.values.storeTimings[1] } onChange={(e) =>formik.setFieldValue('storeTimings[1]',e.target.value)}  />
                        <span>
                        {getFormErrorMessage('storeTimings')}
                    </span>
                    </div>
                </div>
                <div className='flex  gap-6 mb-2'>
                    <div className='Phone'>
                        Phone:
                    </div>
                    <div className=''>
                        {/* <input></input> */}
                        <InputText value={formik.values.storeAddress.phoneNumber}  onChange={(e) =>formik.setFieldValue('storeAddress.phoneNumber',e.target.value)} />
                        <span>
                        {getFormErrorMessageNested('storeAddress','phone')}
                    </span> 
                    </div>
                </div>
                <div className='flex  gap-6 mb-4'>
                    <div className='Address'>
                        Address:
                    </div>
                    <div className=''>
                        {/* <input></input> */}
                        <InputText value={ formik.values.storeAddress.Address}  onChange={(e) =>formik.setFieldValue('storeAddress.Address',e.target.value)} />
                        <span>
                        {getFormErrorMessageNested('storeAddress','address')}
                    </span>
                    </div>
                </div>
                <div className='flex  gap-6 mb-2'>
                    <div className='Latitude'>
                        Latitude:
                    </div>
                    <div className=''>
                        {/* <input></input> */}
                        <InputNumber value={ formik.values.storeMapLocator.lat }  onChange={(e) =>formik.setFieldValue('storeMapLocator.lat',e.value)} />
                    </div>
                </div>
                <div className='flex  gap-6 mb-4'>
                    <div className='Longitude'>
                        Longitude:
                    </div>
                    <div className=''>
                        {/* <input></input> */}
                        <InputNumber value={formik.values.storeMapLocator.lng}  onChange={(e) =>formik.setFieldValue('storeMapLocator.lng',e.value)} />
                    </div>
                </div>
 
                
                <div className="flex  align-items-center justify-content-end text-xl mr-3 gap-3">
        {/*<button className="cancel">Cancel</button>
        <button className="submit">Submit</button>*/}
        <Button label="Cancel" severity="secondary" outlined size="small"  onClick={() => cancelClicked()} />
        <Button label="Save" type="submit" severity="info" raised size="small" onClick={() => saveClicked()}  />
        </div>
               </form>
                </div>
            </Dialog>
            </div>
            </>


    );
}

export default StoreForm;