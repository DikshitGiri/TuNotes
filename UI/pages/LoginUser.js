

import React, { useState } from 'react';

import { StyleSheet, Text, TextInput, TouchableOpacity, View, Button } from "react-native";

import { ToastAndroid } from 'react-native';

const Login = ({ navigation } ) => {
  

  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState(''); 


  const showToast = () => {
      ToastAndroid.show (
        'User or Password Invalid', ToastAndroid.LONG
      
        );
  }
  const GoRegister = () => {
    navigation.navigate("Register"); 
    
  }
  

  const handleLogin = async () => { 

    return fetch('http://192.168.1.86:8000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: Username,
        password: Password,
      }),
    })
      .then(response =>{
        if (response.status === 200) {
          // console.log('verified');
          navigation.navigate("Home");
        }
        else {
          console.log('not verified');
        
          showToast();
      
       
      
          
    
        }
      
      })
      .catch(error => {
        console.error(error);
      });
  
  
  };



    
 
  return (
      
    <View style={styles.container}>
       
      <Text style={styles.Text}>Username</Text>  
      <TextInput style={styles.TextInput}
        
      
        value={Username}
        onChangeText={setUsername}
        editable={true}              
              
      />
      <Text style={styles.Text}>Password</Text>
      <TextInput style={styles.TextInput}
             
     
        value={Password}
        onChangeText={setPassword}
        autoCapitalize="none"
    
      />
      <View style={{ marginTop: 20, width:300, alignSelf:'center'}}>
          <Button  title="Login" onPress={handleLogin}  color='green'></Button>
      </View>
        <View style={{ marginTop: 20, width:300, alignSelf:'center', }}>
        <Text style={{fontSize: 15 }}>Dont have account..?</Text>
          
       <Text style={{color:'blue',fontSize: 18,  }} onPress={GoRegister} >Register</Text>
      
    
      </View>
   
      <View>
        <Text style={{ width: 160, height: 100, alignSelf: 'center' }}></Text>
      </View>
      
     
   
            
    </View>
      
    
  );

};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    margin:30,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  Text: {
    marginLeft:20,
    fontSize: 15,
    
    textAlign: 'auto',
  },
  TextInput: {
    alignSelf:'center',
  borderRadius:10,
    height: 40,
  width:300,
  borderColor: 'blue',
    borderWidth: 1.5,
    backgroundColor: 'white',
  marginTop:10,
   

  
  },


  
});

export default Login;

