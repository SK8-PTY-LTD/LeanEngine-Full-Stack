'use strict';

/**
 * Class for all User object used in Shelf system
 * @class SH.User
 * @memberof! <global>
 * @author Xujie Song
 * @copyright SK8 PTY LTD 2015
 * @extends {AV.User}
 * @see {@link https://leancloud.cn/docs/js_guide.html#用户 AV.User}
 * @property {SH.Address} address The pointer of the default address of this _User
 * @property {Object} [authData] AuthData of this _User
 * @property {String} username Username of this _User
 * @property {String} password Password of this _User
 */
var ClassName = "_User";
module.exports = function (SH, Verification) {
    /**
     * Recommended way to
     * Initialize a new instance of the Class
     * @func SH.User.prototype.new
     * @param {Object} [data] An json object that contains the data
     * @example var user = SH.User.new({"id": "abcd"});
     */
    SH.User = SH.AV.Object.extend(ClassName, {
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
    Object.defineProperty(SH.User.prototype, "authData", {
        get: function () {
            return this.get("authData");
        },
        set: function (value) {
            this.set("authData", value);
        }
    });
    Object.defineProperty(SH.User.prototype, "email", {
        get: function () {
            return this.get("email");
        },
        set: function (value) {
            this.set("email", value);
        }
    });
    Object.defineProperty(SH.User.prototype, "password", {
        get: function () {
            return this.get("password");
        },
        set: function (value) {
            this.set("password", value);
        }
    });
    Object.defineProperty(SH.User.prototype, "username", {
        get: function () {
            return this.get("username");
        },
        set: function (value) {
            this.set("username", value);
        }
    });
    /**
     * isUser method check if two user objects are equivalent to each other
     * @param {SH.User} user Target user to compare
     * @return {Boolean} boolean True if two users are the equivalent, false otherwise
     */
    SH.User.prototype.isUser = function (user) {
        if (user != undefined) {
            return this.id == user.id;
        } else {
            return false;
        }
    }
    /**
     * Check if the user has verified his/her email
     * @func SH.User.prototype.hasVerifiedEmail
     * @example if (user.hasVerifiedEmail()) {
         *      //User had verified his/her email
         * } else {
         *      //User had not verified his/her email
         * }
     */
    SH.User.prototype.hasVerifiedEmail = function () {
        return this.get("emailVerified");
    }
    /**
     * Follow to a particular user
     * @func SH.User.prototype.follow
     * @param {SH.User} user
     * @param {Object} [callback] An object that has an optional success function, that takes no arguments and will be called on a successful push, and an error function that takes a AV.Error and will be called if the push failed.
     * @example user.follow(user, {
         *          success: function(user) {
         *              //Updated user
         *          },
         *          error: function(error) {
         *              //SH.showError(error);
         *          }
         *      });
     */
    /**
     * Unfollow to a particular user
     * @func SH.User.prototype.unfollow
     * @param {SH.User} user
     * @param {Object} [callback] An object that has an optional success function, that takes no arguments and will be called on a successful push, and an error function that takes a AV.Error and will be called if the push failed.
     * @example user.unfollow(user, {
         *          success: function(user) {
         *              //Updated user
         *          },
         *          error: function(error) {
         *              //SH.showError(error);
         *          }
         *      });
     */
    /**
     * Create a followee query to query the user's followees.
     * @func SH.User.prototype.followeeQuery()
     * @example var followeeQuery = user.followeeQuery();
     */
    /**
     * Create a follower query to query the user's followers.
     * @func SH.User.prototype.followerQuery()
     * @example var followerQuery = user.followerQuery();
     */

    /**
     * Signs up a new user. You should call this instead of save for
     * new SH.Users. This will create a new SH.User on the server, and
     * also persist the session on disk so that you can access the user using
     * <code>current</code>.
     *
     * <p>A username and password must be set before calling signUp.</p>
     *
     * <p>Calls options.success or options.error on completion.</p>
     *
     * @func SH.User.signUp
     * @param {Object} attrs Extra fields to set on the new user, or null.
     * @param {Object} options A Backbone-style options object.
     * @return {AV.Promise} A promise that is fulfilled when the signup
     *     finishes.
     * @example
     *      var user = SH.User.new();
     *      user.username = "133342301@163.com";
     *      user.password = "abcdefg";
     *      user.signUp(null, {
     *        success: function(user) {
     *          // 注册成功，可以使用了.
     *        },
     *        error: function(user, error) {
     *          //SH.showError(error);
     *        }
     *      });
     */
    /**
     * Signs up a new user with mobile phone and sms code.
     * You should call this instead of save for
     * new AV.Users. This will create a new AV.User on the server, and
     * also persist the session on disk so that you can access the user using
     * <code>current</code>.
     *
     * <p>A username and password must be set before calling signUp.</p>
     *
     * <p>Calls options.success or options.error on completion.</p>
     *
     * @func SH.User.signUpOrlogInWithMobilePhone
     * @param {Object} attrs Extra fields to set on the new user, or null.
     * @param {Object} options A Backbone-style options object.
     * @return {AV.Promise} A promise that is fulfilled when the signup
     *     finishes.
     * @see @link https://leancloud.cn/docs/js_guide.html#手机号码一键登录 AV.Cloud.requestSmsCode}
     * @example
     *      var user = SH.User.new();
     *      user.username = "133342301@163.com";
     *      user.password = "abcdefg";
     *      user.signUpOrlogInWithMobilePhone({
     *        mobilePhoneNumber: '186xxxxxxxx',
     *        smsCode: '手机收到的 6 位验证码字符串',
     *        username: "feedback@sk8.asia",
     *        passwrod: "12345678"
     *        otherProperty: otherValue
     *      }, {
     *        success: function(user) {
     *          // 注册成功，可以使用了.
     *        },
     *        error: function(user, error) {
     *          //SH.showError(error);
     *        }
     *      });
     */

    /**
     * Logs in a user with a mobile phone number and password. On success, this
     * saves the session to disk, so you can retrieve the currently logged in
     * user using <code>current</code>.
     *
     * <p>Calls options.success or options.error on completion.</p>
     *
     * @func SH.User.logInWithMobilePhone
     * @param {String} mobilePhone The user's mobilePhoneNumber
     * @param {String} password The password to log in with.
     * @param {Object} options A Backbone-style options object.
     * @return {AV.Promise} A promise that is fulfilled with the user when
     *     the login completes.
     * @see @link https://leancloud.cn/docs/js_guide.html#手机号码和短信登录 AV.User.logInWithMobilePhone}
     * @example
     *      SH.User.logInWithMobilePhone('186xxxxxxxx', password, {
     *        success: function(user) {
     *          // 注册成功，可以使用了.
     *        },
     *        error: function(user, error) {
     *          //SH.showError(error);
     *        }
     *      });
     */

    /**
     * Logs out the currently logged in user session. This will remove the
     * session from disk, log out of linked services, and future calls to
     * <code>current</code> will return <code>null</code>.
     * @func SH.User.logOut
     * @example SH.User.logOut();
     */

    /**
     * Requests a password reset email to be sent to the specified email address
     * associated with the user account. This email allows the user to securely
     * reset their password on the AV site.
     *
     * <p>Calls options.success or options.error on completion.</p>
     *
     * @func SH.User.requestPasswordReset
     * @param {String} email The email address associated with the user that
     *     forgot their password.
     * @param {Object} options A Backbone-style options object.
     * @example
     *      SH.User.requestPasswordReset("email@example.com", {
     *        success: function() {
     *          // Password reset request was sent successfully
     *        },
     *        error: function(error) {
     *          //SH.showError(error);
     *      });
     */

    /**
     * Requests a verify email to be sent to the specified email address
     * associated with the user account. This email allows the user to securely
     * verify their email address on the AV site.
     *
     * <p>Calls options.success or options.error on completion.</p>
     *
     * @func SH.User.requestEmailVerify
     * @param {String} email The email address associated with the user that
     *     doesn't verify their email address.
     * @param {Object} options A Backbone-style options object.
     * @example
     *      SH.User.requestEmailVerify("email@example.com", {
     *        success: function() {
     *          // Verification email was sent successfully
     *        },
     *        error: function(error) {
     *          //SH.showError(error);
     *      });
     */

    /**
     * Requests a verify sms code to be sent to the specified mobile phone
     * number associated with the user account. This sms code allows the user to
     * verify their mobile phone number by calling AV.User.verifyMobilePhone
     *
     * <p>Calls options.success or options.error on completion.</p>
     *
     * @func SH.User.requestMobilePhoneVerify
     * @param {String} mobilePhone The mobile phone number  associated with the
     *                  user that doesn't verify their mobile phone number.
     * @param {Object} options A Backbone-style options object.
     * @exmaple
     *      AV.User.requestMobilePhoneVerify('186xxxxxxxx').then(function(){
     *        //发送成功
     *      }, function(err){
     *         //SH.showError(error);
     *      });
     */

    /**
     * Requests a reset password sms code to be sent to the specified mobile phone
     * number associated with the user account. This sms code allows the user to
     * reset their account's password by calling AV.User.resetPasswordBySmsCode
     *
     * <p>Calls options.success or options.error on completion.</p>
     *
     * @func SH.User.requestPasswordResetBySmsCode
     * @param {String} mobilePhone The mobile phone number  associated with the
     *                  user that doesn't verify their mobile phone number.
     * @param {Object} options A Backbone-style options object.
     * @example
     *      SH.User.requestPasswordResetBySmsCode("186xxxxxxxx", {
     *        success: function() {
     *          // Password reset request was sent successfully
     *        },
     *        error: function(error) {
     *          //SH.showError(error);
     *      });
     */
    /**
     * Makes a call to reset user's account password by sms code and new password.
     * The sms code is sent by AV.User.requestPasswordResetBySmsCode.
     * @func SH.User.resetPasswordBySmsCode
     * @param {String} code The sms code sent by AV.User.Cloud.requestSmsCode
     * @param {String} password The new password.
     * @param {Object} options A Backbone-style options object
     * @return {AV.Promise} A promise that will be resolved with the result
     * of the function.
     * @example
     *      SH.User.requestPasswordResetBySmsCode("123456", "newPassword", {
     *        success: function() {
     *          // Password reset request was sent successfully
     *        },
     *        error: function(error) {
     *          //SH.showError(error);
     *      });
     */
    /**
     * Makes a call to verify sms code that sent by AV.User.Cloud.requestSmsCode
     * If verify successfully,the user mobilePhoneVerified attribute will be true.
     * @func SH.User.verifyMobilePhone
     * @param {String} code The sms code sent by AV.User.Cloud.requestSmsCode
     * @param {Object} options A Backbone-style options object
     * @return {AV.Promise} A promise that will be resolved with the result
     * of the function.
     * @example
     *      SH.User.verifyMobilePhone("123456", {
     *        success: function() {
     *          // Password reset request was sent successfully
     *        },
     *        error: function(error) {
     *          //SH.showError(error);
     *      });
     */
    /**
     * Requests a logIn sms code to be sent to the specified mobile phone
     * number associated with the user account. This sms code allows the user to
     * login by AV.User.logInWithMobilePhoneSmsCode function.
     *
     * <p>Calls options.success or options.error on completion.</p>
     *
     * @func SH.User.requestLoginSmsCode
     * @param {String} mobilePhone The mobile phone number  associated with the
     *           user that want to login by AV.User.logInWithMobilePhoneSmsCode
     * @param {Object} options A Backbone-style options object.
     * @example
     *      SH.User.requestLoginSmsCode('186xxxxxxxx', {
     *        success: function() {
     *          // Password reset request was sent successfully
     *        },
     *        error: function(error) {
     *          //SH.showError(error);
     *      });
     */

    /**
     * Logs in a user with a mobile phone number and sms code sent by
     * AV.User.requestLoginSmsCode.On success, this
     * saves the session to disk, so you can retrieve the currently logged in
     * user using <code>current</code>.
     *
     * <p>Calls options.success or options.error on completion.</p>
     *
     * @func SH.User.logInWithMobilePhoneSmsCode
     * @param {String} mobilePhone The user's mobilePhoneNumber
     * @param {String} smsCode The sms code sent by AV.User.requestLoginSmsCode
     * @param {Object} options A Backbone-style options object.
     * @return {AV.Promise} A promise that is fulfilled with the user when
     *     the login completes.
     * @func SH.User#logIn
     * @example
     *      SH.User.logInWithMobilePhoneSmsCode("186xxxxxxxx", "123456", {
     *        success: function() {
     *          // Password reset request was sent successfully
     *        },
     *        error: function(error) {
     *          //SH.showError(error);
     *      });
     */

    /**
     * Logs in a AV.User. On success, this saves the session to localStorage,
     * so you can retrieve the currently logged in user using
     * <code>current</code>.
     *
     * <p>A username and password must be set before calling logIn.</p>
     *
     * <p>Calls options.success or options.error on completion.</p>
     *
     * @func SH.User.prototype.logIn
     * @param {Object} options A Backbone-style options object.
     * @func SH.User.logIn
     * @return {AV.Promise} A promise that is fulfilled with the user when
     *     the login is complete.
     * @example
     *      AV.User.logIn("myUsername", "myPassword", {
     *        success: function(user) {
     *          // 成功了，现在可以做其他事情了.
     *        },
     *        error: function(user, error) {
     *          //SH.showError(error);
     *        }
     *      });
     */

    /**
     * Update user's new password safely based on old password.
     * @func SH.User.prototype
     * @param {String} oldPassword, the old password.
     * @param {String} newPassword, the new password.
     * @param {Object} An optional Backbone-like options object with
     *     success and error callbacks that will be invoked once the iteration
     *     has finished.
     * @example
     *      var user = AV.User.current();
     *      user.updatePassword('currentPassword', 'newPassword', {
     *        success: function(){
     *          //更新成功
     *        },
     *        error: function(user, err){
     *          //SH.showError(error);
     *        }
     *      });
     */

    /**
     * Logs in a user with a session token. On success, this saves the session
     * to disk, so you can retrieve the currently logged in user using
     * <code>current</code>.
     *
     * <p>Calls options.success or options.error on completion.</p>
     *
     * @func SH.User.become
     * @param {String} sessionToken The sessionToken to log in with.
     * @param {Object} options A Backbone-style options object.
     * @return {AV.Promise} A promise that is fulfilled with the user when
     *     the login completes.
     * @example
     *      SH.User.become("sessionToken", {
     *        success: function(){
     *          //更新成功
     *        },
     *        error: function(user, err){
     *          //SH.showError(error);
     *        }
     *      });
     */
}