import React, {FC} from 'react';
import './circle.scss'

interface cirlce {
    image:any
}

const Circle : FC <cirlce> = ({image}) => {
    return (
        <div className={'circle'}>
            <img src={image} alt="circle"/>
        </div>
    );
};

export default Circle;