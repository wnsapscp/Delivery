sap.ui.define([
	'sap/m/MessageBox',
	"sap/ui/core/mvc/Controller"
], function (MessageBox, Controller) {
	"use strict";
	var oModel;
	return Controller.extend("com.ksc.delivery.deliveryUI.controller.View1", {
		onInit: function () {
			// データの初期化
			oModel = this.getOwnerComponent().getModel();
			oModel.setUseBatch(false);
			this.getView().setModel(oModel);
		},
		readS4Hana: function (oEvent) {
			// application model
			var sServiceUrl = "https://my301452-api.s4hana.ondemand.com/sap/opu/odata/sap/API_OUTBOUND_DELIVERY_SRV/";
			var oModel = new sap.ui.model.odata.v2.ODataModel(sServiceUrl);
			oModel.setUseBatch(false);
			sap.ui.getCore().setModel(oModel);

			// define filters
			var aFilters = [
				new sap.ui.model.Filter("ProductName",
					sap.ui.model.FilterOperator.Contains,
					"Chocolate")
			];

			// get data using filter
			oModel.read("/Products", {
				filters: aFilters,
				success: function (oData, oResponse) {
					console.log(oData);
				}
			});

			MessageBox.confirm(
				"readS4Hana検索して、表示する。"
			);
		},
		updateS4Hana: function (oEvent) {
			/*	var sServiceURl = this.getOwnerComponent().getMetadata().getManifestEntry("sap.app").dataSources["ZOrders"].uri;
				this.OdataModel = new sap.ui.model.odata.v2.ODataModel(sServiceURl);
				var model = vc.getView().getModel();*/

			var oModel = new sap.ui.model.odata.v2.ODataModel({
				serviceUrl: "https://my301452-api.s4hana.ondemand.com/sap/opu/odata/sap/API_OUTBOUND_DELIVERY_SRV"
			});

			// define filters
			var aFilters = [
				new sap.ui.model.Filter("ProductName",
					sap.ui.model.FilterOperator.Contains,
					"Chocolate")
			];

			// get data using filter
			oModel.read("/Products", {

				success: function (oData, oResponse) {
					console.log(oData);
				},
				error: function (oResponse) {
					console.log("end error");
				}
			});

			MessageBox.confirm(
				"end"
			);

		}
	});
});