import * as React from 'react';
import MapGL, { GeolocateControl, Marker } from 'react-map-gl';
import { useState } from 'react';

function Map() {
	const [markers, setMarkers] = useState([]);

	// const handleClick = (event) => {
	// 	let newMarker = {
	// 		lon: event.lngLat.lng,
	// 		lat: event.lngLat.lat,
	// 	};
	// 	setMarkers([...markers, newMarker]);
	// };

	function handleClick(event) {
		console.log(event.lngLat);
	}

	return (
		<MapGL
			initialViewState={{
				longitude: -110,
				latitude: 37,
				zoom: 6.25,
			}}
			style={{ width: '95vw', height: '95vh' }}
			mapStyle='mapbox://styles/panamabilly/ckzpxm04w000p15qd0u7zvdgs'
			onClick={handleClick}>
			<GeolocateControl />
			{/* {markers.length > 0 &&
				markers.map((marker) => {
					<Marker latitude={marker.lat} longitude={marker.lon}>
						<div
							style={{
								width: '10px',
								height: '10px',
								backgroundColor: 'red',
							}}></div>
					</Marker>;
				})} */}
		</MapGL>
	);
}

export default Map;
