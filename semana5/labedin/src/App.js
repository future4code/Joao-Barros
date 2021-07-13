import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import foto from './img/bear.jpg';
import email from './img/email.png';
import mapa from './img/map.png';
import Exp from './components/Experiencia/Exp'
import labenu from './img/labenu.gif';
import anhembi from './img/anhembi.jpg';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={foto} 
          nome="João Pedro Correia Barros"
          descricao="I'm currently exploring the possibilities that JavaScript offers to develop web applications with React and Node.js."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
      <div className="page-section-container">
        <CardPequeno 
          imagem={email}
          nome="Email"
          descricao="jpedro@flaticon.com"
        />
      </div>
      <div className="page-section-container">
        <CardPequeno 
          imagem={mapa}
          nome="Endereço"
          descricao="Rua dos bobos"
        />
      </div>
      <div className="page-section-container">
        <h2>Experiências acadêmica</h2>
        <Exp 
          imagem={labenu}
          nome="Labenu" 
          descricao="cara na boa sem paciencia pra preencher isso em todo lugar, to no linkedin." 
        />
        
        <Exp 
          imagem={anhembi}
          nome="Anhembi Morumbi" 
          descricao="mesma coisa de cima." 
        />
      </div>
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="sei la" 
          descricao="cara na boa sem paciencia pra preencher isso em todo lugar, to no linkedin." 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="sei la 2" 
          descricao="mesma coisa de cima." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
