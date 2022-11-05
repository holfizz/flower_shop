import React, {FC, useState} from 'react';
import './header.scss'
import {Link, NavLink} from "react-router-dom";
import Circle from "../../components/ui/circle/circle";

interface header {
    onClick:()=>void;
}

const Header : FC<header> = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [menuActive, setMenuActive] = useState<boolean>(false)
    const[counterCart, setCounterCart] = useState(0)
    const[productsPrice, setProductsPrice] = useState(0)



    return (
        <>
         <div onClick={()=>{setIsVisible(false)}} className={menuActive ? 'upper_block active' : 'upper_block'}>
             <div className={menuActive ? 'section active' : 'section'}>
                 <div className={menuActive ? 'menuBtn active' : 'menuBtn'}
                      onClick={()=>{setMenuActive(!menuActive)}}>
                     <span></span>
                 </div>
             </div>
             <div className={'time_delivery'}>
                 <img alt={'time'} src={require('../../image/svgIcons/interface-time-clock-circle--clock-loading-measure-time-circle.svg').default}></img>
                 <p>Пн-Сб: 8:00–20:00 Вс: 9:00–20:00</p>
             </div>
             <p className={'delivery_city'}>Доставка цветов<br/> в Воронеже</p>

             <div className={menuActive ? 'nav_menu active' : 'nav_menu'}>
                 <NavLink className={'link'} to={'/delivery'}>
                     Доставка
                 </NavLink>
                 <NavLink className={'reviews link'} to={'/reviews'}>
                     Отзывы
                 </NavLink>
                 <NavLink className={'link'} to={'/delivery'}>
                     Блог
                 </NavLink>
                 <NavLink className={'link'} onClick={()=>{setIsVisible(!isVisible)}} to={'/information'}>
                     Информация
                     <img alt={'arrow'} src={require('../../image/svgIcons/Arrow.svg').default}/>
                 </NavLink>
             </div>
             <div style={{display: isVisible ? 'flex' : 'none'}} className={'visible_inf'} >
                 <NavLink to={'/guarantees'}>Гарантии</NavLink>
                 <NavLink to={'/question'}></NavLink>
                 <NavLink to={'/corporation'}>Корпоративным клиентам</NavLink>
                 <NavLink to={'/obout'}>О компани</NavLink>
             </div>
            <div className={'block_header_soc'}>
                <div className={'socials'}>
                    <img width={'30'} alt={'user'} src={require('../../image/svgIcons/vk.svg').default}/>
                    <img width={'30'} alt={'user'} src={require('../../image/svgIcons/inst.svg').default}/>

                </div>
                <div className={'my_orders'}>
                    <img alt={'user'} src={require('../../image/svgIcons/interface-user-single--close-geometric-human-person-single-up-user.svg').default}/>
                    <h2>Мои заказы</h2>
                </div>
            </div>

         </div>
         <div className={'middle_block'}>
             <Link to={'/main'}>
                 <img alt={'logo'} src={require('../../image/logo.svg').default}/>

             </Link>
             <p className={'delivery_flower'}>Доставка цветов<br/> в Воронеже</p>
             <input className={'search'} placeholder={'Поиск по сайту'}></input>

                 <div className={'phone'}>
                     <Circle image={<img alt={'phone'} src={require('../../image/svgIcons/Call.svg').default}></img>}></Circle>
                     <div className={'number'}>
                         <p>+7 (920) 211-49-03</p>
                         <span>Заказать звонок</span>
                     </div>
                 </div>
             <div className={'footer_menu'}>
                 <img className={'home_icon'} alt={'home'} src={require('../../image/svgIcons/interface-home-2--door-entrance-home-house-map-roof-round.svg').default}></img>
                 <img className={'search_icon'} alt={'heart'} src={require('../../image/svgIcons/Search, Menu.svg').default}></img>
                <Circle image={<img alt={'heart'} src={require('../../image/svgIcons/interface-favorite-heart--reward-social-rating-media-heart-it-like-favorite-love.svg').default}></img>}></Circle>
                     <div className={'icons_lower_header cart'}>
                         <Circle image={<img className={'icons_lower_header'} alt={'cart'} src={require('../../image/svgIcons/shopping-cart-basket-3--shopping-basket.svg').default}></img>}/>
                        <div className={'counter'}>{counterCart}</div>
                        <span className={'total'}>{counterCart * productsPrice }</span>
                     </div>
                 <img className={'icons_lower_header'} alt={'heart'} src={require('../../image/svgIcons/interface-user-single--close-geometric-human-person-single-up-user.svg').default}></img>

             </div>
         </div>
         <div className={'lower_block'}></div>
        </>
    );
};

export default Header;