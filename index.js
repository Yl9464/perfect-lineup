// ## Lineup Rules
// 1) The total salary of all players in a lineup may not exceed $45,000
// 2) Lineups may not contain more than 2 players from a single team
// 3) Lineups may not contain more than 3 players from a single game
// 4) Lineups must contain exactly 3 players with the position of 'OF'
// and must also contain exactly 1 player from each of the following positions: 
// 'P', 'C', '1B', '2B', '3B', 'SS'

const validateLineup = (lineup) => {
  const allGood = lineup.map((clear) => {
    return ((clear.id + clear.name + clear.position + clear.teamId + (clear.salary)
  })

  return allGood
}

module.exports = validateLineup
