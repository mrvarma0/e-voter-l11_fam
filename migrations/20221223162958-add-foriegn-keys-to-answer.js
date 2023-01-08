"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Answers", "voterID", {
      type: Sequelize.DataTypes.INTEGER,
    });
    await queryInterface.addConstraint("Answers", {
      fields: ["voterID"],
      type: "foreign key",
      references: {
        table: "Voters",
        field: "id",
      },
    });

    await queryInterface.addColumn("Answers", "electionID", {
      type: Sequelize.DataTypes.INTEGER,
    });
    await queryInterface.addConstraint("Answers", {
      fields: ["electionID"],
      type: "foreign key",
      references: {
        table: "Elections",
        field: "id",
      },
    });

    await queryInterface.addColumn("Answers", "questionID", {
      type: Sequelize.DataTypes.INTEGER,
    });
    await queryInterface.addConstraint("Answers", {
      fields: ["questionID"],
      type: "foreign key",
      references: {
        table: "Questions",
        field: "id",
      },
    });

    await queryInterface.addColumn("Answers", "selectedOption", {
      type: Sequelize.DataTypes.INTEGER,
    });
    await queryInterface.addConstraint("Answers", {
      fields: ["selectedOption"],
      type: "foreign key",
      references: {
        table: "Options",
        field: "id",
      },
    });
   
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Answers", "voterID");
    await queryInterface.removeColumn("Answers", "electionID");
    await queryInterface.removeColumn("Answers", "questionID");
    await queryInterface.removeColumn("Answers", "selectedOption");
  },
};
