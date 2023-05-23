import React from 'react';
import logo1 from '../assets/logo.png'
import logo2 from '../assets/beer.png'
import '../fonts.css'
const MatchesItem = () => {
    return (
        <div className={'border-8 w-1/2 mx-auto rounded-xl border-black border-double p-5 mb-10'}>
            <div className={'flex justify-evenly'}>
                <div>
                    <div className={'flex flex-col items-center'}>
                        <div className={'fontNew-en text-3xl coef'}>ASU Ballers</div>
                        <img src={logo1} alt="logoTeam1" className={'w-full'}/>
                        <div className={'fontNew-en font-bold coef text-2xl'}>99%</div>
                    </div>
                </div>
                <div className={'flex flex-col items-center'}>
                    <div className={'fontNew-en text-2xl info_light'}>KFC Arena</div>
                    <div className={'fontNew-en text-2xl info_light'}>23.05.2023</div>
                    <div className={'fontNew-ru text-4xl info_light font-bold'}>Баскетбол</div>
                </div>
                <div className={'flex flex-col items-center'}>
                    <div className={'fontNew-en text-3xl coef'}>ASTU UnderBeer</div>
                    <img src={logo2} alt="logoTeam1" className={'w-full'}/>
                    <div className={'fontNew-en font-bold coef text-2xl'}>1%</div>
                </div>
            </div>
        </div>
    );
};

export default MatchesItem;