import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default class LearnAboutUsScreen extends React.Component {
  render() {
    return (
      <View>
        <View>
          <Image
            source={require('../assets/learnSilenceLogo.png')}
            style={{ marginLeft: 50 }}
          />
        </View>
        <View>
        <Text style={{fontWeight: 'bold',textAlign: 'center',fontSize: 25,color: '#29cdf0'}}>
  About Us
</Text>
 <Text style={{fontWeight:'bold',marginTop:30,textAlign:'center'}}>Today the society is accepting people who are deaf 
. {'\n'}Although they are included in schools , colleges , etc. .There is one vital problem , these people are not able to make friends or communicate 

  .{'\n'}People want to communicate but how ? . The only answer is sign language . It is the only language deaf people can communicate with 
.{'\n'} This app is all about that , it will provide a full course about
       learning basic levels of sign language so that people can communicate at least a little bit , making deaf people feel a little bit included</Text>

<Text style={{fontWeight:'bold',marginTop:10,textAlign:'center'}}>Thus we came up with an app which will help people learn basic sign language words easily</Text>
        </View>

       

        <View>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Learn');
            }}
            style={{
              marginTop: 30,
              backgroundColor: '#29cdf0',
              borderRadius: 25,
              height: 50,
              width: 200,
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 70,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 15,
                alignItems: 'center',
              }}>
              Get Started !
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
