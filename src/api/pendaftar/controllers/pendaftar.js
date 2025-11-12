'use strict';

module.exports = {
  // Custom method untuk search
  async findByField(ctx) {
    try {
      const { field, value } = ctx.params;

      // Validasi field yang diizinkan
      const allowedFields = ['nomorPendaftaran', 'email'];
      if (!allowedFields.includes(field)) {
        return ctx.badRequest('Field tidak diizinkan untuk pencarian');
      }

      const entities = await strapi.entityService.findMany('api::pendaftar.pendaftar', {
        filters: {
          [field]: {
            $eq: value
          }
        },
        limit: 1
      });

      if (entities.length === 0) {
        return ctx.notFound('Data tidak ditemukan');
      }

      return entities[0];

    } catch (error) {
      strapi.log.error('Error in findByField:', error);
      return ctx.internalServerError('Terjadi kesalahan server');
    }
  }
};