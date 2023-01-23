import {FlatList,Text, View, Image, Alert} from 'react-native';
import {useState} from 'react';
import { Tasks } from '../Task';
import { styles } from './style';

type Props={
    task:string[];
    counterDone:(count:number)=>void;
    onRemove:(text:string)=>void;
}

export const List = ({task,onRemove,counterDone}:Props) =>{

    function counterFinish(count:number){
        counterDone(count)
    }

    function removeTask(name:string){
        console.log('Teste')
        onRemove(name)
    }

    console.log('task'+task)
    return(
        <>
            <FlatList 
                data={task}
                keyExtractor={item=>item}
                renderItem={
                    ({item})=>(<Tasks key={item} name={item} onRemove={removeTask} counterDone={counterFinish}/>)      
                }

            showsVerticalScrollIndicator={false}
            ListEmptyComponent={()=>
            <View style={styles.image}>
                <Image style={styles.image} source={require('../../assets/Clipboard.png')}/>
            
            <Text style={styles.name}>   
                Você ainda não tem tarefas cadastradas.{'\n'}
                Crie tarefas e organize seus itens a fazer
            </Text>
            </View>}
            />
        </>
    )
}