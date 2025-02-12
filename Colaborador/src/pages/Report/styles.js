import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  body: {
    marginTop: "7%",
    backgroundColor: "#FFFFFF",
    width: "90%",
    height: "80%",
    borderRadius: 20,
    marginVertical: "5%",
    alignItems: "center",
    paddingVertical: "10%",
  },
  title: {
    fontSize: 24,
    fontFamily: "Roboto",
    fontWeight: "bold",
  },
  text: {
    fontSize: 18,
    fontFamily: "Roboto",
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: "3%",
    marginLeft: "2%",
  },
  image: {
    width: "50%",
    height: "40%",
    resizeMode: "contain",
    marginVertical: "3%",
  },
  buttonSend: {
    backgroundColor: "#4B7296",
    width: "40%",
    height: "7%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  textButtonSend: {
    fontSize: 24,
    fontFamily: "Roboto",
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});

export default styles;
