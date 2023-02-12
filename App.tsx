import React from "react";
import SplashScreen from "react-native-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigation from "./src/AppNavigation";
import { AuthControler } from "./src/app/controllers";

const App = () => {

  React.useEffect(() => {
    SplashScreen.hide();
  },[]);

  return (
    <AuthControler.Provider>
      <NavigationContainer>
      <AppNavigation/>
      </NavigationContainer>
    </AuthControler.Provider>
  )
}

export default App;
