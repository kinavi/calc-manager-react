import styled from "styled-components";

export const SubmitButton = styled.button`
  border: none;
  color: white;
  background: #5BA5E5;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  line-height: 40px;
  font-size: 18px;
  width: 100%;
  margin: 25px auto;
  
  &:focus {
    outline: none;
  }
  
  &:hover {
    
  }

  @media screen and (max-width: 480px) {
    max-width: none;
  }
`
