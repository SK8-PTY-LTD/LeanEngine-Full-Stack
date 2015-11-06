/**
 * Verification Module for SH.Class
 */
var Verification = function() {}
	/**
	 * Do logic before save
	 */
Verification.beforeSave = function(SH) {
    return function(request, response) {
        //Prototype linking
        var object = request.object;

        response.success();
        //response.error();
    }
}
	/**
	 * Do logic after save
	 */
Verification.afterSave = function(SH) {
    return function(request) {
        // todo
    }
}
	/**
	 * Do logic before update
	 */
Verification.beforeUpdate = function(SH) {
    return function(request, response) {
        //Prototype linking
        var object = request.object;
        response.success();
    }
}
	/**
	 * Do logic after update
	 */
Verification.afterUpdate = function(SH) {
    return function(request) {
        // todo
    }
}
	/**
	 * Do logic before delete
	 */
Verification.beforeDelete = function(SH) {
    return function(request, response) {
        //Prototype linking
        var object = request.object;

        response.success();
        //response.error();
    }
}
	/**
	 * Do logic after delete
	 */
Verification.afterDelete = function(SH) {
    return function(request) {
        // todo
    }
}
module.exports = Verification;