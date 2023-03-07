import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Styles from "./styles.js";

export default (props) => (
  <View style={{ backgroundColor: "#70bdb5", flex: 1 }}>
    <View>
      <Text
        style={{ fontSize: 30, color: "#fff", marginTop: 40, marginLeft: 20 }}
      >
        Bem vindo ao Skedoo!
      </Text>
      <Text
        style={{
          fontSize: 20,
          color: "#fff",
          marginTop: 40,
          marginBottom: 40,
          alignSelf: "center",
        }}
      >
        Como você deseja acessar?
      </Text>
    </View>
    <View style={Styles.form}>
      <View>
        <TouchableOpacity
          style={Styles.botaoI}
          onPress={() => props.navigation.navigate("InstSing")}
        >
          <Text style={Styles.txtBtn}>Instituição</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={Styles.botaoR}
          onPress={() => props.navigation.navigate("RespSing")}
        >
          <Text style={Styles.txtBtn}>Responsavel</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={Styles.botaoE}
          onPress={() => props.navigation.navigate("EduSing")}
        >
          <Text style={Styles.txtBtn}>Educador</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);
