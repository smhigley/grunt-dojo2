/* jshint node:true */

var path = require('path');

module.exports = function (grunt) {
	grunt.registerMultiTask('rewriteSourceMaps', function () {
		this.filesSrc.forEach(function (file) {
			var map = JSON.parse(grunt.file.read(file));
			map.sources = map.sources.map(function (source) {
				return path.basename(source);
			});
			grunt.file.write(file, JSON.stringify(map));
		});
		grunt.log.writeln('Rewrote ' + this.filesSrc.length + ' source maps');
	});
};
