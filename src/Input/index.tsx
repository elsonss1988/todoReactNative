import { useState } from "react"
import { TextInput, TouchableOpacity,Text, View, Alert} from "react-native"
import { List } from "../List";
import { styles } from "./style"

type Props={
  done?:number,
}

export const Input =()=>{

    const [created,setCreated]=useState(0);
    const [taskName,setTaskName]=useState<string>('')
    const [task,setTask]=useState<string[]>([])
    const [done,setDone] =useState(0);
    

    function counterDone(count:number){
      setDone(count)
    }

    function execRemove(name:string){
      Alert.alert(`Deletando ${name}!`)
      setTask(prevState=>prevState.filter(task => task !== name))
      setCreated(task.length-1)
    }
     
    function handleTaskAdd(){
        if(task.includes(taskName)){
            return Alert.alert(`Já existe uma task ${taskName}`);
        }
        setTask(prevState => [...prevState,taskName]);
        setCreated(task.length+1)
        setTaskName('');
    }

    function handleTaskRemove(name:string){
      
      Alert.alert(
        "remover",
        `Deseja remover ${name}?`,
        [
          {
            text:'sim',
            onPress:()=> execRemove(name)
          },
          {
            text:'não',
            style:'cancel'
          },
        ]
        
        )
    }

    return(
        <>
        <View style={styles.forms}>
          <TextInput style={styles.input}
          placeholder='Adicione uma nova tarefa'
          placeholderTextColor="#6B6B6B"
          onChangeText={text=>setTaskName(text)}
          value={taskName}
          />
          <TouchableOpacity style={styles.button}
            onPress={handleTaskAdd}>
            <Text style={styles.buttonText}>
                +
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.status}>
            <View style={styles.space}>
              <View style={styles.spaceRight}>
                <Text style={styles.createdText}>Criados</Text>
              </View> 
              <Text style={styles.counterText}>
                  {created}
              </Text>
            </View>
            <View style={styles.space}>
              <Text style={styles.counterText}>
                  {done}
              </Text>
              <View style={styles.spaceLeft}>
                <Text style={styles.doneText}>Concluidos</Text>
              </View>
            </View>
        </View>

        <List task={task} onRemove={handleTaskRemove} counterDone={counterDone} />
        </>
    )
}