'use strict';

module.exports = {
  routes: [
    // 1. GET all (find)
    {
      method: 'GET',
      path: '/pendaftars',
      handler: 'pendaftar.find',
      config: { auth: false, policies: [], middlewares: [] }
    },
    // 2. GET single (findOne)
    {
      method: 'GET',
      path: '/pendaftars/:id',
      handler: 'pendaftar.findOne',
      config: { auth: false, policies: [], middlewares: [] }
    },
    // 3. POST create (create)
    {
      method: 'POST',
      path: '/pendaftars',
      handler: 'pendaftar.create',
      config: { auth: false, policies: [], middlewares: [] }
    },
    // 4. PUT update (update)
    {
      method: 'PUT',
      path: '/pendaftars/:id',
      handler: 'pendaftar.update',
      config: { auth: false, policies: [], middlewares: [] }
    },
    // 5. DELETE (delete)
    {
      method: 'DELETE',
      path: '/pendaftars/:id',
      handler: 'pendaftar.delete',
      config: { auth: false, policies: [], middlewares: [] }
    },
    // 6. Custom search (findByField)
    {
      method: 'GET',
      path: '/pendaftars/search/:field/:value',
      handler: 'pendaftar.findByField',
      config: { auth: false, policies: [], middlewares: [] }
    }
  ]
};