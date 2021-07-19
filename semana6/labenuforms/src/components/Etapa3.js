import { Container } from "../styles";
import { Title } from "../styles";

function Etapa3() {
  return (
    <Container>
      <Title>
        <h5>ETAPA 3 - INFORMAÇÕES DE ENSINO</h5>
      </Title>
      <Container>
        <label>5. Por que você não terminou um curso de graduação?</label>
        <input type="text" />
        <label>6. Você fez algum curso complementar?</label>
        <select name="escolaridade">
          <option value="cl">Curso de linguas</option>
          <option value="ct">Curso técnico</option>
          <option value="cp">Curso profissionalizante</option>
        </select>
      </Container>
    </Container>
  );
}

export default Etapa3;