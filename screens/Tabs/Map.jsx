import React from 'react'
import { SafeAreaView, Text, StyleSheet } from 'react-native'
import MapView from 'react-native-maps'

function Map() {
  return (
    <SafeAreaView>
      <MapView
        style={styles.map}
      />
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