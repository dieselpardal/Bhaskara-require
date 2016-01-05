define([
	'angular',
	'angularRoute',
	'controllers/controllers',
	'factories/factories',
	'services/services',
	'filters/filters',
	'directives/directives'
	], function(angular){
		return angular.module('app', ['ngRoute', 'controllers','factories','services','filters','directives']);
	});