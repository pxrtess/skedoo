import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

export default function Welcome() {
  const navigation = useNavigation();

  <StatusBar backgroundColor="#ffff" barStyle="dark-content" />;
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <View
        style={{
          alignSelf: "center",
          margin: "10%",
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
      <View style={{ marginBottom: "50%" }}>
        <Text style={style.tt}>BEM VINDO!</Text>
        <Text style={style.txtWel}>
          Skedoo é um aplicativo criado com intuito de facilitar a comunicação
          entre os responsavéis e a instituição de ensino infantil, tornando-a
          mais agil e confortável.
        </Text>
      </View>
      <View style={style.sing}>
        <Text style={style.tt2}>Entre pra Skedoo!</Text>
        <TouchableOpacity
          style={style.botao}
          onPress={() => navigation.navigate("SingIn")}
        >
          <Text style={style.txtBtn}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  tt: {
    marginLeft: "8%",
    fontSize: 30,
    fontWeight: "900",
    color: "#70bdb5",
  },
  tt2: {
    fontSize: 25,
    fontWeight: "700",
    color: "white",
    alignSelf: "center",
    marginTop: "5%",
  },
  txtWel: {
    fontSize: 20,
    margin: "10%",
    color: "#808080",
  },
  sing: {
    flex: 1,
    backgroundColor: "#70bdb5",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  botao: {
    width: 300,
    height: 50,
    backgroundColor: "white",
    alignSelf: "center",
    marginTop: 40,
    borderRadius: 25,
    justifyContent: "center",
  },
  txtBtn: {
    fontSize: 20,
    color: "#70bdb5",
    alignSelf: "center",
  },
});
