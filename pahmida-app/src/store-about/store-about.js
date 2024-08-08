import { Dialog } from 'primereact/dialog'; 
 
function StoreAbout(visible){
    return(
        <>
        <div>
        <Dialog header="about" visible={visible} style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVisible(false); }}>
                <p className="m-0">
                    <div className="flex column"
                      </p>
            </Dialog>
        </div>
        </>
    );

    export default  StoreAbout;
    
    