import React from 'react'
import { SafeAreaView, Text, StyleSheet } from 'react-native'
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions';

function Map() {
  return (
    <SafeAreaView>
      <MapView
      showsUserLocation={true}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        region={{
            latitude: 54.372158,
            longitude: 18.638306,
            latitudeDelta: 0.3,
            longitudeDelta: 0.2,
          }}>
          <Marker coordinate={{ latitude: 54.372158, longitude: 18.638306 }}>
            <Callout>
              <Text>Gdańsk</Text>
            </Callout>
          </Marker>
          <MapViewDirections
            origin={{ latitude: 54.372158, longitude: 18.638306 }}
            destination={{ latitude: 40.372158, longitude: 10.638306 }}
          />
        </MapView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  map:{
    height:'100%',
    width: '100%',
  }
})

export default Map