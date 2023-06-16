
import React from 'react';
import WrappedComponent from '../../components/WrapperComponent';
import ChatGPT from '../../components/ChatGPT';

const ChatBot = () => {
  return (
    <ChatGPT />
  );
};

export default WrappedComponent(ChatBot);
