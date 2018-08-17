function initModel() {
	var sUrl = "/sap/opu/odata/sap/API_OUTBOUND_DELIVERY_SRV/sap/opu/odata/sap/API_OUTBOUND_DELIVERY_SRV/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}