import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    imageOccurrence:{
        alignItems:"center",
        justifyContent:"center",
        height:"40%",
        width:"100%"
    },
    body:{
        marginTop:"7%",
        backgroundColor:"#FFFFFF",
        width:"90%",
        height:"80%",
        borderRadius:20,
        marginVertical: "5%",
    },
    image:{
        width: "80%",
        height: "80%",
        resizeMode: "contain",
    },
      bodyText:{
        alignItems:"center",
        gap:"3%"
      },
      horizontalLine: {
        borderBottomColor: '#E5E5E5',
        borderBottomWidth: 1,
        width: "83%",
        height: 1,
      },
      buttonError:{
        backgroundColor:"#FF0000",
        width:"40%",
        height:"auto",
        borderRadius:10,
        alignItems:"center"
      },
      buttonicon:{
        margin:"8%",
      }

});

export default styles