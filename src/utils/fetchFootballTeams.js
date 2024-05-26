
const footballTeams_mock = [
    {
        'name': "Barcelona",
        'id': 1,
        'logo': 'https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png',
        'avg_possesion_percent': 62.5,
        'avg_fouls': 10.2,
        'avg_shots_on_target': 6.8,
        'avg_goals': 2.5,
    },
    {
        'name': "Real Madrid",
        'id': 2,
        'logo': 'https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/1200px-Real_Madrid_CF.svg.png',
        'avg_possesion_percent': 58.7,
        'avg_fouls': 11.5,
        'avg_shots_on_target': 5.9,
        'avg_goals': 2.3,
    },
    {
        'name': "Manchester United",
        'id': 3,
        'logo': 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/1200px-Manchester_United_FC_crest.svg.png',
        'avg_possesion_percent': 53.2,
        'avg_fouls': 12.1,
        'avg_shots_on_target': 5.1,
        'avg_goals': 1.8,
    },
    {
        'name': "Liverpool",
        'id': 4,
        'logo': 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/1200px-Liverpool_FC.svg.png',
        'avg_possesion_percent': 60.1,
        'avg_fouls': 9.8,
        'avg_shots_on_target': 6.2,
        'avg_goals': 2.1,
    },
    {
        'name': "Juventus",
        'id': 5,
        'logo': 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Juventus_FC.png',
        'avg_possesion_percent': 55.8,
        'avg_fouls': 10.7,
        'avg_shots_on_target': 5.6,
        'avg_goals': 1.9,
    },
    {
        'name': "Milan",
        'id': 6,
        'logo': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Logo_of_AC_Milan.svg/1200px-Logo_of_AC_Milan.svg.png',
        'avg_possesion_percent': 54.5,
        'avg_fouls': 11.3,
        'avg_shots_on_target': 4.9,
        'avg_goals': 1.7,
    },
    {
        'name': "Bayern Munich",
        'id': 7,
        'logo': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/1024px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png',
        'avg_possesion_percent': 61.8,
        'avg_fouls': 10.5,
        'avg_shots_on_target': 7.2,
        'avg_goals': 2.8,
    },
    {
        'name': "Borussia Dortmund",
        'id': 8,
        'logo': 'https://upload.wikimedia.org/wikipedia/commons/7/74/Borussia_Dortmund.png',
        'avg_possesion_percent': 57.3,
        'avg_fouls': 11.9,
        'avg_shots_on_target': 6.0,
        'avg_goals': 2.2,
    },
    {
        'name': "Paris Saint-Germain",
        'id': 9,
        'logo': 'https://upload.wikimedia.org/wikipedia/ru/3/3d/FC_Paris_Saint-Germain_Logo.png',
        'avg_possesion_percent': 63.2,
        'avg_fouls': 10.9,
        'avg_shots_on_target': 6.5,
        'avg_goals': 2.6,
    },
    {
        'name': "Olympique Marseille",
        'id': 10,
        'logo': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Olympique_Marseille_logo.svg/1582px-Olympique_Marseille_logo.svg.png',
        'avg_possesion_percent': 52.9,
        'avg_fouls': 12.4,
        'avg_shots_on_target': 4.7,
        'avg_goals': 1.6,
    },
    {
        'name': "Chelsea",
        'id': 11,
        'logo': 'https://upload.wikimedia.org/wikipedia/ru/thumb/f/f7/FC_Chelsea_Logo.svg/1200px-FC_Chelsea_Logo.svg.png',
        'avg_possesion_percent': 59.5,
        'avg_fouls': 10.6,
        'avg_shots_on_target': 5.8,
        'avg_goals': 2.0,
    },
    {
        'name': "Arsenal",
        'id': 12,
        'logo': 'https://upload.wikimedia.org/wikipedia/hif/8/82/Arsenal_FC.png',
        'avg_possesion_percent': 56.2,
        'avg_fouls': 11.1,
        'avg_shots_on_target': 5.3,
        'avg_goals': 1.9,
    },
    {
        'name': "RB Leipzig",
        'id': 13,
        'logo': 'https://upload.wikimedia.org/wikipedia/ru/f/fd/RB_Leipzig.png',
        'avg_possesion_percent': 58.9,
        'avg_fouls': 11.7,
        'avg_shots_on_target': 6.1,
        'avg_goals': 2.1,
    },
    {
        'name': "Borussia Mönchengladbach",
        'id': 14,
        'logo': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Borussia_M%C3%B6nchengladbach_logo.svg/1283px-Borussia_M%C3%B6nchengladbach_logo.svg.png',
        'avg_possesion_percent': 54.1,
        'avg_fouls': 12.0,
        'avg_shots_on_target': 5.0,
        'avg_goals': 1.8,
    },
];



const fetchFootballTeams = async () =>
    await new Promise(resolve => {
        setTimeout(() => {
            resolve(footballTeams_mock)
        }, 1500)
    })



export default fetchFootballTeams;