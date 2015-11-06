//================================================================================
// Shelf is a utility class for apps empowered for Shelf
// Author: Xujie Song
// Copyright: SK8 PTY LTD
// V0.9.6
//================================================================================

"use strict";

global.debug = require('debug')('test');
global.expect = require('expect.js');
// var global.serverURL = "http://192.168.1.216:3000";

var SH = require("../../shelf_node");

global.SH = SH;
global.AV = SH.AV;