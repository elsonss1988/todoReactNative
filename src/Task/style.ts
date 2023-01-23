import { StyleSheet } from "react-native" 

export const styles = StyleSheet.create({
    container:{
        width:'100%',
        backgroundColor:'#1F1E25',
        borderRadius:5,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:20,
        padding:12

    },
    checked:{
       flex:1,
        color:'#F2F2F2',
        marginLeft: 16,
        fontSize: 14,
        fontWeight: '400',

    },
    unchecked:{
        flex:1,
        color:'#808080',
        marginLeft: 16,
        fontSize: 14,
        fontWeight: '400',
        textDecorationLine:'line-through'
    },
    icon:{
        flex:1,
         color:'#FF0',
         marginRight: 10,
         fontSize: 14,
     },

})