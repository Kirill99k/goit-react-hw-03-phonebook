import styled, { keyframes } from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

const showUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(25px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const FormStyle = styled(Form)`
  width: 400px;
  background-color: ${({ theme: { colors } }) => colors.bgAlfa};
  padding: 20px;
  border-radius: 10px;
  box-shadow: ${({ theme: { colors } }) => colors.shadow};
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const InputName = styled(Field)`
  width: 330px;
  padding: 5px 15px;
  font-size: 18px;
  outline: none;
  border: 1px solid ${({ theme: { colors } }) => colors.border};
  background-color: transparent;
  border-radius: 10px;
  color: ${({ theme: { colors } }) => colors.text};
  transition: box-shadow 300ms ${({theme: {colors}}) => colors.cubicBezier},
    border-color 300ms ${({theme: {colors}}) => colors.cubicBezier};

  :hover {
    box-shadow: 0 0 5px ${({ theme: { colors } }) => colors.border};
  }
  :focus {
    box-shadow: inset 0 0 10px ${({ theme: { colors } }) => colors.inputShadow};
  }
`;

export const InputLabel = styled.label`
  font-size: 20px;
  font-weight: bold;
  color: ${({theme: {colors}}) => colors.primaryColorText};
  margin-bottom: 5px;
`;

export const Button = styled.button`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
  background-color: ${({ theme: { colors } }) => colors.bgAlfa};
  border: 1px solid ${({ theme: { colors } }) => colors.black};
  border-radius: 35px;
  font-size: 16px;
  font-family: inherit;
  font-weight: 600;
  color: ${({ theme: { colors } }) => colors.text};
  transition: background 300ms ${({theme: {colors}}) => colors.cubicBezier}, color 300ms ${({theme: {colors}}) => colors.cubicBezier}, box-shadow 300ms ${({theme: {colors}}) => colors.cubicBezier}, transform 300ms ${({theme: {colors}}) => colors.cubicBezier};

  :hover {
    transform: scale(1.1);
    outline: none;
    color: rgb(255, 255, 255);
    background: rgb(0, 140, 255);
    border: 1px solid rgb(0, 140, 255);
    text-shadow: rgb(255, 255, 255) 0px 0px 5px, rgb(255, 255, 255) 0px 0px 10px, rgb(255, 255, 255) 0px 0px 20px;
    box-shadow: rgb(0, 140, 255) 0px 0px 5px, rgb(0, 140, 255) 0px 0px 20px, rgb(0, 140, 255) 0px 0px 50px, rgb(0, 140, 255) 0px 0px 100px;
  }
`;

export const ErrorMessageStyle = styled(ErrorMessage)`
  width: 330px;
  font-size: 18px;
  text-align: center;
  color: ${({ theme: { colors } }) => colors.red};
  animation: ${showUp} 400ms ease-in-out;
`;