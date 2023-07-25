import styled, { keyframes } from 'styled-components';

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

export const ContactsList = styled.ul`
  margin-top: 10px;
`;

export const ContactsItem = styled.li`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  padding: 10px;
  border-radius: 15px;
  box-shadow: ${({ theme: { colors } }) => colors.itemShadow};
  animation: ${showUp} 400ms ease-in-out;
`;

export const ContactName = styled.p`
  text-align: left;
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme: { colors } }) => colors.primaryColorText};
  margin-bottom: 10px;
`;

export const ContactNumber = styled.p`
  text-align: left;
  font-size: 16px;
  color: ${({ theme: { colors } }) => colors.contactColorText};
`;

export const ButtonDelete = styled.button`
  padding: 7px 15px;
  font-size: 16px;
  background-color: ${({ theme: { colors } }) => colors.bgAlfa};
  border: 1px solid ${({ theme: { colors } }) => colors.black};
  border-radius: 35px;
  font-size: 14px;
  color: ${({ theme: { colors } }) => colors.text};
  transition: background 300ms ${({ theme: { colors } }) => colors.cubicBezier},
    color 300ms ${({ theme: { colors } }) => colors.cubicBezier},
    box-shadow 300ms ${({ theme: { colors } }) => colors.cubicBezier},
    transform 300ms ${({ theme: { colors } }) => colors.cubicBezier};

  :hover {
    transform: scale(1.1);
    outline: none;
    color: rgb(255, 255, 255);
    background: rgb(0, 140, 255);
    border: 1px solid rgb(0, 140, 255);
    text-shadow: rgb(255, 255, 255) 0px 0px 5px, rgb(255, 255, 255) 0px 0px 10px,
      rgb(255, 255, 255) 0px 0px 20px;
    box-shadow: rgb(0, 140, 255) 0px 0px 5px, rgb(0, 140, 255) 0px 0px 20px,
      rgb(0, 140, 255) 0px 0px 50px, rgb(0, 140, 255) 0px 0px 100px;
  }
`;
