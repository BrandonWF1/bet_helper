const basketball_matches = [
    {
        'home_team_id': 1,
        'away_team_id': 2,
        'place': 'Staples Center',
        'date': '01.01.2023'
    },
    {
        'home_team_id': 3,
        'away_team_id': 4,
        'place': 'AT&T Center',
        'date': '02.01.2023'
    },
    {
        'home_team_id': 5,
        'away_team_id': 6,
        'place': 'Chase Center',
        'date': '03.01.2023'
    },
    {
        'home_team_id': 7,
        'away_team_id': 8,
        'place': 'United Center',
        'date': '04.01.2023'
    },
    {
        'home_team_id': 9,
        'away_team_id': 10,
        'place': 'Wells Fargo Center',
        'date': '05.01.2023'
    },
    {
        'home_team_id': 11,
        'away_team_id': 12,
        'place': 'Madison Square Garden',
        'date': '06.01.2023'
    },
    {
        'home_team_id': 13,
        'away_team_id': 14,
        'place': 'Little Caesars Arena',
        'date': '07.01.2023'
    },
    {
        'home_team_id': 15,
        'away_team_id': 16,
        'place': 'Barclays Center',
        'date': '08.01.2023'
    },
    {
        'home_team_id': 17,
        'away_team_id': 18,
        'place': 'FedExForum',
        'date': '09.01.2023'
    }
]

const football_matches = [
    {
        'home_team_id': 1,
        'away_team_id': 2,
        'place': 'Camp Nou',
        'date': '01.01.2023'
    },
    {
        'home_team_id': 3,
        'away_team_id': 4,
        'place': 'Old Trafford',
        'date': '02.01.2023',
    },
    {
        'home_team_id': 5,
        'away_team_id': 6,
        'place': 'Allianz Stadium',
        'date': '03.01.2023'
    },
    {
        'home_team_id': 7,
        'away_team_id': 8,
        'place': 'Allianz Arena',
        'date': '04.04.2023',
    },
    {
        'home_team_id': 9,
        'away_team_id': 10,
        'place': 'Parc des Princes',
        'date': '05.05.2023'
    },
    {
        'home_team_id': 11,
        'away_team_id': 12,
        'place': 'Stamford Bridge',
        'date': '06.06.2023'
    },
    {
        'home_team_id': 13,
        'away_team_id': 14,
        'place': 'Red Bull Arena',
        'date': '07.07.2023'
    }
]

const hockey_matches = [
    {
        'home_team_id': 1,
        'away_team_id': 2,
        'place': 'Bell Centre',
        'date': '01.01.2023'
    },
    {
        'home_team_id': 3,
        'away_team_id': 4,
        'place': 'Madison Square Garden',
        'date': '02.01.2023'
    },
    {
        'home_team_id': 5,
        'away_team_id': 6,
        'place': 'United Center',
        'date': '03.01.2023'
    },
    {
        'home_team_id': 7,
        'away_team_id': 8,
        'place': 'Rogers Place',
        'date': '04.01.2023'
    },
    {
        'home_team_id': 9,
        'away_team_id': 10,
        'place': 'PPG Paints Arena',
        'date': '05.01.2023'
    },
    {
        'home_team_id': 11,
        'away_team_id': 12,
        'place': 'Rogers Arena',
        'date': '06.01.2023'
    },
    {
        'home_team_id': 13,
        'away_team_id': 14,
        'place': 'SAP Center at San Jose',
        'date': '07.01.2023'
    },
    {
        'home_team_id': 15,
        'away_team_id': 16,
        'place': 'KeyBank Center',
        'date': '08.01.2023'
    }
]


const fetchMatches = async (category = null) =>
    await new Promise(resolve => {
        setTimeout(() => {
            switch (category) {
                case 'basketball': {
                    resolve({
                        sport_name: 'Баскетбол',
                        matches: basketball_matches
                    })
                    break
                }
                case 'football': {
                    resolve({
                        sport_name: 'Футбол',
                        matches: football_matches
                    })
                    break
                }
                case 'hockey': {
                    resolve({
                        sport_name: 'Хоккей',
                        matches: hockey_matches
                    })
                    break
                }

                default: {
                    resolve('ошибка')
                }

            }
        }, 1500)
    })


export default fetchMatches