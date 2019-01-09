'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isUnique: function (value, next) {
                    var self = this;
                    User.find({where: {email: value}})
                            .then(function (user) {
                                if (user && self.id !== user.id) {
                                    return next('Email already in use!');
                                }
                                return next();
                            })
                            .catch(function (err) {
                                return next(err);
                            });
                }
            }
        },
        password: DataTypes.STRING,
        phone_no: DataTypes.STRING,
        street_address_1: DataTypes.STRING,
        street_address_2: DataTypes.STRING,
        city: DataTypes.STRING,
        country: DataTypes.STRING,
        postcode: DataTypes.STRING,
        profile_pic: DataTypes.STRING,
        status: DataTypes.INTEGER
    }, {});
    User.associate = function (models) {
        // associations can be defined here
    };
    return User;
};