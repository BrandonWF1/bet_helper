import React from 'react';
import {NavLink} from "react-router-dom";

const HomePage = () => {
    return (
        <div className={'flex flex-col items-center justify-center'}>
            <div className={'font-bold text-4xl text-black-500 fontNew-ru'}>
                <span className={'fontNew-en text-3xl text-purple-500 logo_shadow mr-3'}>BET.<span className={'text-blue-500'}>HELPER</span></span>поможет Вам узнать исход
                предстоящих матчей!
            </div>
            <div className={'font-bold text-4xl text-black-500 m-5 fontNew-ru'}>Выберите дисциплину:</div>

            <NavLink className={'m-5 text-6xl hover:bg-blue-300 duration-300 rounded-2xl p-3 fontNew-ru cursor-pointer'}
                     to={'/matches/basketball'}>★ Баскетбол</NavLink>
            <NavLink className={'m-5 text-6xl hover:bg-blue-300 duration-300 rounded-2xl p-3 fontNew-ru cursor-pointer'}
                     to={'/matches/football'}>★ Футбол</NavLink>
            <NavLink className={'m-5 text-6xl hover:bg-blue-300 duration-300 rounded-2xl p-3 fontNew-ru cursor-pointer'}
                     to={'/matches/hockey'}>★ Хоккей</NavLink>

        </div>
    );
};

export default HomePage;