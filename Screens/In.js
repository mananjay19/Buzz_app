import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Permissions from 'expo-permissions';
export default class In extends React.Component {
    constructor(){
        super();
        this.state={
            hasCameraPermissions:null,
            Scaned:false,
            ScanedData:'',
        }
    }
  render(){
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text style={styles.dispalyText}>Instagram</Text>
    </View>
  );
}
}
const styles=StyleSheet.create({
    dispalyText:{
        fontSize:15,
        textDecorationLine:'underline'
    },
    buttonText:{
        fontSize:15,
        color:'white'
    }
})