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
        debug: function(data) {
            console.log(data);
        }
    }
};