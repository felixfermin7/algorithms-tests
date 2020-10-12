const Joi = require('joi')

const getDaysWithWatchmenSchema = Joi.object({
  n: Joi.number()
    .integer()
    .required(),
  m: Joi.number()
    .integer()
    .required(),
  A: Joi.array()
    .items(
      Joi.number()
        .integer()
        .min(0)
    )
    .required(),
  B: Joi.array()
    .items(
      Joi.number()
        .integer()
        .min(0)
    )
    .required(),
})

const getMisOrderedPairsSchema = Joi.object({
  a: Joi.array()
    .items(
      Joi.number()
        .integer()
        .min(0)
    )
    .required(),
})

const getKnightMinimumMovesSchema = Joi.object({
  a: Joi.number()
    .integer()
    .required(),
  b: Joi.number()
    .integer()
    .required(),
  c: Joi.number()
    .integer()
    .required(),
  d: Joi.number()
    .integer()
    .required(),
})

module.exports = {
  getDaysWithWatchmenSchema,
  getMisOrderedPairsSchema,
  getKnightMinimumMovesSchema,
}
