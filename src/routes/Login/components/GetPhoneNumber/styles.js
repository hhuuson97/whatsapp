import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  headertext: {
    fontSize: 16,
    justifyContent: "center",
    alignSelf: "center",
    color: "#006600"
  },
  header: { backgroundColor: "transparent" },
  icon: {
    color: "#000000",
    fontSize: 20
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
  alert: {
    fontSize: 10,
    justifyContent: "center",
    alignSelf: "center",
    paddingTop: 10
  }
});

export default styles;
