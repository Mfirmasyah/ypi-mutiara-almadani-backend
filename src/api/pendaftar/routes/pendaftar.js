'use strict';

module.exports = {
  routes: [
    // Custom route untuk search
    {
      method: 'GET',
      path: '/pendaftars/search/:field/:value',
      handler: 'pendaftar.findByField',
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },

    // Tambahkan route bawaan untuk create
    {
      method: 'POST',
      path: '/pendaftars',
      handler: 'pendaftar.create',
      config: {
        auth: false, // biar bisa diakses dari frontend publik
        policies: [],
        middlewares: [],
      },
    },
  ],
};
