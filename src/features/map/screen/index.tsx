import React, { useEffect, useState } from 'react';
import MapView, { Circle, PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation, { GeoPosition } from 'react-native-geolocation-service';

import styles from './styles';

const Map = () => {
  const [radius, setRadius] = useState(100);
  const [position, setPosition] = useState<GeoPosition | undefined>(undefined);

  useEffect(() => {
    // For IOS (requestAuthorization)
    Geolocation.requestAuthorization('always').then(() => {
      Geolocation.getCurrentPosition(
        (pos) => {
          console.log({ pos });
          setPosition(pos);
        },
        () => {},
        { timeout: 1000 },
      );
    });
  }, []);

  return (
    <MapView
      style={styles.map}
      provider={PROVIDER_GOOGLE}
      onPress={() => {
        setRadius(radius + 100);
      }}
      initialRegion={{
        latitude: 37,
        longitude: -122,
        latitudeDelta: 0.03,
        longitudeDelta: 0.03,
      }}
      region={
        position && {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.03,
          longitudeDelta: 0.03,
        }
      }>
      <Circle
        center={{ latitude: 37, longitude: -122 }}
        radius={radius}
        fillColor="rgba(0,255,0,0.3)"
      />
    </MapView>
  );
};

export default Map;
