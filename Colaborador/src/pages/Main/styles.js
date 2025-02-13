import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  horizontalLine: {
    borderBottomColor: "#333333",
    borderBottomWidth: 1,
    width: "90%",
    height: 2,
  },
  bodyCollborator: {
    width: "90%",
    height:"auto",
    margin:"5%",
  },
  containerCollborator: {
    backgroundColor: "#FFFFFF",
    width: "90%",
    borderRadius: 20,
    marginBottom:'10%',
  },
  containerInfo: {
    width: "100%",
    height: "75%",
    alignItems: "center",
    marginVertical: "5%",
  },
  bodyCard: {
    width: "100%",
    height: "32%",
  },
  touchable: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  title: {
    color: "#333333",
    fontSize: 25,
    fontFamily: "Roboto",
    fontWeight: "bold",
    marginVertical:10,
  },
  collaboratorData: {
    flexDirection: "row",
    margin: "5%",
    width:"90%",
    backgroundColor:"red"
  },
});

export default styles;
