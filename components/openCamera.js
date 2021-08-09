import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { Camera } from "expo-camera";
import { Button } from "react-native-paper";
import CameraModule from "./CPicker";
import { cyan } from "../colors";

function ImageCamera({ image, setImage }) {
  const [camera, setShowCamera] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);
  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        style={{ width: "40%", marginTop: 16 }}
        icon="camera"
        mode="outlined"
        color={cyan}
        onPress={() => {
          setShowCamera(true);
        }}
      >
        Camera
      </Button>
      {camera && (
        <CameraModule
          showModal={camera}
          setModalVisible={() => setShowCamera(false)}
          setImage={(result) => setImage(result.uri)}
        />
      )}
    </View>
  );
}

export default ImageCamera;
