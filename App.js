import { Text, Platform, View } from "react-native";
import {
  Home,
  Attendance,
  AddStudent,
  ClassTeacherProfile,
  Profile,
} from "./screens";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, AntDesign } from "@expo/vector-icons";

import { FontAwesome6 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Header from "./Header";

// Thanks for watching
const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    background: "#fff",
  },
};
export default function App() {
  return (
    <>
      <Header />
      <NavigationContainer>
        <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({ focused }) => {
                return (
                  <View
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
                    <Entypo
                      name="home"
                      size={24}
                      color={focused ? "#16247d" : "#111"}
                    />
                    <Text style={{ fonSize: 12, color: "#16247d" }}>HOME</Text>
                  </View>
                );
              },
            }}
          />
          <Tab.Screen
            name="Portfolio"
            component={Attendance}
            options={{
              tabBarIcon: ({ focused }) => {
                return (
                  <View
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
                    <AntDesign
                      name="book"
                      size={24}
                      color={focused ? "#16247d" : "#111"}
                    />
                    <Text style={{ fonSize: 12, color: "#16247d" }}>
                      Attendance
                    </Text>
                  </View>
                );
              },
            }}
          />
          <Tab.Screen
            name="Transaction"
            component={Profile}
            options={{
              tabBarIcon: ({ focused }) => {
                return (
                  <View
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#16247d",
                      width: Platform.OS == "ios" ? 50 : 60,
                      height: Platform.OS == "ios" ? 50 : 60,
                      top: Platform.OS == "ios" ? -10 : -20,
                      borderRadius: Platform.OS == "ios" ? 25 : 30,
                    }}
                  >
                    <FontAwesome name="exchange" size={24} color="#fff" />
                  </View>
                );
              },
            }}
          />
          <Tab.Screen
            name="Prices"
            component={AddStudent}
            options={{
              tabBarIcon: ({ focused }) => {
                return (
                  <View
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
                    <AntDesign
                      name="adduser"
                      size={24}
                      color={focused ? "#16247d" : "#111"}
                    />
                    <Text style={{ fonSize: 12, color: "#16247d" }}>
                      Add Student
                    </Text>
                  </View>
                );
              },
            }}
          />
          <Tab.Screen
            name="Settings"
            component={ClassTeacherProfile}
            options={{
              tabBarIcon: ({ focused }) => {
                return (
                  <View
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
                    <FontAwesome6
                      name="user-circle"
                      size={24}
                      color={focused ? "#16247d" : "#111"}
                    />
                    <Text style={{ fonSize: 12, color: "#16247d" }}>
                      Profile
                    </Text>
                  </View>
                );
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
