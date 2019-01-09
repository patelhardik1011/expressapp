/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var Models = require('../models/index');

exports.user_list = function (req, res, next) {

    let limit = 100;
    let offset = 0;
    let page = (req.query.page) ? req.query.page : 1;
    Models.User.findAndCountAll()
            .then((data) => {
                let pages = Math.ceil(data.count / limit);
                offset = limit * (page - 1);
                Models.User.findAll({
                    limit: limit,
                    offset: offset
                }).then((users) => {
                    res.render('users/list', {users: users, count: data.count, pages: pages, page: page, title: 'Users', message: req.flash('success')});
                });
            }).catch(function (error) {
        console.log(error);
    });
};

// Display User create form on GET.
exports.user_create_get = function (req, res) {
    res.render('users/create', {title: 'Create User', message: req.flash('error')});
};

// Handle User create on POST.
exports.user_create_post = function (req, res) {
    var user = Models.User.build({
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        street_address_1: req.body.street1,
        street_address_2: req.body.street2,
        city: req.body.city,
        country: req.body.country,
        postcode: req.body.postcode,
        phone_no: req.body.phoneNo,
        status: req.body.status
    });
    user.save().then(() => {
        req.flash('success', 'User has been added successfully');
        res.redirect('/users');
    }).catch((error) => {
        console.log(error);
        req.flash('error', error.message);
        res.redirect('/users/create');
    });
};

// Display User update form on GET.
exports.user_update_get = function (req, res) {
    Models.User.find({
        id: req.params.id
    }).then((user) => {
        res.render('users/edit', {title: 'Edit User', user: user});
    }).catch(function (error) {
        console.log(error);
    });
};

// Handle User update on POST.
exports.user_update_post = function (req, res) {

    var user = {
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        street_address_1: req.body.street1,
        street_address_2: req.body.street2,
        city: req.body.city,
        country: req.body.country,
        postcode: req.body.postcode,
        phone_no: req.body.phoneNo,
        status: req.body.status,
    };
    Models.User.update(user, {where: {id: req.params.id}}).then(() => {
        req.flash('success', 'User has been updated successfully');
        res.redirect('/users');
    }).catch((error) => {
        console.log(error.message);
    });
};

// Handle User delete on POST.
exports.user_delete_post = function (req, res) {
    Models.User.destroy({where: {id: req.params.id}}).then(() => {
        req.flash('success', 'User has been deleted successfully');
        res.redirect('/users');
    }).catch((error) => {
        console.log(error.message);
    });
};

// Display detail page for a specific User.
exports.user_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: User detail: ' + req.params.id);
};