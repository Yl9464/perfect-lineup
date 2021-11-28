const validateLineup = (lineup) => {
  //total 35600 (return flase)
  const totalSal = lineup.reduce((currentSal, sal) => {
    return sal.salary + currentSal
  }, 0)

  console.log(totalSal)
}




module.exports = validateLineup
