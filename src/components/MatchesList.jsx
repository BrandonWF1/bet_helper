import React, {useEffect} from 'react';
import MatchesItem from "./MatchesItem";
import {useParams} from "react-router-dom";
import {fetchMatchesThunk} from "../store/AsyncThunks/fetchMatchesThunk";
import {fetchFootballTeamsThunk} from "../store/AsyncThunks/fetchFootballTeamsThunk";
import {useDispatch, useSelector} from "react-redux";
import Preloader from "./Preloader";


const MatchesList = () => {

    const dispatch = useDispatch()
    const {category} = useParams()
    const matchesSlice = useSelector(state => state.MatchesSlice)
    const footballTeamsSlice = useSelector(state => state.FootballTeamsSlice)
    // const {loading, hockeyTeams} = useSelector(state => state.MatchesSlice)
    // const {loading, basketballTeams} = useSelector(state => state.MatchesSlice)

    useEffect(() => {
        dispatch(fetchMatchesThunk(category))

    }, [category])
    useEffect(() => {
        dispatch(fetchFootballTeamsThunk())
    }, []);
    return (
        <div>
            {(matchesSlice.loading || footballTeamsSlice.loading) ?
                <div className={''}>
                <Preloader/>
                </div> :
                <div>
                    {matchesSlice.matches.matches.map(match =>
                        <MatchesItem
                            footballTeams={footballTeamsSlice.teams}
                            match={match}
                            sportName={matchesSlice.matches.sport_name}
                        />
                    )}
                </div>}
        </div>
    );
};

export default MatchesList;