const knightPossibleMoves = [
  { x: 1, y: 2 },
  { x: 2, y: 1 },
  { x: 2, y: -1 },
  { x: 1, y: -2 },
  { x: -1, y: -2 },
  { x: -2, y: -1 },
  { x: -2, y: 1 },
  { x: -1, y: 2 },
]

const IsDayInAnyWatchmenRange = (day, beginRange, endRange) =>
  beginRange.some((br, i) => br <= day && day <= endRange[i])

function GetDaysWithWatchmen(watchmen, days, beginRange, endRange) {
  let daysWithWatchmen = 0
  if (watchmen !== beginRange.length || watchmen !== endRange.length) {
    throw {
      code: 400,
      error: new Error('A & B lenghts must be equal to n'),
      statusCode: 'InvalidParams',
    }
  }

  for (let i = 0; i < days; i += 1) {
    if (IsDayInAnyWatchmenRange(i + 1, beginRange, endRange)) {
      daysWithWatchmen += 1
    }
  }

  return {
    days_with_watchmen: daysWithWatchmen,
  }
}

function GetGreaters(number, i, numbers) {
  let n = 0

  while (numbers[i] !== undefined && i <= numbers.length) {
    if (number > numbers[i]) {
      n += 1
    }
    i += 1
  }
  return n
}

function GetMisOrderedPairs(numbers) {
  let n = 0
  numbers.forEach((number, i) => (n += GetGreaters(number, i + 1, numbers)))

  return {
    mis_ordered_pairs: n,
  }
}

function GetArrayMinMovesToDestination(origins, destination) {
  const originsKeys = Object.keys(origins)

  originsKeys.forEach(originKey => {
    const origin = origins[originKey]

    knightPossibleMoves.forEach(pm => {
      const newOriginkey = `${origin.x + pm.x}${origin.y + pm.y}`
      if (!origins[newOriginkey]) {
        origins[newOriginkey] = {
          x: origin.x + pm.x,
          y: origin.y + pm.y,
          prev_steps: origin.prev_steps.concat({ x: origin.x, y: origin.y }),
        }
      }
    })
  })

  if (origins[`${destination.x}${destination.y}`]) {
    console.log(origins[`${destination.x}${destination.y}`])

    return origins[`${destination.x}${destination.y}`].prev_steps.length
  }

  return GetArrayMinMovesToDestination(origins, destination)
}

function GetKnightMinimumMoves(a, b, c, d) {
  let moves = 0
  if (a === c && c === d) {
    return moves
  }

  moves = GetArrayMinMovesToDestination(
    { [`${a}${b}`]: { x: a, y: b, prev_steps: [] } },
    { x: c, y: d }
  )

  return { moves }
}


module.exports = {
  GetDaysWithWatchmen,
  GetMisOrderedPairs,
  GetKnightMinimumMoves,
}
