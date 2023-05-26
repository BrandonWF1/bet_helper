import React, {useEffect} from 'react';
import MatchesItem from "./MatchesItem";
import {useParams} from "react-router-dom";
import {fetchMatchesThunk} from "../store/AsyncThunks/fetchMatchesThunk";
import {useDispatch, useSelector} from "react-redux";
import logo1 from '../assets/logo.png'
import logo2 from '../assets/beer.png'

const MatchesList = () => {

    const dispatch = useDispatch()
    const {category} = useParams()
    const {loading, matches, error} = useSelector(state => state.MatchesSlice)

    console.log(category)
    useEffect(() => {
        dispatch(fetchMatchesThunk(category))
    }, [])

    return (
        <div>
            {loading ? 'loading' :
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