'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/pendaftars/search/:field/:value',
      handler: 'pendaftar.findByField',
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    }
  ],
};