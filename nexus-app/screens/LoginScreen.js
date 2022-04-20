import { View, Text, StyleSheet, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return (
    <KeyboardAvoidingView style={styles.container}>
    
     <View style={styles.inputContainer}>
        <TextInput placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        style={styles.input}
        >
        </TextInput>

        <TextInput placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        style={styles.input}
        secureTextEntry
        >
        </TextInput>
    </View>


    <View style={styles.buttonContainer}>
        <TouchableOpacity
        onPress={() => { }}
        style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      
        <TouchableOpacity
        onPress={() => { }}
        style={[styles.button, styles.buttonOutline]}>
            <Text style={styles.buttonOutlineText}>Sign Up</Text>
        </TouchableOpacity>
    </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#F48225',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#F48225',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },

  buttonOutlineText: {
    color: '#7E5A6D',
    fontWeight: '700',
    fontSize: 16,
  },


})