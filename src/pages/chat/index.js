import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import Styles from "./styles";

export default (props) => (
  <SafeAreaView style={Styles.inicial}>
    <View style={Styles.navbar}>
      <View style={{ marginLeft: 20, flex: 1 }}>
        <Image
          source={require("../../../assets/adaptive-icon.png")}
          style={{
            width: 150,
            height: 40,
          }}
        />
      </View>
      <View>
        <TouchableOpacity style={{ width: 40, height: 40, marginRight: "5%" }}>
          <Image
            source={{
              uri: "https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",
            }}
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  </SafeAreaView>
);
