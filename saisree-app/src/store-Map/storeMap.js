import {Map, Marker}from "@vis.gl/react-google-maps";
import { APIProvider } from "@vis.gl/react-google-maps";
import { useState } from "react";



function StoreMap(props){
    const googleKey = "AIzaSyDSSP_p2LwfsNGP5eNXCd3cImC7Kf4RhBo";
    const [markerLocation, setMarkerLocation] = useState({

    lat:15.830315691912084,

    lng:78.03944298015871});
    
    return(
        <>
        {/* <div className="flex-column"> */}
        {/* <div className="flex mr-4 h-4rem text-4xl ">storeMap</div> */}
        {/* <span className="flex">{props?.storeObj?.storeMaplocation?.lattitudes}</span> */}
        {/* <span className="flex py-2">{props?.storeObj?.storeMaplocation?.longitudes}</span> */}
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
export default StoreMap;