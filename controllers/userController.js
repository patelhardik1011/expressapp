/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var Models = require('../models/index');

exports.user_list = function (req, res, next) {

    let limit = 1;
    let offset = 0;
    Models.User.findAndCountAll()
            .then((data) => {
                let page = req.query.page;
                let pages = Math.ceil(data.count / limit);
                offset = limit * (page - 1);
                Models.User.findAll({
                    limit: limit,
                    offset: offset
                }).then((users) => {
                    res.render('users/list', {users: users, count: data.count, pages: pages, page: page});
                });
            }).catch(function (error) {
        console.log(error);
    });
};

// Display detail page for a specific User.
exports.user_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: User detail: ' + req.params.id);
};

// Display User create form on GET.
exports.user_create_get = function (req, res) {
    res.send('NOT IMPLEMENTED: User create GET');
};

// Handle User create on POST.
exports.user_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: User create POST');
};

// Display User delete form on GET.
exports.user_delete_get = function (req, res) {
    res.send('NOT IMPLEMENTED: User delete GET');
};

// Handle User delete on POST.
exports.user_delete_post = function (req, res) {
    res.send('NOT IMPLEMENTED: User delete POST');
};

// Display User update form on GET.
exports.user_update_get = function (req, res) {
    res.send('NOT IMPLEMENTED: User update GET');
};

// Handle User update on POST.
exports.user_update_post = function (req, res) {
    res.send('NOT IMPLEMENTED: User update POST');
};