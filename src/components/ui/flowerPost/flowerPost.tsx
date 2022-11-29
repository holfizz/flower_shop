import React, {FC, useState} from 'react';
import './flowerPost.scss'
import ButtonToCart from "../buttonToCart/buttonToCart";
import {useDispatch} from "react-redux";
import {addSelect} from "../../../store/reducers/select";
import {addToCart} from "../../../store/reducers/CartControl";
import {Product} from "../../../types/product";




const FlowerPost : FC <Product>= ({title, description, price, image, selection, post, add}) => {
    const [favorites, setFavorites] = useState<boolean>(selection)
    const dispatch = useDispatch()
    return (
        <div className={'flowerPost'}>
                    <div style={{width:'40px', height:'40px', background: favorites ? 'red': '#fff'}}
                         onClick={()=>{
                         dispatch(addSelect(post))
                         }}
                         className={'heart_flower_post'}>
                        <img alt={'heart'} src={require(`../../../image/svgIcons/heart_red.svg`).default}></img>
                    </div>

            <img alt={'flower'} src={image}></img>
            <div className={'flower_title'}>{title}</div>
            <div className={'flower_description'}>{description}</div>
            <div className={'lower_block_flower_post'}>
                <div className={'flower_price'}>
                    <div className={'salePrice'}>{price+1599}</div>
                    <div className={'originalPrice'}>{price}</div>
                </div>
                {
                    add ?
                        <div  onClick={()=>{dispatch(addToCart(post))}}><ButtonToCart></ButtonToCart></div> :
                        <div  onClick={()=>{dispatch(addToCart(post))}}><ButtonToCart></ButtonToCart></div>
                }
            </div>

        </div>
    );
};

export default FlowerPost;