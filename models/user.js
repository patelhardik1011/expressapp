'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        street_1: DataTypes.STRING,
        street_2: DataTypes.STRING,
        city: DataTypes.STRING,
        country: DataTypes.STRING,
        postcode: DataTypes.STRING,
        phone_no: DataTypes.STRING,
        profile_pic: DataTypes.STRING,
        status: DataTypes.INTEGER,
        created_at: DataTypes.DATE,
        updated_at: DataTypes.DATE
    }, {});
    User.associate = function (models) {
        // associations can be defined here
    };
    return User;
};