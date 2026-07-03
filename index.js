function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}

    // Retrieve player information
    function numPointsScored(playerName) {
        const teams = Object.values(gameObject());
        for (const team of teams) {
            if (team.players[playerName]) {
                return team.players[playerName].points;
            }
        }
    }

    function shoeSize(playerName) {
        const teams = Object.values(gameObject());
        for(const team of teams) {
            if (team.players[playerName]) {
                return team.players[playerName].shoe;
            }
        }
    }

    // Retrieve Team Information
    function teamColors(teamName) {
        const teams = Object.values(gameObject());
        for (const team of teams) {
            if (team.teamName === teamName) {
                return team.colors;
            }
        }
    }

    function teamNames() {
        return Object.values(gameObject()).map(team =>team.teamName);
    }

    // Retrieve Player Numbers and Stats
    function playerNumbers(teamName) {
        const teams = Object.values(gameObject());
        for (const team of teams) {
            if (team.teamName === teamName) {
                return Object.values(team.players).map(player =>player.number);
            }
        }
    }

    function playerStats(playerName) {
        const teams = Object.values(gameObject());
        for (const team of teams) {
            if (team.players[playerName]) {
                return team.players[playerName];
            }
        }
    }


    // Advanced Challenge
    function bigShoeRebounds() {
        const teams = Object.values(gameObject());
        let biggestShoeSize = 0;
        let reboundsForBiggestShoe = 0;

        for (const team of teams) {
            const players = Object.values(team.players);
            for (const player of players) {
                if (player.shoe > biggestShoeSize) {
                    biggestShoeSize = player.shoe;
                    reboundsForBiggestShoe = player.rebounds;
                }
            }
        }
        return reboundsForBiggestShoe;
    }
        // Bonus Questions
        function mostPointScored() {
            const teams = Object.values(gameObject());
            let topScorer = "";
            let mostPointsScored = 0;

            for (const team of teams) {
                const players = team.players;
                for (const playerName in players) {
                    if (players[playerName].points > mostPointScored) {
                        mostPointScored = players[playerName].points;
                        topScorer = playerName;
                    }
                }
            }

            return topScorer;

        }

        function winningTeam() {
            const teams = Object.values(gameObject());
            let winningTeamName = "";
            let highestTeamTotal = 0;

            for (const team of teams) {
                let teamTotal = 0;
                const players = Object.values(team.players);
                for (const player of players) {
                    teamTotal +=player.points;
                }
                if (teamTotal > highestTeamTotal) {
                    highestTeamTotal = teamTotal;
                    winningTeamName = team.teamName;
                }
            }

            return winningTeamName;
        }

        function playerWithLongestName() {
            const teams = Object.values(gameObject());
            let longestName = "";

            for (const team of teams) {
                const playerNames = Object.keys(team.players);
                for (const name of playerNames) {
                    if (name.length > longestName.length) {
                        longestName = name;
                    } 
                }
            }
            return longestName;
        }

        function doesLongNameStealAton() {
            const longestName = playerWithLongestName();
            const longestNamePlayer = playerStats(longestName);

            const teams = Object.values(gameObject());
            let mostSteals = 0;

            for (const team of teams) {
                const players = Object.values(team.players);
                for (const player of players) {
                    if (player.steals > mostSteals) {
                        mostSteals = player.steals;
                    }
                }
            }
            return longestNamePlayer.steals === mostSteals;
        }
    
    console.log(numPointsScored("Alan Anderson"));
    console.log(shoeSize("Alan Anderson"));
    console.log(teamColors("Brooklyn Nets"));
    console.log(teamNames());
    console.log(playerNumbers("Brooklyn Nets"));
    console.log(playerStats("Alan Anderson"));
    console.log(bigShoeRebounds());
    console.log(mostPointScored());
    console.log(winningTeam());
    console.log(playerWithLongestName());
    console.log(doesLongNameStealAton());




