import styled from "styled-components";

const P = styled.p`
  font-size: 24px;
  color: red;
`;

const Content = styled.div`
  padding: 20px 25px;
`;
// Ejemplo de componente usando los props para dar un estilo determinado
const Button = styled.button`
  background-color: ${(props) => (props.primary ? "red" : "white")};
  color: ${(props) => (props.primary ? "white" : "red")};
  padding: 10px 15px;
  border: solid 2px red;
  border-radius: 4px;
  margin-left: 5px;
  margin-bottom: 10px;
`;
// Extendemos(Copiamos las propiedades) del componente Button
// y creamos un nuevo componente con mas propiedades
const BlockButton = styled(Button)`
  width: 100%;
  font-size: 24px;
`;

function App() {
  return (
    <Content>
      <P>Hola soy un parrafo</P>
      <Button primary={true}>Enviar</Button>
      <Button primary={false}>Enviar</Button>
      <BlockButton primary>Enviar Grande</BlockButton>
      <BlockButton>Enviar Grande</BlockButton>
    </Content>
  );
}

export default App;
