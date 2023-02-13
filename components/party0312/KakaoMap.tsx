import { Map, MapMarker } from "react-kakao-maps-sdk";

function KakaoMap() {
  return (
    <Map
      center={{ lat: 37.5544852, lng: 126.9342196 }}
      style={{ width: "100%", height: "280px" }}
    >
      <MapMarker position={{ lat: 37.5544852, lng: 126.9342196 }}></MapMarker>
    </Map>
  );
}

export default KakaoMap;
