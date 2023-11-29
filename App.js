import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";
import { HomeScreen } from "./screens/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { PlacesScreen } from "./screens/PlacesScreen";
import { NAV_HOME, NAV_IMAGES, NAV_PLACES } from "./navigation_constants";
import tw from "twrnc";
import { ImagesScreen } from "./screens/ImageScreen";



const Stack = createNativeStackNavigator();

const screenOptions = ({
  headerStyle: tw`bg-red-700 p-4`,
  headerTitleStyle: tw`text-center text-black text-lg`
});

function ProvidedApp() {
  return (
    <>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name={NAV_HOME} component={HomeScreen} />
        <Stack.Screen name={NAV_PLACES} component={PlacesScreen} />
        <Stack.Screen name={NAV_IMAGES} component={ImagesScreen} />
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



