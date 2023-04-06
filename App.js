import React from "react";
import { View } from "react-native";
import FabButton from "./src/components/FabButton";
import Navigation from "./src/navigation";

export default (props) => <Navigation />;

export function App() {
  return (
    <View>
      <FabButton />
    </View>
  );
}
