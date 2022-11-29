import React, {MutableRefObject, useRef, useState} from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import Header from "../../page-components/header/header";
import Footer from "../../page-components/footer/footer";
import FlowerPostCart from "../../components/ui/flowerPostCart/flowerPostCart";
import  './cart.scss'
import {useDispatch} from "react-redux";
import {clearCart} from "../../store/reducers/CartControl";
import {BsArrowRight} from "react-icons/bs";
import {promoCodes} from "../../data/promoCodes";

const Cart = () => {
    const flowersInCart = useTypedSelector(state => state.cartControl.cart)
    const quantity = useTypedSelector(state => state.cartControl.cartTotalQuantity)
    const totalPrice = useTypedSelector(state => state.cartControl.cartTotalPrice)
    const dispatch= useDispatch()
    const [inputValue, setInputValue] = useState('')
    const inputRef = useRef() as MutableRefObject<HTMLInputElement>
    function promoCheck() {
        promoCodes.forEach((promoCode :string)=>{
            if(inputValue.toLowerCase() === promoCode.toLowerCase()){
                console.log(true)
                inputRef.current.style.border ='1px solid green'
            }else if(inputValue.length !==1){
                inputRef.current.style.border ='1px solid red'
            }else if(inputValue.length<=1){
                inputRef.current.style.border ='1px solid #D0D2D7'

            }
        })
    }
    //I know that this is not the way to do it for the test
    return (
        <div >
            <Header onClick={()=>{}}></Header>

            <h1>
                Корзина
            </h1>
            <div className={'cartControl'}>
                <h3 className={'cartListTitle'}>
                    Товары в корзине
                </h3>
                <h3  onClick={()=>{dispatch(clearCart())}} className={'cartClear'}>
                    Очистить корзину
                </h3>
            </div>

            <div className={'cartList'}>
                {
                    flowersInCart.map((cartItem:any, index:number) => (
                        <FlowerPostCart
                            key={index}
                            post={cartItem}
                            title={cartItem.title}
                            image={cartItem.image}
                            description={cartItem.description}
                            selection={cartItem.selection}
                            price={cartItem.price}
                            add={true}
                            id={index+1}
                            cartQuantity={cartItem.cartQuantity}
                            total={cartItem.total}
                        />
                    ))
                }
            </div>
            {
                flowersInCart.length >0
                    ?
                    <div className={'paymentBlock'}>
                        <div className={'payment'}>
                            <div className={'paymentTotal'}>
                                <h1>Итого:</h1>
                                <h1>{totalPrice}₽</h1>
                            </div>
                            <div className={'paymentDescription'}>
                                <div className={'priceSeparately'}>
                                    <h3>{quantity} товара(-ов)</h3>
                                    <h3 className={'numberPrice'}>
                                        {totalPrice + (quantity *1599)}
                                    </h3>
                                </div>
                                <div className={'priceSeparately'}>
                                    <h3>Скидка </h3>
                                    <h3 className={'numberPrice'}>
                                        <span>-{quantity*1599}₽</span>
                                    </h3>
                                </div>
                                <div className={'priceSeparately'}>
                                    <h3>Доставка </h3>
                                    <h3 className={'numberPrice'}>
                                        {totalPrice > 7000 ? 'Бесплатно' : '349₽'}
                                    </h3>
                                </div>
                            </div>
                            <div className={'paymentPromo'}>
                                <input ref={inputRef} onChange={(e)=>{setInputValue(e.target.value)
                                    promoCheck()
                                }} className={'inputPayment'} placeholder={'Промокод'}></input>
                                <div className={'furtherPayment'}>
                                    <BsArrowRight/>
                                </div>
                            </div>
                            <button className={'buttonPayment'}>Оформить заказ</button>
                        </div>
                    </div>
                    :''
            }
            <Footer></Footer>

        </div>
    );
};

export default Cart;