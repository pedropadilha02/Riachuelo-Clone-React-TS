import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const ErroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
`;

const Img404 = styled.img`
  border-radius: 50%;
  width: 30%;
`;

const ErroTxt = styled.p`
  font-style: italic;
  margin-bottom: 10px;
`;

const Errobutton = styled.button`
  border: none;
  padding: 5px 8px;
  background-color: #2b0b7a;
  color: white;
  border-radius: 5px;
  white-space: nowrap;

  &:hover {
    background-color: #0d6e24;
    transition: 1s;
  }
`;

export function Error404() {
  const history = useHistory();
  function handleCancel() {
    history.push('/');
  }

  return (
    <ErroContainer>
      <Img404 src="http://localhost:3000/assets/astronault.png" />
      <ErroTxt>erro 404</ErroTxt>
      <Errobutton onClick={handleCancel}>Volte para Terra</Errobutton>
    </ErroContainer>
  );
}
