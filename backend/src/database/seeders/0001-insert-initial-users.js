'use strict';

// eslint-disable-next-line no-undef
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('users', [
      {
        username: 'admin',
        email: 'admin@stopdb.com',
        password: '$2a$10$XAWv/IEAofEqIGQkE/zXYu9v9CiaTKEzWWUq0mUBeNoMUx4V8vvgG',
        role: 'admin',
          // senha 1234abcd
      },
      {
        username: 'user',
        email: 'user@email.com',
        password: '$2a$10$FLwfLl/pV58hN0KLrK2Fz.b0JrYeL8wDfrPWbVjDsS7q8Mk1KLZci',
        role: 'user',
          // senha abcd1234
      },
      {
        username: 'joaovitor',
        email: 'joaovitors@outlook.com',
        password: '$2a$10$3n.jY.KYg6q0.NzlXvNmcuM52uZZVuPCE5njVqAYI0Mcjy8KavOEG',
        role: 'user',
          // senha: 0000aaaa
      }
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', null, {})
  }
};
