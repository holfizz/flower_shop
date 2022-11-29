import React, {FC} from 'react';
import './flowerPostCart.scss'
import {Product} from "../../../types/product";
import {useDispatch} from "react-redux";
import {addToCart, increment, removeItem} from "../../../store/reducers/CartControl";
import {CiCircleRemove} from "react-icons/ci";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
const FlowerPostCart : FC<Product> = ({add,id,image,selection,post,description,title, cartQuantity, price}) => {
    const dispatch =useDispatch()
    const posts = useTypedSelector(state => state.cartControl.cart)


    return (
        <div  className={'flowerPostCart'}>
            <img className={'imageFlowerPostCart'} src={image} alt={'cart data'}></img>
            <h3 className={'titleFlowerPostCart'}>{title}</h3>
            <div className={'counterFlower'}>
                <h2 onClick={()=>{dispatch(increment(post))}}>-</h2>
                {cartQuantity}
                <h2 onClick={()=>{dispatch(addToCart(post))}}>+</h2>
            </div>
            <h3 className={'flowerPostCartPrice'} >{price}₽</h3>
            <button onClick={()=>{dispatch(removeItem(post))}} className={'cartRemoveButton'}><CiCircleRemove/></button>
        </div>
    );
};

export default FlowerPostCart;