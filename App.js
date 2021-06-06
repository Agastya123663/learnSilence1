import React, { Component } from 'react';
import { Button, View, Text,Image } from 'react-native';
import {createAppContainer,createSwitchNavigator} from "react-navigation"
import {createBottomTabNavigator} from "react-navigation-tabs"
import LearnAboutUsScreen from './screens/LearnAboutUsScreen'
import LearnScreen from './screens/LearnScreen'
import GetInspiredScreen from './screens/GetInspiredScreen'
import Learn1Screen from './screens/Learn1Screen'
import Learn2Screen from './screens/Learn2Screen'
import Learn3Screen from './screens/Learn3Screen'
import Learn4Screen from './screens/Learn4Screen'
import Learn5Screen from './screens/Learn5Screen'
import Learn6Screen from './screens/Learn6Screen'
import Learn7Screen from './screens/Learn7Screen'
import Learn8Screen from './screens/Learn8Screen'
import Learn9Screen from './screens/Learn9Screen'
import FinalLearnScreen from './screens/FinalLearnScreen'
import InspireScreen from './screens/InspireScreen'
export default class App extends Component {
  render() {
    return (
        <AppContainer/>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Learn : {screen:LearnScreen},
  Inspire : {screen:GetInspiredScreen}
},
{
  defaultNavigationOptions:({navigation})=>({
    tabBarIcon:()=>{
      const routeName = navigation.state.routeName
      if(routeName === "Learn"){
        return(
          <Image source={require("./assets/learn.jpeg")} style={{width:40,height:40}}/>
        )
      }else if(routeName === "Inspire"){
          return(
            <Image source={require("./assets/inspireImg.png")} style={{width:40,height:40}}/>
          )
         
      }
    }
  })

})


const switchNavigator = createSwitchNavigator({
  LearnAboutUsScreen : {screen:LearnAboutUsScreen},
  TabNavigator : {screen:TabNavigator},
  Learn1Screen:{screen:Learn1Screen},
  Learn2Screen:{screen:Learn2Screen},
  Learn3Screen:{screen:Learn3Screen},
  Learn4Screen:{screen:Learn4Screen},
  Learn5Screen:{screen:Learn5Screen},
  Learn6Screen:{screen:Learn6Screen},
  Learn7Screen:{screen:Learn7Screen},
  Learn8Screen:{screen:Learn8Screen},
  Learn9Screen:{screen:Learn9Screen},
  FinalLearnScreen:{screen:FinalLearnScreen},
  InspireScreen:{screen:InspireScreen}
  
  
})


const AppContainer = createAppContainer(switchNavigator);
