import React, { useEffect, useState } from "react";

const KakaoMap = ({ address: any }) => {
  const [mapLoaded, setMapLoaded] = useState<boolean>(false);

    useEffect(() => {
        const $script = document.createElement("script");
        $script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.KAKAOMAP_KEY}`;
        $script.addEventListener("load", () => setMapLoaded(true));
        document.head.appendChild($script);
    }, []);

    useEffect(() => {
        if (!mapLoaded) return;
        
        kakao.maps.load(() => {
            var container = document.getElementById('map');
            var options = {
                      center: new kakao?.maps.LatLng(33.450701, 126.570667),
                      level: 3
                  };
          
            var map = new kakao?.maps.Map(container, options);

        })
        
      }, [mapLoaded]);

    return <div id="map" style={{
            width: "500px",
            height: "400px"
        }}></div>;
};

export default KakaoMap;
