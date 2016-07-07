require("babel-core/register")({
    retainLines: true,
    sourceMaps: "both"
});



var jsdom = require('jsdom');
var chai = require('chai');


var doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
var win = doc.defaultView;

global.document = doc;
global.window = win;


global.location = { href: ''};


Object.keys(window).forEach(function (key) {
    if (!(key in global)) {
        global[key] = window[key];
    }
});

chai.config.truncateThreshold = 0;