'use strict';

/**
 * SH is the fundamental function for Custom_App Library. All subclasses or methods will start with this function.
 * @class SH
 * @author Xujie Song
 * @copyright (c) SK8 PTY LTD 2015. All rights reserved.
 * @see {@link https://leancloud.cn/docs/leanengine_guide-node.html LeanEngine Reference}
 * @todo Resolve deploy error 'Unauthorized'
 */
module.exports = function(SH, AV) {
  SH.AV = AV;
  /**
   * Initiation method for Custom_App App
   * @func SH.initialize
   * @param {String} shopId The id of the Shop. Usually link would look like http://shopId.shelf.is
   * @param {Object} callback An object that has an optional success function, that takes no arguments and will be called on a successful push, and an error function that takes a AV.Error and will be called if the push failed.
   * @example SH.initialize("abcdShopId", {
   *          success: function(shop) {
   *              //$rootScope.currentShop = SH.currentShop;
   *              //$rootScope.currentSeller = SH.currentShop.owner;
   *              //$rootScope.currentUser = SH.currentUser;
   *              //$scope.reloadShop(shop);
   *          },
   *          error: function(error) {
   *              SH.showError(error);
   *          }
   * });
   */
  SH.initialize = function(shopId, callback) {
    //Initilization code for Custom_App
  };
    /**
     * Show an promote to user, it's currently an alert.
     * @func SH.Promote
     * @param {String} message The message you wish to promote
     * @example SH.promote("Custom_App is awesome!");
     */
  SH.promote = function(message) {
      SH.log(message);
      window.alert(message);
    }
    /**
     * Log the error message in console, and 'promote' it to user
     * @func SH.showError
     * @param {Error} error HTTP Error
     * @example SH.showError(error);
     */
  SH.showError = function(error) {
      SH.log(error.message);
      window.alert(error.message);
    }
    /**
     * custom SH.log function.
     * @func SH.log
     * @param {String} message The message you wish to log
     * @example SH.log(message);
     */
  SH.log = function(message) {
      console.log(message);
    }
  SH.openURL = function(url) {
    window.open(url, '_blank', 'resizable=yes');
  }
}