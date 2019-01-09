'use strict';
module.exports = (sequelize, DataTypes) => {
    const Admin = sequelize.define('Admin', {
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        role_id: DataTypes.INTEGER,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        profile_pic: DataTypes.STRING,
        status: DataTypes.INTEGER
    }, {});
    Admin.associate = function (models) {
        // associations can be defined here
    };
    return Admin;
};