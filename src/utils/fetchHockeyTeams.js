const hockeyTeams_mock = [
    {
        'name': "Montreal Canadiens",
        'id': 1,
        'logo': "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Montreal_Canadiens.svg/1200px-Montreal_Canadiens.svg.png",
        'avg_shots_on_target': 25.1,
        'avg_penalty_minutes': 15.4,
        'avg_shots_blocked_or_missed': 20.3,
        'avg_goals': 1.9
    },
    {
        'name': "Toronto Maple Leafs",
        'id': 2,
        'logo': "https://upload.wikimedia.org/wikipedia/en/thumb/b/b6/Toronto_Maple_Leafs_2016_logo.svg/1200px-Toronto_Maple_Leafs_2016_logo.svg.png",
        'avg_shots_on_target': 35.8,
        'avg_penalty_minutes': 8.3,
        'avg_shots_blocked_or_missed': 10.7,
        'avg_goals': 4.2
    },
    {
        'name': "New York Rangers",
        'id': 3,
        'logo': "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/New_York_Rangers_Logo.svg/1200px-New_York_Rangers_Logo.svg.png",
        'avg_shots_on_target': 28.6,
        'avg_penalty_minutes': 12.5,
        'avg_shots_blocked_or_missed': 18.2,
        'avg_goals': 2.6
    },
    {
        'name': "Boston Bruins",
        'id': 4,
        'logo': "https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Boston_Bruins.svg/1200px-Boston_Bruins.svg.png",
        'avg_shots_on_target': 34.7,
        'avg_penalty_minutes': 7.8,
        'avg_shots_blocked_or_missed': 12.9,
        'avg_goals': 3.9
    },
    {
        'name': "Chicago Blackhawks",
        'id': 5,
        'logo': "https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Chicago_Blackhawks_logo.svg/1200px-Chicago_Blackhawks_logo.svg.png",
        'avg_shots_on_target': 22.4,
        'avg_penalty_minutes': 14.7,
        'avg_shots_blocked_or_missed': 19.3,
        'avg_goals': 2.1
    },
    {
        'name': "Detroit Red Wings",
        'id': 6,
        'logo': "https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Detroit_Red_Wings_logo.svg/1200px-Detroit_Red_Wings_logo.svg.png",
        'avg_shots_on_target': 30.5,
        'avg_penalty_minutes': 11.2,
        'avg_shots_blocked_or_missed': 16.7,
        'avg_goals': 3.4
    },
    {
        'name': "Edmonton Oilers",
        'id': 7,
        'logo': "https://upload.wikimedia.org/wikipedia/ru/0/02/Edmonton_oilers_logo.png",
        'avg_shots_on_target': 37.2,
        'avg_penalty_minutes': 13.1,
        'avg_shots_blocked_or_missed': 12.1,
        'avg_goals': 4.5
    },
    {
        'name': "Calgary Flames",
        'id': 8,
        'logo': "https://upload.wikimedia.org/wikipedia/commons/7/7a/Calgary_Flames.png",
        'avg_shots_on_target': 32.8,
        'avg_penalty_minutes': 9.2,
        'avg_shots_blocked_or_missed': 15.8,
        'avg_goals': 3.7
    },
    {
        'name': "Pittsburgh Penguins",
        'id': 9,
        'logo': "https://upload.wikimedia.org/wikipedia/en/thumb/c/c0/Pittsburgh_Penguins_logo_%282016%29.svg/1200px-Pittsburgh_Penguins_logo_%282016%29.svg.png",
        'avg_shots_on_target': 31.1,
        'avg_penalty_minutes': 12.8,
        'avg_shots_blocked_or_missed': 17.5,
        'avg_goals': 3.1
    },
    {
        'name': "Philadelphia Flyers",
        'id': 10,
        'logo': "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Logo_Philadelphia_Flyers.svg/2560px-Logo_Philadelphia_Flyers.svg.png",
        'avg_shots_on_target': 27.5,
        'avg_penalty_minutes': 13.7,
        'avg_shots_blocked_or_missed': 16.2,
        'avg_goals': 2.4
    },
    {
        'name': "Vancouver Canucks",
        'id': 11,
        'logo': "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Vancouver_Canucks_logo.svg/1200px-Vancouver_Canucks_logo.svg.png",
        'avg_shots_on_target': 30.9,
        'avg_penalty_minutes': 11.9,
        'avg_shots_blocked_or_missed': 14.9,
        'avg_goals': 2.8
    },
    {
        'name': "Winnipeg Jets",
        'id': 12,
        'logo': "https://upload.wikimedia.org/wikipedia/en/thumb/9/93/Winnipeg_Jets_Logo_2011.svg/1200px-Winnipeg_Jets_Logo_2011.svg.png",
        'avg_shots_on_target': 33.4,
        'avg_penalty_minutes': 10.6,
        'avg_shots_blocked_or_missed': 13.4,
        'avg_goals': 3.6
    },
    {
        'name': "San Jose Sharks",
        'id': 13,
        'logo': "https://upload.wikimedia.org/wikipedia/en/thumb/3/37/SanJoseSharksLogo.svg/800px-SanJoseSharksLogo.svg.png",
        'avg_shots_on_target': 26.8,
        'avg_penalty_minutes': 14.2,
        'avg_shots_blocked_or_missed': 18.8,
        'avg_goals': 2.3
    },
    {
        'name': "Los Angeles Kings",
        'id': 14,
        'logo': "https://upload.wikimedia.org/wikipedia/ru/f/fb/LA_Kings_logo.png",
        'avg_shots_on_target': 35.2,
        'avg_penalty_minutes': 9.1,
        'avg_shots_blocked_or_missed': 12.3,
        'avg_goals': 4.1
    },
    {
        'name': "Buffalo Sabres",
        'id': 15,
        'logo': "https://upload.wikimedia.org/wikipedia/ru/thumb/d/d4/Buffalo_Sabres_Logo.png/640px-Buffalo_Sabres_Logo.png",
        'avg_shots_on_target': 29.4,
        'avg_penalty_minutes': 13.4,
        'avg_shots_blocked_or_missed': 15.5,
        'avg_goals': 2.5
    },
    {
        'name': "Ottawa Senators",
        'id': 16,
        'logo': "https://upload.wikimedia.org/wikipedia/ru/5/5d/Sens_Logo.png",
        'avg_shots_on_target': 31.8,
        'avg_penalty_minutes': 10.3,
        'avg_shots_blocked_or_missed': 16.1,
        'avg_goals': 3.3
    }
];



const fetchHockeyTeams = async () =>
    await new Promise(resolve => {
        setTimeout(() => {
            resolve(hockeyTeams_mock)
        }, 1500)
    })



export default fetchHockeyTeams;