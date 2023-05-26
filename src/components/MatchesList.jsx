import React, {useEffect} from 'react';
import MatchesItem from "./MatchesItem";
import {useParams} from "react-router-dom";
import {fetchMatchesThunk} from "../store/AsyncThunks/fetchMatchesThunk";
import {useDispatch, useSelector} from "react-redux";
import Preloader from "./Preloader";


const MatchesList = () => {

    const dispatch = useDispatch()
    const {category} = useParams()
    const {loading, matches} = useSelector(state => state.MatchesSlice)

    useEffect(() => {
        dispatch(fetchMatchesThunk(category))
    }, [category])

    return (
        <div>
            {loading ?
                <div className={''}>
                <Preloader/>
                </div> :
                <div>
                    {matches.matches.map(match =>
                        <MatchesItem
                        date={match.date}
                        team1_name={match.team1_name}
                        team2_name={match.team2_name}
                        place={match.place}
                        team1_logo={match.team1_logo}
                        team2_logo={match.team2_logo}
                        team1_percent={match.team1_win_percentage}
                        team2_percent={match.team2_win_percentage}
                        sport={matches.sport_name}
                        />
                    )}
                </div>}
        </div>
    );
};

export default MatchesList;