'use strict';

/**
 * Class for all comment object used in CustomApp system
 * @class SH.Comment
 * @memberof! <global>
 * @author Xujie Song
 * @copyright SK8 PTY LTD 2015
 * @extends {AV.Object}
 * @see {@link https://leancloud.cn/docs/js_guide.html#对象 AV.Object}
 * @property {Class} propertyName Property description
 */
var ClassName = "ClassName";
module.exports = function(SH, Verification) {
    /**
     * Recommended way to
     * Initialize a new instance of the Class
     * @func SH.Comment.prototype.new
     * @param {Object} [data] An json object that contains the data
     * @example var comment = SH.Comment.new({"id": "abcd"});
     */
    SH.ClassName = SH.AV.Object.extend(ClassName, {
    //Instance variables
    //Instance functions
  }, {
    //Static variables
    //Static functions
  });
    if (Verification != undefined) {
        SH.AV.Cloud.beforeSave(ClassName, Verification.beforeSave(SH));
        SH.AV.Cloud.afterSave(ClassName, Verification.afterSave(SH));
        SH.AV.Cloud.afterUpdate(ClassName, Verification.afterUpdate(SH));
        SH.AV.Cloud.beforeDelete(ClassName, Verification.beforeDelete(SH));
        SH.AV.Cloud.afterDelete(ClassName, Verification.afterDelete(SH));
    }
    Object.defineProperty(SH.ClassName.prototype, "propertyName", {
        get: function() {
            return this.get("propertyName");
        },
        set: function(value) {
            this.set("propertyName", value);
        }
    });
}