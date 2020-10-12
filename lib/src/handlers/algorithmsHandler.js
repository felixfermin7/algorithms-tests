const AlgorithmsService = require('../services/algorithmsService')
const {
  getDaysWithWatchmenSchema,
  getMisOrderedPairsSchema,
  getKnightMinimumMovesSchema
} = require('../schemas/algorithmsSchemas')
const { parseResponse, validSchema } = require('../../utils/functions')

async function GetDaysWithWatchmen(event) {
  try {
    const { body } = event
    const params = JSON.parse(body)
    await validSchema(getDaysWithWatchmenSchema, params)

    const { n, m, A, B } = params

    const response = AlgorithmsService.GetDaysWithWatchmen(n, m, A, B)

    return parseResponse(200, response)
  } catch (e) {
    return e && e.code && e.statusCode
      ? parseResponse(e.code, { message: e.error.message, code: e.statusCode })
      : parseResponse(500, {
          message: 'Could not GetDaysWithWatchmen',
          code: 'InternalServerError',
        })
  }
}

async function GetMisOrderedPairs(event) {
  try {
    const { body } = event
    const params = JSON.parse(body)
    await validSchema(getMisOrderedPairsSchema, params)

    const { a } = params

    const response = AlgorithmsService.GetMisOrderedPairs(a)

    return parseResponse(200, response)
  } catch (e) {
    return e && e.code && e.statusCode
      ? parseResponse(e.code, { message: e.error.message, code: e.statusCode })
      : parseResponse(500, {
          message: 'Could not GetMisOrderedPairs',
          code: 'InternalServerError',
        })
  }
}

async function GetKnightMinimumMoves(event) {
  try {
    const { body } = event
    const params = JSON.parse(body)
    await validSchema(getKnightMinimumMovesSchema, params)

    const { a, b, c, d } = params

    const response = AlgorithmsService.GetKnightMinimumMoves(a, b, c, d)

    return parseResponse(200, response)
  } catch (e) {
    console.log(e)
    return e && e.code && e.statusCode
      ? parseResponse(e.code, { message: e.error.message, code: e.statusCode })
      : parseResponse(500, {
          message: 'Could not GetKnightMinimumMoves',
          code: 'InternalServerError',
        })
  }
}

module.exports = {
  GetDaysWithWatchmen,
  GetMisOrderedPairs,
  GetKnightMinimumMoves
}
