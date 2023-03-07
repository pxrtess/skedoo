import React from "react";
import { View, TouchableWithoutFeedback, Animated } from "react-native";
import { StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default class FabButton extends React.Component {
  animation = new Animated.Value(0);

  toglleMenu = () => {
    const toValue = this.open ? 0 : 1;
    Animated.spring(this.animation, {
      toValue,
      friction: 5,
    }).start();

    this.open = !this.open;
  };

  render() {
    const rotation = {
      transform: {
        rotation: this.animation.interpolate({
          inputRange: [0, 1],
          outputRange: ["0deg", "45deg"],
        }),
      },
    };

    return (
      <View style={styles.button}>
        <TouchableWithoutFeedback>
          <Animated.View style={styles.subbutton2}>
            <Ionicons name="settings-outline" size={30} color="white" />
          </Animated.View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <Animated.View style={styles.subbutton1}>
            <Entypo name="help" size={30} color="white" />
          </Animated.View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={this.toglleMenu}>
          <Animated.View style={[styles.fabButton, rotation]}>
            <Entypo name="plus" size={40} color="white" />
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    position: "absolute",
    bottom: 10,
    right: 0,
  },
  fabButton: {
    width: 60,
    height: 60,
    backgroundColor: "#70bdb5",
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  subbutton1: {
    margin: 20,
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  subbutton2: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});
