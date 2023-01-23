import { View, Image } from "react-native"
import {styles} from './style'

export const Header = () =>{
    return(
        <View style={styles.header}>
          <Image source={require('../../assets/rocket.png')} />
          <Image source={require('../../assets/to.png')} />
          <Image source={require('../../assets/do.png')} />
        </View>
    )
}

