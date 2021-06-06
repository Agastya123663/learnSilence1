import React,{Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,Image} from 'react-native';
  import Hyperlink from 'react-native-hyperlink'

export default class Learn7Screen extends React.Component{
  render(){
    return(
      <View>

      <View>
          <TouchableOpacity 
             onPress={()=>{this.props.navigation.navigate('Learn6Screen')} } 
             style={{marginTop:10,backgroundColor:'#d9fcff',borderRadius:25,height:30,width:100,alignItems:'center',justifyContent:'center',marginLeft:20}}>
              <Text style={{textAlign:'center',fontWeight:'bold',fontSize:15,alignItems:'center'}} >Back</Text>
          </TouchableOpacity>
        </View>
        
        <Text style={{textAlign:'center',fontWeight:'bold',fontSize:25,marginTop:20}}>Days of the week </Text>

        <View>
          <Image source={require('../assets/Days.jpg')} style={{marginLeft:10,marginTop:0,width:300,height:490,}}/>
        </View>

        <Hyperlink linkDefault={ true }>
    <Text style={ { fontSize: 20,marginTop:20,fontWeight:'bold',color:'black',textAlign:'center' } }>
      Practice Better - https://www.youtube.com/watch?v=bhD6QC1IEOs
    </Text>
  </Hyperlink>
          
        <View>
          <TouchableOpacity 
             onPress={()=>{this.props.navigation.navigate('Learn8Screen')} } 
             style={{marginTop:5,backgroundColor:'#d3e6eb',borderRadius:25,height:50,width:200,alignItems:'center',justifyContent:'center',marginLeft:70}}>
              <Text style={{textAlign:'center',fontWeight:'bold',fontSize:15,alignItems:'center'}} >Next!</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}