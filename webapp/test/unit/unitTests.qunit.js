/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comtest/sample_test_app/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
