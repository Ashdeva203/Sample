sap.ui.define([
		"list/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("list.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);