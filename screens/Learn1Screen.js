import React,{Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,Image} from 'react-native';
  import Hyperlink from 'react-native-hyperlink'

export default class Learn1Screen extends React.Component{
  render(){
    return(
      <View >
          <View>
          <TouchableOpacity 
             onPress={()=>{this.props.navigation.navigate('TabNavigator')} } 
             style={{marginTop:10,backgroundColor:'#d9fcff',borderRadius:25,height:30,width:100,alignItems:'center',justifyContent:'center',marginLeft:20}}>
              <Text style={{textAlign:'center',fontWeight:'bold',fontSize:15,alignItems:'center'}} >Back</Text>
          </TouchableOpacity>
        </View>

         



        <Text style={{textAlign:'center',fontWeight:'bold',fontSize:25,color:'#d3e6eb'}}>Your learning journey has begun</Text>

        
        <Text style={{textAlign:'center',fontWeight:'bold',fontSize:25,marginTop:20}}>Basic Words</Text>

        <View>
          <Image source={require('../assets/BasicSigns11.jpg')} style={{marginLeft:10,marginTop:5,width:300,height:400,}}/>
        </View>

        

        
        <View>
          <TouchableOpacity 
             onPress={()=>{this.props.navigation.navigate('Learn2Screen')} } 
             style={{marginTop:10,backgroundColor:'#d3e6eb',borderRadius:25,height:50,width:200,alignItems:'center',justifyContent:'center',marginLeft:70}}>
              <Text style={{textAlign:'center',fontWeight:'bold',fontSize:15,alignItems:'center'}} >Next!</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}