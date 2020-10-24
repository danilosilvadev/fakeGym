import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Home, Report } from './src/screens'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='home'
          component={Home}
          options={{
            headerTransparent:true,
            headerLeft: () => (
              <Image
                source={require('./src/assets/icons/gordura_logo.png')}
                style={styles.logo}
              />
            ),
            title: '',
            headerRight: () => (
              <Image
                source={require('./src/assets/icons/gordo_profile.png')}
                style={styles.profile}
              />
            )
          }}
        />
      <Stack.Screen
          name='report'
          component={Report}
          options={{
            headerTransparent:true,
            headerLeft: () => (
              <Image
                source={require('./src/assets/icons/gordura_logo.png')}
                style={styles.logo}
              />
            ),
            title: '',
            headerRight: () => (
              <Image
                source={require('./src/assets/icons/gordo_profile.png')}
                style={styles.profile}
              />
            )
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  profile: {
    width: 50,
    height: 50,
    borderRadius: 150 / 2,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "white",
    marginTop: 40,
    marginRight: 15
  },
  logo: {
    marginLeft: 20,
    marginTop: 10,
    width: 40,
    height: 40
  }
})
