import {
    StyleSheet,
    TextInput,
    View,
    Image,
    Dimensions,
  } from "react-native";
  import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import WrappedComponent from "./WrapperComponent";

const apiKey = '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';
const imagePlaceholder = "https://furntech.org.za/wp-content/uploads/2017/05/placeholder-image-300x225.png";
const {height, width} = Dimensions.get('screen');
const ImageGeneration = (props) => {
   const [textInput, setTextInput] = useState('');
   const [result, setResult] = React.useState('');
   const configuration = new Configuration({
    apiKey: apiKey,
  });
   const openai = new OpenAIApi(configuration);

   const generateImage = async () => {
    try {
      props.showLoader();
      const res = await openai.createImage({
        prompt: textInput,
        n: 1,
        size: "256x256",
      });
      setResult(res.data.data[0].url);
    } catch (e) {
      console.error(e);
    }finally{
        props.hideLoader();
    }
  };
  return(
    <View style={styles.container}>
        <TextInput 
        style={styles.textInput}
        value={textInput}
        onChangeText={(text) => setTextInput(text)}
        onSubmitEditing={generateImage}
        placeholder='Please enter image description..'
        />
        <View style={styles.generatedImageContainer}>
          {result.length > 0 ? (
            <Image
              resizeMode='contain'
              style={styles.generatedImage}
              source={{
                uri: result,
              }}
            />
          ) : (
            !props?.isLoading && (
            <>
              <Image
                style={styles.generatedImage}
                source={{
                  uri: imagePlaceholder,
                }}
              />
            </>
            )
          )}
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'black'
    },
    text: {
      color: 'white',
    },
    textInput: {
      backgroundColor: 'white',
      width: '90%',
      padding: 10,
      borderRadius: 20,
      margin: 30
    },
    generatedImageContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
      },
      generatedImage: {
        width: width,
        height: 400,
      },

})

export default WrappedComponent(ImageGeneration);