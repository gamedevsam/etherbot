import styled from 'styled-components';
import { isMobile } from 'react-device-detect';

const mobileWidth = 350;
const mobileHeight = 520;
const browserWidth = 800;
const browserHeight = 600;

const width = isMobile ? mobileWidth : browserWidth;
const height = isMobile ? mobileHeight : browserHeight;

const EtherBotContainer = styled.div`
  position: absolute;
  width: ${width}px;
  height: ${height}px;
  z-index: 15;
  top: 50%;
  left: 50%;
  margin: -${height / 2}px 0 0 -${width / 2}px;
`

export { width, height };
export default EtherBotContainer
