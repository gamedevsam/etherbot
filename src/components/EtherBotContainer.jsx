import styled from 'styled-components';
import { isMobile } from 'react-device-detect';

export const mobileWidth = 350;
export const mobileHeight = 520;
export const browserWidth = 800;
export const browserHeight = 600;

const EtherBotContainer = styled.div`
  position: absolute;
  width: ${isMobile ? mobileWidth : browserWidth}px;
  height: ${isMobile ? mobileHeight : browserHeight}px;
  z-index: 15;
  top: 50%;
  left: 50%;
  margin: -${(isMobile ? mobileHeight : browserHeight) / 2}px 0 0 -${(isMobile ? mobileWidth : browserWidth) / 2}px;
`

export default EtherBotContainer
