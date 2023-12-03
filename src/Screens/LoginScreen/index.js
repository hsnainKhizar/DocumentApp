import { View, Text, StyleSheet, Image, Platform, ScrollView, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import BottomView from '../../AppStack'

const LoginScreen = ({ navigation }) => {

    const [isLogin, setLogin] = useState(false)

    // register user function

    signup = () => {
        navigation.navigate('SignUp');
    }

    return (

        <View style={{ flex: 1 }}>
            {
                isLogin ?

                    <BottomView />

                    :

                    <KeyboardAvoidingView
                        behavior={Platform.OS === "ios" ? "padding" : "height"}
                        style={{ flex: 1 }}
                    >
                        <ScrollView style={{ flex: 1, }}>
                            <View style={styles.container}>

                                {/* logo image */}
                                <Image style={styles.image} source={require('../../assets/icons/google-talkback.png')} />


                                {/* text */}

                                <Text style={styles.signText}>Sign in</Text>

                                {/* form fields */}
                                <View style={{ padding: 16, marginTop: 10 }}>
                                    {/* email */}
                                    <TextInput style={styles.textinput} placeholderTextColor={'black'} placeholder='Enter your email'></TextInput>
                                    {/* password */}
                                    <TextInput style={[styles.textinput, { marginTop: 16 }]} placeholderTextColor={'black'} placeholder='Enter your password'></TextInput>


                                    {/* button */}

                                    <TouchableOpacity onPress={()=>{setLogin(true)}} style={styles.button}>
                                        <Text style={styles.text}>Continue</Text>
                                    </TouchableOpacity>

                                    <Text style={styles.orText}>or</Text>

                                    {/* sign in apple */}
                                    <TouchableOpacity style={[styles.button, { backgroundColor: 'black', height: 50 }]}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Image style={{ width: 24, height: 24, marginRight: 20 }} source={require('../../assets/icons/apple-2.png')} />
                                            <Text style={[styles.text, { color: 'white', fontWeight: '400' }]}>Signin with apple</Text>
                                        </View>
                                    </TouchableOpacity>

                                    {/* sign in google */}

                                    <TouchableOpacity style={[styles.button, { backgroundColor: 'white', height: 50, borderColor: 'gray', borderWidth: 1 }]}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Image style={{ width: 24, height: 24, marginRight: 20 }} source={require('../../assets/icons/google.png')} />
                                            <Text style={[styles.text, { color: 'black' }]}>Signin with google</Text>
                                        </View>
                                    </TouchableOpacity>

                                    {/* dont have an account */}

                                    <View style={{ alignSelf: 'center', alignItems: "center", marginTop: 20, flexDirection: 'row' }}>
                                        <Text style={{ color: 'black', fontWeight: '600', fontSize: 14 }}>Don't have account?</Text>
                                        <TouchableOpacity onPress={signup}><Text style={{ fontWeight: '700', color: '#0379ad', fontSize: 16 }}>  Sign up</Text></TouchableOpacity>
                                    </View>



                                </View>

                            </View>
                        </ScrollView>
                    </KeyboardAvoidingView >


            }
        </View>




    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    signText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 20,
        paddingLeft: 16
    },
    textinput: {
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 14
    },
    image: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginTop: 20
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0379ad',
        marginTop: 20,
        height: 50,
        borderRadius: 5
    },
    text: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    orText: {
        alignSelf: 'center',
        marginTop: 12,
        color: 'black'
    }

})

export default LoginScreen;