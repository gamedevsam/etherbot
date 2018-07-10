import React from 'react';
import EtherPrice from './components/EtherPrice';
import AccessMyWallet from './components/AccessMyWallet';
import CreateWallet from './components/CreateWallet';
import SendEthAndTokens from './components/SendEthAndTokens';
import PrivacyAndSecurity from './components/PrivacyAndSecurity';
import VideoResponse from './components/VideoResponse';
import About from './components/About';
import { validateAddress } from './utils';

var menu_count = 0;
var help_menu_count = 0;
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
      { value: menu_count++, label: 'Ether Price', trigger: 'eth_price' },
      //{ value: menu_count++, label: 'Create Wallet', trigger: 'create_wallet' },
      { value: menu_count++, label: 'Access Wallet', trigger: 'access_wallet' },
      //{ value: menu_count++, label: 'Send Eth & Tokens', trigger: 'send_eth_and_tokens' },
      //{ value: menu_count++, label: 'Email Eth & Tokens', trigger: 'email_eth_and_tokens' }, // todo
      { value: menu_count++, label: 'Help & Tips', trigger: 'help' },
      { value: menu_count++, label: 'About', trigger: 'about' },
    ]
  },
  {
    id: 'eth_price',
    asMessage: true,
    hideInput: true,
    waitAction: true,
    component: <EtherPrice/>,
    trigger: 'menu',
  },
  {
    id: 'create_wallet',
    asMessage: true,
    hideInput: true,
    waitAction: true,
    component: <CreateWallet/>,
    trigger: 'menu',
  },
  {
    id: 'access_wallet',
    message: "Please enter a wallet address:",
    trigger: 'wallet',
  },
  {
    id: 'wallet',
    user: true,
    validator: validateAddress,
    trigger: 'wallet_balance',
  },
  {
    id: 'wallet_balance',
    asMessage: true,
    hideInput: false,
    waitAction: true,
    component: <AccessMyWallet/>,
    trigger: 'menu',
  },
  {
    id: 'send_eth_and_tokens',
    asMessage: true,
    hideInput: true,
    waitAction: true,
    component: <SendEthAndTokens/>,
    trigger: 'menu',
  },
  {
    id: 'help',
    hideInput: true,
    message: 'How can I help?',
    trigger: 'help_menu',
  },
  {
    id: 'help_menu',
    hideInput: true,
    options: [
      { value: help_menu_count++, label: 'What is cryptocurrency?', trigger: 'what_is_cryptocurrency' },
      { value: help_menu_count++, label: 'What is blockchain?', trigger: 'what_is_blockchain' },
      { value: help_menu_count++, label: 'What is ethereum?', trigger: 'what_is_ethereum' },
      { value: help_menu_count++, label: 'Privacy & Security', trigger: 'privacy_and_security' },
      { value: help_menu_count++, label: 'Something Else', trigger: 'something_else' }
    ]
  },
  {
    id: 'what_is_cryptocurrency',
    hideInput: true,
    waitAction: true,
    component: <VideoResponse src="https://www.youtube.com/watch?v=5MfbuQnGM2M"/>,
    trigger: 'menu',
  },
  {
    id: 'what_is_blockchain',
    hideInput: true,
    waitAction: true,
    component: <VideoResponse src="https://www.youtube.com/watch?v=6WG7D47tGb0"/>,
    trigger: 'menu',
  },
  {
    id: 'what_is_ethereum',
    hideInput: true,
    waitAction: true,
    component: <VideoResponse src="https://www.youtube.com/watch?v=TDGq4aeevgY"/>,
    trigger: 'menu',
  },
  {
    id: 'privacy_and_security',
    hideInput: true,
    waitAction: true,
    component: <PrivacyAndSecurity/>,
    trigger: 'menu',
  },
  {
    id: 'something_else',
    hideInput: true,
    waitAction: true,
    component: <PrivacyAndSecurity/>,
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

export default steps;
