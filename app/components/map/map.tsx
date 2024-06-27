"use client"
import { Loader } from "@googlemaps/js-api-loader";
import { useEffect, useState } from "react";

const loader = new Loader({
    apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
    version: 'weekly',
    libraries: ['places'],
  });

export default function Map({address}:{address:string}){
    const [map, setMap] = useState<google.maps.Map>();
    useEffect(() => {
        loader.load().then(() => {
        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode({ address }, (results, status) => {
            if (status === 'OK') {
                const mapOptions = {
                    center: results![0].geometry.location,
                    zoom: 16,
                };
                const newMap = new window.google.maps.Map(
                    document.getElementById('map')!,
                    mapOptions
                );
                const marker = new window.google.maps.Marker({
                    position: results![0].geometry.location,
                    map: newMap,
                });
                setMap(newMap);
            }
        });
        });
    }, [address]);
    return (
        <div id="map" className="my-20" style={{ height: '400px' }}></div>
    );
}