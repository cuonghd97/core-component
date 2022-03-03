import React, { useState } from 'react';
import { Button, Platform, SafeAreaView, StatusBar, StyleSheet, Switch, Text, View, TouchableHighlight } from 'react-native';


const TouchableHightlightExample = () => {
    const [count, setCount] = useState(0)
    const onPress =     () => setCount(count+1)
    return (
        <View style={styles.container}>
            <TouchableHighlight  onPress={onPress} activeOpacity={0.5} underlayColor={"#ffebcd"}>
                <View style={styles.button}>
                    <Text>Touch Here</Text>
                </View>
            </TouchableHighlight>
            <View style={styles.countContainer}>
                <Text style={styles.countText}>
                    {count||null}
                </Text>
            </View>
        </View>
    )
}

const App = () => {

  return (
    <TouchableHightlightExample/>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  },
  countText: {
    color: "#FF00FF"
  }
});

export default App;