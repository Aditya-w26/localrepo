import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Baloo+Bhai+2:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Tiro+Devanagari:ital,wght@0,400;0,700;1,400&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    font-family: ${props => props.theme.fonts.primary};
    line-height: 1.6;
    color: ${props => props.theme.colors.black};
    background-color: ${props => props.theme.colors.white};
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: ${props => props.theme.spacing.md};
  }

  h1 {
    font-size: ${props => props.theme.fontSizes['4xl']};
    color: ${props => props.theme.colors.spiritual.saffron};
  }

  h2 {
    font-size: ${props => props.theme.fontSizes['3xl']};
    color: ${props => props.theme.colors.spiritual.red};
  }

  h3 {
    font-size: ${props => props.theme.fontSizes['2xl']};
    color: ${props => props.theme.colors.spiritual.gold};
  }

  p {
    margin-bottom: ${props => props.theme.spacing.md};
    font-size: ${props => props.theme.fontSizes.base};
  }

  a {
    color: ${props => props.theme.colors.spiritual.saffron};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${props => props.theme.colors.spiritual.red};
    }
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    outline: none;
    transition: all 0.3s ease;
  }

  input, textarea, select {
    font-family: inherit;
    font-size: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${props => props.theme.spacing.lg};
  }

  .section {
    padding: ${props => props.theme.spacing['4xl']} 0;
  }

  .text-center {
    text-align: center;
  }

  .text-devanagari {
    font-family: ${props => props.theme.fonts.devanagari};
  }

  .spiritual-gradient {
    background: linear-gradient(135deg, 
      ${props => props.theme.colors.spiritual.saffron} 0%, 
      ${props => props.theme.colors.spiritual.red} 50%, 
      ${props => props.theme.colors.spiritual.gold} 100%);
  }

  .gold-gradient {
    background: linear-gradient(135deg, 
      ${props => props.theme.colors.spiritual.gold} 0%, 
      ${props => props.theme.colors.spiritual.lightGold} 100%);
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    html {
      font-size: 14px;
    }
    
    .container {
      padding: 0 ${props => props.theme.spacing.md};
    }
    
    .section {
      padding: ${props => props.theme.spacing['2xl']} 0;
    }
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    html {
      font-size: 12px;
    }
  }
`;