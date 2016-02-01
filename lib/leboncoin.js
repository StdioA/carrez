'use strict'

function parse(url, callback) {
	var request = require('request');
	var cheerio = require('cheerio');

	request(url, function (errors, response, body) {
		if(errors == null) {
			var $ = cheerio.load(body);

			var json_data = {
				url: url,
				title: $("h1").first().text(),
				property: {
					price: parseInt($("[itemprop='price']").text().replace(" ", "")),
					type: $(".lbcParams.criterias td").eq(0).text(),
					area: parseInt($(".lbcParams.criterias td").eq(2).text()),
					rooms: parseInt($(".lbcParams.criterias td").eq(1).text()),
					location: {
						city: $("[itemprop='addressLocality']").text(),
						postal_code: $("[itemprop='postalCode']").text()
					}
				}
			};
			callback(null, json_data);
		}
		else {
			callback({error: errors}, null);
		}
	});
}

module.exports = parse;
