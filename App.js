import { StatusBar } from "expo-status-bar";
import { Platform, View } from "react-native";
import { Banner, HomeScreen } from "./screens/HomeScreen";
import { SafeAreaView } from "react-native-safe-area-context";


function ProvidedApp() {
  return (
    <>
      <Banner/>
      <HomeScreen/>
    </>
  );

}


export default function App() {
  return (
    Platform.select({
      web: (
    <View>
        <ProvidedApp />
    </View>
      ),
    default: (
      <View>
      <StatusBar />
      <SafeAreaView>
        <ProvidedApp />
      </SafeAreaView>
    </View>
    )
  })
  )
}



