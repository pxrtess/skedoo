import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Styles from "./stylesEdu";

export default (props) => (
  <View style={Styles.container}>
    <View>
      <Text style={Styles.txtInit}>Acesso como Educador</Text>
    </View>
    <View style={Styles.form}>
      <Text style={Styles.txtForm}>Email</Text>
      <TextInput
        placeholder={"Digite um email.."}
        style={Styles.txtInput}
      ></TextInput>
      <Text style={Styles.txtForm}>Senha</Text>
      <TextInput
        placeholder={"Digite uma senha.."}
        style={Styles.txtInput}
      ></TextInput>
      <View>
        <TouchableOpacity
          style={Styles.botao}
          onPress={() => props.navigation.navigate("Home")}
        >
          <Text style={Styles.txtBtn}>Acessar</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);
