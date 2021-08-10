import { StyleSheet, Platform, Dimensions } from "react-native";
import { white, cyan } from "./colors";

const windowWidth = Dimensions.get("screen").width;

const allstyles = StyleSheet.create({
  item: {
    backgroundColor: white,
    borderRadius: Platform.OS === "ios" ? 16 : 2,
    padding: 5,
    marginLeft: 5,
    marginRight: 10,
    marginTop: 10,
    justifyContent: "center",
    shadowRadius: 5,
    shadowOpacity: 0.8,
    shadowColor: "rgba(0, 0, 0, 0.24)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  image: {
    height: 200,
    width: 490,
    backgroundColor: "transparent",
  },
  closeIcon: {
    position: "absolute",
    top: 5,
    color: cyan,
  },
});

export default allstyles;
