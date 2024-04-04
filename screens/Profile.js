import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Modal, Button } from "react-native";
import { Camera } from "expo-camera";

export default function Profile() {
  const [modalVisible, setModalVisible] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const openCamera = () => {
    setModalVisible(true);
  };

  const closeCamera = () => {
    setModalVisible(false);
  };

  const takePicture = async () => {
    if (cameraRef) {
      let photo = await cameraRef.takePictureAsync();
      console.log(photo);
      // Here you can handle the taken picture, for example, you can save it to state
      closeCamera();
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TouchableOpacity onPress={openCamera}>
        <Text>Profile</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={closeCamera}
      >
        <View style={{ flex: 1 }}>
          {hasPermission === null ? (
            <Text>Requesting Camera Permission</Text>
          ) : hasPermission === false ? (
            <Text>No access to camera</Text>
          ) : (
            <Camera
              style={{ flex: 1, aspectRatio: 1, height: 400, width: 400 }}
              type={Camera.Constants.Type.back}
              ref={(ref) => setCameraRef(ref)}
            >
              <View
                style={{
                  flex: 1,
                  backgroundColor: "transparent",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                <TouchableOpacity
                  style={{
                    alignSelf: "center",
                    marginBottom: 20,
                  }}
                  onPress={takePicture}
                >
                  <Text style={{ fontSize: 18, color: "white" }}>
                    Take Picture
                  </Text>
                </TouchableOpacity>
              </View>
            </Camera>
          )}
        </View>
      </Modal>
    </View>
  );
}
