import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';
import EtherBotContainer from './EtherBotContainer';
import { width, height } from './EtherBotContainer';
import steps from '../steps';

const EtherBot = () => (
  <EtherBotContainer>
    <ThemeProvider theme={{
      background: '#ffffff',
      fontFamily: 'Helvetica Neue',
      headerBgColor: '#f5f8fb',
      headerFontColor: '#4a4a4a',
      headerFontSize: '16px',
      botBubbleColor: '#f5f8fb',
      botFontColor: '#4a4a4a',
      userBubbleColor: '#fff',
      userFontColor: '#4a4a4a'
    }}>
      <ChatBot
        headerTitle="EtherBot"
        placeholder="Response ..."
        botAvatar="./img/ether-logo.png"
        hideUserAvatar={true}
        hideBotAvatar={false}
        botDelay={0} /*ms*/
        userDelay={0} /*ms*/
        steps={steps}
        width={`${width}px`}
        height={`${height}px`}
      />
    </ThemeProvider>
  </EtherBotContainer>
);

export default EtherBot;
