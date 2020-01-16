import React, { Component } from 'react';
import { Navigator } from 'react-native'
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import HomeScreenPage from './src/screens/HomeScreenPage';
import EventClickPage from './src/screens/EventClickPage';
import IndividualInterestPage from './src/screens/IndividualInterestPage';
import LogInPage from './src/screens/LogInPage';
import MainFeedPage from './src/screens/MainFeedPage';
import MediaClickPage from './src/screens/MediaClickPage';
import NotificationsPage from './src/screens/NotificationsPage';
import OrgProfilePage from './src/screens/OrgProfilePage';
import OrgRecommendationPage from './src/screens/OrgRecommendationPage';
import OrganizationSignUpPage from './src/screens/OrganizationSignUpPage';
import PopnSearchPage from './src/screens/PopnSearchPage';
import SettingPage from './src/screens/SettingPage';
import SignUpPage from './src/screens/SignUpPage';
import UploadPage from './src/screens/UploadPage';
import UserProfilePage from './src/screens/UserProfilePage';

import AccountSelectPage  from './src/screens/AccountSelectPage';
import IndividualSignUpPage from './src/screens/IndividualSignUpPage';


import RecommendedEventsScreen from './src/screens/RecommendedEventsScreen';
import PopularScreen from './src/screens/PopularScreen';
import SportsScreen from './src/screens/SportsScreen';

import Mentions from './src/notifscreens/Mentions';
import Events from './src/notifscreens/Events';


const SearchTabs = createMaterialTopTabNavigator(  
    {  
        Recommended: {
            screen: RecommendedEventsScreen,
            navigationOptions: 
            {
                title: 'For you'}
             },

        Popular: {
            screen: PopularScreen,
            navigationOptions: 
            {
                title: 'Popular'}
             },
       
        Sports: {
            screen: SportsScreen,
            navigationOptions:  
             {
                title: 'Sports'}
            },
    },

    { 
        tabBarOptions: {  
            activeTintColor: 'cyan',  
            showIcon: true,  
            showLabel:true,  
            style: {  
                backgroundColor:'black'  
            },

            indicatorStyle: {
            backgroundColor: 'cyan',
          },
                         },
  }
);


const NotifTab = createMaterialTopTabNavigator(  
        {  
        Mentions: Mentions,
        Events: Events,
        },

        {  
        initialRouteName: "Mentions"  
    },
   
        tabBarOptions: {  
            activeTintColor: 'cyan',  
            showIcon: true,  
            showLabel:false,  
            style: {  
                backgroundColor:'black'  
            },
            indicatorStyle: {
            backgroundColor: 'cyan',
          },
                          },
  
  
);

const RootStack = createStackNavigator ( { 
  HomeScreen: HomeScreenPage,
  EventClick: EventClickPage,
  IndividualInterest: IndividualInterestPage,
  LogIn: LogInPage,
  MainFeed: MainFeedPage,
  MediaClick: MediaClickPage,
  Notifications: NotifTab,
  Search: SearchTabs,
  OrgProfile: OrgProfilePage,
  OrgRecommendation: OrgRecommendationPage,
  PopnSearch: PopnSearchPage,
  Setting: SettingPage,
  SignUp: SignUpPage,
  Upload: UploadPage,
  UserProfile: UserProfilePage,
 
  AccountSelect: AccountSelectPage,
  OrganizationSignUp: OrganizationSignUpPage,
  IndividualSignUp: IndividualSignUpPage
},
{
  initialRoute: 'HomeScreen',
  defaultNavigationOptions: {
      headerStyle: {
      backgroundColor: '#fff'
  },
  headerTintColor: '#2E36FF'
}
}
)



const AppContainer = createAppContainer(RootStack)

class App extends Component {
  render() {
      return (
          <AppContainer/> 
      )
  };
}

import Amplify from 'aws-amplify';
import awsmobile from './aws-exports';
Amplify.configure(awsmobile)


export default App; 