
import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import MyFilesScreen from '../Screens/MyFilesScreen';
import HistoryScreen from '../Screens/HistoryScreen';
import ProfileScreen from '../Screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const BottomView = () => {

    const [tabBarVisible, setTabBarVisible] = useState(true);
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        console.log('ok');
        setModalVisible(!isModalVisible);
    };

    return (
        <>
            <Tab.Navigator
                screenOptions={{
                    // tabBarVisible: tabBarVisible,
                    headerShown: false,
                    tabBarStyle: { backgroundColor: '#ffffff', height: 75 },
                    tabBarLabelStyle: { fontSize: 16,color:'black',marginBottom:10,fontWeight:'700' },
                }}
                tabBarOptions={{
                    activeTintColor: '#fffff',
                    inactiveTintColor: '#ccc',
                }}

            >

                <Tab.Screen
                    component={HomeScreen}
                    name="homestack"
                    options={{
                        title: 'Home',
                        tabBarIcon: ({ focused, color, size }) => (
                            <Image
                                source={require('../assets/icons/home.png')}
                                style={{ width: size, height: size, tintColor: 'black' }}
                            />
                        ),
                    }}

                />


                <Tab.Screen
                    component={MyFilesScreen}
                    name="filesStack"
                    options={{
                        title: 'My Files',
                        tabBarIcon: ({ focused, color, size }) => (
                            <Image
                                source={require('../assets/icons/menu.png')}
                                style={{ width: size, marginRight: 60, height: size, tintColor: "black" }}
                            />
                        ),
                        tabBarLabelStyle: { right: 30,color:"black",fontWeight:'700',marginBottom:10,fontSize:16 },

                    }}

                />

                <Tab.Screen name="Dummy" component={View} options={{ tabBarButton: () => null }} />

                <Tab.Screen
                    component={HistoryScreen}
                    name="History"
                    options={{
                        title: 'History',
                        tabBarIcon: ({ focused, color, size }) => (
                            <Image
                                source={require('../assets/icons/clock.png')}
                                style={{ width: size, marginLeft: 60, height: size, tintColor: "black" }}
                            />
                        ),
                        tabBarLabelStyle: { left: 30,color:"black",fontWeight:'700',marginBottom:10,fontSize:16 },
                    }}


                />

                <Tab.Screen
                    component={ProfileScreen}
                    name="Profile"
                    options={{
                        title: 'Profile',
                        tabBarIcon: ({ focused, color, size }) => (
                            <Image
                                source={require('../assets/icons/user-2.png')}
                                style={{ width: size, height: size, tintColor: "black" }}
                            />
                        ),
                    }}
                />

            </Tab.Navigator>
            {/* plus button */}
            <TouchableOpacity style={styles.plusButton} onPress={() => { toggleModal() }}>
                <Image source={require('../assets/icons/plus.png')} style={styles.plusIcon} />
            </TouchableOpacity>

           
            {/* popup modal */}
            <Modal visible={isModalVisible} transparent={true}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>

                        <View style={{ flexDirection: 'row', width: 340, alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={styles.signText}>Edit Document</Text>
                            <TouchableOpacity onPress={toggleModal} >
                                <Image style={{ width: 24, height: 24 }} source={require('../assets/icons/close.png')} />

                            </TouchableOpacity>
                        </View>

                        {/* upload file */}

                        <View style={{ marginTop: 30, borderRadius: 10,borderStyle:'dotted', borderWidth: 1, padding: 12 }}>
                            <Image style={{ width: 70, height: 70, alignSelf: 'center' }} source={require('../assets/icons/upload.png')} />
                            <Text style={[styles.signText, { alignSelf: 'center', marginTop: 20 }]}>Upload a file</Text>
                            <Text style={{ alignSelf: 'center', textAlign: 'center', marginTop: 10, fontSize: 16, color: 'gray', maxWidth: 200, fontWeight: '600' }}>Drag and drop or browse to choose a file</Text>

                        </View>

                        {/* button */}

                        <View style={styles.containerop}>
                            <TouchableOpacity style={styles.buttonop} onPress={() => { /* Handle first button press */ }}>
                                <Text style={styles.buttonTextop}>Open Gallery</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.buttonop} onPress={() => { /* Handle second button press */ }}>
                                <Text style={styles.buttonTextop}>Open Camera</Text>
                            </TouchableOpacity>
                        </View>


                    </View>
                </View>
            </Modal>


        </>
    )
}

export default BottomView

const styles = StyleSheet.create({
    containerop: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:20
    },
    buttonop: {
        backgroundColor: '#007bff',
        padding: 10,
        margin: 5,
        borderRadius: 5,
        width:'40%',
        alignItems:'center',
        borderRadius:20
    },
    buttonTextop: {
        color: 'white',
        fontSize:15,
        fontWeight:'700'
    },



    modalContainer: {
        flex: 1,
        // justifyContent: 'center',
        paddingTop: 100,
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
    },
    errorText: {
        fontSize: 18,
        marginBottom: 10,
    },
    closeButton: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        alignSelf: 'flex-end',
    },
    closeButtonText: {
        color: 'white',
        fontSize: 16,
    },


    // model ends

    tabBarContainer: {

        flexDirection: 'row',
        backgroundColor: '#7296CD', // Customize the background color of the tab bar
    },
    signText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 30,
        // marginTop: 20,
        paddingLeft: 16
    },
    tabBarButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    plusButton: {
        position: 'absolute',
        bottom: 20, // Adjust as necessary
        alignSelf: 'center',
        width: 60, // Adjust size as needed
        height: 60,
        borderRadius: 30,
        backgroundColor: 'black', // Match tab bar color or as desired
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5, // for Android shadow
    },
    plusIcon: {
        width: 30, // Adjust as needed
        height: 30,
        tintColor: 'white', // Icon color
    },





    tabButton: {
        padding: 10,
        alignItems: 'center',
        justifyContent: "center",
        borderTopWidth: 1, // Optional: Add a border to the top of each tab
        borderTopColor: '#ccc', // Optional: Customize border color
    },
    middleTab: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: -30, // Adjust the negative top margin to control how much the middle tab extends above the tab bar
        backgroundColor: '#7296CD', // Customize the background color of the middle tab
        borderTopLeftRadius: 40, // Optional: Customize border radius
        borderTopRightRadius: 40, // Optional: Customize border radius

    },
    tabText: {
        fontSize: 10,
        color: '#F6F6F6',
        fontWeight: '400',
        marginTop: 4
    },
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },


    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        width: 400,
        padding: 16,
        // alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        // justifyContent: 'center',
        alignSelf: 'center',
        position: 'absolute',
        top: '50%', // Position in the middle of the screen vertically
        left: '50%', // Position in the middle of the screen horizontally
        transform: [{ translateX: -220 }, { translateY: -140 }], // Adjust these values as needed
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    closeButton: {
        backgroundColor: '#2196F3',
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    closeButtonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});