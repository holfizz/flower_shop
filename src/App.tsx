import React from 'react';
import './global style/style.scss'
import Header from "./page-components/header/header";
import Footer from "./page-components/footer/footer";

const App = () => {

    return (
        <div className={'wrapper'}>
            <Header onClick={()=>{}}></Header>
            <Footer></Footer>
        </div>
    );
};

export default App;