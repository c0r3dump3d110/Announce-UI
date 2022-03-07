import React, { useState } from 'react'
import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,
    Marker,
    InfoWindow
} from "react-google-maps";
import SiteForm from '../FormsComps/SiteForm';


const setSitePos = (obj) => {
    localStorage.setItem('address', JSON.stringify(obj)); 
}

function Map() {
    const [siteAddress, setSiteAddress] = useState(null);
   

    return (
        <GoogleMap

            defaultZoom={10}
            defaultCenter={{ lat: 33.545490, lng: -7.594056 }}
            onClick={e => {
                console.log("lat: " + e.latLng.lat());
                console.log("long: " + e.latLng.lng());
                setSiteAddress({ laltittude: e.latLng.lat(), longtitude: e.latLng.lng() })
                setSitePos(siteAddress)
            }}
        >
            {
                siteAddress && (
                    <InfoWindow
                        position={{
                            lat: siteAddress.laltittude,
                            lng: siteAddress.longtitude
                        }}
                    >
                        <div>{JSON.stringify(siteAddress)}</div>
                    </InfoWindow>
                )
            }
        </GoogleMap>
    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map));


export default function MapsComp() {

    const API_KEY = "AIzaSyDPgh8kE8LOJ3YZwBieIik6VtUWUBpk6S0";

    return (
        <div className='grid grid-cols-2 gap-3'>
            <div className='' style={{ width: "100%", height: "100vh" }}>
                <WrappedMap
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${API_KEY}`}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `100%` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />

            </div>
            <SiteForm />
        </div>
    )
}
