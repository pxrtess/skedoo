import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  contentCard: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "10%",
  },
  contentCardText: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "10%",
    fontSize: 20,
  },
  flex_cards: {
    display: "flex",
    flexDirection: "row",
    height: "20%",
  },
  cardL: {
    marginLeft: "5%",
    marginRight: "2.5%",
    width: "42.5%",
    height: "100%",
    backgroundColor: "white",
    float: "left",
    borderRadius: 20,
    display: "flex",
  },
  cardR: {
    marginLeft: "2.5%",
    marginRight: "5%",
    width: "42.5%",
    height: "100%",
    backgroundColor: "white",
    borderRadius: 20,
    display: "flex",
  },
  msg_global: {
    position: "absolute",
    bottom: 0,
    width: "85%",
    height: 40,
    marginBottom: "5%",
    borderRadius: 100,
    backgroundColor: "white",
    flexDirection: "row",
  },
  card1: {
    margin: "5%",
    height: "25%",
    backgroundColor: "#70bdb5",
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
  iconChatGlobal: {
    marginTop: "10%",
    marginLeft: "auto",
    marginRight: "10%",
  },
  iconSendChatGlobal: {
    marginTop: "auto",
    marginLeft: "auto",
    marginRight: "5%",
    marginBottom: "auto",
  },
  miniChatGeral: {
    flexDirection: "row",
    width: "100%",
  },
  titleChat: {
    marginTop: "auto",
    marginBottom: "auto",
    marginLeft: "10%",
    fontSize: 35,
    fontWeight: "800",
    color: "white",
  },
  cardOutros: {
    width: width * 0.9,
    height: width / 5,
    backgroundColor: "green",
    marginHorizontal: "5%",
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 30,
    backgroundColor: "white",
    justifyContent: "center",
  },
  ttCard: {
    fontSize: 25,
    fontWeight: "600",
    textAlign: "center",
    color: "#6b6b6b",
  },
});
