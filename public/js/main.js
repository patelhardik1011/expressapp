/**
 * 
 * @returns {ExpressApp}
 */
var ExpressApp = function () {

    /**
     * 
     * @returns null
     */
    this.initialize = function () {
        _this.inputICheck();
    };

    /**
     * 
     * @returns null
     */
    this.inputICheck = function () {

        $('input').iCheck({
            checkboxClass: 'icheckbox_square-blue',
            radioClass: 'iradio_square-blue',
            increaseArea: '20%' /* optional */
        });
    };

    var _this = this;
    this.initialize();
};

var ExpressAppObj = new ExpressApp();