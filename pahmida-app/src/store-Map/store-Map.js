 import {Map,Marker} from "@vis.gl/react-google-maps";
 import { APIProvider } from "@vis.gl/react-google-maps";
 import { useState } from "react";
 
 function StoreMap(props){
     const googleKey = "AIzaSyDSSP_p2LwfsNGP5eNXCd3cImC7Kf4RhBo";
     const [markerLocation, setMarkerLocation] = useState({
    
           lat:15.830449876,
                // lat: props.storeObj?.storeMapLocation?.Lattitudes,
                lng:78.03951808204437});
    
                // lng:props?.storeObject?.storeMapLocation?.Longitude});

    return(
        <>
        {/* <div className="flex-column"> */}
        {/* <div className="flex-column align-items-center justify-content-center text-3xl text-blue-600 ">Store Map</div>
            <span className='flex align-items-center justify-content-center'>{props?.storeObj?.storeMapLocation?.Lattitudes}</span>
            <span className='flex align-items-center justify-content-center'>{props?.storeObj?.storeMapLocation?.Longitudes}</span>
            <span></span>
        </div> */}
        <APIProvider apiKey={googleKey}>

<Map

  style={{ borderRadius: "20px" }}

  defaultZoom={13}

  defaultCenter={markerLocation}

  gestureHandling={"greedy"}

  disableDefaultUI

>

<Marker position={markerLocation} />

</Map>

</APIProvider>
        {/* </div> */}
        </>
    );
    }
    export default  StoreMap;