// Mahesh
//21/10/2020
//React Native Developer
//Screen number 7

import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, TextInput, TouchableOpacity, Image, ScrollView, ImageBackground, CheckBox } from "react-native";


export default function Screen7({navigation }) {
    const [selectedValue, setSelectedValue] = useState("");
    const [isSelected, setSelection] = useState(false);
    return (
        <View style={{ margin: 20 }}>
            <View style={{ height: 70, flexDirection: 'row', justifyContent: 'space-between' }}>
                {/* <View><Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', top: 5 }}>PB</Text></View> */}
                <Image source={require('../images/logo.png')} style={{ height: 40, width: 40}}></Image>
                <View style={{ height: 37, width: 87, borderColor: 'red', borderWidth: 2, borderRadius: 10, flexDirection:'row' }}>
                <Image source={require('../images/wallet.png')} style={{ height: 18,top:8, width: 23,marginLeft:10 }} />
                    <Text style={{ color: 'red', alignSelf: 'center', fontWeight: 'bold', fontSize: 15 }}>1000</Text></View>
            </View>

            <ScrollView horizontal={true}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ height: 300, width: 250, backgroundColor: '#A8DBF8', borderRadius:15 }}>
                    <Text style={{fontSize:17, fontWeight:'bold', textAlign:'center', color:'black', top:20}}>Hassle Free Payments</Text>
                    <Text style={{fontSize:17,  margin:10,textAlign:'center', color:'black', top:30}}>Make your Payments through your choice Payment Mode</Text>
                </View>
                <View style={{ height: 300, width: 250, backgroundColor: '#7AB875', borderRadius: 15, marginLeft: 20 }}></View>
            </View>
            </ScrollView>

            <View style={{alignSelf:'center', top:10}}>
            <Text style={{fontSize:15, color:'#000000', marginTop:30}}>Start Your Subscription Now</Text></View>
           
            <TouchableOpacity 
            onPress={() =>  navigation.navigate('Screen8')}
            style={{ height: 50, width: 300, backgroundColor: '#0487CA', alignSelf: 'center', borderRadius: 5, marginTop:50}}>
                <Text style={{ color: 'white', alignSelf: 'center', fontSize: 20, top: 10 }}>My Plan</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity 
              onPress={() =>  navigation.navigate('Screen8')}>
             <Text style={{alignSelf:'center',fontSize:20}}>Next</Text>
             </TouchableOpacity> */}

        </View>


    );
}
