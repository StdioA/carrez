'use strict'

var leboncoin = require("./lib/leboncoin.js");
var meilleursagents = require("./lib/meilleursagents.js");

var url = "http://www.leboncoin.fr/ventes_immobilieres/915700197.htm?ca=12_s"
leboncoin(url, function (err, data) {
	console.log(JSON.stringify(data, null, "  "));
	meilleursagents(data, function (err, data) {
		console.log(JSON.stringify(data, null, "  "));
	});
});
