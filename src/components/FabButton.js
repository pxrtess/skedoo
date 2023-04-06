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
      friction: 6,
      useNativeDriver: true,
    }).start();

    this.open = !this.open;
  };

  render() {
    const ajudaStyle = {
      transform: [
        { scale: this.animation },
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -10],
          }),
        },
      ],
    };

    const configStyle = {
      transform: [
        { scale: this.animation },
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -20],
          }),
        },
      ],
    };

    const rotation = {
      transform: [
        {
          rotate: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: ["0deg", "45deg"],
          }),
        },
      ],
    };

    return (
      <View style={styles.button}>
        <TouchableWithoutFeedback>
          <Animated.View style={[styles.subbutton2, configStyle]}>
            <Ionicons name="settings-outline" size={30} color="white" />
          </Animated.View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <Animated.View style={[styles.subbutton1, ajudaStyle]}>
            <Entypo name="help" size={30} color="white" />
          </Animated.View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={this.toglleMenu}>
          <Animated.View style={[styles.fabButton, rotation]}>
            <Entypo name="plus" size={40} color="#53c2b9" />
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
    backgroundColor: "white",
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  subbutton1: {
    borderColor: "white",
    borderWidth: 2,
    margin: 20,
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: "#70bdb5",
    alignItems: "center",
    justifyContent: "center",
  },
  subbutton2: {
    borderColor: "white",
    borderWidth: 2,
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: "#70bdb5",
    alignItems: "center",
    justifyContent: "center",
  },
});
