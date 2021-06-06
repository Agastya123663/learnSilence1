import React,{Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,Image} from 'react-native';

export default class FinalLearnScreen extends React.Component{
  render(){
    return(
      <View style={{backgroundColor:'white',marginTop:30}}>

      <View>
          <TouchableOpacity 
             onPress={()=>{this.props.navigation.navigate('Learn9Screen')} } 
             style={{marginTop:10,backgroundColor:'#d9fcff',borderRadius:25,height:30,width:100,alignItems:'center',justifyContent:'center',marginLeft:20}}>
              <Text style={{textAlign:'center',fontWeight:'bold',fontSize:15,alignItems:'center'}} >Back</Text>
          </TouchableOpacity>
        </View>

          <View >
             <Image source={require('../assets/learnSilenceLogo.png')} style={{marginLeft:50}}/>
           </View>

        <Text style={{textAlign:'center',fontWeight:'bold',fontSize:25,marginTop:10,color:'#748c8c'}}>What an amazing achievement , you have successfully learnt all the sign languages with videos too !!!!! </Text>

        <Text style={{textAlign:'center',fontWeight:'bold',fontSize:25,marginTop:10,color:'#748c8c'}}>Hats Off , go to the home page to check out our 'Get Inspired Screen'</Text>


        
        <View>
          <TouchableOpacity 
             onPress={()=>{this.props.navigation.navigate('TabNavigator')} } 
             style={{marginTop:10,backgroundColor:'#d3e6eb',borderRadius:25,height:50,width:200,alignItems:'center',justifyContent:'center',marginLeft:70}}>
              <Text style={{textAlign:'center',fontWeight:'bold',fontSize:15,alignItems:'center'}} >Home Page</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
