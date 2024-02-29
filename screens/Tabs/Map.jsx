import React, {useEffect, useState} from 'react'
import { SafeAreaView, Text, StyleSheet } from 'react-native'
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps'
import * as Location from 'expo-location'
// import MapViewDirections from 'react-native-maps-directions';

function Map() {
  const [location, setLocation] = useState()
  useEffect(()=>{
    const getPermission = async () =>{
      let {status} = await Location.requestForegroundPermissionsAsync();
      if(status != "granted"){
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      console.log(currentLocation);
      setLocation(JSON.stringify(currentLocation));
    }
    getPermission()
  },[])
  return (
    <SafeAreaView>
      <MapView
      showsUserLocation={true}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        region={{
            latitude: location ? location.latitude : 54.372158,
            longitude: location ? location.longitude : 18.638306,
            latitudeDelta: location ? location.latitudeDelta : 0.3,
            longitudeDelta: location ? location.longitudeDelta : 0.2,
          }}>
          <Marker coordinate={{ latitude: 54.372158, longitude: 18.638306 }}>
            <Callout>
              <Text>Gdańsk</Text>
            </Callout>
          </Marker>
          {/* <MapViewDirections
            origin={{ latitude: 54.372158, longitude: 18.638306 }}
            destination={{ latitude: 40.372158, longitude: 10.638306 }}
          /> */}
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