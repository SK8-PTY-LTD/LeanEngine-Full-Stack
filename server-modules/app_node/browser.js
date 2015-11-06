//================================================================================
// CustomAppp is a utility class for apps empowered for CustomAppp
// Author: Xujie Song
// Copyright: SK8 PTY LTD
// V0.9.6
//================================================================================

"use strict";

/**
 * SH is the fundamental module for CustomAppp Library. All subclasses or methods will start with this function.
 * @module SH
 * @author Xujie Song
 * @copyright SK8 PTY LTD 2015
 * @see {@link https://leancloud.cn/docs/leanengine_guide-node.html LeanEngine Reference}
 */
var SH = function() {}
SH.APP_ID = process.env.LC_APP_ID || "appidappidapppidappid";
SH.APP_KEY = process.env.LC_APP_KEY || "appkeyappkeyappkeyappkey";

/**
 * Initialize AV Module <br>
 * @module AV
 * @example var AV = require('avoscloud-sdk').AV; 
 * //instead of 
 * //var AV = require('leanengine'); <br>  
 * //Reason being Node module 'leanengine' uses Express 4 and body-parser, which does not work well with browserify <br>
 * @see {@link https://leancloud.cn/docs/leanengine_guide-node.html LeanEngine Reference}
 */
var AV = require("avoscloud-sdk").AV;
AV.initialize(SH.APP_ID, SH.APP_KEY);

require('./src/SH.js')(SH, AV);
require('./src/SH.Error.js')(SH, AV);
require('./src/SH.User.js')(SH);

global.SH = SH;
global.AV = SH.AV;