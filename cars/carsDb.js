const db = require('../data/dbConfig');

module.exports = {
  get: () => db('cars'),
  getById: (id) => db('cars').where({ id }),
  insert: (car) => db('cars').insert(car),
}