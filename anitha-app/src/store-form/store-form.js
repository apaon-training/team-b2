import { Dialog } from 'primereact/dialog';
import { props } from 'primereact/utils';
import { useEffect, useState } from 'react';
import './store-form.css';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function StoreForm(props) {
    const [visible,setVisible]=useState(false);
const[storeObj,setStoreObj]=useState({
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
});
// useEffect(()=>{
//     setStoreObj (props?.storeObj);
// },[props?.storeObj])

    // // // const tempObg = {
    // // //     "id":1001,
    // // //     "storeName":"Jyothi Mall",
    // // //     "storeDetails":"Groceries",
    // // //     "storeTimings":[
    // // //                       "Thus-Fri 5am to 5pm",
    // // //                       "Wed-Sun 7am to 06pm"

    // // //     ],
    // // //     "storeContact":{
    // // //         "phone":"Phone: +61 665 678 987",
    // // //         "address":"Address: 54-54 Ganesh Nagar, Kurnool-518002"
    // // //     },
    // // //     "storeMapLocation":{
    // // //         "lat":15.830749264964458,
    // // //         "lng":78.04023528591568
    // //     }
    // };
    const storeValidation=Yup.object({
        storeName:Yup.string()
        .min(5,'Too short name')
        .max(50,'Too long name')
        .required(
            'storeName is required'
        ),
        storeDetails:Yup.string()
        .min(5,'Too short name')
        .max(50,'Too long name')
        .required(
            'storeDetails is required'
        ),
        storeTimings: Yup.array()
            .of(
            Yup.string()
            
            .required('Please enter storeTimings'),
            )
            .min(2, 'Please enter both timings')
            .required("Timings are required"),
    
        storeContact: Yup.object({
            phone: Yup.string()
            .min(5, 'minimum 5 characters for phone number')
            .max(50, 'max 50 characters for phone number')
            .required('Please enter phone number'),

            address: Yup.string()
            .min(5, 'minimum 5 characters for address')
            .max(50, 'max 50 characters for address')
            .required('Please enter address')
        }),

    storeMapLocation: Yup.object({
                lat: Yup.number()
                .required('latitude is required'),
                lng: Yup.number()
                .required('longitude is required')
 })       
        
    })

const isFormFieldInvalid=(name)=>!!(formik.touched[name]&&formik.errors[name]);

const getFormErrorMessage=(name)=>{
    return isFormFieldInvalid(name)
    ?<small className='p-error'>
        {formik.errors[name]}
        
    </small>
    :<small className='p-error'>&nbsp;</small>
}
const getFormErrorMessageNested=(name,subname)=>{
    return isFormFieldInvalid(name)
    ?<small className='p-error'>
        {formik.errors[name][subname]}
        
    </small>
    :<small className='p-error'>&nbsp;</small>
}



    const formik = useFormik({
        initialValues: props?.storeObj,
        validationSchema:storeValidation,
        onSubmit: values => {
          //alert(JSON.stringify(values, null, 2));
          props.onClose(values);
        },
      });
    // const setName=(value)=>{
    //     setName(value);
    // }
    // const setDetails=(value)=>{
    //     setDetails(value);
    // }
    // const setTiming1=(value)=>{
    //     setTiming1(value);
    // }
    // const setTiming2=(value)=>{
    //     setTiming2(value);
    // }
    // const setPhone=(value)=>{
    //     setPhone(value);
    // }
    // const setAddress=(value)=>{
    //     setAddress(value);
    // }
    // const setLatitude=(value)=>{
    //     setLatitude(value);
    // }
    // const setLongitude=(value)=>{
    //     setLongitude(value);
    // }
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
       <Dialog header=" Add Store" visible={props.visible} style={{ width: '65vh', height: '80vh'}} onHide={() => {props.onClose(formik.values)}}>
       <div className='flex-column h-auto'>
     <form onSubmit={formik.handleSubmit}>

     
            <div className='flex gap-6 mb-2 mt-2'>
                <div className='Name'>
                    Name:
                </div>
                <div className=''>
                    <InputText value={formik.values.storeName} onChange={(e) => formik.setFieldValue('storeName', e.target.value)}/>
                  <span>
                    {getFormErrorMessage('storeName')}
                    </span>  
                </div>
            </div>
            <div className='flex gap-6 mb-5'>
                <div className='Details'>
                    Details:
                </div>
                <div className=''>
                    <InputText value={formik.values.storeDetails} onChange={(e) => formik.setFieldValue('storeDetails', e.target.value)}/>
                    <span>
                    {getFormErrorMessage('storeDetails')}
                    </span>
                </div>
            </div>
            <div className='flex gap-5 mb-2'>
                <div className='Timings1'>
                    Timings1:
                </div>
                <div className=''>
                    <InputText value={formik.values.storeTimings[0] } onChange={(e) => formik.setFieldValue('storeTimings[0]', e.target.value)}/>
                    <span>
                    {getFormErrorMessage('storeTimings')}
                    </span>
                </div>
            </div>
            <div className='flex gap-5 mb-5'>
                <div className='Timings2'>
                    Timings2:
                </div>
                <div className=''>
                    <InputText value={formik.values.storeTimings[1]} onChange={(e) => formik.setFieldValue('storeTimings[1]', e.target.value)}/>
                
                    <span>
                    {getFormErrorMessage('storeTimings')}
                    </span>
                    </div>
            </div>
            <div className='flex gap-6 mb-2'>
                <div className='Phone'>
                    Phone:
                </div>
                <div className=''>
                    <InputText value={formik.values.storeContact.phone} onChange={(e) => formik.setFieldValue('storeContact.phone', e.target.value)}/>
                
                    <span>
                    {getFormErrorMessageNested('storeContact','phone')}
                    </span>
                    </div>
            </div>
            <div className='flex gap-5 mb-5'>
                <div className='Address'>
                    Address:
                </div>
                <div className=''>
                    <InputText value={formik.values.storeContact.address} onChange={(e) => formik.setFieldValue('storeContact.address', e.target.value)}/>
                    <span>
                    {getFormErrorMessageNested('storeContact','address')}
                    </span>
                </div>
            </div>
            <div className='flex gap-5 mb-2'>
                <div className='Latitude'>
                
                   Latitude :
                </div>
                <div className=''>
                    <InputNumber useGrouping={false} minFractionDigits={2}  mode="decimal" value={formik.values.storeMapLocation.lat} onChange={(e) => formik.setFieldValue('storeMapLocation.lat', e.value)}/>
                    <span>
                    {getFormErrorMessageNested('storeMapLocation','lat')}
                    </span>
                </div>
            </div>
            <div className='flex gap-5 mb-5'>
                <div className='Longitude'>
                    Longitude:
                </div>
                <div className=''>
                    <InputNumber  useGrouping={false} minFractionDigits={2}  mode="decimal" value={formik.values.storeMapLocation.lng} onChange={(e) => formik.setFieldValue('storeMapLocation.lng', e.value)}/>
                    <span>
                    {getFormErrorMessageNested('storeMapLocation','lng')}
                    </span>
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