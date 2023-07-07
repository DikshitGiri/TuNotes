import {
	FormControl,
	Input,
	NativeBaseProvider,
	Stack,
	Box,
	Button,
	Text,
	Alert,
} from "native-base";
import { RefreshControl } from "native-base";
import React, { useState } from "react";
import { ScrollView } from "react-native";

// import { StyleSheet, Text, TextInput, TouchableOpacity, View, Button } from "react-native";

import { ToastAndroid } from "react-native";

const Login = ({ navigation }) => {
	const [Username, setUsername] = useState("");
	const [Password, setPassword] = useState("");
	const [showAlert, setShowAlert] = useState(false);
	const [refreshing, setRefreshing] = useState(false);

	const GoRegister = () => {
		navigation.navigate("Register");
	};
	const handleAlertClose = () => {
		setShowAlert(false);
	};

	const handleLogin = async () => {
		return fetch("http://192.168.1.86:8000/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username: Username,
				password: Password,
			}),
		})
			.then((response) => {
				if (response.status === 200) {
					navigation.navigate("Home");
				} else {
					console.log("not verified");
					setShowAlert(true);
					// setShowSuccess(true);
				}
			})
			.catch((error) => {
				console.error(error);
			});
	};

	return (
		<NativeBaseProvider>
			<ScrollView>
				{showAlert && (
					<Alert status='failed' variant='solid' onClose={handleAlertClose}>
						Login Failed
					</Alert>
				)}

				<Box w='100%' marginTop={10}>
					<FormControl isRequired>
						<Stack mx='5'>
							<Text marginBottom={30} textAlign='center'>
								Logo Here
							</Text>
							<FormControl.Label>Username</FormControl.Label>
							<Input
								type='text'
								value={Username}
								onChangeText={setUsername}
								placeholder='Input Username'></Input>
							<FormControl.Label>Password</FormControl.Label>
							<Input
								type='password'
								value={Password}
								onChangeText={setPassword}
								placeholder='Input Password'></Input>

							<Button colorScheme='green' marginTop={10} onPress={handleLogin}>
								{" "}
								Login
							</Button>
							<Text
								color='blue.500'
								fontSize={18}
								textAlign='center'
								marginTop={2}>
								{" "}
								Dont Have an Account..?
							</Text>
							<Button marginTop={5} onPress={GoRegister}>
								Register
							</Button>
						</Stack>
					</FormControl>
				</Box>
			</ScrollView>
		</NativeBaseProvider>
	);
};

export default Login;
