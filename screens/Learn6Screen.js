import React,{Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,Image} from 'react-native';
  import Hyperlink from 'react-native-hyperlink'

export default class Learn6Screen extends React.Component{
  render(){
    return(
      <View>

      <View>
          <TouchableOpacity 
             onPress={()=>{this.props.navigation.navigate('Learn5Screen')} } 
             style={{marginTop:10,backgroundColor:'#d9fcff',borderRadius:25,height:30,width:100,alignItems:'center',justifyContent:'center',marginLeft:20}}>
              <Text style={{textAlign:'center',fontWeight:'bold',fontSize:15,alignItems:'center'}} >Back</Text>
          </TouchableOpacity>
        </View>
        
        <View>
          <Image source={require('../assets/Color.jpg')} style={{marginLeft:10,marginTop:20,width:300,height:490,}}/>
        </View>

        <Hyperlink linkDefault={ true }>
    <Text style={ { fontSize: 20,marginTop:20,fontWeight:'bold',color:'black',textAlign:'center' } }>
      Practice Better - https://www.youtube.com/watch?v=--lqNRmkusg
    </Text>
  </Hyperlink>
          
        <View>
          <TouchableOpacity 
             onPress={()=>{this.props.navigation.navigate('Learn7Screen')} } 
             style={{marginTop:30,backgroundColor:'#d3e6eb',borderRadius:25,height:50,width:200,alignItems:'center',justifyContent:'center',marginLeft:70}}>
              <Text style={{textAlign:'center',fontWeight:'bold',fontSize:15,alignItems:'center'}} >Next!</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}