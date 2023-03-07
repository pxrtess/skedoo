import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import Styles from "./styles";

export default (props) => (
  <SafeAreaView style={Styles.inicial}>
    <View style={styles.flex}>
      <TouchableOpacity style={Styles.profilePicture}></TouchableOpacity>
    </View>
    <View style={Styles.info}>
      <Text style={Styles.infott}>Usuário</Text>
      <Text style={Styles.infotxt}>pxrtess</Text>
      <Text style={Styles.infott}>Email</Text>
      <Text style={Styles.infotxt}>pedrohenports@gmail.com</Text>
      <Text style={Styles.infott}>Telefone</Text>
      <Text style={Styles.infotxt}>13 996334709</Text>
    </View>
    <View style={Styles.flexEnd}>
      <TouchableOpacity style={Styles.updateBtn}>
        <Text style={Styles.txtBtn}>Atualizar Cadastro</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
);
