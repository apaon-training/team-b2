import { Map, Marker } from "@vis.gl/react-google-maps";
import { APIProvider } from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";
function StoreMap(props) { 

    return(
        <>
        { (props?.storeObj?.storeMapLocation) ? (
      <APIProvider apiKey={"AIzaSyDSSP_p2LwfsNGP5eNXCd3cImC7Kf4RhBo"}>
      <Map
    style={{ borderRadius: "20px" }}
    defaultZoom={13}
    defaultCenter={props?.storeObj?.storeMapLocation}
    gestureHandling={"greedy"}
    disableDefaultUI
  >
    <Marker position={props?.storeObj?.storeMapLocation} />
  </Map>
  </APIProvider>
    ) : (
      <></>
    )
  }
    </>
  )
  
}
  export default StoreMap;