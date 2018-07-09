
import web3 from './web3'

export function isCancel(command) {
  switch(command.toLowerCase())
  {
    case 'cancel': return true;
    case 'exit': return true;
    case 'back': return true;
    case 'go back': return true;
  }
  return false;
}

export function validateAddress(value) {
  if (!isCancel(value) && !web3.utils.isAddress(value)) {
    return 'Please input a valid Ethereum address';
  }
  return true;
}
