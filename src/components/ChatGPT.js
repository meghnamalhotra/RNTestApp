import React, {useState, useRef} from 'react';
import {Text, StyleSheet, TextInput, View, SafeAreaView, FlatList} from 'react-native';
import {Configuration, OpenAIApi} from 'openai';
import WrappedComponent from './WrapperComponent';
const apiKey = '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'; //TO CHANGE

const configuration = new Configuration({
  apiKey: apiKey,
});
const openai = new OpenAIApi(configuration);

const ChatGPT = (props) => {
  const [data, setData] = useState([]);
  const flatlist = useRef(null);
  const [textInput, setTextInput] = useState('');

  const onScrollMethod = (_, height) => {
    flatlist?.current?.scrollToOffset({offset: height});
  }
  const handleSend = async() => {
    try {
      props.showLoader();
      const prompt = textInput;
      const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens : 1024,
        temperature: 0.5
      });
      const text = completion?.data?.choices[0]?.text;
      setData([...data, {type: 'user', text: textInput}, {type: 'bot', text: text}]);
      setTextInput('');
     } catch (error) {
      if (error.response) {
        console.log(error.response.status);
        console.log(error.response.data);
      } else {
        console.log(error.message);
      }
    }finally{
      props.hideLoader();
    }
  }
   
  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.text, {fontWeight: 'bold', fontSize: 22, paddingBottom: 10}]}>AI CHATBOT</Text>
      <FlatList 
        ref={flatlist}
        data={data}
        keyExtractor={(_, index) => index.toString()}
        style={styles.body}
        onContentSizeChange={onScrollMethod}
        renderItem={({item}) => {
           return(
            <View style={{margin: 10, alignItems: item.type === 'user' ? 'flex-end' : 'flex-start'}}>
            <Text style={[styles.text, {fontWeight: 'bold', color: item.type === 'user' ? 'green' : 'red'}]}>
              {item.type === 'user' ? 'Meghna' : 'Chat GPT'}
            </Text>
            <Text style={styles.text}>{item?.text?.trim()}</Text>
          </View>
           )
        }}
      />
      <TextInput 
      style={styles.textInput}
      value={textInput}
      onChangeText={(text) => setTextInput(text)}
      onSubmitEditing={handleSend}
      placeholder='Ask me anything.....!!'

      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'black'
    },
    body: {
      flex: 1,
      width: '100%',
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
    }

})


export default WrappedComponent(ChatGPT);