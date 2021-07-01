import React from 'react';
import styled from "styled-components";


const LoaderContainer = styled.div`
  background: white;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.9;
  display: flex;
  align-items: center;
  justify-content: center;
`

const LoaderBody = styled.div`
  display: inline-block;
  transform: translateZ(1px);

  @keyframes lds-circle {
    0%, 100% {
      animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
    }
    0% {
      transform: rotateY(0deg);
    }
    50% {
      transform: rotateY(1800deg);
      animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
    }
    100% {
      transform: rotateY(3600deg);
    }
  }
  
  & > div {
    display: inline-block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    background: #5BA5E5;
    animation: lds-circle 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
`

export const Loader = () => (
    <LoaderContainer>
        <LoaderBody>
            <div/>
        </LoaderBody>
    </LoaderContainer>
)
