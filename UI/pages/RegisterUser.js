import React,  { useState } from 'react';
import { View, Text, TextInput, Image,StyleSheet, Button ,TouchableOpacity} from 'react-native';
import { useValidation } from 'react-native-form-validator';
import { Ionicons } from 'react-native-vector-icons';
import DocumentPicker  from 'react-native-document-picker';
// import { Ionicons } from '@expo/vector-icons';

const Register = ({navigation}) => {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [isSecureEntry, setIsSecureEntry] = useState(true);
    const [message, setMessage] = useState('');
    const [checkEmail, setcheckEmail] = useState('');
    const [imageUri, setImageUri] = useState('');

    const { validate, isFieldInError, getErrorsInField, getErrorMessages } =
    useValidation({
      state: { username, email,password, address },
    });

    const toggleSecureEntry = () => {
    setIsSecureEntry(!isSecureEntry);
    };
    
    const handleDocumentPicker = async () => {
        try {
            const res = await DocumentPicker.pickSingle({
                type: [DocumentPicker.types.images],
            });
            console.log(res);
            setImageUri(res.uri);
            
        } catch (error) {
          
            if (DocumentPicker.isCancel(error)){
                console.log("user cancelled the upload", error);
            }
            else {
                console.log(error);  
            }
        }
    }
    const successfulRegistratition = () => {
        setMessage('Successfully registered Now go back to login for login'); 
        
        
    }
    const emailUsed = () => {
        setcheckEmail('Email already taken');
        
    }

  


    const handleRegister = async () => {
        validate({
            username: { minlength: 3, maxlength: 7, required: true },
            email: { email: true, required: true },
            address: { required: true },
            password: {
                minlength: 8, required: true,
                // pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,16}$/,
                required: true,
            },
      
     
 
        });
    
            
        console.log( username);
  
        
        
            fetch('http://192.168.1.86:8000/Signup',{
                       
                method:'POST',
                headers: {
                    'Content-Type':'application/json',
                },
                body: JSON.stringify({
                
                    username: username,
                    email: email,
                    password: password,               
                    address: address,                
                               
                
                }),
                
                    
            })
                .then(response => {
                    if (response.status === 422) {
                        
                        emailUsed();
                        console.log('email already taken');
                      
               
                    }
                    else if(response.status=== 200){
                        successfulRegistratition();
                    }
                    else {
                        console.log("try again");
                    }
                }).catch(error => {
                    console.error(error);
                });
        }
    
        return (

            <View style={styles.container}>
        <TouchableOpacity onPress={handleDocumentPicker}>
        <View style={styles.profilePictureContainer}>
          {imageUri ? (
            <Image source={{ uri: imageUri }} style={styles.profilePicture} />
          ) : (
            <Text style={styles.placeholderText}>Select Profile Picture</Text>
          )}
        </View>
      </TouchableOpacity>
    
                <Text style={styles.text}>Username</Text>
                <TextInput style={styles.Input}
                    value={username }
                    onChangeText={setUsername}
                    editable={true}                    
                />
                {isFieldInError('username') &&
                    getErrorsInField('username').map(errorMessage => (
                        <Text>{errorMessage}</Text>
                    ))}
                <Text  style={styles.text}>Email</Text>
                <TextInput style={styles.Input}
                    value={email}
                    onChangeText={setEmail}
                    editable={true}                   
                />{emailUsed ?
                    <Text style={{ color: 'red' }}>{checkEmail}</Text>:null
                }
                
                {isFieldInError('email') &&
        getErrorsInField('email').map(errorMessage => (
          <Text>{errorMessage}</Text>
        ))}
                <Text  style={styles.text}>Address</Text>
                <TextInput style={styles.Input}
                    value={address}
                    onChangeText={setAddress}
                    editable={true}
                />
                {isFieldInError('address') &&
                    getErrorsInField('address').map(errorMessage => (
                        <Text>{ errorMessage}</Text>
               )) }
                <Text  style={styles.text}>Password</Text>
                <TextInput style={styles.Input}
                    value={password}
                    secureTextEntry={true}
                    onChangeText={setPassword}
                    editable={true}
                />
               <TouchableOpacity onPress={toggleSecureEntry}>
        <Ionicons name={isSecureEntry ? 'eye-outline' : 'eye-off-outline'} size={24} color="black" />
      </TouchableOpacity>
                {isFieldInError('password') &&
                    getErrorsInField('password').map(errorMessage => (
                        <Text>{errorMessage}</Text>
                ))}
                <View style={{ alignSelf: 'center', marginTop: 15, width: 340 }}><Button title='Submit' onPress={handleRegister} ></Button></View>
                
                {/* <Text>{getErrorMessages()}</Text> */}
                <Text style={{color:'green',fontSize:25}}>{ message}</Text>
            
            </View>
        );
    }


export default Register;
const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#fff',
        // borderRadius: 10,
        // shadowColor: '#000',
        margin: 30,
        shadowOffset: {
            width: 0,
            height: 4,
        },
    },
    profilePictureContainer: {
    width: 150,
    height: 150,
    borderRadius: 100,
    overflow: 'hidden',
    // alignItems: 'center',
          borderWidth: 2,
            justifyContent: 'center',
      
    },
      profilePicture: {
    width: '100%',
    height: '100%',
    borderRadius: 75,
    },
      placeholderText: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
  },
    text: {
        fontWeight: 'bold',  
        
    },
    Input: {
        marginTop: 7,
        backgroundColor: '#fff',  
      
        borderColor: 'black',
        
         borderRadius:5,
       
        height:40,
    },

});
