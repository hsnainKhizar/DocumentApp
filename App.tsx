/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState, useEffect } from 'react';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import LoginScreen from './src/Screens/LoginScreen';
import AuthStack from './src/AuthStack';
import OnboardingScreen from './src/Screens/OnboardingScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/Screens/HomeScreen';
import BottomView from './src/AppStack';



function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  // const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };


  // useEffect(() => {
  //   AsyncStorage.getItem('alreadyLaunched').then(value => {
  //     if (value === null) {
  //       AsyncStorage.setItem('alreadyLaunched', 'true');
  //       setIsFirstLaunch(true);
  //     } else {
  //       setIsFirstLaunch(false);
  //     }
  //   });
  // }, []);

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });

    // Check user login status
    // Set isLoggedIn based on user login status
  }, []);

  // if (isFirstLaunch === null) {
  //   return null; // This is where you could place a loading screen
  // } else if (isFirstLaunch === true) {
  //   return (
  //     <AuthStack />
  //   );
  // } else {
  //   return <LoginScreen />;
  // }




  return (
    <NavigationContainer>
       <AuthStack />
    </NavigationContainer>
    //   <View style={styles.container}>
    //     <SafeAreaView style={backgroundStyle}>
    //       <StatusBar
    //         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
    //         backgroundColor={backgroundStyle.backgroundColor}
    //       />
    //     </SafeAreaView>

    //     {/* login screen */}
    //     {/* <LoginScreen /> */}
    //     {/* <OnboardingScreen /> */}

    //   </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})

export default App;
