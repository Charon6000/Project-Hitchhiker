import React from 'react'
import { SafeAreaView, Button, Text } from 'react-native'

function Settings({ navigation }) {
  return (
    <SafeAreaView>
      <Text>Settings</Text>
      <Button
        title="Log out"
        onPress={() => navigation.navigate('login')}
      />
    </SafeAreaView>
  )
}

export default Settings