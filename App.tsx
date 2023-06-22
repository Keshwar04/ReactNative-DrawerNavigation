import React from 'react';
import {View,Image,Text,TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/Screens/HomeScreen';
import AboutScreen from './src/Screens/AboutScreen';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import LibraryScreen from './src/Screens/LibraryScreen';
import SettingsScreen from './src/Screens/SettingsScreen';
import {Styles} from './src/Styles/AppStyle';

const Drawer = createDrawerNavigator()

const App = () =>{
  return(
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props)=>{
        return(
          <SafeAreaView>
            <View style={Styles.drawerHeader} >
              <Image source={require('./src/Assets/stylish-men.jpg')} style={{ height:130,width:130,borderRadius:65}} />
              <Text style={Styles.drawerImgText} >Karthi Keshwar</Text>
              <Text style={Styles.drawerImgSubText} >Product manager</Text>
            </View>
            <DrawerItemList {...props}/>
          </SafeAreaView>
        )
      }}
      
      screenOptions={{drawerStyle:{backgroundColor:'#152238'},headerStyle:{backgroundColor:'#192841'},headerTintColor:'white',headerTitleStyle:{fontWeight:'600'},drawerActiveTintColor:'#eee',drawerLabelStyle:{color:'white'}}} >
        <Drawer.Screen name="Home" options={{drawerLabel:'Home',title:'Home', drawerIcon:()=>(
          <MaterialIcon name='home' size={22} color='white' />
  )}} component={HomeScreen} /> 
        <Drawer.Screen name="About" options={{drawerLabel:'About',title:'About', drawerIcon:()=>(
          <MaterialIcon name='info' size={22} color='white' />
  )}} component={AboutScreen} /> 
        <Drawer.Screen name="Library" options={{drawerLabel:'Library',title:'Library', drawerIcon:()=>(
          <MaterialIcon name='video-library' size={22} color='white' />
  )}} component={LibraryScreen} /> 
        <Drawer.Screen name="Settings" options={{drawerLabel:'Settings',title:'Settings', drawerIcon:()=>(
          <MaterialIcon name='settings' size={22} color='white' />
  )}} component={SettingsScreen} /> 
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App;
