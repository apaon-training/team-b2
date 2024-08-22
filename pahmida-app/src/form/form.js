import { Dialog } from 'primereact/dialog'; 
import { useState } from 'react';
import './form.css';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from  'primereact/inputnumber';
import { FloatLabel } from 'primereact/floatlabel';
import { Button } from 'primereact/button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
function Form(props){
     
    const [visible, setVisible]=useState(false);
    const [storeObj,setstoreObj]= useState({
        "id":5002,
        "storeName":" blue berry",
        "storeDetails":"Groceries",
        "storeTimings": ["Mon-Fri-9am to 10pm",
                         "Sat-Sun-9am to 07pm"],
        "storeAddress":{
                 "phone" :  "Phone: +61 234 4556",
                 "address": "Address: nh"
                },
        "storeMapLocation":{
            "lat": 13.030867019063377,
            "lng":77.5864833777009
        }
        });
    // let tempObj= {
    //     "id":5001,
    //     "storeName":"Wollong",
    //     "storeDetails":"textile",
    //     "storeTimings": ["Mon-Fri-9am to 10pm",
    //                      "Sat-Sun-9am to 05pm"],
    //     "storeAddress":{
    //              "phone" :  "Phone: +61 234 453 656",
    //              "address" :"Address: jam radionodelist"
    //             },
    //     "storeMapLocation":{
    //         "lat": 17.446347238455438, 
    //         "lng": 78.48424496412154
    //     }
    // };
    const storevalidation=Yup.object ({
        storeName: Yup.string().min(5,'Too short name') .max(50,'Too long name').required('storeName is required'),
        storeDetails: Yup.string().min(5,'too short') .max(10,'too long').required('storeDetails is required'),
        storeTimings: Yup.array().of(
            Yup.string()
            .required('please enter storeTimings'),
        )
        .min(2,'Both two storeTimings are required') .required("Timings are required"),
        storeAddress: Yup.object({
            phone: Yup.string()
            .min(5,'minmum 5 characters for phone number') .max(50,'Maximum 50 characters for phone number') .required('please enter phone number'),
            address: Yup.string().min(5,'minmum 5 characters for Address').max(50,'Maximum 50 characters for Address').required('please enter Address'),
        }),
        // storeMapLocation: Yup.object({
        //     Lat: Yup.number()
        //     .min(5,'minmum 5 characters for lat') .max(10,'Maximum 10 characters for lat') ,
        //     lng: Yup.number().min(5,'minmum 5 characters for lng').max(10,'Maximum 10 characters for lng'),
        // })
    })

    const isFormFieldInvalid=(name)=> !!(formik.touched[name] && formik.errors[name]);
    const getFormErrorMessage = (name)=>{
        return isFormFieldInvalid(name)
        ? <small className='p-error'>
            {
                formik.errors[name]
            }
        </small>
        :<small className='p-error'> &nbsp;</small>
    }
    const getFormErrorMessageNested = (name,subname)=>{
        return isFormFieldInvalid(name)
        ? <small className='p-error'>
            {
            formik.errors[name][subname] 
            }
        </small>
        :<small className='p-error'> &nbsp;</small>
    }

    const formik = useFormik({
        initialValues: props?.storeObj,
  validationSchema:storevalidation,
        onSubmit: values => {
        //   alert(JSON.stringify(values, null, 2));
        props.onClose(values);
        },
      });
    return(
        <>
         <div className="flex column text-white bg-blue"> 
        <Dialog header="About" visible={props.visible} style={{ width: '50vw',height:'90vh'}} onHide={() => {props.onClose(false)}}>
       <form onSubmit={formik.handleSubmit}> 
        <div className="flex-column h-auto">
      <div className="flex text-3xl">
         <span>
             Add Store
            </span>
      </div>
     <div className="flex-column mb-2 mt-2 gap-3">
        <div className='Name'>
         Name:
         <InputText type="text" className="ml-7" value={formik.values.storeName} onChange={(e) => formik.setFieldValue('storeName', e.target.value)}/>
         <span>
            {getFormErrorMessage('storeName')}
         </span>
      </div>
      </div>
            <div className="flex mb-2 my-2 gap-3">
                <div className='Details'> 
                Details:      
         <InputText type="text"className='ml-7' value={formik.values.storeDetails} onChange={(e) => formik.setFieldValue('storeDetails', e.target.value)}/>
         <span>
            {getFormErrorMessage('storeDetails')}
         </span>
            </div>
            </div> 
            
                <div className="flex mb-2   gap-3">
                    <div className='Timing1'> 
                 Timings1:
                <InputText type="text" className='ml-5'value={formik.values.storeTimings[0]} onChange={(e) => formik.setFieldValue('storeTimings[0]', e.target.value)}/>
                <span>
                     {getFormErrorMessage('storeTimings')}
         </span>
                </div>
                </div>
                <div className="flex mb-2  gap-3">
                    <div className='Timings2'>
                Timings2:
                <InputText type="text" className='ml-6'value={formik.values.storeTimings[1]} onChange={(e) => formik.setFieldValue('storeTimings[1]', e.target.value)}/>
                <span>
            {getFormErrorMessage('storeTimings')}
         </span>
                </div>  
                </div>
                <div className="flex mb-2  gap-3">
                    <div className='Phone'>
                 Phone:
                <InputText type="text" className="ml-6" value={formik.values.storeAddress.phone} onChange={(e) => formik.setFieldValue('storeAddress.phone', e.target.value)}/>
                <span>
            {getFormErrorMessageNested('storeAddress','phone')}
         </span>
                </div>
                </div>
                <div className="flex mb-2 gap-3">
                    <div className='Address'> 
                Address:
                <InputText type="text"className='ml-5' value={formik.values.storeAddress.address} onChange={(e) => formik.setFieldValue('storeAddress.address', e.target.value)}/>
                <span>
            {getFormErrorMessageNested('storeAddress','address')}
         </span>
                </div> 
                 </div>
                <div className="flex mb-2 gap-3">
                    <div className='Latitudes'>
                 Latitudes:
                {/* <FloatLabel> */}
                <InputNumber useGrouping={false} minFractionDigits={6} value={formik.values.storeMapLocation.lat} mode="decimal" onChange={(e) => formik.setFieldValue('storeMapLocation.lat', e.value)}/>
                {/* </FloatLabel> */}
                <span>
            {getFormErrorMessage('storeMapLocation','lat')}
         </span>
                 </div>
                </div>
                 <div className="flex mb-4 gap-5">
                    <div className='Longitudes'>
                 Longitudes:
                   {/* <FloatLabel> */}
                <InputNumber useGrouping={false}  minFractionDigits={6} value={formik.values.storeMapLocation.lng} mode="decimal" onChange={(e) => formik.setFieldValue('storeMapLocation.lng', e.value)}/>
                   {/* </FloatLabel> */}
                   <span>
            {getFormErrorMessage('storeMapLocation','lng')}
         </span>
                </div>
                </div>
       <div className=" text-right text-5xl  "> 
                    
         <Button label="cancel" severity='secondary'outlined raised size='small' className='mr-4'/>
         <Button label="Submit" type="submit" bg-primary raised size='small' className='mr-4'/>
             </div> 
            </div>
            </form>
    </Dialog>
        </div>
       
        </>
             );
}
    export default Form;