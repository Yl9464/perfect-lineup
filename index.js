const validateLineup = (lineup) => {
  const validSal = validateSal(lineup)
  const validTeams = validateTeams(lineup)
  const validPlayerCount = validatePlayerCount(lineup)
  const validPositions = validatePositions(lineup)
  const validGames = validateGames(lineup)

  return validSal && validTeams && validPlayerCount && validPositions && validGames
}

const validateSal = (lineup) => {
  const payMe = lineup.reduce((acc, currentVal) => {
    return acc + currentVal.salary
  }, 0)

  return payMe <= 45000
}


const validateTeams = (lineup) => {
  const teams = lineup.map((team => team.teamId))
  let validTeams = true

  teams.forEach((team) => {
    const numPlayers = teams.reduce((acc, currVal) => {
      if (currVal === team) {
        return acc + 1
      }

      return acc
    }, 0)

    if (numPlayers > 2) {
      validTeams = false
    }
  })

  return validTeams
}

const validatePlayerCount = (lineup) => {
  return lineup.length === 9
}
const validatePositions = (lineup) => {
  const spots = lineup.map((spot) => spot.position)
  const outFielders = spots.filter((fielder) => fielder === 'OF')

  if (outFielders.length !== 3) return false

  const otherPositions = spots.filter((fielder) => fielder !== 'OF')

  const noDups = [...new Set(otherPositions)]

  return noDups.length === 6
}

const validateGames = (lineup) => {
  const games = lineup.map((game => game.gameId))
  let validGames = true

  games.forEach((game) => {
    const numGames = games.reduce((acc, currVal) => {
      if (currVal === game) {
        return acc + 1
      }

      return acc
    }, 0)

    if (numGames > 3) {
      validGames = false
    }
  })

  return validGames
}

module.exports = validateLineup
