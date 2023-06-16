import React from "react";
import { View, Text ,StyleSheet,useState,TouchableOpacity,Image} from 'react-native';



// export default function Test() {
    
//  const [imageUri, setImageUri] = useState(null);
//     const handleImagePicker = async () => {
           
     
//             const result = await ImagePicker.launchImageLibraryAsync({
//                 mediaTypes: ImagePicker.MediaTypeOptions.Images,
//                 allowsEditing: true,
//                 aspect: [4, 3],
//                 quality: 1,
//             });
//             console.log(result);
//             if (!result.canceled) {
//                 setImageUri(result.assets[0].uri);
//             }
//         };
//     return (
//         <View>
//             <TouchableOpacity onPress={handleImagePicker}>
//                 <View style={styles.profilePictureContainer}>
//                     {imageUri ? (
//                         <Image source={{ uri: imageUri}} style={styles.profilePicture} />
//                     ) : (
//                         <Text style={styles.placeholderText}>Select Profile Picture</Text>
//                     )};
//                 </View>
//             </TouchableOpacity>
//         </View>
//     )};





const Test=()=> {
    return (<View>
        <Text>This is teet</Text>
    </View>);
}
export default Test;