import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";

import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "./pages/RegisterUser";
import Home from "./pages/Home";
import Login from "./pages/LoginUser";
import Landing from "./pages/Landing";

const Stack = createNativeStackNavigator();
export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Home'>
				<Stack.Screen name='Login' component={Login} />
				<Stack.Screen name='Register' component={Register} />

				<Stack.Screen name='Home' component={Home} />
				<Stack.Screen name='Landing' component={Landing} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
