/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"com/sap/products/offlineApp/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/sap/products/offlineApp/test/integration/pages/App",
	"com/sap/products/offlineApp/test/integration/pages/Browser",
	"com/sap/products/offlineApp/test/integration/pages/Master",
	"com/sap/products/offlineApp/test/integration/pages/Detail",
	"com/sap/products/offlineApp/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.sap.products.offlineApp.view."
	});

	sap.ui.require([
		"com/sap/products/offlineApp/test/integration/NavigationJourneyPhone",
		"com/sap/products/offlineApp/test/integration/NotFoundJourneyPhone",
		"com/sap/products/offlineApp/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});