import { Dialog } from 'primereact/dialog';
import './store-form.css';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber';
function StoreForm (props) {
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
                <div className='flex gap-6 mb-2 mt-4'>
                    <div className=''>
                        Name    :
                    </div>
            <div className="">
            <InputText value={Text} onChange={(e) => setName(e.target.value)} />
            </div>
            </div>
                </div>
                <div className='flex gap-6 mb-4'>
                    <div className=''>
                        Details :
                    </div>
                    <div className=''>
                    <InputText value={Text} onChange={(e) => setDetails(e.target.value)} />
                    </div>
                </div>
                <div className='flex gap-5 mb-2'>
                    <div className=''>
                        Timings1 :
                    </div>
                    <div className=''>
                    <InputText value={Text} onChange={(e) => setTimings1(e.target.value)} />
                    </div>
                </div>
                <div className='flex gap-5 mb-4'>
                    <div className=''>
                        Timings2 :
                    </div>
                    <div className=''>
                    <InputText value={Text} onChange={(e) => setTimings2(e.target.value)} />
                    </div>
                </div>
                <div className='flex gap-6 mb-2'>
                    <div className=''>
                        Phone    :
                    </div>
                    <div className=''>
                    <InputNumber value={Number} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                </div>
                <div className='flex gap-5 mb-4'>
                    <div className=''>
                        Address  :
                    </div>
                    <div className=''>
                    <InputText value={Text} onChange={(e) => setAddress(e.target.value)} />
                    </div>
                </div>
                <div className='flex gap-5 mb-2'>
                    <div className=''>
                        Latitude  :
                    </div>
                    <div className=''>
                    <InputNumber value={Number} onChange={(e) => setLatitude(e.target.value)} />
                    </div>
                </div>
                <div className='flex gap-4 mb-4'>
                    <div className=''>
                        Longitude :
                    </div>
                    <div className=''>
                    <InputNumber value={Number} onChange={(e) => setLongitude(e.target.value)} />
                    </div>
                </div>
                <div className='flex align-items-center justify-content-end gap-5'>
                <Button label="Cancel" severity="secondary" outlined size='small'/>
                <Button label="Save" severity="info" raised size='small'/> 
                </div>
            </Dialog>
        </div>
    )
}

export default StoreForm;