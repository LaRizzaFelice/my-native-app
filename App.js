import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";
import { HomeScreen } from "./screens/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";


const Stack = createNativeStackNavigator();

function ProvidedApp() {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </>
  );

}


export default function App() {
  return (
    Platform.select({
      web: (
    <NavigationContainer>
        <ProvidedApp />
    </NavigationContainer>
      ),
    default: (
      <NavigationContainer>
      <StatusBar />
        <ProvidedApp />
    </NavigationContainer>
    )
  })
  )
}



