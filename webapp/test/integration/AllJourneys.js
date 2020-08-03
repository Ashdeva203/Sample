jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
		"sap/ui/test/Opa5",
		"list/test/integration/pages/Common",
		"sap/ui/test/opaQunit",
		"list/test/integration/pages/Worklist",
		"list/test/integration/pages/Object",
		"list/test/integration/pages/NotFound",
		"list/test/integration/pages/Browser",
		"list/test/integration/pages/App"
	], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "list.view."
	});

	sap.ui.require([
		"list/test/integration/WorklistJourney",
		"list/test/integration/ObjectJourney",
		"list/test/integration/NavigationJourney",
		"list/test/integration/NotFoundJourney",
		"list/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});