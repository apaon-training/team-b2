import { Map, Marker } from "@vis.gl/react-google-maps";
import { APIProvider } from "@vis.gl/react-google-maps";
import { useState } from "react";
function StoreMap(props) {
    const googleKey="AIzaSyDSSP_p2LwfsNGP5eNXCd3cImC7Kf4RhBo";
    const [markerLocation, setMarkerLocation] = useState({
lat: 15.830346657715555,
lng:78.04030128640748
    });
    return (
        <>
        
{/*        <div className="flex align-items-center justify-content-center text-blue-900 text-4xl p-2">Store MapLocation</div>
           <span className="flex align-items-center justify-content-center">{props?.storeObj?.storeMapLocation?.latitude}</span>
            <span className="flex align-items-center justify-content-center">{props?.storeObj?.storeMapLocation?.longitude}</span>
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
        
        </>
    )
}
export default StoreMap;