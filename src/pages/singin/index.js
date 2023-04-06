import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Styles from "./styles.js";

export default (props) => (
  <View style={Styles.main}>
    <View style={Styles.flex}>
      <View>
        <Text
          style={{ fontSize: 30, color: "#fff", marginTop: 40, marginLeft: 20 }}
        >
          Bem vindo ao Skedoo!
        </Text>
        <Text style={Styles.subTt}>Como você deseja acessar?</Text>
        <Text style={Styles.txt}>
          A Skedoo possui três diferentes tipos de acessos com suas respectivas
          funcionalidades e níveis de administração, escolha instituição caso
          você faça parte da equipe administrativa da instituição, escolha
          résponsavel caso você tenha matriculado um aluno para estudar em uma
          instituição que utilize o sistema e escolha educador caso você faça
          parte da equipe de lecionadores de uma instituição de ensino
          utilizadora do sistema.
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
  </View>
);
