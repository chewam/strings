import Image from "next/image";
import GoogleMapReact from "google-map-react";
import { useEffect, useRef, useState } from "react";

import marker from "@/public/images/map_marker.svg";

const Marker = ({
  lat,
  lng,
  text,
}: {
  lat: number;
  lng: number;
  text: string;
}) => (
  <div className="absolute w-12 h-18 transform -translate-y-full -translate-x-1/2 ">
    <Image src={marker} alt="map marker" />
  </div>
);

const Map = () => {
  const center = { lat: 42.6953834, lng: 23.32 };
  const marker = { lat: 42.6994879, lng: 23.3259157 };
  const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY || "";

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact zoom={14} center={center} bootstrapURLKeys={{ key }}>
        <Marker lat={marker.lat} lng={marker.lng} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
