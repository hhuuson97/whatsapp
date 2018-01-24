import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  headertext: {
    fontSize: 16,
    justifyContent: "center",
    alignSelf: "center",
    textAlign: "center",
    color: "#006600"
  },
  header: { backgroundColor: "transparent" },
  icon: {
    color: "#000000",
    fontSize: 20
  },
  text: {
    textAlign: "center",
    paddingRight: width / 15,
    paddingLeft: width / 15
  },
  info: {
    fontSize: 12
  },
  backInfo: {
    color: "aqua",
    fontSize: 12
  },
  input: {
    width: width / 2,
    borderColor: "#006600",
    alignSelf: "center"
  },
  inputValidate: {
    fontSize: 20,
    textAlign: "center"
  },
  constraint: {
    paddingTop: 10,
    textAlign: "center",
    fontSize: 12
  },
  sendMe: {
    paddingRight: width / 15,
    paddingLeft: width / 15,
    height: 50,
    borderColor: "gray",
    borderWidth: width * 13 / 15
  },
  iconMessage: {
    fontSize: 16
  },
  callMe: {
    paddingRight: width / 15,
    paddingLeft: width / 15,
    height: 50,
    borderColor: "transparent"
  },
  iconPhone: {
    fontSize: 16
  },
  itemLeft: {
    flex: 1
  },
  itemMid: {
    flex: 10
  },
  itemRight: {
    flex: 2
  }
});

export default styles;
