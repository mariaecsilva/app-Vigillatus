import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
      width: 350,
      height: "30%",
      backgroundColor: "#4B7296",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 20,
    },
    horizontalLine: {
      borderBottomColor: "#FFFFFF",
      borderBottomWidth: 1,
      width: "90%",
      height: 2,
    },
    bodyOccurrence: {
      flexDirection: "row",
      margin: 20,
      width: "100%",
      alignItems: "center",
      justifyContent:"center"
    },
    title: {
      color: "#FFFFFF",
      fontSize: 24,
      fontFamily: "Roboto",
      fontWeight: "bold",
      marginBottom: "2%",
    },
    text: {
      color: "#FFFFFF",
      fontSize: 18,
      fontFamily: "Roboto",
      fontWeight: "bold",
      marginVertical: "3%",
    },
    bodyText: {
      flex: 1, 
      justifyContent: "center",
      marginLeft: 10, 
    },
    image: {
      width: "40%", 
      height: "90%", 
      resizeMode: "contain",
    },
  });
  
  export default styles;
  