import GoogleMapReact from 'google-map-react';
import { Marker } from '../Marker/Marker';
import './style.css';

const Map = () => {
  return (
    <div className='container-map'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDzjpfhXEMaAl34VtsrcQbfCTlhv9nQPNY' }}
        center={{
          lat: -5.5255555555556,
          lng: -47.476944444444,
        }}
        defaultZoom={15}
      >
        <Marker lat={-5.5255555555556} lng={-47.476944444444} />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
