import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MatchesPage from "./pages/MatchesPage";
import Header from "./components/Header";
import AboutPage from "./pages/AboutPage";
import {useEffect} from "react";
import fetchMatches from "./utils/fetchMatches";

function App() {


    return (
        <div>
            <Header/>

            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/matches/:category' element={<MatchesPage/>}/>
                <Route path='/about' element={<AboutPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
