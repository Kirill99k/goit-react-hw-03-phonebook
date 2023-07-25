import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0 20px;
    margin: 50px auto;
    box-shadow: ${({theme: {colors}}) => colors.shadowContainer};
    background: ${({theme: {colors}}) => colors.bgContainer}; 
    border-radius: 10px;
`

export const TitlePhonebook = styled.h1`
  font-size: 36px;
  color: ${({theme: {colors}}) => colors.primaryColorText};
  margin-bottom: 20px;
`;

export const TitelContacts = styled.h2`
   font-size: 25px;
  font-weight: bold;
  color: ${({theme: {colors}}) => colors.primaryColorText};
  margin-bottom: 20px;
`

export const ContactsContainer = styled.div`
  margin-top: 20px;
  width: 400px;
  background-color: ${({ theme: { colors } }) => colors.bgAlfa};
  padding: 15px;
  text-align: center;
  border-radius: 10px;
  box-shadow: ${({ theme: { colors } }) => colors.shadow};
`;

export const AmountContacts = styled.p`
  font-size: 15px;
`;

export const EmptyText = styled.p`
  font-size: 15px;
`;