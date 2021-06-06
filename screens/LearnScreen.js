import React,{Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,Image} from 'react-native';

export default class LearnScreen extends React.Component{
    render(){
      return(
        <View>
            <View >
             <Image source={require('../assets/learnSilenceLogo.png')} style={{marginLeft:50}}/>
           </View>
           
           <View>
             <Text style={{fontWeight:'bold',marginTop:20,textAlign:'center',fontSize:30,color:'#29e2f0'}}>Get started with your amazing journey on learning sign languge !!!</Text>
           </View>
           
           <View>
             <TouchableOpacity 
             onPress={()=>{this.props.navigation.navigate('Learn1Screen')} } 
             style={{marginTop:30,backgroundColor:'#29cdf0',borderRadius:25,height:50,width:200,alignItems:'center',justifyContent:'center',marginLeft:70}}>
              <Text style={{textAlign:'center',fontWeight:'bold',fontSize:15,alignItems:'center'}} >Start Learning !</Text>
          </TouchableOpacity>
           </View>
        </View>
      )
    }
  }