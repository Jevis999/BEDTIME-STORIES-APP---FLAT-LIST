import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import WriteScreen from './screens/WriteScreen';
import ReadScreen from './screens/ReadScreen';

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const TabNavigator = createMaterialBottomTabNavigator({
  Read: { screen: ReadScreen },
  Write: { screen: WriteScreen },
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: () => {
      const routeName = navigation.state.routeName; console.log(routeName)
      if (routeName === "Read") {
        return (<Image source={require("./assets/read.png")} 
        style={{ width: 40, height: 40 }} />)
      }
      else if (routeName === "Write") {
        return (<Image source={
          require("./assets/write.png")
        } style={{ width: 40, height: 40 }} />)
      }
    }
  })
}
);

const AppContainer = createAppContainer(TabNavigator);
