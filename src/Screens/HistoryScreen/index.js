import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function HistoryScreen() {
  return (
    <View style={styles.container}>
      {/* text */}
      <Text style={styles.signText}>My Files</Text>

      {/* search tab */}
      <View style={{ padding: 16 }}>

        {/* search tab */}
        <View style={{ flexDirection: 'row',alignItems:'center' }}>
          <View style={styles.container2}>
            <Image
              source={require('../../assets/icons/search.png')} // Replace with your search icon path
              style={[styles.icon,{tintColor:'#cccccc'}]}
            />
            <TextInput
              style={styles.textInput}
              // value={searchText}
              // onChangeText={setSearchText}
              placeholder="Search"
            />

          </View>
          <Image
              source={require('../../assets/icons/folder.png')} // Replace with your clear icon path
              style={[styles.icon,{marginLeft:8}]}
            />
          
            <Image
              source={require('../../assets/icons/menu-2.png')} // Replace with your clear icon path
              style={[styles.icon,{marginLeft:14}]}
            />
          
        </View>

        {/* logo */}

        {/* image */}
        <Image style={{width:150,marginTop:50,height:150,alignSelf:'center'}} source={require('../../assets/icons/folders.png')}/>

        {/* text */}
        <Text style={{ alignSelf: 'center', textAlign: 'center', marginTop: 30, fontSize: 24, maxWidth: 220, color: 'black', fontWeight: 'bold' }}>You don't have any document.</Text>
        <Text style={{ alignSelf: 'center', textAlign: 'center', marginTop: 30, fontSize: 16, color: 'gray', fontWeight: '600' }}>A file manager or file browser is a computer program that provides a user interface to manage files and folders</Text>

      </View>




    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  signText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 20,
    paddingLeft: 16
  },
  container2: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 25,
    width: 300,
    paddingHorizontal: 10,

  },
  textInput: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: '#000000', // You can adjust the color as needed
  },
  // 
})