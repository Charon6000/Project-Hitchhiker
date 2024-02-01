import React from 'react';
import { SafeAreaView, Text, Button, Image, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assets/OIG.png')} style={styles.logo} />
      <Text style={styles.title}>The Hichhiker</Text>
      <Button
        style={styles.button}
        title="Login"
        onPress={() => navigation.navigate('login')}
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
});

export default Home;
