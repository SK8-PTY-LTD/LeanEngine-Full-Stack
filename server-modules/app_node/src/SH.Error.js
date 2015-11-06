'use strict';

/**
 * Utility Error Function, declare system errors here
 * @func SH.Error
 * @author Xujie Song
 * @copyright SK8 PTY LTD 2015
 * @param {Int} Error The error code
 * @return {String} Error description
 */
module.exports = function(SH) {
    SH.Error = function (Error) {
        var ErrorCode = " Error: " + ("000" + Error).slice(-4);
        switch (Error) {
            case 0:
                // A user (SHUser) object is required before saving an SHAddress object
                var message = "This is a sample Error message."
                return message + ErrorCode;
                break;
            default:
                // Error code not found
                var message = "Error cound not found."
                return message + ErrorCode;
                break;
        }
    }
}