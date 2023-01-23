import { useState } from 'react'
import {Text, Image, View, TextInput, Touchable, TouchableOpacityComponent, TouchableOpacity, SafeAreaView} from 'react-native'
import { Header } from '../Header'
import {Input} from '../Input'
import { List } from '../List'
import {styles} from './styles'
export const Home = () => {
  return(
    <View style={styles.container}>
      <Header />
      <Input />

    </View>
  )
}