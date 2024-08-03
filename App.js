import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import Home from "./Components/Home";
import { Headers } from "./Components/Hedders";
import AllBook from "./Components/AllBook";
import AreadyRead from "./Components/AreadyRead";
import CurrentReading from "./Components/CurrentReading";
import Favorits from "./Components/Favorits";
import WhishList from "./Components/WhishList";
import About from "./Components/About";
import Camera from "./Components/Camera";
import Gallery from "./Components/Gallery";
import AlertMsg from "./Components/Alert";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={({ navigation }) => ({
          gestureEnabled: true,
          gestureDirection: "horizontal",
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          header: () => <Headers navigation={navigation} />,
        })}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AllBook" component={AllBook} />
        <Stack.Screen name="AreadyRead" component={AreadyRead} />
        <Stack.Screen name="CurrentReading" component={CurrentReading} />
        <Stack.Screen name="Favorits" component={Favorits} />
        <Stack.Screen name="WhishList" component={WhishList} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Camera" component={Camera} />
        <Stack.Screen name="Gallery" component={Gallery} />
        <Stack.Screen name="AlertMsg" component={AlertMsg} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
