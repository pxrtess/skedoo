import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
// import { GiftedChat } from "react-native-gifted-chat";
import Styles from "./styles";

const Chat = (props) => {
  user, messages;
};
const user = {
  _id: 1,
  name: "Pedro",
  avatar: "url",
};

const messages = [
  {
    _id: 1,
    text: "Olá",
    createdAt: new Date(),
    user: {
      _id: 2,
      name: "Gato",
      avatar: "url",
    },
  },
];

function onSendMessages(messages) {
  console.log(messages);
}

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
    <GiftedChat user={user} messages={messages} onSend={onSendMessages} />
  </SafeAreaView>
);
