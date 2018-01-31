import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  form: {
    alignSelf: "center",
    backgroundColor: "transparent",
    width: width * 3 / 4
  },
  itemHint: {
    borderColor: "#006600"
  },
  label: {
    fontSize: 16,
    textAlign: "center"
  },
  input: {
    borderColor: "transparent"
  },
  inputcc: {
    width: width / 4 - 20,
    borderColor: "#006600"
  },
  icon: {
    color: "#006600",
    textAlign: "center"
  },
  inputspace: {
    width: 20,
    borderColor: "transparent"
  },
  cc: {
    textAlign: "center"
  },
  inputphone: {
    width: width / 2,
    borderColor: "#006600"
  }
});

export default styles;
