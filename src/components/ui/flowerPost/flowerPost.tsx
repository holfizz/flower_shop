import React, {FC, useState} from 'react';
import './flowerPost.scss'
import ButtonToCart from "../buttonToCart/buttonToCart";

interface flowerPost {
    title: string;
    description: string;
    price: number;
    img: any;
}


const FlowerPost : FC <flowerPost>= ({title, description, price, img}) => {
    const [favorites, setFavorites] = useState<boolean>(false)


    return (
        <div className={'flowerPost'}>
            {
                favorites ?
                    <div onClick={()=>{setFavorites(!favorites)}} className={'heart_flower_post'}><img alt={'heart'} src={require(`../../../image/svgIcons/heart_red.svg`).default}></img></div>
                    :
                    <div onClick={()=>{setFavorites(!favorites)}} className={'heart_flower_post'}><img alt={'heart'} src={require(`../../../image/svgIcons/interface-favorite-heart--reward-social-rating-media-heart-it-like-favorite-love.svg`).default}></img></div>
            }
            {img}
            <div className={'flower_title'}>{title}</div>
            <div className={'flower_description'}>{description}</div>
            <div className={'lower_block_flower_post'}>
                <div className={'flower_price'}>
                    <div className={'salePrice'}>{price-2000}</div>
                    <div className={'originalPrice'}>{price}</div>
                </div>
                <ButtonToCart></ButtonToCart>
            </div>

        </div>
    );
};

export default FlowerPost;