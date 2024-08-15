import { Dialog } from 'primereact/dialog';
import { useState } from 'react';
import './storeForm.css';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber';
import { useFormik } from 'formik';
function StoreForm(props){

     const [visible, setVisible] = useState(false);
     const tempObj = {
        "id":1001,
        "storeName":"Birdsway",
        "storeDetails":"Near Juction",
        "storeTimings":["Mon-Fri-8am to 9pm", 
                        "Sat-Sun-9am to 5pm"
                       ],
        "storeAddress":{
           "phone": "Phone: +61 234 453 654",
           "address":"Address: 2,12-20 jam RadioNodeList"
        },
        "storeMaplocation":{
           "lat":15.8337677,
           "lng":78.0340215
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
        <div className="card flex justify-content-center">
        <Dialog header="Add Store" visible={props.visible} style={{ width: '50vw', height:"85vh"}} onHide={() =>  {props.onClose(false)}}>
                {/* <p className="m-0 mb-2 gap-2 font-bold text-3xl"> */}
            
                {/* </p> */}
                <form>
                <div className=' flex gap-2 text-xl my-3 mt-2'>
                <div className='pr-2'>
                        Name:
                        </div>
                        <div className='ml-5'>
                            {/* <input className='w-15rem'></input> */}
                            <InputText type="text" value={formik.values.storeName} className=' p-inputtext-sm w-15rem' />
                        </div>
                        </div>
                        <div className='flex gap-2 text-xl my-3'>
                        <div className='pr-2'>
                        Details:
                        </div>
                        <div className='ml-4 w'>
                            {/* <input className='w-25rem'></input> */}
                            <InputText type="text" value={formik.values.storeDetails} className= 'p-inputtext-sm w-25rem' />
                        </div>
                        </div>
                        <div className='flex gap-2 text-xl   my-3'>
                        <div className='pr-2'>
                        Timings1:
                        </div>
                        <div className='ml-2'>
                            {/* <input className='w-15rem'></input> */}
                            <InputText type="text" value={formik.values.storeTimings[0]} className=' p-inputtext-sm w-15rem' />
                        </div>
                        </div>
                        <div className='flex gap-2 text-xl   my-3'>
                        <div className='pr-2'>
                        Timings2:
                        </div>
                        <div className='ml-1'>
                            {/* <input className='w-15rem'></input> */}
                            <InputText type="text" value={formik.values.storeTimings[1]} className=' p-inputtext-sm w-15rem' />
                        </div>
                        </div>
                        <div className='flex gap-2 text-xl   my-3'>
                        <div className='pr-2'>
                        Phone:
                        </div>
                        <div className='ml-5'>
                            {/* <input className='w-15rem'></input> */}
                            <InputText type="text" value={formik.values.storeAddress.phone} className=' p-inputtext-sm w-15rem' />
                        </div>
                        </div>
                        <div className='flex gap-2 text-xl   my-3'>
                        <div className='pr-2'>
                        Address:
                        </div>
                        <div className='ml-3'>
                            {/* <input className='w-15rem'></input> */}
                            <InputText type="text" value={formik.values.storeAddress.address} className=' p-inputtext-sm w-15rem' />
                        </div>
                        </div>
                        <div className='flex gap-2 text-xl   my-3'>
                        <div className='pr-2'>
                        Lattitude:
                        </div>
                        <div className='ml-2'>
                            {/* <input className='w-15rem'></input> */}
                            <InputNumber type="value1" value={formik.values.storeMaplocation.lat} className=' p-inputtext-sm w-15rem' />
                        </div>
                        </div>
                        <div className='flex gap-2 text-xl   my-3'>
                        <div className='pr-2'>
                        Longitude:
                        </div>
                        <div className='mr-1'>
                            {/* <input className='w-15rem'></input> */}
                            <InputNumber type="value2" value={formik.values.storeMaplocation.lng}  className=' p-inputtext-sm w-15rem' />
                        </div>
                        </div>
                            <div className='text-right text-2xl'>
                            <Button label="Cancel" severity="Cancel" raised className='mr-4 bg-white-600 w-2 h-2rem button'></Button>
                            <Button label="Save" type="submit" severity="" raise className='mr-4 bg-blue-600 form w-2 h-2rem'></Button>
                                </div>
                                </form>
                {/* <p className="m-0 mb-2 animation-fill-forwards"> */}
                   
                {/* </p>  */}


            </Dialog>
        </div>

        </>
);
}
export default StoreForm;