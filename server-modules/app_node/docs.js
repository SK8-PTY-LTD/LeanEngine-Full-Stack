//================================================================================
// CustomAppp is a utility class for apps empowered for CustomAppp
// Author: Xujie Song
// Copyright: SK8 PTY LTD
// V0.9.6
//================================================================================

"use strict";

var SH = function() {}

var AV = function() {}

require('./src/SH.js')(SH, AV);
require('./src/SH.Error.js')(SH);
require('./src/SH.User.js')(SH);

module.exports = SH;