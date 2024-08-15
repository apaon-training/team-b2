import { Dialog } from 'primereact/dialog'; 
import { useState } from 'react';
import './form.css';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from  'primereact/inputnumber';
import { FloatLabel } from 'primereact/floatlabel';
import { Button } from 'primereact/button';
import { useFormik } from 'formik';
function Form(props){
     
    const [visible, setVisible]=useState(false);
    const tempObj= {
        "id":5001,
        "storeName":"Wollong",
        "storeDetails":"textile",
        "storeTimings": ["Mon-Fri-9am to 10pm",
                         "Sat-Sun-9am to 05pm"],
        "storeAddress":{
                 "phone" :  "Phone: +61 234 453 656",
                 "address" :"Address: jam radionodelist"
                },
        "storeMapLocation":{
            "lat": 17.446347238455438, 
            "lng": 78.48424496412154
        }
    };
    const formik = useFormik({
        initialValues: tempObj,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });
    return(
        <>
         <div className="flex column text-white bg-blue"> 
        <Dialog header="About" visible={props.visible} style={{ width: '50vw',height:'85vh'}} onHide={() => {props.onClose(false)}}>
       <form> 
        <div className="flex-column h-auto">
      <div className="flex text-3xl">
         <span>
             Add Store
            </span>
      </div>
     <div className="flex-column mb-2 mt-2 gap-3">
        <div className='Name'>
         Name:
         <InputText type="text" className="ml-7" value={formik.values.storeName}/>
      </div>
      </div>
            <div className="flex mb-2 my-2 gap-3">
                <div className='Details'> 
                Details:      
         <InputText type="text"className='ml-7' value={formik.values.storeDetails}/>
            </div>
            </div> 
            
                <div className="flex mb-2   gap-3">
                    <div className='Timing1'> 
                 Timings1:
                <InputText type="text" className='ml-5'value={formik.values.storeTimings[0]}/>
                </div>
                </div>
                <div className="flex mb-2    gap-3">
                    <div className='Timings2'>
                Timings2:
                <InputText type="text" className='ml-6'value={formik.values.storeTimings[1]}/>
                </div>  
                </div>
                <div className="flex mb-2  gap-3">
                    <div className='Phone'>
                 Phone:
                <InputText type="text" className="ml-6" value={formik.values.storeAddress.phone}/>
                </div>
                </div>
                <div className="flex mb-2 gap-3">
                    <div className='Address'> 
                Address:
                <InputText type="text"className='ml-5' value={formik.values.storeAddress.address}/>
                </div> 
                 </div>
                <div className="flex mb-2  gap-3">
                    <div className='Longitudes'>
                 Longitudes:
                  
                <FloatLabel>
                <InputNumber type="text" minFractionDigits={6}value={formik.values.storeMapLocation.lat}/>
                </FloatLabel>
                 </div>
                </div>
                 <div className="flex mb-2  gap-3">
                    <div className='Latitudes'>
                 Latitudes:
                   <FloatLabel>
                <InputNumber type="text" minFractionDigits={6}value={formik.values.storeMapLocation.lng}/>
                 </FloatLabel>
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