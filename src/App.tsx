import React from 'react';
import './global style/style.scss'
import {Route, Routes} from "react-router-dom";
import Cart from "./pages/cart/cart";
import Main from "./pages/main/main";

const App = () => {
    return (
        <div className={'wrapper'}>
            <Routes >
                    <Route element={<Cart/>} path={'/cart'}></Route>
                    <Route element={<Main/>} path={'/'}></Route>
            </Routes>

        </div>
    );
};

export default App;