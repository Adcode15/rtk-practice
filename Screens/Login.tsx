import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { login } from './Redux/features/AuthSlice';
import { AppDispatch,RootState } from './Redux/Store';  // Assuming these types are defined

const Login: React.FC = () => {
  // states
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const {  isSuccess } = useSelector((state:RootState) => state.auth);

  // hooks
  const dispatch = useDispatch<AppDispatch>(); // Typed dispatch
  const {} = useSelector((state: RootState) => state.auth); // Typed state selector
  // console.log(userData);
  

  // functions
  const handlingLogin = (navigation: { navigate: (arg0: string) => void; }) => {
    const params = {
      username: email,
      password: password,
    };
    console.log('params:', params);
    dispatch(login(params));
    console.log('login succesfully');

    if (isSuccess) {
      navigation.navigate('Home'); // Navigate to the Home screen after login
    }
    
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        value={email}
        placeholder="Enter Email"
        onChangeText={setEmail}
        style={styles.input}
        placeholderTextColor="grey"
        autoCapitalize="none"
      />
      <TextInput
        value={password}
        placeholder="Enter Password"
        onChangeText={setPassword}
        style={styles.input}
        placeholderTextColor="grey"
        secureTextEntry={true}
      />
      <Button  title="Login" onPress={handlingLogin}  ></Button>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    paddingTop: 150,
    paddingHorizontal: '5%',
  },
  title: {
    fontSize: 36,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: 'coral',
    paddingHorizontal: 20,
  },
});
