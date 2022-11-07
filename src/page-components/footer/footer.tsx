import React, {useState} from 'react';
import './footer.scss'
import {Link} from "react-router-dom";

const Footer = () => {
    const [popup_flower, setPopup_flower] = useState<boolean>(false)
    const [popup_roses, setPopup_roses] = useState<boolean>(false)
    const [popup_compositions, setPopup_compositions] = useState<boolean>(false)
    const [popup_presents, setPopup_presents] = useState<boolean>(false)
    const [popup_bouquets, setPopup_bouquets] = useState<boolean>(false)
    const [popup_balloons, setPopup_balloons] = useState<boolean>(false)
    const [popup_informations, setPopup_informations] = useState<boolean>(false)
    const [popup_coordinates, setPopup_coordinates] = useState<boolean>(false)
    return (
        <div className={'footer'}>
           <div className={'popup_flower popup'}>
               <div
                   onClick={()=>{setPopup_flower(!popup_flower)}}
                   className={'popup_title'}>
                   <h3>Цветы поштучно</h3>
                   <img alt={'arrow'}
                        src={require('../../image/svgIcons/Arrow.svg').default}
                        className={popup_flower ? 'popup_arr active' : 'popup_arr'}
                   ></img>
               </div>
                <div className={popup_flower ? 'popup_flower_content active' : 'popup_flower_content'}>
                    <Link to={'/'}>Розы поштучно</Link>
                    <Link to={'/'}>Кустовая роза</Link>
                    <Link to={'/'}>Пионовидная роза</Link>
                    <Link to={'/'}>Хризантемы поштучно</Link>
                    <Link to={'/'}>Альстромерия</Link>
                    <Link to={'/'}>Тюльпаны</Link>
                    <Link to={'/'}>Герберы поштучно</Link>
                    <Link to={'/'}>Лилии поштучно</Link>
                    <Link to={'/'}>Пионы</Link>
                    <Link to={'/'}>Эустома</Link>
                    <Link to={'/'}>Каллы поштучно</Link>
                    <Link to={'/'}>Маттиола</Link>
                </div>
           </div>
            <div className={'popup_roses popup'}>
                <div
                    onClick={()=>{setPopup_roses(!popup_roses)}}
                    className={'popup_title'}>
                    <h3>Розы</h3>
                    <img alt={'arrow'}
                         src={require('../../image/svgIcons/Arrow.svg').default}
                         className={popup_roses ? 'popup_arr active' : 'popup_arr'}
                    ></img>
                </div>
                <div className={popup_roses ? 'popup_flower_content active' : 'popup_flower_content'}>
                    <Link to={'/'}>Голландские розы</Link>
                    <Link to={'/'}>Местные розы</Link>
                    <Link to={'/'}>Кустовые розы</Link>
                    <Link to={'/'}>Пионовидные розы</Link>
                    <Link to={'/'}>Букет из 101 розы</Link>
                </div>
            </div>
            <div className={'popup_compositions popup'}>
                <div
                    onClick={()=>{setPopup_compositions(!popup_compositions)}}
                    className={'popup_title'}>
                    <h3>Композиции</h3>
                    <img alt={'arrow'}
                         src={require('../../image/svgIcons/Arrow.svg').default}
                         className={popup_compositions ? 'popup_arr active' : 'popup_arr'}
                    ></img>
                </div>
                <div className={popup_compositions ? 'popup_flower_content active' : 'popup_flower_content'}>
                    <Link to={'/'}>Ящик с цветами</Link>
                    <Link to={'/'}>Коробки с цветами</Link>
                    <Link to={'/'}>Корзины с цветами</Link>
                </div>
            </div>
            <div className={'popup_presents popup'}>
                <div
                    onClick={()=>{setPopup_presents(!popup_presents)}}
                    className={'popup_title'}>
                    <h3>Подарки</h3>
                    <img alt={'arrow'}
                         src={require('../../image/svgIcons/Arrow.svg').default}
                         className={popup_presents ? 'popup_arr active' : 'popup_arr'}
                    ></img>
                </div>
                <div className={popup_presents ? 'popup_flower_content active' : 'popup_flower_content'}>
                    <Link to={'/'}>Мягкие игрушки</Link>
                    <Link to={'/'}>Коробки конфет</Link>
                </div>
            </div>
            <div className={'popup_bouquets popup'}>
                <div
                    onClick={()=>{setPopup_bouquets(!popup_bouquets)}}
                    className={'popup_title'}>
                    <h3>Букеты</h3>
                    <img alt={'arrow'}
                         src={require('../../image/svgIcons/Arrow.svg').default}
                         className={popup_bouquets ? 'popup_arr active' : 'popup_arr'}
                    ></img>
                </div>
                <div className={popup_bouquets ? 'popup_flower_content active' : 'popup_flower_content'}>
                    <Link to={'/'}>Сборные букеты</Link>
                    <Link to={'/'}>Букеты из тюльпанов</Link>
                    <Link to={'/'}>Букеты из хризантем</Link>
                    <Link to={'/'}>Букеты из Альстромерий</Link>
                    <Link to={'/'}>Букеты из эустом</Link>
                    <Link to={'/'}>Букеты Гипсофилы</Link>
                    <Link to={'/'}>Букеты из гербер</Link>
                    <Link to={'/'}>Букеты из пионов</Link>
                    <Link to={'/'}>Букеты из тюльпанов</Link>
                </div>
            </div>
            <div className={'popup_bouquets popup'}>
                <div
                    onClick={()=>{setPopup_balloons(!popup_balloons)}}
                    className={'popup_title'}>
                    <h3>Шары</h3>
                    <img alt={'arrow'}
                         src={require('../../image/svgIcons/Arrow.svg').default}
                         className={popup_balloons ? 'popup_arr active' : 'popup_arr'}
                    ></img>
                </div>
                <div className={popup_balloons ? 'popup_flower_content active' : 'popup_flower_content'}>
                    <Link to={'/'}>Шары в виде цифр</Link>
                    <Link to={'/'}>Фольгированные шары</Link>
                    <Link to={'/'}>Латексные шары</Link>
                </div>
            </div>
            <div className={'popup_bouquets popup'}>
                <div
                    onClick={()=>{setPopup_informations(!popup_informations)}}
                    className={'popup_title'}>
                    <h3>Информация</h3>
                    <img alt={'arrow'}
                         src={require('../../image/svgIcons/Arrow.svg').default}
                         className={popup_informations ? 'popup_arr active' : 'popup_arr'}
                    ></img>
                </div>
                <div className={popup_informations ? 'popup_flower_content active' : 'popup_flower_content'}>
                    <Link to={'/'}>Доставка</Link>
                    <Link to={'/'}>Оплата</Link>
                    <Link to={'/'}>Отзывы</Link>
                    <Link to={'/'}>Блог</Link>
                    <Link to={'/'}>Гарантии</Link>
                    <Link to={'/'}>Вопрос и ответ</Link>
                    <Link to={'/'}>Корпоративным клиентам</Link>
                    <Link to={'/'}>О компании</Link>
                    <Link to={'/'}>Контакты</Link>
                </div>
            </div>
            <div className={'popup_bouquets popup'}>
                <div
                    onClick={()=>{setPopup_coordinates(!popup_coordinates)}}
                    className={'popup_title'}>
                    <h3>Наши координаты</h3>
                    <img alt={'arrow'}
                         src={require('../../image/svgIcons/Arrow.svg').default}
                         className={popup_coordinates ? 'popup_arr active' : 'popup_arr'}
                    ></img>
                </div>
                <div className={popup_coordinates ? 'popup_flower_content active' : 'popup_flower_content'}>
                    <div className={'coordinates_block'}>
                        <p>Служба Доставки</p>
                        <h3>+7 (920) 211-49-03</h3>
                    </div>
                    <div className={'coordinates_block'}>
                        <p>Ул. Вл. Невского 17</p>
                        <h3>+7 (920) 211-49-03</h3>
                    </div>
                    <div className={'coordinates_block'}>
                        <p>Ул. Революции 1905 года 80</p>
                        <h3>+7 (906) 678-65-99</h3>
                    </div>
                    <div className={'coordinates_block'}>
                        <p>E-mail:</p>
                        <br/>
                        <h5>info@lavkaroz.ru</h5>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;