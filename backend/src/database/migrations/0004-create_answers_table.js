'use strict';

// eslint-disable-next-line no-undef
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('answers', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      answer: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      rare: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'categories', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'category_id',
        foreignKey: true,
      },
      userId: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET DEFAULT',
        field: 'user_id',
        foreignKey: true,
      },
      status: {
        type: Sequelize.ENUM('accepted', 'rejected', 'pending'),
        defaultValue: 'pending',
        allowNull: false,
      },
      public: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false,
      },
      letter: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      likes: {
        type: Sequelize.JSON,
        defaultValue: JSON.stringify([]),
        allowNull: true,
      },
      views: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        field: 'created_at',
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        field: 'updated_at',
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('answers');
  },
};
