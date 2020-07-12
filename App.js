import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
} from "react-native";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      randomColor: null
    };
  }


  render() {
    return (
      <SafeAreaView style={styles.container} >

        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 30 }}>Open up App.js to start working on your app!</Text>
        </View>
      </SafeAreaView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#26ae60",
  },
});