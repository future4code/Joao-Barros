import { Container } from "../styles";
import { Title } from "../styles";

function Etapa1() {
  return (
    <Container>
      <Title>
        <h5>ETAPA 1 - DADOS GERAIS</h5>
      </Title>
      <Container>
        <label>1. Qual o seu nome?</label>
        <input type="text" />
        <label>2. Qual a sua idade?</label>
        <input type="text" />
        <label>3. Qual o seu email?</label>
        <input type="text" />
        <label>4. Qual a sua escolaridade?</label>
        <select name="escolaridade">
          <option value="ef">Ensino Fundamental</option>
          <option value="em">Ensino Médio</option>
          <option value="es">Ensino Superior</option>
          <option value="pg">Pós Graduação</option>
        </select>
      </Container>
    </Container>
  );
}

export default Etapa1;