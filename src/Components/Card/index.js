// Card.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Card = ({ title, description, image,color }) => {
    return (
        <View style={styles.card}>
            {/* <Image source={image} style={styles.image} /> */}

            <View style={{flexDirection:'row',alignItems:"center",justifyContent:'space-between',padding:8}}>
                <Image style={{width:18,height:18,tintColor:color}} source={image}/>
                <Image style={{width:18,height:18}} source={require('../../assets/icons/dots.png')}/>

            </View>
            <View style={styles.cardContent}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
                
                {/* progress */}

                <View style={{flexDirection:'row',borderRadius:8,backgroundColor:'#ccc',marginTop:8}}><View style={{height:10,width:60,borderRadius:8,backgroundColor:'#326fa8'}}></View></View>

                
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        shadowColor: '#000',
        // ... (Other styles)
        width: '45%', // Adjust the width to fit two cards in a row
        margin: '2.5%', // Add margin for spacing between cards
    },
    image: {
        width: '100%',
        height: 150,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    cardContent: {
        padding: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color:'black'
    },
    description: {
        fontSize: 14,
        color: '#333',
    },
});

export default Card;
