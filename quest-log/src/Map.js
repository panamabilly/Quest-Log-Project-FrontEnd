import * as React from 'react';
import MapGL, { GeolocateControl, Marker, Popup } from 'react-map-gl';
import { useState, useEffect } from 'react';
import RoomIcon from '@material-ui/icons/Room';
import './Map.css';
import axios from 'axios';
import { format } from 'timeago.js';

function Map() {
	const currentUser = 'boarderchick1982';
	const [pins, setPins] = useState([]);
	const [currentLocation, setCurrentLocation] = useState(null);
	const [title, setTitle] = useState(null);
	const [description, setDescription] = useState(null);
	const [rating, setRating] = useState(0);
	const [pinCurrentLocation, setPinCurrentLocation] = useState(null);
	const [viewState, setViewState] = useState({
		width: '95vw',
		height: '95vh',
		longitude: -111.908067,
		latitude: 40.736872,
		zoom: 6.25,
	});

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

	const handleSingleClick = (id, lat, long) => {
		setCurrentLocation(id);
		setViewState({ ...viewState, latitude: lat, longitude: long });
	};

	const handleDoubleClick = (event) => {
		console.log(event);
		let { lng, lat } = event.lngLat;
		setPinCurrentLocation({ long: lng, lat: lat });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const newPin = {
			user: currentUser,
			title,
			description,
			rating,
			lat: pinCurrentLocation.lat,
			long: pinCurrentLocation.long,
		};
	};

	try {
		const res = axios.post('/pins', newPin);
		setPins([...pins, res.data]);
		setPinCurrentLocation(null);
	} catch (err) {
		console.log(err);
	}

	return (
		<div>
			<MapGL
				{...viewState}
				onMove={(evt) => setViewState(evt.viewState)}
				style={{ width: '95vw', height: '95vh' }}
				mapStyle='mapbox://styles/panamabilly/ckzpxm04w000p15qd0u7zvdgs'
				onDblClick={handleDoubleClick}>
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
								style={{
									color: p.userName === currentUser ? 'yellow' : 'purple',
									cursor: 'pointer',
								}}
								onClick={() => handleSingleClick(p._id, p.lat, p.long)}
							/>
						</Marker>
						{p._id === currentLocation && (
							<Popup
								longitude={p.long}
								latitude={p.lat}
								offset={15}
								closeButton={true}
								closeOnClick={false}
								onClose={() => setCurrentLocation(null)}
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
						)}
					</>
				))}
				{pinCurrentLocation && (
					<Popup
						longitude={pinCurrentLocation.long}
						latitude={pinCurrentLocation.lat}
						offset={15}
						closeButton={true}
						closeOnClick={false}
						onClose={() => setPinCurrentLocation(null)}
						anchor='left'>
						<div>
							<form onSubmit={handleSubmit}>
								<label>Title</label>
								<input
									placeholder='Enter a title'
									onChange={(e) => setTitle(e.target.value)}
								/>
								<label>Review</label>
								<textarea
									placeholder='Enter a review'
									onChange={(e) => setDescription(e.target.value)}></textarea>
								<label>Rating</label>
								<selecton onChange={(e) => setRating(e.target.value)}>
									<option value='1'>1</option>
									<option value='2'>2</option>
									<option value='3'>3</option>
									<option value='4'>4</option>
									<option value='5'>5</option>
								</selecton>
								<button className='submitButton' type='submit'>
									Add Pin
								</button>
							</form>
						</div>
					</Popup>
				)}
			</MapGL>
		</div>
	);
}

export default Map;
