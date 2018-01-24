import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    textAlign: "center",
    color: "#006600"
  },
  text: {
    fontSize: 12,
    textAlign: "center",
    paddingRight: width / 15,
    paddingLeft: width / 15,
    paddingBottom: 15
  },
  button: {
    backgroundColor: "#25D366",
    height: 40,
    width: width * 4 / 5,
    justifyContent: "center",
    alignSelf: "center"
  },
  buttonText: {
    fontSize: 16
  }
});

export default styles;
