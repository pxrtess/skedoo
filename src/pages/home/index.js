import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";

export default function Home() {
  return (
    <SafeAreaView style={styles.inicial}>
      <View style={styles.navbar}>
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
          <TouchableOpacity
            style={{ width: 40, height: 40, marginRight: "5%" }}
          >
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
      <View style={styles.container}>
        <View style={styles.card1}>
          <View style={styles.msg_global}>
            <Text
              style={{
                fontSize: 16,
                marginTop: "auto",
                marginBottom: "auto",
                marginLeft: "5%",
              }}
            >
              Mande uma mensagem geral...
            </Text>
          </View>
        </View>
        <View style={styles.flex_cards}>
          <View style={styles.cardL}></View>
          <View style={styles.cardR}></View>
        </View>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flex_cards: {
    display: "flex",
    flexDirection: "row",
    height: "40%",
  },
  cardL: {
    marginLeft: "5%",
    marginRight: "2.5%",
    width: "42.5%",
    height: "50%",
    backgroundColor: "white",
    float: "left",
    borderRadius: 20,
  },
  cardR: {
    marginLeft: "2.5%",
    marginRight: "5%",
    width: "42.5%",
    height: "50%",
    backgroundColor: "white",
    borderRadius: 20,
  },
  msg_global: {
    position: "absolute",
    bottom: 0,
    width: "85%",
    height: 40,
    backgroundColor: "red",
    marginBottom: "5%",
    borderRadius: 100,
  },
  card1: {
    margin: "5%",
    height: "25%",
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
  },
  inicial: {
    height: "100%",
    width: "100%",
  },
  container: {
    flex: 1,
    backgroundColor: "#DCDCDC",
  },
  navbar: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#FFF",
    height: 80,
    width: "100%",
    alignItems: "center",
  },
});
