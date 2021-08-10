import React from "react";
import { View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { cyan } from "../colors";
import { Button } from "react-native-paper";

export default function ImageUpload({ image, setImage }) {
  const selectPhotoTapped = () => {
    const options = {
      title: "Select Photo",
      storageOptions: {
        skipBackup: true,
        path: "images",
      },
    };
    ImagePicker.launchImageLibraryAsync(options).then((response) => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else {
        setImage(response.uri);
      }
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        style={{ width: "40%", marginTop: 16 }}
        icon="upload"
        mode="outlined"
        color={cyan}
        onPress={selectPhotoTapped}
      >
        {!image ? "Choose Photo" : "Change a photo"}
      </Button>
    </View>
  );
}
