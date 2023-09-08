import { createGlobalStyle } from 'styled-components';
import { device } from './breakpoints';

export const GlobalStyles = createGlobalStyle`

#root {
  max-width: 1920px;
  margin: 0 auto;
  text-align: center;
}

body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
}

h1 {
  font-size: 14px;
  font-weight: 800;

  @media ${device.md} {
    font-size: 18px;
  }

  @media ${device.lg} {
    font-size: 20px;
  }
}

h2 {
  font-size: 20px;

  @media ${device.sm} {
    font-size: 24px;
  }

  @media ${device.lg} {
    font-size: 28px;
  }
}

h3 {
  font-size: 18px;
  font-weight: 600;
}

h4 {
  font-size: 16px;
}

h5 {
  font-size: 14px;
}

p {
  font-size: 14px;
  font-weight: 600;
}

button {
  border: 0
}

.main-container {
  margin: 0 auto;
  max-width: 1440px;
  padding-left: 25px;
  padding-right: 25px;
  
  @media ${device.md} {
    padding-left: 30px;
    padding-right: 30px;
  }

  @media ${device.lg} {
    padding-left: 80px;
    padding-right: 80px;
  }
}

`;
