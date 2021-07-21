import { Container } from "../styles";
import { Title } from "../styles";

function Etapa2() {
  return (
    <Container>
      <Title>
        <h5>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h5>
      </Title>
      <Container>
        <label>5. Qual curso?</label>
        <input type="text" />
        <label>6. Qual a unidade de ensino?</label>
        <input type="text" />
      </Container>
    </Container>
  );
}

export default Etapa2;