import * as React from 'react';
import MapGL, { GeolocateControl, Marker, Popup } from 'react-map-gl';
import { useState } from 'react';
import RoomIcon from '@material-ui/icons/Room';
import './Map.css';

function Map() {
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
			<Marker
				latitude={40.770359}
				longitude={-111.891869}
				offsetLeft={-5}
				offsetTop={-5}
				draggable={false}>
				<RoomIcon style={{ color: 'yellow' }} />
			</Marker>
			<Popup
				longitude={-111.891869}
				latitude={40.770359}
				offset={15}
				closeButton={true}
				anchor='left'>
				<div className='popup-card'>
					<label>Place</label>
					<p className='place-text'>Temple Square</p>
					<label>Description</label>
					<p className='description-text'>A Holy Place for Mormons</p>
					<label>Rating</label>
					<div className='rating-text'>5 Stars</div>
					<label>Information</label>
					<span className='username'>
						Created by <b>coolboarder1985</b>
					</span>
					<span className='date'> 1 minute ago</span>
				</div>
			</Popup>
		</MapGL>
	);
}

export default Map;
