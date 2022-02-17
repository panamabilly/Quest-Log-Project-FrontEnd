import * as React from 'react';
import MapGL, { GeolocateControl, Marker, Popup } from 'react-map-gl';
import { useState, useEffect } from 'react';
import RoomIcon from '@material-ui/icons/Room';
import './Map.css';
import axios from 'axios';
import { format } from 'timeago.js';

function Map() {
	const [pins, setPins] = useState([]);
	const [currentLocation, setCurrentLocation] = useState(null);

	useEffect(() => {
		const getPins = async () => {
			try {
				const res = await axios.get('/pins');
				setPins(res.data);
			} catch (err) {
				console.log(err);
			}
		};
		getPins();
	}, []);

	const handleMarkerClick = (id) => {
		setCurrentLocation(id);
	};

	return (
		<MapGL
			initialViewState={{
				longitude: -110,
				latitude: 37,
				zoom: 6.25,
			}}
			style={{ width: '95vw', height: '95vh' }}
			mapStyle='mapbox://styles/panamabilly/ckzpxm04w000p15qd0u7zvdgs'>
			<GeolocateControl />
			{pins.map((p) => (
				<>
					<Marker
						latitude={p.lat}
						longitude={p.long}
						offsetLeft={-5}
						offsetTop={-5}
						draggable={false}>
						<RoomIcon
							style={{ color: 'yellow' }}
							onClick={() => handleMarkerClick(p._id)}
						/>
					</Marker>
					{p._id === c}
					<Popup
						longitude={p.long}
						latitude={p.lat}
						offset={15}
						closeButton={true}
						anchor='left'>
						<div className='popup-card'>
							<label>Place</label>
							<p className='place-text'>{p.title}</p>
							<label>Description</label>
							<p className='description-text'>{p.description}</p>
							<label>Rating</label>
							<div className='rating-text'>5 Stars</div>
							<label>Information</label>
							<span className='username'>
								Created by <b>{p.userName}</b>
							</span>
							<span className='date'> {format(p.CreatedAt)}</span>
						</div>
					</Popup>
				</>
			))}
		</MapGL>
	);
}

export default Map;
