import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,Alert, Image,ImageBackground,TouchableOpacity,TouchableWithoutFeedback } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import Tts from 'react-native-tts';
import * as Speech from 'expo-speech';

export default function App() {
  const openCamera = async ()=>{
    Speech.speak('Opening Camera');

    const {status} = await ImagePicker.requestCameraPermissionsAsync();
    if (status!=='granted'){
      Alert.alert('Permission non accordé');
      return;

    }
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing : false,
      
      quality : 1,

    });
    if (!result.canceled) {
      const { uri } = result.assets[0];
      if (uri) {
        console.log('Image URI: ', uri);
        Alert.alert('Camera opened', 'Photo captured successfully!');
        Speech.speak("Photo captured successfully ");


        sendImageToGoogleVision(uri);
      } else {
        console.error('Image URI is null or undefined.');
      }



    } else {
      console.log('User cancelled image picker');
    }
 


  };
  const sendImageToGoogleVision = async (imageUri) =>{
    try{
      const base64Image = await FileSystem.readAsStringAsync(imageUri,{encoding:FileSystem.EncodingType.Base64});
      const body = JSON.stringify({
        requests:[
          {
            image:{
              content : base64Image
            },
            features :[
              {
                type:'LABEL_DETECTION'

              }
            ]
          }
        ]
      });
      const response = await fetch('https://vision.googleapis.com/v1/images:annotate?key=AIzaSyB0Iorn_Pp7juPeJA5fwQpGZkGlyfQio7g',{
        method : 'POST',
        headers : {
          'Content-Type':'application/json'
        },
        body : body,
      }


      );
      const responseData = await response.json();
      console.log('API Response:',responseData);

    }
    catch(error){

      alert('Error conecting to Google',error);
    }
  }
  const handleScreenTap = () => {
    Alert.alert('You are looking at:', 'Monitor , Mouse , Keyboard ');
    Speech.speak('You are looking at: Monitor Mouse Keyboard ');
  };
  return (
    <TouchableWithoutFeedback onPress={handleScreenTap}>
      <ImageBackground
        source={require('./Image/a.webp')}
        style={styles.backgroundImage}
      >
        <View style={styles.container}>
          <TouchableOpacity style={styles.button} onPress={openCamera}>
            <Text style={styles.buttonText}>Read for me</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 420,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 20, // Increase vertical padding for height
    paddingHorizontal: 40, // Increase horizontal padding for width
    borderRadius: 10, // Optional: rounded corners
    marginLeft : 40,
    
  },
  buttonText: {
    color: 'white', // Button text color
    fontSize: 18, // Increase font size for better visibility
    textAlign: 'center', // Center the text
  },
});
