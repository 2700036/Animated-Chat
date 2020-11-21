import { motion } from 'framer-motion';
import React from 'react';
import styled, { css, keyframes } from 'styled-components';


const loader = keyframes`
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(0.6);
}
`;

const StyledTyping = styled(motion.div)`
   {
    display: grid;
    grid-template-columns: 55px auto 55px;
    width: 100%;
    margin-bottom: 10px;
    & .dots {
      grid-column-start: 2;
      display: flex;
      justify-content: space-between;
      background: rgba(88, 141, 82, 0.5);
      padding: 10px;
      border-radius: 50px;
      width: 70px;
      ${props => props.isRight ? css`
      margin-left: auto;
      ` : css`
      margin-right: auto;
      `}
      & div {
        height: 10px;
        width: 10px;
        border-radius: 50%;
        background: #588d52;
        animation: ${loader} 1.5s infinite;
      }
      & div:not(:last-child) {
        margin-right: 8px;
      }
      & div:first-child {
        animation-delay: 0.1s;
      }
      & div:nth-child(2) {
        animation-delay: 0.2s;
      }
      & div:last-child {
        animation-delay: 0.3s;
      }
    }
    
  }
`;

export default function Typing({...props}) {
  return (
    <StyledTyping {...props}
    initial={{rotate: 25, scale: 0}} 
    animate={{rotate: 0, scale: 1}}
    >
      <div className="dots">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </StyledTyping>
  );
}
