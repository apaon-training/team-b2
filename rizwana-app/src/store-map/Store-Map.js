import { Map,Marker } from "@vis.gl/react-google-maps";
import { APIProvider } from "@vis.gl/react-google-maps";
import  { useState } from 'react';





function StoreMap(props) {

    const googleKey = "AIzaSyDSSP_p2LwfsNGP5eNXCd3cImC7Kf4RhBo";
const [markerLocation, setMarkerLocation] = useState({

    lat: props?.storeObj?.storeMapLocator?.Lattitudes,

    lng:props?.storeObj?.storeMapLocator?.Longitudes});


    return (
        <>
        <div className="flex-column" >
        {/* <div className="flex mr-4 h-4rem text-4xl text-blue-600">Store Map </div>
            <span className="flex align-items-center justify-content-center">{props?.storeObj?.storeMapLocator?.Lattitudes}</span>
            <span className="flex align-items-center justify-content-center">{props?.storeObj?.storeMapLocator?.Longitudes}</span>
            <span></span> */}
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


           
        </div>
        </>
    );

    
}

export default StoreMap;