'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TalkContents', {
      talkContentId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      clientId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Clients',
          key: 'clientId',
        },
        onDelete: 'CASCADE',
      },
      talkTemplateId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'TalkTemplates',
          key: 'talkTemplateId',
        },
        onDelete: 'RESTRICT',
      },
      // userId: {
      //   allowNull: false,
      //   type: DataTypes.INTEGER,
      //   references: {
      //     model: 'Users',
      //     key: 'userId',
      //   },
      //   onDelete: 'CASCADE',
      // },
      // companyId: {
      //   allowNull: false,
      //   type: DataTypes.INTEGER,
      //   references: {
      //     model: 'Companies',
      //     key: 'companyId',
      //   },
      //   onDelete: 'CASCADE',
      // },
      organizationName: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      orderNumber: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      region: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      regionDetail: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      deliveryDate: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      paymentPrice: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      deliveryCompany: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      deliveryTime: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      deliveryNumber: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('TalkContents');
  },
};
