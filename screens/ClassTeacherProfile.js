import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const ClassTeacherProfile = () => {
  const handleLogout = () => {
    // Implement your logout functionality here
    console.log("Logged out");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("./././../assets/image/profile.jpg")}
        style={styles.profileImage}
      />
      <View style={styles.profileInfo}>
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.email}>classteacher@kvsaltlake.com</Text>
        <Text style={styles.phoneNumber}>9123456789</Text>
      </View>
      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  profileInfo: {
    alignItems: "center",
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  email: {
    fontSize: 18,
    marginBottom: 5,
  },
  phoneNumber: {
    fontSize: 18,
    marginBottom: 20,
  },
  logoutButton: {
    backgroundColor: "#FF5733",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  logoutButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
  },
});

export default ClassTeacherProfile;
