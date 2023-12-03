import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect } from 'react'

import demoData from '../../constants/CardsData'
import Card from '../../Components/Card';
import Files from '../../Components/Files';

export default function HomeScreen() {



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

      <View style={{ padding: 12,flex:1 }}>

        {/* welcome note */}

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image style={{ width: 70, height: 70 }} source={require('../../assets/icons/student.png')} />

            {/* text */}
            <View style={{ alignSelf: 'flex-start' }}>
              <Text style={{ color: 'black', fontSize: 16, fontWeight: '600' }}>Welcome</Text>
              <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>Ayush Srivavstava</Text>

            </View>
          </View>

          {/* bell */}
          <Image style={{ width: 30, height: 30, }} source={require('../../assets/icons/bell-2.png')} />

        </View>

        {/* my folders */}

        <View style={{ flexDirection: 'row', marginTop: 20, alignItems: 'center', justifyContent: 'space-between' }}>
          <Text style={styles.signText}>My Folders</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: 'blue', marginRight: 6 }}>View All</Text>
            <Image style={{ width: 16, height: 16 }} source={require('../../assets/icons/next.png')} />
          </View>
        </View>

        {/* folders tabs */}

        <ScrollView style={styles.container}>
          {renderCardRows(demoData)}
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={styles.signText}>Recent Files</Text>

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


        {/* recent files */}


      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  signText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    // marginTop: 20,
    paddingLeft: 16
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


})