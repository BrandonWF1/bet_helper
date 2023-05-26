import React, {useEffect, useState} from 'react';
import logo1 from '../assets/logo.png'
import logo2 from '../assets/beer.png'
import '../fonts.css'
const MatchesItem = ({team1_name, team2_name, team1_percent, team2_percent, team1_logo, team2_logo, date, place, sport}) => {

    const [percent1, setPercent1] = useState(0)
    const [percent2, setPercent2] = useState(0)

    useEffect(()=> {
        const onePercent = (team1_percent + team2_percent)/100
        const t1_percent= Math.round(team1_percent/onePercent)
        const t2_percent= Math.round(team2_percent/onePercent)
        setPercent1(t1_percent)
        setPercent2(t2_percent)
    },[])



    return (
        <div className={'border-8 w-1/2 mx-auto rounded-xl border-purple-800 border-double p-5 mb-10 hover:shadow-2xl match_border hover:scale-105 duration-300'}>
            <div className={'flex justify-between'}>
                    <div className={'flex flex-col items-center justify-center w-full'}>
                        <div className={'fontNew-en text-2xl team_name'}>{team1_name}</div>
                        <img src={team1_logo} alt="logoTeam1" className={'team_logo'}/>
                        <div className={'fontNew-en font-bold coef text-2xl'}>{percent1}%</div>
                    </div>
                <div className={'flex flex-col items-center justify-center w-[70%]'}>
                    <div className={'fontNew-en text-2xl info_light'}>{place}</div>
                    <div className={'fontNew-en text-2xl info_light'}>{date}</div>
                    <div className={'fontNew-ru text-4xl info_light font-bold'}>{sport}</div>
                </div>
                <div className={'flex flex-col items-center justify-center w-full'}>
                    <div className={'fontNew-en text-2xl team_name'}>{team2_name}</div>
                    <img src={team2_logo} alt="logoTeam1" className={'team_logo'}/>
                    <div className={'fontNew-en font-bold coef text-2xl'}>{percent2}%</div>
                </div>
            </div>
        </div>
    );
};

export default MatchesItem;