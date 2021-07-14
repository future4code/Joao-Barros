import React from 'react';
import { ImageButtonStyles } from './ImagemButtonStyles';

function ImagemButton(props) {
    return (
        <ImageButtonStyles>
            <img src={ props.imagem }/>
            <p>{ props.texto }</p>
        </ImageButtonStyles>

    )
}

export default ImagemButton;