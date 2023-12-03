import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, Image } from 'react-native';

const OnboardingScreen = ({ navigation }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 3;

  const nextScreen = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      navigation.navigate('Login');
    }
  };

  const renderScreen = () => {
    switch (currentPage) {
      case 0:
        return <View style={{}}>
          <Image style={{ width: 200, height: 200, marginTop: 30, alignSelf: "center" }} source={require('../../assets/icons/analytics.png')} />

          {/* text */}
          <Text style={{ alignSelf: 'center', textAlign: 'center', marginTop: 60, fontSize: 24, maxWidth: 220, color: 'black', fontWeight: 'bold' }}>Organise your files at one place</Text>
          <Text style={{ alignSelf: 'center', textAlign: 'center', marginTop: 30, fontSize: 16, color: 'gray', fontWeight: '600' }}>A file manager or file browser is a computer program that provides a user interface to manage files and folders</Text>

        </View>;
      case 1:
        return <View style={{}}>
        <Image style={{ width: 200, height: 200, marginTop: 30, alignSelf: "center" }} source={require('../../assets/icons/batch-processing.png')} />

        {/* text */}
        <Text style={{ alignSelf: 'center', textAlign: 'center', marginTop: 60, fontSize: 24, maxWidth: 220, color: 'black', fontWeight: 'bold' }}>Let's Simplify your files.</Text>
        <Text style={{ alignSelf: 'center', textAlign: 'center', marginTop: 30, fontSize: 16, color: 'gray', fontWeight: '600' }}>A file manager or file browser is a computer program that provides a user interface to manage files and folders</Text>

      </View>;
      case 2:
        return <View style={{}}>
        <Image style={{ width: 200, height: 200, marginTop: 30, alignSelf: "center" }} source={require('../../assets/icons/cloud-storage.png')} />

        {/* text */}
        <Text style={{ alignSelf: 'center', textAlign: 'center', marginTop: 60, fontSize: 24, maxWidth: 220, color: 'black', fontWeight: 'bold' }}>Upload files to your cloud storage</Text>
        <Text style={{ alignSelf: 'center', textAlign: 'center', marginTop: 30, fontSize: 16, color: 'gray', fontWeight: '600' }}>A file manager or file browser is a computer program that provides a user interface to manage files and folders</Text>

      </View>;
      default:
        return <Text>Onboarding Screen 1</Text>;
    }
  };

  const renderIndicators = () => {
    return (
      <View style={styles.indicatorContainer}>
        {Array.from({ length: totalPages }, (_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              index === currentPage ? styles.activeIndicator : null,
            ]}
          />
        ))}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.screenContainer}>
        {renderScreen()}
        {renderIndicators()}

        <TouchableOpacity onPress={nextScreen} style={styles.button}>
          <Text style={styles.text}>GET STARTED</Text>
        </TouchableOpacity>

        {/* <Button title="Next" onPress={nextScreen} /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  screenContainer: {
    flexGrow: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0379ad',
    marginTop: 60,
    height: 50,
    borderRadius: 5
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  indicator: {
    height: 10,
    width: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeIndicator: {
    backgroundColor: 'blue',
    width: 20,
  },
});

export default OnboardingScreen;
