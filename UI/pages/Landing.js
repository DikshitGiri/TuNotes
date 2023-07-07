import React, { useState } from 'react';



import{ NativeBaseProvider,ScrollView,Select,Box, Button,HStack, Container, Center, VStack ,Text,Card} from 'native-base'
const Landing=()=>{
    let [subject, setSubject] = useState('key0');
    let[chapter,setCapter]=useState('key0');
    console.log(subject);
return(
    <NativeBaseProvider>
        <Center  justifyContent="center" p={1} >
        
       <Card width="97%" bgColor={'white'} shadow={2} borderRadius={8}  >
      
       <Text textAlign={'center'} marginBottom={3} textDecorationColor={'green.700'}> Slect Your Requirements Below</Text>
        
        
       
        <HStack>
        <Select flex={1}    placeholder='Select Faculty'
     
      selectedValue={subject}borderRadius={15}
      
      onValueChange={(itemValue) => setSubject(itemValue)}>

      <Select.Item label="BBA" value="key0" />
      <Select.Item label="BCA" value="key1" />
      <Select.Item label="BSC-Cit" value="key2" />
      <Select.Item label="BIM " value="key3" />
      <Select.Item label="BIT" value="key4" />
      
    </Select>
    <Select  flex={1} marginLeft={2}  placeholder='Select Semester'
     borderRadius={15}
     selectedValue={subject}
     
     onValueChange={(itemValue) => setSubject(itemValue)}>

     <Select.Item label="First" value="key0" />
     <Select.Item label="Second" value="key1" />
     <Select.Item label="Third" value="key2" />
     <Select.Item label="Fourth " value="key3" />
     <Select.Item label="Fifth" value="key4" />
     
   </Select></HStack>
   <HStack marginTop={4}>
        <Select   placeholder='Select Subject'
     
      selectedValue={subject} borderRadius={15}
     flex={1}
      onValueChange={(itemValue) => setSubject(itemValue)}>

      <Select.Item label="Account" value="key0" />
      <Select.Item label="Economics" value="key1" />
      <Select.Item label="Math" value="key2" />
      <Select.Item label="Science " value="key3" />
      <Select.Item label="Marketing" value="key4" />
      
    </Select>
  
   

    <Select   placeholder='Select Chapter'
  
    flex={1} marginLeft={2} borderRadius={15}
    onValueChange={(itemValue)=>setCapter(itemValue)}>
    <Select.Item label="chapter-1" value="key1" />
    <Select.Item label="chapter-2" value="key2" />
    <Select.Item label="chapter-3" value="key3" />
    <Select.Item label="chapter-4" value="key4" />
    <Select.Item label="chapter-5" value="key5" />
    <Select.Item label="chapter-6" value="key6" />
    <Select.Item label="chapter-7" value="key7" />
     
    </Select>
</HStack>
<HStack>
<Select   placeholder='Select Type'
  
  flex={1} marginTop={2} borderRadius={15}
  onValueChange={(itemValue)=>setCapter(itemValue)}>
  <Select.Item label="PPT" value="key1" />
  <Select.Item label="PDF" value="key2" />
  <Select.Item label="Vedio Link" value="key3" />

   
  </Select>
</HStack>


<Button width="100%" borderRadius={10} marginTop={2} >Search</Button>

  


</Card>
</Center>

    </NativeBaseProvider>
   
);
};
export default Landing;
