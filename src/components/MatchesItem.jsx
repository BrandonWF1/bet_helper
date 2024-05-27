import React from 'react';
import '../fonts.css'

const MatchesItem = ({sportName, teams, match}) => {


    const homeTeam = teams.find((team) => team.id === match.home_team_id)
    const awayTeam = teams.find((team) => team.id === match.away_team_id)

    const checkTeam = (team) => {
        if (sportName === "Футбол") {
            const teamGoalChance = team.avg_goals / team.avg_shots_on_target
            const teamFoulPenaltyToPossesion = (90 * (team.avg_possesion_percent / 100)) - (90 / team.avg_fouls)
            return teamGoalChance * teamFoulPenaltyToPossesion
        }
        if (sportName === "Баскетбол") {
            const teamPenalty = 40 / team.avg_fouls
            const teamReboundPenalty = team.avg_rebounds / teamPenalty
            const freeThrowEfficiency = teamReboundPenalty * team.avg_free_throw
            return team.avg_points * (freeThrowEfficiency / 100) // team coef
        }
        if (sportName === "Хоккей") {
            const goalProbability = team.avg_goals / team.avg_shots_on_target;
            const fullStrengthTime = 60 - team.avg_penalty_minutes;
            const blockedShotsImpact = team.avg_shots_blocked_or_missed;

            // Коэффициент эффективности команды
            return (goalProbability * fullStrengthTime) / (blockedShotsImpact + 1);
        }
    }

    const findPercentages = (team1Efficiency, team2Efficiency) => {
        const percent1 = team1Efficiency / ((team1Efficiency + team2Efficiency) / 100)
        const percent2 = team2Efficiency / ((team1Efficiency + team2Efficiency) / 100)
        return {
            winChance1: percent1.toFixed(2),
            winChance2: percent2.toFixed(2)
        }
    }
    const homeTeamEfficiency = checkTeam(homeTeam)
    const awayTeamEfficiency = checkTeam(awayTeam)

    const chances = findPercentages(homeTeamEfficiency, awayTeamEfficiency)

    const HockeyStats = ({team}) => {
        return (<div className={'border-4 rounded-xl border-blue-300 border-double p-2 fontNew-ru text-xl info_light font-bold'}>
                <div className='flex'>
                    <div className='mr-2'>
                        Голы:
                    </div>
                    <div className={'font-bold coef'}>
                        {team.avg_goals}
                    </div>
                </div>
                <div className='flex'>
                    <div className='mr-2'>
                        Броски по воротам:
                    </div>
                    <div className={'font-bold coef'}>
                        {team.avg_shots_on_target}
                    </div>
                </div>
                <div className='flex'>
                    <div className='mr-2'>
                        Промахи:
                    </div>
                    <div className={'font-bold coef'}>
                        {team.avg_shots_blocked_or_missed}
                    </div>
                </div>
                <div className='flex'>
                    <div className='mr-2'>
                        Штрафное время, минуты:
                    </div>
                    <div className={'font-bold coef'}>
                        {team.avg_penalty_minutes}
                    </div>
                </div>
            </div>
        )
    }
    const FootballStats = ({team}) => {
        return (<div className={'border-4 rounded-xl border-blue-300 border-double p-2 fontNew-ru text-xl info_light font-bold'}>
                <div className='flex'>
                    <div className='mr-2'>
                        Голы:
                    </div>
                    <div className={'font-bold coef'}>
                        {team.avg_goals}
                    </div>
                </div>
                <div className='flex'>
                    <div className='mr-2'>
                        Владение мячом:
                    </div>
                    <div className={'font-bold coef'}>
                        {team.avg_possesion_percent} %
                    </div>
                </div>
                <div className='flex'>
                    <div className='mr-2'>
                        Штрафы:
                    </div>
                    <div className={'font-bold coef'}>
                        {team.avg_fouls}
                    </div>
                </div>
                <div className='flex'>
                    <div className='mr-2'>
                        Удары по воротам:
                    </div>
                    <div className={'font-bold coef'}>
                        {team.avg_shots_on_target}
                    </div>
                </div>
            </div>
        )
    }
    const BasketballStats = ({team}) => {
        return (<div className={'border-4 rounded-xl border-blue-300 border-double p-2 fontNew-ru text-xl info_light font-bold'}>
                <div className='flex'>
                    <div className='mr-2'>
                        Очки:
                    </div>
                    <div className={'font-bold coef'}>
                        {team.avg_points}
                    </div>
                </div>
                <div className='flex'>
                    <div className='mr-2'>
                        Успех штрафного броска:
                    </div>
                    <div className={'font-bold coef'}>
                        {team.avg_free_throw} %
                    </div>
                </div>
                <div className='flex'>
                    <div className='mr-2'>
                        Фолы:
                    </div>
                    <div className={'font-bold coef'}>
                        {team.avg_fouls}
                    </div>
                </div>
                <div className='flex'>
                    <div className='mr-2'>
                        Подборы:
                    </div>
                    <div className={'font-bold coef'}>
                        {team.avg_rebounds}
                    </div>
                </div>
            </div>
        )
    }



    const renderStats = (sportName, team) => {
        switch (sportName) {
            case "Футбол":
                return <FootballStats team={team}/>
            case "Баскетбол":
                return <BasketballStats team={team}/>
            case "Хоккей":
                return (
                    <HockeyStats team={team}/>
                );
            default:
                return null
        }
    };


    return (
        <div
            className={'border-8 w-1/2 mx-auto rounded-xl border-purple-800 border-double p-5 mb-10 hover:shadow-2xl match_border hover:scale-105 duration-300'}>
            <div className={'flex justify-between'}>
                <div className={'flex flex-col items-center justify-center w-full'}>
                    <div className={'fontNew-en text-2xl team_name'}>{homeTeam.name}</div>
                    <img src={homeTeam.logo} alt="logoTeam1" className={'team_logo'}/>
                    <div className={'fontNew-en font-bold coef text-2xl mb-2'}>{chances.winChance1}%</div>
                    <div className='info_light fontNew-ru text-2xl font-bold mb-2'>Средние показатели за игру</div>
                        {renderStats (sportName, homeTeam)}
                </div>
                <div className={'flex flex-col items-center justify-center w-[70%]'}>
                    <div className={'fontNew-en text-2xl info_light'}>{match.place}</div>
                    <div className={'fontNew-en text-2xl info_light'}>{match.date}</div>
                    <div className={'fontNew-ru text-4xl info_light font-bold'}>{sportName}</div>
                </div>
                <div className={'flex flex-col items-center justify-center w-full'}>
                    <div className={'fontNew-en text-2xl team_name'}>{awayTeam.name}</div>
                    <img src={awayTeam.logo} alt="logoTeam1" className={'team_logo'}/>
                    <div className={'fontNew-en font-bold coef text-2xl'}>{chances.winChance2}%</div>
                    <div className='info_light fontNew-ru text-2xl font-bold mb-2'>Средние показатели за игру</div>
                    {renderStats(sportName, awayTeam)}
                </div>
            </div>
        </div>
    );
};

export default MatchesItem;