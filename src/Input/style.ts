import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    forms:{
        width:'100%',
        flexDirection:'row',
        marginTop: -40
    },
    input:{
        flex:1,
        height: 56,
        backgroundColor:'#1F1E25',
        borderRadius:5,
        color: '#FFF',
        fontSize:16,
        padding:16,
        marginRight:4
    },
    button:{
        width:52,
        height:52,
        borderRadius:6,
        color:'#FFF',
        backgroundColor:'#1E6F9F',
        alignItems:'center',
        justifyContent:'center'
    },
    buttonText:{
        color:'#FFF',
        fontSize: 24,
    },
    createdText:{
        color:'#4EA8DE',
        fontSize: 14,
    },
    doneText:{
        color:'#8284FA',
        fontSize: 14,
        
    },
    counterText:{
        color:'#D9D9D9',
        fontSize: 14, 
        wordSpacing:8,
    },
    status:{
        width:'100%',
        borderRadius:6,
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:34,
        alignItems:'center',
    },
    spaceLeft:{
        marginLeft:8,
    },
    spaceRight:{
        marginRight:8,
        
    },
    space:{
        flexDirection:'row',
    }
})