import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

export default function EduSing() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.txtInit}>Acesso como Educador</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.txtForm}>Email</Text>
        <TextInput
          placeholder={"Digite um email.."}
          style={styles.txtInput}
        ></TextInput>
        <Text style={styles.txtForm}>Senha</Text>
        <TextInput
          placeholder={"Digite uma senha.."}
          style={styles.txtInput}
        ></TextInput>
        <View>
          <TouchableOpacity
            style={styles.botao}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.txtBtn}>Acessar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EE82EE",
    flex: 1,
  },
  txtInit: {
    fontSize: 30,
    color: "white",
    paddingStart: "5%",
    marginTop: "10%",
    marginBottom: "5%",
  },
  form: {
    backgroundColor: "white",
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  txtForm: {
    fontSize: 25,
    paddingStart: "5%",
    marginTop: "10%",
  },
  txtInput: {
    fontSize: 20,
    margin: "5%",
    borderBottomWidth: 0.5,
    height: 40,
  },
  botao: {
    width: 300,
    height: 50,
    backgroundColor: "#EE82EE",
    alignSelf: "center",
    marginTop: 40,
    borderRadius: 25,
    justifyContent: "center",
  },
  txtBtn: {
    fontSize: 20,
    color: "#fff",
    alignSelf: "center",
  },
});
