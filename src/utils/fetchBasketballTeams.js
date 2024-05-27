const basketballTeams_mock = [
    {
        'name': "Los-Angeles Lakers",
        'id': 1,
        'logo': "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/2560px-Los_Angeles_Lakers_logo.svg.png",
        'avg_rebounds': 44.5,
        'avg_fouls': 19.2,
        'avg_free_throw': 76.3,
        'avg_points': 112.1
    },
    {
        'name': "Boston Celtics",
        'id': 2,
        'logo': "https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Boston_Celtics.svg/1200px-Boston_Celtics.svg.png",
        'avg_rebounds': 46.3,
        'avg_fouls': 18.5,
        'avg_free_throw': 77.1,
        'avg_points': 113.7
    },
    {
        'name': "San Antonio Spurs",
        'id': 3,
        'logo': "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/San_Antonio_Spurs.svg/1200px-San_Antonio_Spurs.svg.png",
        'avg_rebounds': 43.9,
        'avg_fouls': 19.0,
        'avg_free_throw': 75.5,
        'avg_points': 110.2
    },
    {
        'name': "Golden State Warriors",
        'id': 4,
        'logo': "https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Golden_State_Warriors_logo.svg/1200px-Golden_State_Warriors_logo.svg.png",
        'avg_rebounds': 44.2,
        'avg_fouls': 18.7,
        'avg_free_throw': 78.6,
        'avg_points': 114.9
    },
    {
        'name': "Houston Rockets",
        'id': 5,
        'logo': "https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Houston_Rockets.svg/1200px-Houston_Rockets.svg.png",
        'avg_rebounds': 45.1,
        'avg_fouls': 20.1,
        'avg_free_throw': 74.9,
        'avg_points': 109.3
    },
    {
        'name': "Chicago Bulls",
        'id': 6,
        'logo': "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Chicago_Bulls_logo.svg/1200px-Chicago_Bulls_logo.svg.png",
        'avg_rebounds': 44.8,
        'avg_fouls': 18.9,
        'avg_free_throw': 76.7,
        'avg_points': 110.5
    },
    {
        'name': "Oklahoma City Thunder",
        'id': 7,
        'logo': "https://upload.wikimedia.org/wikipedia/en/thumb/5/5d/Oklahoma_City_Thunder.svg/1200px-Oklahoma_City_Thunder.svg.png",
        'avg_rebounds': 44.7,
        'avg_fouls': 19.6,
        'avg_free_throw': 77.3,
        'avg_points': 111.2
    },
    {
        'name': "Philadelphia 76ers",
        'id': 8,
        'logo': "https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/Philadelphia_76ers_logo.svg/1200px-Philadelphia_76ers_logo.svg.png",
        'avg_rebounds': 46.1,
        'avg_fouls': 18.8,
        'avg_free_throw': 78.4,
        'avg_points': 113.2
    },
    {
        'name': "Minnesota Timberwolves",
        'id': 9,
        'logo': "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Minnesota_Timberwolves_logo.svg/1200px-Minnesota_Timberwolves_logo.svg.png",
        'avg_rebounds': 45.5,
        'avg_fouls': 19.4,
        'avg_free_throw': 76.1,
        'avg_points': 110.8
    },
    {
        'name': "New York Knicks",
        'id': 10,
        'logo': "https://upload.wikimedia.org/wikipedia/en/thumb/2/25/New_York_Knicks_logo.svg/1200px-New_York_Knicks_logo.svg.png",
        'avg_rebounds': 44.0,
        'avg_fouls': 19.5,
        'avg_free_throw': 75.2,
        'avg_points': 109.7
    },
    {
        'name': "Dallas Mavericks",
        'id': 11,
        'logo': "https://upload.wikimedia.org/wikipedia/ru/thumb/9/97/Dallas_Mavericks_logo.svg/1200px-Dallas_Mavericks_logo.svg.png",
        'avg_rebounds': 43.5,
        'avg_fouls': 18.2,
        'avg_free_throw': 77.5,
        'avg_points': 111.0
    },
    {
        'name': "Detroit Pistons",
        'id': 12,
        'logo': "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Detroit-Pistons-Logo-2005-to-2017.png/1200px-Detroit-Pistons-Logo-2005-to-2017.png",
        'avg_rebounds': 44.3,
        'avg_fouls': 20.0,
        'avg_free_throw': 74.3,
        'avg_points': 108.9
    },
    {
        'name': "Denver Nuggets",
        'id': 13,
        'logo': "https://upload.wikimedia.org/wikipedia/az/thumb/7/76/Denver_Nuggets.svg/1200px-Denver_Nuggets.svg.png",
        'avg_rebounds': 45.7,
        'avg_fouls': 18.6,
        'avg_free_throw': 78.0,
        'avg_points': 112.7
    },
    {
        'name': "Brooklyn Nets",
        'id': 14,
        'logo': "'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Brooklyn_Nets_newlogo.svg/1200px-Brooklyn_Nets_newlogo.svg.png",
        'avg_rebounds': 43.8,
        'avg_fouls': 19.3,
        'avg_free_throw': 76.0,
        'avg_points': 110.6
    },
    {
        'name': "Phoenix Suns",
        'id': 15,
        'logo': "https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/Phoenix_Suns_logo.svg/1200px-Phoenix_Suns_logo.svg.png",
        'avg_rebounds': 44.4,
        'avg_fouls': 18.1,
        'avg_free_throw': 77.9,
        'avg_points': 113.5
    },
    {
        'name': "Memphis Grizzlies",
        'id': 16,
        'logo': "https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/Memphis_Grizzlies.svg/1200px-Memphis_Grizzlies.svg.png",
        'avg_rebounds': 45.2,
        'avg_fouls': 19.7,
        'avg_free_throw': 75.6,
        'avg_points': 110.3
    },
    {
        'name': "Sacramento Kings",
        'id': 17,
        'logo': "https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/SacramentoKings.svg/1200px-SacramentoKings.svg.png",
        'avg_rebounds': 44.6,
        'avg_fouls': 18.9,
        'avg_free_throw': 77.2,
        'avg_points': 112.9
    },
    {
        'name': "Miami Heat",
        'id': 18,
        'logo': "https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/Miami_Heat_logo.svg/1200px-Miami_Heat_logo.svg.png",
        'avg_rebounds': 41.6,
        'avg_fouls': 18.9,
        'avg_free_throw': 66.2,
        'avg_points': 101.9
    }
];




const fetchBasketballTeams = async () =>
    await new Promise(resolve => {
        setTimeout(() => {
            resolve(basketballTeams_mock)
        }, 1500)
    })



export default fetchBasketballTeams;