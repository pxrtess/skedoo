import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./tabnavigation";
import {
  Welcome,
  Home,
  SingIn,
  InstSing,
  RespSing,
  EduSing,
  Chat,
  Profile,
} from "../pages";

const Stack = createNativeStackNavigator();

export default (props) => (
  <Stack.Navigator
    initialRouteName="Welcome"
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Welcome" component={Welcome} />
    <Stack.Screen name="SingIn" component={SingInNavigation} />
  </Stack.Navigator>
);

export function SingInNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SingIn" component={SingIn} />
      <Stack.Screen name="InstSing" component={InstSingNavigation} />
      <Stack.Screen name="RespSing" component={RespSingNavigation} />
      <Stack.Screen name="EduSing" component={EduSingNavigation} />
    </Stack.Navigator>
  );
}

export function InstSingNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="InstSing" component={InstSing} />
      <Stack.Screen name="Home" component={TabNavigator} />
    </Stack.Navigator>
  );
}

export function HomeNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={ProfileNavigation} />
    </Stack.Navigator>
  );
}

export function RespSingNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="RespSing" component={RespSing} />
      <Stack.Screen name="Home" component={TabNavigator} />
    </Stack.Navigator>
  );
}

export function EduSingNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="EduSing" component={EduSing} />
      <Stack.Screen name="Home" component={TabNavigator} />
    </Stack.Navigator>
  );
}

export function ChatNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  );
}

export function ProfileNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}
