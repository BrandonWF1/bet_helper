const basketball_matches = [
    {
        'team1_name': 'Los Angeles Lakers',
        'team2_name': 'Boston Celtics',
        'team1_logo': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/2560px-Los_Angeles_Lakers_logo.svg.png',
        'team2_logo': 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Boston_Celtics.svg/1200px-Boston_Celtics.svg.png',
        'team1_win_percentage': Math.floor(Math.random() * 90) + 10,
        'team2_win_percentage': Math.floor(Math.random() * 90) + 10,
        'place': 'Staples Center',
        'date': '01.01.2023'
    },
    {
        'team1_name': 'San Antonio Spurs',
        'team2_name': 'Miami Heat',
        'team1_logo': 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/San_Antonio_Spurs.svg/1200px-San_Antonio_Spurs.svg.png',
        'team2_logo': 'https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/Miami_Heat_logo.svg/1200px-Miami_Heat_logo.svg.png',
        'team1_win_percentage': Math.floor(Math.random() * 90) + 10,
        'team2_win_percentage': Math.floor(Math.random() * 90) + 10,
        'place': 'AT&T Center',
        'date': '02.01.2023'
    },
    {
        'team1_name': 'Golden State Warriors',
        'team2_name': 'Houston Rockets',
        'team1_logo': 'https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Golden_State_Warriors_logo.svg/1200px-Golden_State_Warriors_logo.svg.png',
        'team2_logo': 'https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Houston_Rockets.svg/1200px-Houston_Rockets.svg.png',
        'team1_win_percentage': Math.floor(Math.random() * 90) + 10,
        'team2_win_percentage': Math.floor(Math.random() * 90) + 10,
        'place': 'Chase Center',
        'date': '03.01.2023'
    },
    {
        'team1_name': 'Chicago Bulls',
        'team2_name': 'Oklahoma City Thunder',
        'team1_logo': 'https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Chicago_Bulls_logo.svg/1200px-Chicago_Bulls_logo.svg.png',
        'team2_logo': 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5d/Oklahoma_City_Thunder.svg/1200px-Oklahoma_City_Thunder.svg.png',
        'team1_win_percentage': Math.floor(Math.random() * 90) + 10,
        'team2_win_percentage': Math.floor(Math.random() * 90) + 10,
        'place': 'United Center',
        'date': '04.01.2023'
    },
    {
        'team1_name': 'Philadelphia 76ers',
        'team2_name': 'Minnesota Timberwolves',
        'team1_logo': 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/Philadelphia_76ers_logo.svg/1200px-Philadelphia_76ers_logo.svg.png',
        'team2_logo': 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Minnesota_Timberwolves_logo.svg/1200px-Minnesota_Timberwolves_logo.svg.png',
        'team1_win_percentage': Math.floor(Math.random() * 90) + 10,
        'team2_win_percentage': Math.floor(Math.random() * 90) + 10,
        'place': 'Wells Fargo Center',
        'date': '05.01.2023'
    },
    {
        'team1_name': 'New York Knicks',
        'team2_name': 'Dallas Mavericks',
        'team1_logo': 'https://upload.wikimedia.org/wikipedia/en/thumb/2/25/New_York_Knicks_logo.svg/1200px-New_York_Knicks_logo.svg.png',
        'team2_logo': 'https://upload.wikimedia.org/wikipedia/ru/thumb/9/97/Dallas_Mavericks_logo.svg/1200px-Dallas_Mavericks_logo.svg.png',
        'team1_win_percentage': Math.floor(Math.random() * 90) + 10,
        'team2_win_percentage': Math.floor(Math.random() * 90) + 10,
        'place': 'Madison Square Garden',
        'date': '06.01.2023'
    },
    {
        'team1_name': 'Detroit Pistons',
        'team2_name': 'Denver Nuggets',
        'team1_logo': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Detroit-Pistons-Logo-2005-to-2017.png/1200px-Detroit-Pistons-Logo-2005-to-2017.png',
        'team2_logo': 'https://upload.wikimedia.org/wikipedia/az/thumb/7/76/Denver_Nuggets.svg/1200px-Denver_Nuggets.svg.png',
        'team1_win_percentage': Math.floor(Math.random() * 90) + 10,
        'team2_win_percentage': Math.floor(Math.random() * 90) + 10,
        'place': 'Little Caesars Arena',
        'date': '07.01.2023'
    },
    {
        'team1_name': 'Brooklyn Nets',
        'team2_name': 'Phoenix Suns',
        'team1_logo': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Brooklyn_Nets_newlogo.svg/1200px-Brooklyn_Nets_newlogo.svg.png',
        'team2_logo': 'https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/Phoenix_Suns_logo.svg/1200px-Phoenix_Suns_logo.svg.png',
        'team1_win_percentage': Math.floor(Math.random() * 90) + 10,
        'team2_win_percentage': Math.floor(Math.random() * 90) + 10,
        'place': 'Barclays Center',
        'date': '08.01.2023'
    },
    {
        'team1_name': 'Memphis Grizzlies',
        'team2_name': 'Sacramento Kings',
        'team1_logo': 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/Memphis_Grizzlies.svg/1200px-Memphis_Grizzlies.svg.png',
        'team2_logo': 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/SacramentoKings.svg/1200px-SacramentoKings.svg.png',
        'team1_win_percentage': Math.floor(Math.random() * 90) + 10,
        'team2_win_percentage': Math.floor(Math.random() * 90) + 10,
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
        'team1_name': 'Montreal Canadiens',
        'team2_name': 'Toronto Maple Leafs',
        'team1_logo': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Montreal_Canadiens.svg/1200px-Montreal_Canadiens.svg.png',
        'team2_logo': 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b6/Toronto_Maple_Leafs_2016_logo.svg/1200px-Toronto_Maple_Leafs_2016_logo.svg.png',
        'team1_win_percentage': Math.floor(Math.random() * 90) + 10,
        'team2_win_percentage': Math.floor(Math.random() * 90) + 10,
        'place': 'Bell Centre',
        'date': '01.01.2023'
    },
    {
        'team1_name': 'New York Rangers',
        'team2_name': 'Boston Bruins',
        'team1_logo': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/New_York_Rangers_Logo.svg/1200px-New_York_Rangers_Logo.svg.png',
        'team2_logo': 'https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Boston_Bruins.svg/1200px-Boston_Bruins.svg.png',
        'team1_win_percentage': Math.floor(Math.random() * 90) + 10,
        'team2_win_percentage': Math.floor(Math.random() * 90) + 10,
        'place': 'Madison Square Garden',
        'date': '02.01.2023'
    },
    {
        'team1_name': 'Chicago Blackhawks',
        'team2_name': 'Detroit Red Wings',
        'team1_logo': 'https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Chicago_Blackhawks_logo.svg/1200px-Chicago_Blackhawks_logo.svg.png',
        'team2_logo': 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Detroit_Red_Wings_logo.svg/1200px-Detroit_Red_Wings_logo.svg.png',
        'team1_win_percentage': Math.floor(Math.random() * 90) + 10,
        'team2_win_percentage': Math.floor(Math.random() * 90) + 10,
        'place': 'United Center',
        'date': '03.01.2023'
    },
    {
        'team1_name': 'Edmonton Oilers',
        'team2_name': 'Calgary Flames',
        'team1_logo': 'https://upload.wikimedia.org/wikipedia/ru/0/02/Edmonton_oilers_logo.png',
        'team2_logo': 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Calgary_Flames.png',
        'team1_win_percentage': Math.floor(Math.random() * 90) + 10,
        'team2_win_percentage': Math.floor(Math.random() * 90) + 10,
        'place': 'Rogers Place',
        'date': '04.01.2023'
    },
    {
        'team1_name': 'Pittsburgh Penguins',
        'team2_name': 'Philadelphia Flyers',
        'team1_logo': 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c0/Pittsburgh_Penguins_logo_%282016%29.svg/1200px-Pittsburgh_Penguins_logo_%282016%29.svg.png',
        'team2_logo': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Logo_Philadelphia_Flyers.svg/2560px-Logo_Philadelphia_Flyers.svg.png',
        'team1_win_percentage': Math.floor(Math.random() * 90) + 10,
        'team2_win_percentage': Math.floor(Math.random() * 90) + 10,
        'place': 'PPG Paints Arena',
        'date': '05.01.2023'
    },
    {
        'team1_name': 'Vancouver Canucks',
        'team2_name': 'Winnipeg Jets',
        'team1_logo': 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Vancouver_Canucks_logo.svg/1200px-Vancouver_Canucks_logo.svg.png',
        'team2_logo': 'https://upload.wikimedia.org/wikipedia/en/thumb/9/93/Winnipeg_Jets_Logo_2011.svg/1200px-Winnipeg_Jets_Logo_2011.svg.png',
        'team1_win_percentage': Math.floor(Math.random() * 90) + 10,
        'team2_win_percentage': Math.floor(Math.random() * 90) + 10,
        'place': 'Rogers Arena',
        'date': '06.01.2023'
    },
    {
        'team1_name': 'San Jose Sharks',
        'team2_name': 'Los Angeles Kings',
        'team1_logo': 'https://upload.wikimedia.org/wikipedia/en/thumb/3/37/SanJoseSharksLogo.svg/800px-SanJoseSharksLogo.svg.png',
        'team2_logo': 'https://upload.wikimedia.org/wikipedia/ru/f/fb/LA_Kings_logo.png',
        'team1_win_percentage': Math.floor(Math.random() * 90) + 10,
        'team2_win_percentage': Math.floor(Math.random() * 90) + 10,
        'place': 'SAP Center at San Jose',
        'date': '07.01.2023'
    },
    {
        'team1_name': 'Buffalo Sabres',
        'team2_name': 'Ottawa Senators',
        'team1_logo': 'https://upload.wikimedia.org/wikipedia/ru/thumb/d/d4/Buffalo_Sabres_Logo.png/640px-Buffalo_Sabres_Logo.png',
        'team2_logo': 'https://upload.wikimedia.org/wikipedia/ru/5/5d/Sens_Logo.png',
        'team1_win_percentage': Math.floor(Math.random() * 90) + 10,
        'team2_win_percentage': Math.floor(Math.random() * 90) + 10,
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