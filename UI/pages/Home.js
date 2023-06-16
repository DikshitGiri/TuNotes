


import React ,{ useState } from 'react'
import { TouchableOpacity,View,Image,StyleSheet,Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as ImagePicker from 'expo-image-picker';
import Test from './Test';







const Drawer = createDrawerNavigator();

const Home = () => {
  const [image, setImage] = useState(null);

  const UploadProfile = async () => {
     
    try {
      const data = new FormData();
      data.append('image', image);
      console.log(data);
      await fetch('http://192.168.1.86:8000/UploadProfile', {
        method: 'POST',
        headers: {
          'Content-Type': 'Multipart/form-data',
        },
        body: data,
      
      });
      
    
    } catch(error) {
      console.error(error);
    }
  }



  const DrawerContent = () => {
  
    return (
      <View style={{ marginTop: 20,padding:10}}>
        <TouchableOpacity onPress={handleImagePicker}>
          <View style={styles.profilePictureContainer}>
            {image ? (
              <Image source={{ uri: image}} style={styles.profilePicture} />
            ) : (
              <Text style={styles.placeholderText}>Select Profile Picture</Text>
            )}

           
          </View>
          
        </TouchableOpacity>
        <Text style={{fontWeight:'bold',marginTop:20,padding:10,fontSize:17}} onPress={UploadProfile} >Upload Profile </Text>
        <Text style={{fontWeight:'bold',marginTop:20,padding:10,fontSize:17}} >Upload Document</Text>
        <Text style={{fontWeight:'bold',marginTop:20,padding:10,fontSize:17}}>Delete Document</Text>
        <Text style={{fontWeight:'bold',marginTop:20,padding:10,fontSize:17}}>Update Document</Text>
     
      </View>
    );
  }

  const handleImagePicker = async () => {
     
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 6],
      quality: 1,
    });
    console.log(result);
    if (!result.cancelled) {
      setImage(result.assets[0].uri);
    }
  };
  
  return (
   
    <Drawer.Navigator
    screenOptions={{
    drawerStyle: { width: '46%' },
  }}
      drawerContent={() => <DrawerContent />}>
   
      <Drawer.Screen name="Test" component={Test} />
        
    </Drawer.Navigator>
 
  );
};
export default Home;

const styles = StyleSheet.create({
   
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
  }
  });