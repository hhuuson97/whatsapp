import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  headertext: {
    fontSize: 20,
    justifyContent: "center",
    alignSelf: "center",
    paddingTop: 30,
    paddingBottom: 5
  },
  text: {
    fontSize: 12,
    textAlign: "center",
    paddingRight: width / 20,
    paddingLeft: width / 20,
    paddingBottom: 10
  },
  button: {
    backgroundColor: "green",
    justifyContent: "center",
    alignSelf: "center",
    width: width * 13 / 15,
    height: 45
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold"
  },
  text2: {
    fontSize: 12,
    textAlign: "center",
    paddingRight: width / 15,
    paddingLeft: width / 15,
    paddingTop: 10
  }
});

export default styles;
