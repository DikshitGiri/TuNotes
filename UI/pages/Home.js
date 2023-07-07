import React, { useState } from "react";

import { TouchableOpacity, StyleSheet } from "react-native";
import {
	Image,
	NativeBaseProvider,
	ScrollView,
	Stack,
	Center,
	VStack,
	Text,
	View,
  Container,
  
  
  
  

  
} from "native-base";
import {
	createDrawerNavigator,
	DrawerContentScrollView,
	DrawerItemList,
	DrawerItem,
} from "@react-navigation/drawer";
import * as ImagePicker from "expo-image-picker";
import Test from "./Test";
import { color } from "react-native-reanimated";
import { Header } from "react-native/Libraries/NewAppScreen";

const Drawer = createDrawerNavigator();

const Home = () => {
	const [image, setImage] = useState(null);

	const UploadProfile = async () => {
		try {
			const data = new FormData();
			data.append("image", image);
			console.log(data);
			await fetch("http://192.168.1.86:8000/UploadProfile", {
				method: "POST",
				headers: {
					"Content-Type": "Multipart/form-data",
				},
				body: data,
			});
		} catch (error) {
			console.error(error);
		}
	};

	const DrawerContent = () => {
		return (
			<NativeBaseProvider>
				<ScrollView backgroundColor={"white"}>
          <Center>
				
           
        

              <TouchableOpacity onPress={handleImagePicker}>
								<View style={styles.profilePictureContainer} >
									{image ? (
										<Image
											source={{ uri: image }}
											style={styles.profilePicture}
										/>
									) : (
										<Image
											height={"100%"}
											width={"100%"}
                      borderRadius={100}
                      
											source={require("../assets/appIcons/user.png")} alt="Profile-image"></Image>
									)}
								</View>
							</TouchableOpacity>
             
           
          
            
        
          </Center>
							
					
						<VStack >
             
              <View backgroundColor={'blue.200'} ><Text fontSize={20} textAlign={'center'}>Hello</Text></View>
							
							<Text fontSize={20}>Hello</Text>
							<Text fontSize={20}>Hello</Text>
							<Text fontSize={20}>Hello</Text>
          
              
						</VStack>
            
				</ScrollView>
			</NativeBaseProvider>
		);
	};

	const handleImagePicker = async () => {
		const result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [4, 6],
			quality: 1,
		});
		console.log(result);
		if (!result.canceled) {
			setImage(result.assets[0].uri);
		}
	};

	return (
		<Drawer.Navigator
			screenOptions={{
				drawerStyle: {
					backgroundColor: "",
					width: "58%",
				},
			}}
			drawerContent={() => <DrawerContent />}>
			<Drawer.Screen name='Test' component={Test} />
		</Drawer.Navigator>
	);
};
export default Home;

const styles = StyleSheet.create({
	profilePictureContainer: {
		width: 170,
		height: 170,
		borderRadius: 100,
    borderWidth:2,
    borderColor: 'green',
  	
		
	},


});
