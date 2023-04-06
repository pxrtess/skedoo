import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Styles from "./styles.js";

export default (props) => (
  <View style={{ backgroundColor: "white", height: "100%", paddingTop: "15%" }}>
    <View
      style={{
        alignSelf: "center",
      }}
    >
      <Image
        source={require("../../../assets/adaptive-icon.png")}
        style={{
          width: 340,
          height: 120,
        }}
      />
    </View>
    <View style={{ marginBottom: "70%" }}>
      <Text style={Styles.tt}>BEM VINDO!</Text>
      <Text style={Styles.txtWel}>
        Skedoo é um aplicativo criado com intuito de facilitar a comunicação
        entre os responsavéis e a instituição de ensino infantil, tornando-a
        mais agil e confortável.
      </Text>
    </View>
    <View style={Styles.sing}>
      <Text style={Styles.tt2}>Entre pra Skedoo!</Text>
      <TouchableOpacity
        style={Styles.botao}
        onPress={() => props.navigation.navigate("SingIn")}
      >
        <Text style={Styles.txtBtn}>Entrar</Text>
      </TouchableOpacity>
    </View>
  </View>
);
