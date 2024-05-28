"use client";

import {useEffect, useRef} from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import {tokenAccess} from "@/app/constants";

mapboxgl.accessToken = tokenAccess;

function Map(props) {
    const mapContainer = useRef(null);
    const map = useRef(null);
    useEffect(() => {
        if (map.current) return; // initialize map only once

        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [2.3966, 48.9851], // Center on Garges-lès-Gonesse and Sarcelles
            zoom: 12
        });

        // Add navigation control (the +/- zoom buttons)
        map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
    }, []);

        return (
            <div ref={mapContainer} style={{ width: '100%', height: '100%' }} />
        );
    }

    export default Map;