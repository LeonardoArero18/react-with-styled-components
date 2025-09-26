import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  border-radius: 20px;
  background-color: #f0f0f0;
`;

const Botao = styled.button`
  color: ${(props) => (props.primary ? 'white' : 'blue')};
  background-color: ${(props) => (props.primary ? 'blue' : 'white')}; 
  border: 1px solid blue;
`;

function App() {

  const handleOnClick1 = () => {
    console.log('Botão 1 clicado!');
  };

  const handleOnClick2 =()=>{
    console.log('Botão 2 clicado!');
  }

  return (
    <Container>
      <Botao primary="true" onClick={handleOnClick1}>Clique Aqui</Botao>
      <Botao onClick={handleOnClick2}>Ou Aqui</Botao>
    </Container>
  );
}

export default App;
