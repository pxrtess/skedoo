import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import Styles from "./styles";
import FabButton from "../../components/FabButton";

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
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Profile")}
          tyle={{ width: 40, height: 40, marginRight: "5%" }}
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
    <View style={Styles.container}>
      <View style={Styles.card1}>
        <View style={Styles.miniChatGeral}>
          <Text style={Styles.titleChat}>Chat Rápido</Text>
          <Entypo
            name="chat"
            size={70}
            color="white"
            style={Styles.iconChatGlobal}
          />
        </View>
        <TouchableOpacity style={Styles.msg_global}>
          <Text
            style={{
              fontSize: 16,
              marginTop: "auto",
              marginBottom: "auto",
              marginLeft: "5%",
            }}
          >
            Envie uma mensagem geral...
          </Text>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={35}
            color="black"
            style={Styles.iconSendChatGlobal}
          />
        </TouchableOpacity>
      </View>
      <View style={Styles.flex_cards}>
        <TouchableOpacity style={Styles.cardL}>
          <MaterialIcons
            name="notification-important"
            size={70}
            color="#70bdb5"
            style={Styles.contentCard}
          />
          <Text style={Styles.contentCardText}>Importante</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.cardR}>
          <FontAwesome5
            name="money-check-alt"
            size={70}
            color="#70bdb5"
            style={Styles.contentCard}
          />
          <Text style={Styles.contentCardText}>Financeiro</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
    <FabButton />
  </SafeAreaView>
);
