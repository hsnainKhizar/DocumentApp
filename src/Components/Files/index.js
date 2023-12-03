import { View, Text,Image,StyleSheet } from 'react-native'
import React from 'react'

export default function Files() {
  return (
    <View style={{ flexDirection: 'row',backgroundColor:'white',marginTop:12,borderRadius:8, alignItems: 'center',justifyContent:'space-between', padding: 12 }}>
    {/* folder */}
    <View style={{ flexDirection: 'row',alignItems:'center' }}>
      <View style={{ backgroundColor: '#dcd7e0', width: 40, borderRadius: 6, height: 40, alignItems: 'center', justifyContent: 'center' }}>
        <Image style={{ width: 30, height: 30, tintColor: '#326fa8' }} source={require('../../assets/icons/folder.png')} />
      </View>

      {/* wording */}
      <View>
        <Text style={styles.signText}>Transform_your_life</Text>
        <Text style={[styles.signText,{color:'#a3a2a3',fontSize:14}]}>29 Oct 2023 | 329.4 MB</Text>
      </View>
    </View>

    <Image style={{width:18,height:18}} source={require('../../assets/icons/dots.png')}/>


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
})