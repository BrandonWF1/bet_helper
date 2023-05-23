import React from 'react';
import logo from '../assets/pngwing.com.png'
import {NavLink} from "react-router-dom";
import '../fonts.css'

const Header = () => {
    return (
        <div>
            <header className={'bg-yellow-50 mb-10'}>
            <div className={'container mx-auto'}>
                <div className={'flex justify-between items-center'}>
                    <div className={'w-28 flex items-center font-bold p-5 text-[40px] '}>
                        <img className={'w-full'} src={logo} alt="logo"/>
                        <span className={'pl-1 font-extrabold fontNew-en logo_shadow text-yellow-400'}>BET.</span>
                        <span className={'font-extrabold fontNew-en logo_shadow leading-4 text-blue-500'}>HELPER</span>
                    </div>
                    <div>
                        <NavLink className={({isActive }) => `mr-4 text-3xl fontNew-ru font-bold ${isActive ? 'text-blue-400' : ''}`} to={'/matches/1'}>Баскетбол</NavLink>
                        <NavLink className={({isActive }) => `mr-4 text-3xl fontNew-ru font-bold ${isActive ? 'text-blue-400' : ''}`}  to={'/matches/2'}>Футбол</NavLink>
                        <NavLink className={({isActive }) => `mr-4 text-3xl fontNew-ru font-bold ${isActive ? 'text-blue-400' : ''}`}  to={'/matches/3'}>Хоккей</NavLink>
                    </div>


                    <div className={'font-bold'}>
                        <NavLink className={({isActive }) => `mr-4 text-3xl fontNew-ru font-bold ${isActive ? 'text-blue-400' : ''}`} to={'/about'}>О нас</NavLink>
                    </div>
                </div>
            </div>
            </header>
        </div>
    );
};

export default Header;