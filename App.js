import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers/index";
import MainNav from "./components/Navigation";
import thunk from "redux-thunk";
import { View, StatusBar } from "react-native";
import Constants from "expo-constants";
import { cyan } from "./colors";
import { NavigationContainer } from "@react-navigation/native";

const store = createStore(reducers, applyMiddleware(thunk));

function InvStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Provider store={store}>
          <View style={{ flex: 1 }}>
            <InvStatusBar backgroundColor={cyan} barStyle="light-content" />
            <MainNav />
          </View>
        </Provider>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
});
