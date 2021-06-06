import React,{Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,Image} from 'react-native';
  import Hyperlink from 'react-native-hyperlink'

export default class Learn4Screen extends React.Component{
  render(){
    return(
      <View >

          <View>
          <TouchableOpacity 
             onPress={()=>{this.props.navigation.navigate('Learn3Screen')} } 
             style={{marginTop:10,backgroundColor:'#d9fcff',borderRadius:25,height:30,width:100,alignItems:'center',justifyContent:'center',marginLeft:20}}>
              <Text style={{textAlign:'center',fontWeight:'bold',fontSize:15,alignItems:'center'}} >Back</Text>
          </TouchableOpacity>
        </View>

        <Text style={{textAlign:'center',fontWeight:'bold',fontSize:25,marginTop:10}}>Number Signs</Text>


        <View>
          <Image source={require('../assets/NumberSigns.gif')} style={{marginLeft:5,marginTop:5,width:300,height:400,}}/>
        </View>

        <Hyperlink linkDefault={ true }>
    <Text style={ { fontSize: 20,marginTop:20,fontWeight:'bold',color:'black',textAlign:'center' } }>
      Practice Better - https://www.youtube.com/watch?v=0LIV0miyxR8
    </Text>
  </Hyperlink>

        
        <View>
          <TouchableOpacity 
             onPress={()=>{this.props.navigation.navigate('Learn5Screen')} } 
             style={{marginTop:0,backgroundColor:'#d3e6eb',borderRadius:25,height:50,width:200,alignItems:'center',justifyContent:'center',marginLeft:70}}>
              <Text style={{textAlign:'center',fontWeight:'bold',fontSize:15,alignItems:'center'}} >Next!</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}