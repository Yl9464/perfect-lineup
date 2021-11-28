const validateLineup = (lineup) => {
  const allTeams = lineup.map((team) => team.teamId).reduce((teams, allTeams) => {
    console.log(teams)

    return teams = allTeams <= 2
  })
}

module.exports = validateLineup
