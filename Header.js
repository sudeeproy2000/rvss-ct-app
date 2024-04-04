import { View, Text, Image } from "react-native";
import React from "react";
import { EvilIcons } from "@expo/vector-icons";

const Header = () => {
  return (
    <View>
      <View
        style={{
          paddingHorizontal: 30,
          paddingVertical: 10,
          marginTop: 40,
          backgroundColor: "#4169E1",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image
          source={require("./assets/image/rvssLogo.png")}
          style={{ width: "37%", height: 55 }}
        />

        <View
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <EvilIcons name="user" size={40} color="white" />
          <Text style={{ fontSize: 20, color: "white" }}>Tarun Kumar</Text>
        </View>
      </View>

      <View
        style={{
          paddingVertical: 10,
          paddingHorizontal: 20,
          backgroundColor: "#4169E1",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 17 }}>
          School Name: Kendriya Vidyalaya No1 Saltlake
        </Text>
      </View>

      <View
        style={{
          paddingVertical: 10,
          paddingHorizontal: 20,
          backgroundColor: "#4169E1",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
          }}
        >
          <Text style={{ fontSize: 13, color: "white" }}>Class: X</Text>
          <Text style={{ fontSize: 13, color: "white" }}>Section: A</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;
