import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import type { AppDispatch, RootState } from './Redux/Store'

import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './Redux/features/Counterslice'

const Counter:React.FC= () => {
  const dispatch = useDispatch<AppDispatch>();
  const count = useSelector((state:RootState) => state.counter.value)
  console.log(count);
  
  return (
    <View  >
      <Text style={{color:'black', textAlign:'center' , fontSize:20, display:'flex' , flexDirection:'row-reverse'}}>Counter</Text>
      <View style={style.container}>
      <Text style={{color:'black', textAlign:'center' ,  fontSize:60, }} onPress={()=> dispatch(increment())}>+</Text>
      <Text style={{color:'black', textAlign:'center' , backgroundColor:'grey', fontSize:60,}}> {count} </Text>
      <Text style={{color:'black', textAlign:'center' , fontSize:60, backgroundColor:'blue' }}  onPress={()=> dispatch(decrement())}>-</Text>
      </View>

    </View>
  )
}
  const style = StyleSheet.create({
    container:{
      display:'flex',
  flexDirection:'column',
   justifyContent:'space-evenly',
   textAlignVertical:'center',
   marginTop:'50%',
   width:'50%',
   textAlign:'center'
    }
  })
export default Counter