import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";

export default function SingIn() {
  const navigation = useNavigation();

  return (
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
      <View style={style.form}>
        <View>
          <TouchableOpacity
            style={style.botaoI}
            onPress={() => navigation.navigate("InstSing")}
          >
            <Text style={style.txtBtn}>Instituição</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={style.botaoR}
            onPress={() => navigation.navigate("RespSing")}
          >
            <Text style={style.txtBtn}>Responsavel</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={style.botaoE}
            onPress={() => navigation.navigate("EduSing")}
          >
            <Text style={style.txtBtn}>Educador</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  botaoI: {
    width: 300,
    height: 50,
    backgroundColor: "#70bdb5",
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
  botaoR: {
    width: 300,
    height: 50,
    backgroundColor: "#87CEFA",
    alignSelf: "center",
    marginTop: 40,
    borderRadius: 25,
    justifyContent: "center",
  },
  botaoE: {
    width: 300,
    height: 50,
    backgroundColor: "#EE82EE",
    alignSelf: "center",
    marginTop: 40,
    borderRadius: 25,
    justifyContent: "center",
  },
  form: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});
