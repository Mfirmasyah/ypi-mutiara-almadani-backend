'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::pendaftar.pendaftar', ({ strapi }) => ({
  // Custom method untuk search by field
  async findByField(ctx) {
    try {
      const { field, value } = ctx.params;

      // Validasi field yang boleh dicari
      const allowedFields = ['nomorPendaftaran', 'email'];
      if (!allowedFields.includes(field)) {
        return ctx.badRequest('Field tidak diizinkan untuk pencarian');
      }

      // Cari data sesuai field dan value
      const entities = await strapi.entityService.findMany('api::pendaftar.pendaftar', {
        filters: {
          [field]: { $eq: value },
        },
        limit: 1,
      });

      if (!entities || entities.length === 0) {
        return ctx.notFound('Data tidak ditemukan');
      }

      return entities[0];
    } catch (error) {
      strapi.log.error('Error in findByField:', error);
      return ctx.internalServerError('Terjadi kesalahan server');
    }
  },
}));
