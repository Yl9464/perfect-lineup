const validateLineup = (lineup) => {
  const payMe = lineup.reduce((player, salaries) => {
    return player + salaries.salary
  }, 0)

  return payMe <= 45000
}

module.exports = validateLineup
