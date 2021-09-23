import React, { useEffect, useState } from 'react';
import tarot from '../tarot.json';
import styled from 'styled-components';
import Header from '../components/Header';

const MainContainer = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 40px;
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 40px;
`;

const MainPage = () => {
  const cards = tarot.cards;
  const [newArray, setNewArray] = useState([])

  const imagesUrl = tarot.imagesUrl;
  const imageBackCard = tarot.imageBackCard;


  const showCards = cards.map((card) => {
    return <img key={card.name} src={`${imagesUrl}${card.image}`} alt={card.name} />;
  });

  const shuffleArray = (cards) => {
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    return cards;
  }

  console.log(cards);

  return (
    <MainContainer>
      <Header />
      <div>
        <button onClick={() => shuffleArray(cards)}>Jogar</button>
      </div>  
      <CardsContainer>{showCards}</CardsContainer>
    </MainContainer>
  );
};

export default MainPage;
