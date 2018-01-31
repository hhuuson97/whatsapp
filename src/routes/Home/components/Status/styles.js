import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  header: { backgroundColor: "transparent" },
  headertext: {
    fontSize: 18,
    justifyContent: "center",
    alignSelf: "center",
    color: "#006600"
  },
  text: {
    fontSize: 12,
    textAlign: "center",
    paddingRight: width / 15,
    paddingLeft: width / 15
  },
  button: {
    backgroundColor: "green",
    justifyContent: "center",
    alignSelf: "center"
  },
  inputGroup: {
    minHeight: 70,
    alignItems: "center",
    borderColor: "transparent"
  },
  camera: {
    flex: 1,
    justifyContent: "center"
  },
  cameraButton: {
    backgroundColor: "gray",
    alignSelf: "center",
    height: 50,
    width: 50
  },
  icon: {
    fontSize: 20
  },
  input: {
    justifyContent: "center",
    alignSelf: "center",
    borderColor: "#006600",
    flex: 3,
    height: 30
  },
  inputName: {
    fontSize: 14,
    justifyContent: "center"
  },
  iconKeyBoard: {
    minWidth: 50
  },
  keyBoard: {
    fontSize: 25,
    textAlignVertical: "center",
    textAlign: "center"
  },
  recommend: {
    fontSize: 12,
    textAlignVertical: "top"
  }
});

export default styles;
