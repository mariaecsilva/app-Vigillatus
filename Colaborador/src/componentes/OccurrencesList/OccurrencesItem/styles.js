import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        width:"100%",
        height:"auto",
    },
    box:{
        flexDirection: "row",
        margin:20,
        alignItems: 'center',
        width:"90%",
        justifyContent: 'space-between',
    },
    imageBox:{
        flexDirection:"row", 
        width:"40%"
    },
    image:{
        resizeMode:"contain",
        width:100,
    },
    textBox:{
        width:"70%"
    }, 
      horizontalLine: {
        borderBottomColor: '#B5B5B5',
        borderBottomWidth: 1,
        width: "95%",
        height: 1,
      },
});

export default styles