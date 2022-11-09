import React from 'react';
import './buttonToCart.scss'

const ButtonToCart = () => {
    return (
        <div className={'button'}>
            <img alt={'cart'} src={require('../../../image/svgIcons/shopping-cart-basket-3--shopping-basket.svg').default}></img>
               В корзину
        </div>
    );
};

export default ButtonToCart;