import React from 'react'
import styled from 'styled-components';
import { motion } from "framer-motion"


const StyledMessage = styled(motion.div)`
  display: grid;
  grid-template-columns: 55px auto 55px;
  width: 100%;
  margin-bottom: 10px;
  font-size: 23px;
  &:last-child {
    margin-bottom: 0;
  }
  &:nth-child(even) {
    .text {
      justify-content: flex-end;
      background-color: #ae2e38;
    }
  }
  &:nth-child(even) > div:first-child {
    opacity: 0;
  }
  &:nth-child(odd) > div:last-child {
    opacity: 0;
  }
  & .avatar {
    font-size: 40px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & .text {
    padding: 0.75rem;
    border-radius: 0.5rem;
    background-color: #cd9b3e;
    color: #ebf8ff;
    display: flex;
    align-items: center;
  }
`;


export default function Message ({message}){

  return (
    <StyledMessage className="message" 
    initial={{rotate: -5, scale: 0}} 
    animate={{rotate: 0, scale: 1}}
    
    >
      <div className="avatar">🐸</div>
      <div className="text">{message.text}</div>      
      <div className="avatar">🐙</div>
    </StyledMessage>  
  )
}