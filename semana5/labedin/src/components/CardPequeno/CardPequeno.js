import React from 'react';
import {SmallCard} from './Styles'

function CardPequeno(props) {
    return (
      <SmallCard>
            <img src={ props.imagem } />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
        </SmallCard>
    )
}

export default CardPequeno;