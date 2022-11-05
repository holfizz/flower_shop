import React, {FC} from 'react';
import './circle.scss'

interface cirlce {
    image:any
}

const Circle : FC <cirlce> = ({image}) => {
    return (
        <div className={'circle'}>
            {image}
        </div>
    );
};

export default Circle;