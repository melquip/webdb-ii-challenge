
exports.seed = function (knex) {
  return knex('sales').truncate()
    .then(function () {
      return knex('sales').insert([
        {
          price: 12345,
          soldTo: "Melquisedeque Pereira"
        },
        {
          price: 54362,
          soldTo: "Oladimegi"
        }
      ]);
    });
};
