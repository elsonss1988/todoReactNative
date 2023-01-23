import { Trash } from "phosphor-react-native"
import { CheckBox,Icon } from 'react-native-elements'
import React, { useState } from "react"
import { View,Text,TouchableOpacity } from "react-native"
import { styles } from "./style"

let counter = 0;
type Props = {
    name:string;
    counterDone:(count:number)=>void,
    onRemove:(text:string)=>void;
}

export const Tasks =({name,onRemove,counterDone}:Props)=>{

    const [isSelected, setSelection] = useState(false);

    function select(){
        setSelection(!isSelected);
        console.log(isSelected);
        isSelected === true ? counter--: counter++;
        counterDone(counter);
    }

    return(
        <View style={styles.container}>
                <CheckBox 
                   checkedIcon='check-circle'
                   uncheckedIcon='circle-o'
                   checked={isSelected}
                   uncheckedColor='#4EA8DE'
                   checkedColor='#5E60CE'
                   onPress={() => select()}
                />
            
            
                <Text style={isSelected === true ? 
                    styles.unchecked:styles.checked}>
                    {name}
                </Text>
                
                <TouchableOpacity onPress={()=>onRemove(name)}>
                 <Icon style={styles.icon}
                 name="trash"
                 type='font-awesome'
                 color='#808080'
                 />
                </TouchableOpacity>
        </View>
    )
}