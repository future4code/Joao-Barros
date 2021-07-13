import React from 'react';
import { ExpStyle } from './Styles';

function Exp(props) {
    return (
        <ExpStyle>
            <img src={ props.imagem } />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
        </ExpStyle>
    )
}

export default Exp;