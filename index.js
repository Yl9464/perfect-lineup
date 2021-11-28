const validateLineup = (lineup) => {
  // total 35600 (return flase)
  const totalSal = lineup.reduce((currentSal, sal) => {
    return sal.salary + currentSal
  }, 0)

  // return an array of all teamIds, and filter the teams with 2 or less players for single team
  //which is an empty array 
  const mapTeams = lineup.map(team => team.teamId).filter(team => team.length <= 2)
}


module.exports = validateLineup
