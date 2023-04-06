import React from "react";
import {
  View,
  TouchableWithoutFeedback,
  Animated,
  FlatList,
  Dimensions,
  Text,
  TouchableOpacity,
} from "react-native";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");
const ListaHorizontal = () => {
  const data = [
    {
      id: 0,
      tipo: "as Turmas",
      icon: (
        <Ionicons name="school" size={110} color="white" style={styles.icon} />
      ),
    },
    {
      id: 1,
      tipo: "os Educadores",
      icon: (
        <FontAwesome5
          name="chalkboard-teacher"
          size={70}
          color="white"
          style={styles.icon}
        />
      ),
    },
    {
      id: 2,
      tipo: "Alunos ou Responsaveis",
      icon: (
        <MaterialCommunityIcons
          name="mother-nurse"
          size={70}
          color="white"
          style={styles.icon}
        />
      ),
    },
  ];
  return (
    <View style={styles.cardLista}>
      <FlatList
        snapToAlignment={"center"}
        scrollEventThrottle={16}
        decelerationRate="fast"
        snapToOffsets={[width * 0.72]}
        data={data}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => String(item)}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.lista}>
            <Text style={styles.ttCard}>Gerencie {item.tipo}</Text>
            {item.icon}
          </TouchableOpacity>
        )}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  lista: {
    marginBottom: 20,
    backgroundColor: "#70bdb5",
    height: width / 2,
    width: width * 0.8 - 20,
    marginHorizontal: 10,
    borderRadius: 20,
  },
  ttCard: {
    fontSize: 30,
    fontWeight: "800",
    color: "white",
    marginTop: 15,
    textAlign: "center",
  },
  icon: {
    alignSelf: "center",
    position: "absolute",
    bottom: 20,
  },
});

export default ListaHorizontal;
