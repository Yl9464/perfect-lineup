const validateLineup = (lineup) => {
  return !payment
}

const totalSal = (lineup) => {
  return lineup.reduce((salary, player) => {
    return salary + player.salary
  }, 0)
}

const payment = (lineup) => {
  return totalSal(lineup) > 45000
}


// filter teamIds, map teamId values, and reduce the values to one that are 2 or less


module.exports = validateLineup
