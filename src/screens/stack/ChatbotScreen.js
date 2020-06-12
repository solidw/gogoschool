import React from 'react';
import CustomWebView from 'src/components/CustomWebView';

const ChatbotScreen = () => {
  return (
    <CustomWebView
      uri={
        'https://web-chat.global.assistant.watson.cloud.ibm.com/preview.html?region=au-syd&integrationID=8818d2bb-fb89-428f-8d61-5f50c5450760&serviceInstanceID=a2b14b30-6336-4e77-9242-8553842f3f5d'
      }
    />
  );
};

export default ChatbotScreen;
