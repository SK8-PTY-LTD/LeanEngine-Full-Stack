# Shelf

##index.js
By default, app_node loads from index.js. It requires AV module.

```JS
var AV = require('leanengine');
```

##browser.js
Due to 'require' nature, even after browserify, Node module can not be used in Browser directly. In order to make it work, a wrapper is needed, to include the module in Global scope. A different AV module is used as well. 

```JS
var AV = require('avoscloud-sdk').AV;
global.AV = AV;
```

##docs.js
Excluding AV documentation, including only the documents for custom_app
docs.js declares 
'''JS
var AV = function() {}
'''
Therefore avoids AV module being documented

##api.js
Declare API here
