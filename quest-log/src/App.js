import Map from './Map';
import Register from './/components/Register';
import mapboxgl from 'mapbox-gl';
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';

mapboxgl.accessToken =
	'pk.eyJ1IjoicGFuYW1hYmlsbHkiLCJhIjoiY2wwMDUxa3VyMGdvMjNscWhsdzlsdGg0ZSJ9.cVIiUKTUn0Bb0R2VZczmvQ';
mapboxgl.workerClass = MapboxWorker;

function App() {
	return (
		<div className='App'>
			<Map />
		</div>
	);
}

export default App;
