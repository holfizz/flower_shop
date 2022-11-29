import React from 'react';
import FlowerPost from "../flowerPost/flowerPost";
import './flowerList.scss'
import {useTypedSelector} from "../../../hooks/useTypedSelector";



const FlowerList = () => {
    const flowers = useTypedSelector(state => state.select.flowers)
    return (
        <div className={'flower_list'}>
            {
                flowers.map((flower:any, id:number)=>{

                    return(
                        <FlowerPost
                            key={id}
                            title={flower.title}
                            description={flower.description}
                            price={flower.price}
                            image={flower.image}
                            selection={flower.selection}
                            post={flower}
                            add={false}
                            id={id+1}
                            cartQuantity={flower.cartQuantity}
                            total={flower.total}

                        />


                    )
                })
            }
        </div>
    );
};

export default FlowerList;