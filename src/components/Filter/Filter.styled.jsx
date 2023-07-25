import styled from 'styled-components';

export const InputGroup = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;
export const Label = styled.label`
  text-align: center;
  font-size: 22px;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  margin: 0 auto;
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