import { Map, Marker } from "@vis.gl/react-google-maps";
import { APIProvider } from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";
function StoreMap(props) {
    const googleKey="AIzaSyDSSP_p2LwfsNGP5eNXCd3cImC7Kf4RhBo";
   /*  const [markerLocation, setMarkerLocation] = useState({

        lat: props?.storeObj?.storeMapLocation?.latitude,

        lng:props?.storeObj?.storeMapLocation?.longitude}
);


       useEffect(()=>{
            setMarkerLocation({

                lat: props?.storeObj?.storeMapLocation?.latitude,
        
                lng:props?.storeObj?.storeMapLocation?.longitude})
        },[props.storeObj]) */

        const [markerLocation, setMarkerLocation] = useState({
            lat: 15.830449876980923, 
            lng: 78.0395180820437,
          }); 

    return(
        <>

        {/* <div className="flex justify-content-center align-items-center text-black-alpha-90 py-3 text-3xl"> Map Location</div>
            <span className="flex">{props?.storeObj?.storeMapLocation?.latitude}</span>
            <span className="flex">{props?.storeObj?.storeMapLocation?.longitude}</span>
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