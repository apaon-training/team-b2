import {Map, Marker}from "@vis.gl/react-google-maps";
import { APIProvider } from "@vis.gl/react-google-maps";
import { useState } from "react";



function StoreMap(props){

    //  lat:15.830315691912084,
    // lat: props?.storeObj?.storeMaplocation?.lat,
  
    //  lng:78.03944298015871});
    // lng: props?.storeObj?.storeMaplocation?.lng});
    
    return(
        <>
        {
          (props?.storeObj?.storeMaplocation)?(
            <APIProvider apiKey={"AIzaSyDSSP_p2LwfsNGP5eNXCd3cImC7Kf4RhBo"}>

         <Map

       	style={{ borderRadius: "20px" }}

       	defaultZoom={13}

       	defaultCenter={props?.storeObj?.storeMaplocation}

       	gestureHandling={"greedy"}

       	disableDefaultUI

     >

       <Marker position={props?.storeObj?.storeMaplocation} />

     </Map>

     </APIProvider>
          ):(
          <></>
        )
      }
        {/* <div className="flex-column"> */}
        {/* <div className="flex mr-4 h-4rem text-4xl ">storeMap</div> */}
        {/* <span className="flex">{props?.storeObj?.storeMaplocation?.lattitudes}</span> */}
        {/* <span className="flex py-2">{props?.storeObj?.storeMaplocation?.longitudes}</span> */}



        {/* </div> */}
         </>
   )
 }
export default StoreMap;