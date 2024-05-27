import React from 'react';
import '../fonts.css'

const MatchesItem = ({sportName,teams, match}) => {


    const homeTeam = teams.find((team)=> team.id === match.home_team_id )
    console.log(homeTeam)
    const awayTeam = teams.find((team)=> team.id === match.away_team_id )

    const checkTeam = (team) => {
        if (sportName === "Футбол") {
            const teamGoalChance = team.avg_goals/team.avg_shots_on_target
            const teamFoulPenaltyToPossesion = (90 * (team.avg_possesion_percent/100)) - (90/team.avg_fouls)
            return teamGoalChance * teamFoulPenaltyToPossesion
        }
        if (sportName ==="Баскетбол") {
            const teamPenalty = 40/team.avg_fouls
            const teamReboundPenalty = team.avg_rebounds/teamPenalty
            const freeThrowEfficiency = teamReboundPenalty * team.avg_free_throw
            return team.avg_points * (freeThrowEfficiency/100) // team coef
        }
        if (sportName ==="Хоккей") {
            const goalProbability = team.avg_goals / team.avg_shots_on_target;
            const fullStrengthTime = 60 - team.avg_penalty_minutes;
            const blockedShotsImpact = team.avg_shots_blocked_or_missed;

            // Коэффициент эффективности команды
            return  (goalProbability * fullStrengthTime) / (blockedShotsImpact + 1);
        }
    }

    const findPercentages = (team1Efficiency, team2Efficiency) => {
        const percent1 = team1Efficiency/((team1Efficiency + team2Efficiency)/100)
        const percent2 = team2Efficiency/((team1Efficiency + team2Efficiency)/100)
        return {
            winChance1: percent1.toFixed(2),
            winChance2: percent2.toFixed(2)
        }
    }
    const homeTeamEfficiency = checkTeam(homeTeam)
    const awayTeamEfficiency = checkTeam(awayTeam)

    const chances = findPercentages(homeTeamEfficiency, awayTeamEfficiency)

    return (
        <div className={'border-8 w-1/2 mx-auto rounded-xl border-purple-800 border-double p-5 mb-10 hover:shadow-2xl match_border hover:scale-105 duration-300'}>
            <div className={'flex justify-between'}>
                    <div className={'flex flex-col items-center justify-center w-full'}>
                        <div className={'fontNew-en text-2xl team_name'}>{homeTeam.name}</div>
                        <img src={homeTeam.logo} alt="logoTeam1" className={'team_logo'}/>
                        <div className={'fontNew-en font-bold coef text-2xl'}>{chances.winChance1}%</div>
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
                </div>
            </div>
        </div>
    );
};

export default MatchesItem;