<<<<<<< HEAD
/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 ProductSet in the list
// * All 3 ProductSet have at least one ToSalesOrderLineItems

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
		"com/sap/products/offlineApp/test/integration/MasterJourney",
		"com/sap/products/offlineApp/test/integration/NavigationJourney",
		"com/sap/products/offlineApp/test/integration/NotFoundJourney",
		"com/sap/products/offlineApp/test/integration/BusyJourney"
	], function () {
		QUnit.start();
	});
=======
sap.ui.define([
	"sap/ui/test/Opa5",
	"./arrangements/Startup",
	"./NavigationJourney"
], function (Opa5, Startup) {
	"use strict";

	Opa5.extendConfig({
		arrangements: new Startup(),
		viewNamespace: "odata.ODataModel.view.",
		autoWait: true
	});
>>>>>>> refs/heads/master
});