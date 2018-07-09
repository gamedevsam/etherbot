import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { isMobile } from 'react-device-detect';
import ChatBot from 'react-simple-chatbot';
import Price from './Price';
import AccessMyWallet from './AccessMyWallet';
import CreateWallet from './CreateWallet';
import SendEthAndTokens from './SendEthAndTokens';
import PrivacyAndSecurity from './PrivacyAndSecurity';
import Settings from './Settings';
import About from './About';
import { validateAddress } from '../utils';

var mobileWidth = 350;
var mobileHeight = 520;
var browserWidth = 800;
var browserHeight = 600;
const EtherBotContainer = styled.div`
  position: absolute;
  width: ${isMobile ? mobileWidth : browserWidth}px;
  height: ${isMobile ? mobileHeight : browserHeight}px;
  z-index: 15;
  top: 50%;
  left: 50%;
  margin: -${(isMobile ? mobileHeight : browserHeight) / 2}px 0 0 -${(isMobile ? mobileWidth : browserWidth) / 2}px;
`

var menuCount = 0;
const steps = [
  {
    id: 'welcome',
    hideInput: true,
    message: 'Welcome to EtherBot!',
    trigger: 'menu'
  },
  {
    id: 'menu',
    hideInput: true,
    options: [
      { value: menuCount++, label: 'Price', trigger: 'price' },
      { value: menuCount++, label: 'Create Wallet', trigger: 'create-wallet' },
      { value: menuCount++, label: 'Access Wallet', trigger: 'access-wallet' },
      { value: menuCount++, label: 'Send Eth & Tokens', trigger: 'send-eth-and-tokens' },
      { value: menuCount++, label: 'Privacy & Security', trigger: 'privacy-and-security' },
      { value: menuCount++, label: 'Settings', trigger: 'settings' },
      { value: menuCount++, label: 'About', trigger: 'about' }
    ]
  },
  {
    id: 'price',
    asMessage: true,
    hideInput: true,
    waitAction: true,
    component: <Price/>,
    trigger: 'menu',
  },
  {
    id: 'create-wallet',
    asMessage: true,
    hideInput: true,
    waitAction: true,
    component: <CreateWallet/>,
    trigger: 'menu',
  },
  {
    id: 'access-wallet',
    message: "Please enter a wallet address:",
    trigger: 'wallet',
  },
  {
    id: 'wallet',
    user: true,
    validator: validateAddress,
    trigger: 'wallet-balance',
  },
  {
    id: 'wallet-balance',
    asMessage: true,
    hideInput: false,
    waitAction: true,
    component: <AccessMyWallet/>,
    trigger: 'menu',
  },
  {
    id: 'send-eth-and-tokens',
    asMessage: true,
    hideInput: true,
    waitAction: true,
    component: <SendEthAndTokens/>,
    trigger: 'menu',
  },
  {
    id: 'privacy-and-security',
    hideInput: true,
    waitAction: true,
    component: <PrivacyAndSecurity/>,
    trigger: 'menu',
  },
  {
    id: 'settings',
    asMessage: true,
    hideInput: true,
    waitAction: true,
    component: <Settings/>,
    trigger: 'menu',
  },
  {
    id: 'about',
    asMessage: true,
    hideInput: true,
    waitAction: true,
    component: <About/>,
    trigger: 'menu',
  }
];

const EtherBot = () => (
  <EtherBotContainer>
    <ThemeProvider theme={{
      background: '#f5f8fb',
      fontFamily: 'Helvetica Neue',
      headerBgColor: '#343535',
      headerFontColor: '#fff',
      headerFontSize: '16px',
      botBubbleColor: '#343535',
      botFontColor: '#fff',
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
        width={isMobile ? `${mobileWidth}px` : `${browserWidth}px`}
        height={isMobile ? `${mobileHeight}px` : `${browserHeight}px`}
      />
    </ThemeProvider>
  </EtherBotContainer>
);

export default EtherBot;
