import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#70bdb5",
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
});
