import React from 'react';
import { SafeAreaView, Text, Image, StyleSheet } from 'react-native';
import { SocialIcon, Button } from 'react-native-elements'

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assets/OIG.png')} style={styles.logo} />
      <Text style={styles.title}>The Hichhiker</Text>
      <Button
      type='outline'
        style={styles.button}
        title="Login"
        onPress={() => navigation.navigate('login')}
      />
      <SocialIcon
        title='Sign In With Facebook'
        button
        type='facebook'
        iconStyle = {styles.faceIcon}
        fontStyle={styles.faceFont}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    height: '100%',
    width: '100%',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    marginVertical: 10,
  },
  button: {
    fontWeight: 'bold',
    marginVertical: 10,

  },
  faceIcon:{
    paddingLeft: 20,
  },
  faceFont:{
    paddingRight: 20,
  },
});

export default Home;
