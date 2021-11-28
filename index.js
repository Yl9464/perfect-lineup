const validateLineup = (lineup) => {
  // total 35600 (return flase)
  const totalSal = lineup.reduce((currentSal, sal) => {
    return sal.salary + currentSal
  }, 0)

  // return an array of all teamIds and filter the teams with 2 or less players for single team
  lineup.forEach((team) => {
    console.log(team.teamId)
  })
}



module.exports = validateLineup
