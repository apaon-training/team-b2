import { Dialog } from 'primereact/dialog'; 
import { useState } from 'react';
import './form.css';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from  'primereact/inputnumber';
import { FloatLabel } from 'primereact/floatlabel';
import { Button } from 'primereact/button';
function Form(props){
     
    const [visible, setVisible]=useState(false);
    return(
        <>
         <div className="flex column text-white bg-blue"> 
        <Dialog header="About" visible={props.visible} style={{ width: '50vw',height:'85vh'}} onHide={() => {props.onClose(false)}}>
        <div className="flex-column ">
      <div className="flex text-3xl">
         <span>
             Add Store
            </span>
      </div>
     <div className="flex-column mb-2 mr-2 gap-3">
        <div className='Name'>
         Name:
         <InputText type="text" className="ml-5"/>
      </div>
      </div>
            <div className="flex mb-2 my-2 gap-3">
                <div className='Details'> 
                Details:       
         <InputText type="text"className='ml-4'/>
            </div> 
            </div>
                <div className="flex mb-2 mr-2 gap-3">
                    <div className='Timing1'> 
                 Timings1:
                 </div>
                <InputText type="text" className='ml-1'/>
                </div>
                </div>
                <div className="flex mb-2  mr-2 gap-3">
                    <div className='Timings2'>
                Timngs2:
                <InputText type="text" className='ml-2'/>
                </div>  
                </div>
                <div className="flex mb-2 mr-2 gap-3">
                    <div className='Phone'>
                 Phone:
                <InputText type="text" className="ml-4"/>
                </div>
                </div>
                <div className="flex mb-2 mr-2 gap-3">
                    <div className='Address'> 
                Address:
                <InputText type="text"/>
                </div> 
                 </div>
                <div className="flex mb-2 mr-2 gap-3">
                    <div className='Longitudes'>
                 Longitudes:
                 </div>
                <FloatLabel>
                <InputNumber type="text" minFractionDigits={6}/>
                </FloatLabel>
                 
                </div>
                 <div className="flex mb-2 mr-2 gap-3">
                    <div className='Latitudes'>
                 Latitudes:
                 </div>
                 <FloatLabel>
                <InputNumber type="text" minFractionDigits={6}/>
                 </FloatLabel>
                </div>
       
                <div>
                <div className=" text-right text-5xl  "> 
         <Button label="cancel" severity='secondary'outlined raised size='small' className='mr-4'/>
         <Button label="Submit" bg-primary raised size='small' className='mr-4'/>
             </div> 
             </div>
   
 
   </Dialog>
        </div>
       
        </>
             );
}
    export default Form;