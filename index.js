
const validateLineup = (lineup) => {

  const finalTeam = lineup.map((team) => {
    team.lineup = ((team.position === 3) && (team.teamID <= 2) && (team.gameId <= 3) && (team.salary <= 45000))

    return team
  })

  return validateLineup
}


module.exports = validateLineup
