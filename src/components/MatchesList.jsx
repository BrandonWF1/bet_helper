import React, {useEffect} from 'react';
import MatchesItem from "./MatchesItem";
import {useParams} from "react-router-dom";
import {fetchMatchesThunk} from "../store/AsyncThunks/fetchMatchesThunk";
import {fetchFootballTeamsThunk} from "../store/AsyncThunks/fetchFootballTeamsThunk";
import {useDispatch, useSelector} from "react-redux";
import Preloader from "./Preloader";
import {fetchBasketballTeamsThunk} from "../store/AsyncThunks/fetchBasketballTeamsThunk";
import {fetchHockeyTeamsThunk} from "../store/AsyncThunks/fetchHockeyTeamsThunk";


const MatchesList = () => {

    const dispatch = useDispatch()
    const {category} = useParams()
    const matchesSlice = useSelector(state => state.MatchesSlice)
    const footballTeamsSlice = useSelector(state => state.FootballTeamsSlice)
    const basketballTeamsSlice = useSelector(state => state.BasketballTeamsSlice)
    const hockeyTeamsSlice = useSelector(state => state.HockeyTeamsSlice)


    useEffect(() => {
        dispatch(fetchMatchesThunk(category))

    }, [category])
    useEffect(() => {
        dispatch(fetchFootballTeamsThunk())
        dispatch(fetchBasketballTeamsThunk())
        dispatch(fetchHockeyTeamsThunk())
    }, []);
    const renderMatchItem = (match, sportName) => {
        switch (sportName) {
            case "Футбол":
                return (
                    <MatchesItem
                        teams={footballTeamsSlice.teams}
                        match={match}
                        sportName={sportName}
                    />
                );
            case "Баскетбол":
                return (
                    <MatchesItem
                        teams={basketballTeamsSlice.teams}
                        match={match}
                        sportName={sportName}
                    />
                );
            case "Хоккей":
                return (
                    <MatchesItem
                        teams={hockeyTeamsSlice.teams}
                        match={match}
                        sportName={sportName}
                    />
                );
            default:
                return null
        }
    };
    return (
        <div>
            {(matchesSlice.loading || footballTeamsSlice.loading || hockeyTeamsSlice.loading ) ?
                <div className={''}>
                <Preloader/>
                </div> :
                <div>
                    {matchesSlice.matches.matches.map(match =>
                    renderMatchItem(match, matchesSlice.matches.sport_name))}
                </div>}
        </div>
    );
};

export default MatchesList;