import React from 'react';
import Header from "../../page-components/header/header";
import Footer from "../../page-components/footer/footer";
import FlowerList from "../../components/ui/flowerList/flowerList";

const Main = () => {
    return (
        <div>
            <Header onClick={()=>{}}></Header>
            <FlowerList></FlowerList>
            <Footer></Footer>
        </div>
    );
};

export default Main;