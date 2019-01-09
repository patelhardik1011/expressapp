module.exports = {
    defaultLayout: 'default',
    extname: '.hbs',
    // Specify helpers which are only registered on this instance.
    helpers: {
        /**
         * helper function for debug view variables into server log
         * @param  {string}
         * @return {null|void}
         */
        debug: function (data) {
            console.log(data);
        },
        pagination: function (pages, page, pageUrl) {
            let pagination = '';
            console.log(pageUrl);
            for (i = 1; i <= pages; i++) {
                if (i == page) {
                    pagination += '<li class="active"><a href="#">' + i + '</a></li>';
                } else {
                    pagination += '<li><a href="/' + pageUrl + '?page=' + i + '">' + i + '</a></li>';
                }
            }
            return pagination;
        },
        statusFunc: function (status) {
            return (status) ? 'Active' : 'In Active';
        },
        selectOptions: function (selected, options) {
            return options.fn(this).replace(new RegExp(' value=\"' + selected + '\"'), '$& selected="selected"');
        }
    }
};