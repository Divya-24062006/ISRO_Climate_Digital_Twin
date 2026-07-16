import { useState } from "react";

import {

    MapContainer,

    TileLayer,

    Marker,

    useMapEvents,

    useMap

} from "react-leaflet";

import L from "leaflet";

import "leaflet/dist/leaflet.css";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({

    iconRetinaUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",

    iconUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",

    shadowUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png"

});

function LocationMarker({ position, setPosition }) {

    useMapEvents({

        click(e) {

            setPosition(e.latlng);

        }

    });

    return position ? (

        <Marker position={position} />

    ) : null;

}

function MapController({ position }) {

    const map = useMap();

    if (position) {

        map.flyTo(position, 8, {

            duration: 1.5

        });

    }

    return null;

}

export default function IndiaMap({

    position,

    setPosition

}) {

    return (

        <MapContainer

            center={[22.5, 79]}

            zoom={5}

            style={{

                height: "550px",

                width: "100%",

                borderRadius: "24px"

            }}

        >

            <TileLayer

                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

            />

            <LocationMarker

                position={position}

                setPosition={setPosition}

            />

            <MapController position={position} />

        </MapContainer>

    );

}