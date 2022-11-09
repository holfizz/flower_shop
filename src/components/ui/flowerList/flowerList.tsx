import React, {useState} from 'react';
import FlowerPost from "../flowerPost/flowerPost";
import './flowerList.scss'
interface flowers {
    title:string;
    description:string;
    price:number;
    image:any;
}

const FlowerList = () => {

    const [flowers, setFlowers] = useState <flowers[]>([
        {title:'Букет 25 роз Нежный микс',
            description:'Высота: 60 см, Ширина: 35 см',
            price:15499,
            image:<img alt={'flower'} src={require('../../../image/bouquets/image 45.svg').default}></img>
        },
        {title:'Букет роз Ред наоми 60 см',
            description:'Высота: 60 см, Ширина: 35 см',
            price:15499,
            image:<img alt={'flower'} src={require('../../../image/bouquets/image 44.svg').default}></img>
        },
        {title:'Букет 5 пионовидных роз Мисти баблс',
            description:'Высота: 60 см, Ширина: 35 см',
            price:15499,
            image:<img alt={'flower'} src={require('../../../image/bouquets/image 43.svg').default}></img>
        },
        {title:'Букет роз микс 40 см',
            description:'Высота: 60 см, Ширина: 35 см',
            price:15499,
            image:<img alt={'flower'} src={require('../../../image/bouquets/image 34.svg').default}></img>
        }

    ])
    // @ts-ignore
    return (
        <div className={'flower_list'}>
            {
                flowers.map((flower:any, id:number)=>{
                    return (<FlowerPost key={id} title={flower.title} description={flower.description} price={flower.price} img={flower.image}></FlowerPost>
                    )
                })
            }
        </div>
    );
};

export default FlowerList;