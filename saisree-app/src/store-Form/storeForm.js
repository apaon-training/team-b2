import { Dialog } from 'primereact/dialog';
import { useEffect, useState } from 'react';
import './storeForm.css';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber';
import { useFormik } from 'formik';
import * as Yup from 'yup';


function StoreForm(props){

     const [visible, setVisible] = useState(false);
     const [storeObj, setStoreObj]= useState({
        "id":1002,
        "storeName":"wollongong",
         "storeDetails":"Textile mall",
         "storeTimings":["Mon-Fri-7am to 8pm", 
                         "Sat-Sun-10am to 4pm"
                        ],
         "storeAddress":{
            "phone": "Phone: +61 253 453 654",
            "address":"Address: 10-20 station road, NSW"
         },
         "storeMaplocation":{
            "lat":15.8224004,
            "lng":78.0418776
         }
      });
     
    //   useEffect(()=>{
    //     setStoreObj(props?.storeObj);
    //   },[props?.storeObj])

    //  const tempObj = {
    //     "id":1001,
    //     "storeName":"Birdsway",
    //     "storeDetails":"Near Juction",
    //     "storeTimings":["Mon-Fri-8am to 9pm", 
    //                     "Sat-Sun-9am to 5pm"
    //                    ],
    //     "storeAddress":{
    //        "phone": "Phone: +61 234 453 654",
    //        "address":"Address: 2,12-20 jam RadioNodeList"
    //     },

    //     "storeMaplocation":{
    //        "lat":15.8337677,
    //        "lng":78.0340215
    //     }
    // };
    
    const storevalidation=Yup.object({

        storeName:Yup.string()
        .min(5,'Too short name')
        .max(50,'Too long name')
        .required('storeName is required'),
        storeTimings: Yup.array()
           .of(
             Yup.string()
            .required('Please enter storeTimings'),  
            )
            .min(2, 'Please enter both timinings')
            .required("Timings are required"),

        storeAddress: Yup.object({
            phone: Yup.string()
                    .min(5, 'Minimum 5 characters for phone number')
                    .max(50, 'Max 10 characters for phone number')
                    .required('Please enter phone no'),

            address: Yup.string()
                    .min(5, 'Minimum 5 characters for address')
                    .max(50, 'Max 10 characters for address')
                    .required('Please enter address'),
        }),
        storeMaplocation: Yup.object({
                lat: Yup.number()
                .min(5, 'Minimum 5 characters for lat')
                .max(10, 'Max 10 characters for lat'),
                
            lng: Yup.number()
                .min(5, 'Minimum 5 characters for lng')
                .max(10, 'Max 10 characters for lng')
                
            })
        })   

    const isFormFieldInvalid=(name)=>!!(formik.touched[name] && formik.errors[name]);
    const getFormErrorMessage = (name) =>{
        return isFormFieldInvalid(name)
        ? <small className='p-error'>
            
                {formik.errors[name]}
                
            
        </small>
        :<small className='p-error'> &nbsp; </small>
    }
    const getFormErrorMessageNested = (name, subname) =>{
        return isFormFieldInvalid(name)
        ? <small className='p-error'>
            
                {formik.errors[name][subname]}

                
            
        </small>
        :<small className='p-error'> &nbsp; </small>
    }
    
        const formik = useFormik({
          initialValues: props?.storeObj,
          validationSchema:storevalidation,
          onSubmit: values => {
            // alert(JSON.stringify(values, null, 2));
            props.onClose(values);
          },
        });
    

    return(
        <>
        <div className="card flex justify-content-center">
        <Dialog header="Add Store" visible={props.visible} style={{ width: '50vw', height:"85vh"}} onHide={() =>  {props.onClose(false)}}>
                {/* <p className="m-0 mb-2 gap-2 font-bold text-3xl"> */}
            
                {/* </p> */}
                <form onSubmit={formik.handleSubmit}>
                <div className=' flex gap-2 text-xl my-3 mt-2'>
                <div className='pr-2'>
                        Name:
                        </div>
                        <div className='ml-5'>
                            {/* <input className='w-15rem'></input> */}
                            <InputText type="text" value={formik.values.storeName} onChange={(e) =>formik.setFieldValue('storeName', e.target.value)} className='p-inputtext-sm w-15rem' />
                            <span>
                                {getFormErrorMessage('storeName')}
                            </span>
                        </div>
                        </div>
                        <div className='flex gap-2 text-xl my-3'>
                        <div className='pr-2'>
                        Details:
                        </div>
                        <div className='ml-4 w'>
                            {/* <input className='w-25rem'></input> */}
                            <InputText type="text" value={formik.values.storeDetails} onChange={(e) =>formik.setFieldValue('storeDetails', e.target.value)} className= 'p-inputtext-sm w-25rem' />
                        </div>
                        </div>
                        <div className='flex gap-2 text-xl   my-3'>
                        <div className='pr-2'>
                        Timings1:
                        </div>
                        <div className='ml-2'>
                            {/* <input className='w-15rem'></input> */}
                            <InputText type="text" value={formik.values.storeTimings[0]} onChange={(e) =>formik.setFieldValue('storeTimings[0]', e.target.value)} className=' p-inputtext-sm w-15rem' />
                            <span>
                                {getFormErrorMessage('storeTimings')}
                            </span>
                        </div>
                        </div>
                        <div className='flex gap-2 text-xl   my-3'>
                        <div className='pr-2'>
                        Timings2:
                        </div>
                        <div className='ml-1'>
                            {/* <input className='w-15rem'></input> */}
                            <InputText type="text" value={formik.values.storeTimings[1]} onChange={(e) =>formik.setFieldValue('storeTimings[1]', e.target.value)} className=' p-inputtext-sm w-15rem' />
                        </div>
                        </div>
                        <div className='flex gap-2 text-xl   my-3'>
                        <div className='pr-2'>
                        Phone:
                        </div>
                        <div className='ml-5'>
                            {/* <input className='w-15rem'></input> */}
                            <InputText type="text" value={formik.values.storeAddress.phone} onChange={(e) =>formik.setFieldValue('storeAddress.phone', e.target.value)} className=' p-inputtext-sm w-15rem' />
                            <span>
                                {getFormErrorMessageNested('storeAddress', 'phone')}
                            </span>
                        </div>
                        </div>
                        <div className='flex gap-2 text-xl   my-3'>
                        <div className='pr-2'>
                        Address:
                        </div>
                        <div className='ml-3'>
                            {/* <input className='w-15rem'></input> */}
                            <InputText type="text" value={formik.values.storeAddress.address} onChange={(e) =>formik.setFieldValue('storeAddress.address', e.target.value)} className=' p-inputtext-sm w-15rem' />
                            <span>
                                {getFormErrorMessageNested('storeAddress','address')}
                            </span>
                        </div>
                        </div>
                        <div className='flex gap-2 text-xl   my-3'>
                        <div className='pr-2'>
                        Lattitude:
                        </div>
                        <div className='ml-2'>
                            {/* <input className='w-15rem'></input> */}
                            <InputNumber type="value1" useGrouping={false} minFractionDigits={2} mode="decimal" value={formik.values.storeMaplocation.lat} onChange={(e) =>formik.setFieldValue('storeMaploction.lat', e.value)} className=' p-inputtext-sm w-15rem' />
                        </div>
                        </div>
                        <div className='flex gap-2 text-xl   my-3'>
                        <div className='pr-2'>
                        Longitude:
                        </div>
                        <div className='mr-1'>
                            {/* <input className='w-15rem'></input> */}
                            <InputNumber type="value2" useGrouping={false} minFractionDigits={2} mode="decimal" value={formik.values.storeMaplocation.lng} onChange={(e) =>formik.setFieldValue('storeMaplocation.lng', e.value)}  className=' p-inputtext-sm w-15rem' />
                        </div>
                        </div>
                            <div className='text-right text-2xl'>
                            <Button label="Cancel" severity="Cancel" raised className='mr-4 bg-white-600 w-2 h-2rem button'></Button>
                            <Button label="Save" type="submit" severity="" raise className='mr-4 bg-blue-600 form w-2 h-2rem'></Button>
                                </div>
                                </form>
                {/* <p className="m-0 mb-2 animation-fill-forwards"> */}
                   
                {/* </p>  */}

-
            </Dialog>
        </div>

        </>
);
}
export default StoreForm;
