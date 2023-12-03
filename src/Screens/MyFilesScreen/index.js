import { View, Text, StyleSheet, TextInput,ScrollView, Image, TouchableOpacity } from 'react-native'

import React from 'react'
import Card from '../../Components/Card';
import Files from '../../Components/Files';
import demoData from '../../constants/CardsData'

export default function MyFilesScreen() {

  const renderCardRows = (data) => {
    let cardRows = [];
    for (let i = 0; i < data.length; i += 2) {
      cardRows.push(
        <View key={i} style={styles.cardRow}>
          <Card {...data[i]} />
          {data[i + 1] ? <Card {...data[i + 1]} /> : <View style={styles.card} />}
        </View>
      );
    }
    return cardRows;
  };


  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.signText}>Clinic Files Documents</Text>

      <View style={{ padding: 16,flex:1 }}>
        {/* search */}
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={styles.container2}>
            <Image
              source={require('../../assets/icons/search.png')} // Replace with your search icon path
              style={[styles.icon, { tintColor: '#cccccc' }]}
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
            style={[styles.icon, { marginLeft: 8 }]}
          />

          <Image
            source={require('../../assets/icons/menu-2.png')} // Replace with your clear icon path
            style={[styles.icon, { marginLeft: 14 }]}
          />

        </View>
        
        
         {/* folders */}

        <View style={{ flexDirection: 'row',marginTop:20,  alignItems: 'center', justifyContent: 'space-between' }}>
          <Text style={styles.signTextop}>My Folders</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: 'blue', marginRight: 6 }}>View All</Text>
            <Image style={{ width: 16, height: 16 }} source={require('../../assets/icons/next.png')} />
          </View>
        </View>

        {/* cards */}

        <ScrollView style={styles.container}>
          {renderCardRows(demoData)}
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={styles.signTextop}>Recent Files</Text>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color: 'blue', marginRight: 6 }}>View All</Text>
              <Image style={{ width: 16, height: 16 }} source={require('../../assets/icons/next.png')} />
            </View>
          </View>


          {/* files list */}
          <Files />
          <Files />
          <Files />

        </ScrollView>



      </View>

     
     



    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  signTextop: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    // marginTop: 20,
    // paddingLeft: 16
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
  container: {
    // flex: 1,
    padding: 10,
    // paddingBottom:100,
    // backgroundColor:'red'
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    width: '45%',
    margin: '2.5%',
  },
  // 
})