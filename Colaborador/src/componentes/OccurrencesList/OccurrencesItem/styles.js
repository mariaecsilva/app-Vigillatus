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
        width:"40%",
        height:"100%",
    },
    image:{
        resizeMode:"contain",
        width:150,
        height:150
    },
    textBox:{
        width:"60%",
        alignItems:"center",
    }, 
      horizontalLine: {
        borderBottomColor: '#B5B5B5',
        borderBottomWidth: 1,
        width: "95%",
        height: 1,
      },
});

export default styles