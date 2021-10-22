import mapboxgl from "mapbox-gl";
import { useEffect, useRef, useState } from "react";

import "mapbox-gl/dist/mapbox-gl.css";

function MapboxMap() {
  const [, setMap] = useState<mapboxgl.Map>();
  const mapNode = useRef(null);

  useEffect(() => {
    const node = mapNode.current;
    if (typeof window === "undefined" || node === null) return;

    const map = new mapboxgl.Map({
      zoom: 13,
      container: node,
      center: [23.32, 42.6953834],
      style: "mapbox://styles/mapbox/light-v10",
      accessToken: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
    });

    const el = document.createElement("div");
    el.className = "marker";
    new mapboxgl.Marker(el).setLngLat([23.3259157, 42.6994879]).addTo(map);

    map.scrollZoom.disable();

    setMap(map);

    return () => {
      map.remove();
    };
  }, []);

  return <div ref={mapNode} style={{ width: "100%", height: "100%" }} />;
}

export default MapboxMap;
