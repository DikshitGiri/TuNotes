import React from "react";
// import {View,Text,Button} from 'react-native';
import {
	NativeBaseProvider,
	Box,
	FormControl,
	Stack,
	Input,
	WarningOutlineIcon,
	Card,
	Text,
	Center,
	ScrollView,
	HStack,
	View,
	IconButton,
	Button,
	Image,
	Icon,
} from "native-base";
import Gif from "react-native-gif";

export default function Test() {
	return (
		<NativeBaseProvider>
			<ScrollView>
				<Center>
					<Card
						width={"97%"}
						shadow={10}
						borderRadius={10}
						backgroundColor={"white"}>
						<Text marginBottom={7} fontSize={15} color={"amber.900"}>
							Check Analytics
						</Text>
						<HStack marginBottom={5}>
							<View flex={1}>
								<Image
									source={require("../assets/appIcons/upload-icon.png")}
									alt='Upload'
									height={100}
									width={100}></Image>

								<Text fontSize={20}>Total Uploads</Text>
							</View>

							<View flex={1}>
								<Center>
									<Image
										source={require("../assets/appIcons/notes.png")}
										alt='notes'
										height={100}
										width={117}></Image>
									<Text fontSize={20}>New Request</Text>
								</Center>
							</View>
						</HStack>

						{/* <HStack marginTop={7}>
							<View flex={1}>
								<Button colorScheme={"green"}>Check</Button>
								<Text>Analytics3</Text>
							</View>

							<View marginLeft={2} flex={1}>
								<Button colorScheme={"green"}>Check</Button>
								<Text>Analytics3</Text>
							</View>
						</HStack> */}
					</Card>
					<Card
						width={"97%"}
						backgroundColor={"white"}
						shadow={10}
						borderRadius={10}
						marginTop={2}>
						<Stack>
							<Text alignSelf={"center"} fontSize={17}>
								You can click below to upload files
							</Text>
							<Gif
								source={require("../assets/appIcons/add-button.gif")}
								style={{ width: 355, marginTop: -50, marginLeft: -5 }}></Gif>
						</Stack>
					</Card>
					<Card
						shadow={10}
						borderRadius={10}
						width={"97%"}
						backgroundColor={"white"}
						marginTop={2}>
						<Text textAlign={"center"} color={"lightBlue.500"}>
							All rights reserved@2023
						</Text>
						<Text textAlign={"center"} color={"lightBlue.500"}>
							Developed by
						</Text>
						<Text textAlign={"center"} color={"lightBlue.500"}>
							'Dikshit Giri & Kedar Ban'
						</Text>
					</Card>
				</Center>
			</ScrollView>
		</NativeBaseProvider>

		// <View>
		//     <Text>This is a home page</Text>
		//     <Button title="Click me"/>
		// </View>
	);
}
