'use strict';
module.exports = (sequelize, DataTypes) => {
    const Admin = sequelize.define('Admin', {
        role_id: DataTypes.INTEGER,
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        status: DataTypes.INTEGER,
        created_at: DataTypes.DATE,
        updated_at: DataTypes.DATE
    }, {});
    Admin.associate = function (models) {
        // associations can be defined here
    };
    return Admin;
};