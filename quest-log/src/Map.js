import * as React from 'react';
import MapGL, { GeolocateControl, Marker, Popup } from 'react-map-gl';
import { useState, useEffect } from 'react';
import RoomIcon from '@material-ui/icons/Room';
import './Map.css';
import axios from 'axios';
import { format } from 'timeago.js';
import mapboxgl from 'mapbox-gl';
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';
import Register from './components/Register';
import Login from './components/Login';

mapboxgl.workerClass = MapboxWorker;

function Map() {
	const storage = window.localStorage;
	const [currentUser, setCurrentUser] = useState('adminuser');
	const [pins, setPins] = useState([]);
	const [currentLocation, setCurrentLocation] = useState(null);
	const [title, setTitle] = useState(null);
	const [description, setDescription] = useState(null);
	const [rating, setRating] = useState(0);
	const [pinCurrentLocation, setPinCurrentLocation] = useState(null);
	const [showRegister, setShowRegister] = useState(false);
	const [showLogin, setShowLogin] = useState(false);
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
				const res = await axios.get(
					'https://quest-log-backend.herokuapp.com/api/pins'
				);
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

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const newPin = {
				userName: currentUser,
				title,
				description,
				rating: parseInt(rating),
				lat: pinCurrentLocation.lat,
				long: pinCurrentLocation.long,
			};
			console.log(JSON.stringify(newPin));
			const res = await axios.post(
				'https://quest-log-backend.herokuapp.com/api/pins',
				newPin
			);
			setPins([...pins, res.data]);
			setPinCurrentLocation(null);
		} catch (err) {
			console.log(err);
		}
	};
	const handleLogout = () => {
		storage.removeItem('user');
		setCurrentUser(null);
	};

	return (
		<div>
			<MapGL
				{...viewState}
				onMove={(evt) => setViewState(evt.viewState)}
				style={{ width: '95vw', height: '95vh' }}
				mapStyle='mapbox://styles/panamabilly/cl00ipmyg000014p0ksriadde'
				onDblClick={handleDoubleClick}>
				<GeolocateControl />
				{pins.map((p) => (
					<>
						<Marker
							latitude={p.lat}
							longitude={p.long}
							offsetLeft={-viewState.zoom * 2.5}
							offsetTop={-viewState.zoom * 5}
							draggable={false}>
							<RoomIcon
								style={{
									color: p.userName === currentUser ? 'yellow' : 'purple',
									cursor: 'pointer',
									fontSize: viewState.zoom * 5,
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
									onChange={(event) => setTitle(event.target.value)}
								/>
								<label>Review</label>
								<textarea
									placeholder='Enter a review'
									onChange={(event) =>
										setDescription(event.target.value)
									}></textarea>
								<label>Rating</label>
								<select onChange={(event) => setRating(event.target.value)}>
									<option value='1'>1</option>
									<option value='2'>2</option>
									<option value='3'>3</option>
									<option value='4'>4</option>
									<option value='5'>5</option>
								</select>
								<button className='submitButton' type='submit'>
									Add Pin
								</button>
							</form>
						</div>
					</Popup>
				)}
				{currentUser ? (
					<button className='button-logout' onClick={handleLogout}>
						Log Out
					</button>
				) : (
					<div className='buttons'>
						<button className='button-login' onClick={() => setShowLogin(true)}>
							Log In
						</button>
						<button
							className='button-register'
							onClick={() => setShowRegister(true)}>
							Register
						</button>
					</div>
				)}
				{showRegister && <Register setShowRegister={setShowRegister} />}
				{showLogin && (
					<Login
						setShowLogin={setShowLogin}
						storage={storage}
						setCurrentUser={setCurrentUser}
					/>
				)}
			</MapGL>
		</div>
	);
}

export default Map;
