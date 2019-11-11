
exports.seed = function (knex) {
  return knex('cars').truncate()
    .then(function () {
      return knex('cars').insert([
        {
          VIN: '123456789',
          make: 'opel',
          model: 'corsa',
          mileage: '54323',
          saleInfo: 1,
        },
        {
          VIN: '4126789',
          make: 'bmw',
          model: 'mercedes',
          mileage: '12452',
          transmissionType: 'awesome',
          statusOfTitle: 'clean',
          saleInfo: 2,
        },
        {
          VIN: '14326789',
          make: 'ferrari',
          model: 'f1',
          mileage: '75462',
          transmissionType: 'cool',
          statusOfTitle: 'trash',
        }
      ]);
    });
};
