sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("odata.ODataModel.controller.View1", {
		onInit: function () {   
		//	var url = "/destinations/V2/Northwind/Northwind.svc/";

var oModel =this.getOwnerComponent().getModel("North");

  
         sap.ui.core.BusyIndicator.show();
      //   var oModel = new sap.ui.model.odata.ODataModel("https://cors-anywhere.herokuapp.com/http://services.odata.org/Northwind/Northwind.svc"); 
		oModel.read("/Products", {
				success: function (oData) {
				console.log(oData);
				var oModel = new sap.ui.model.json.JSONModel();
				oModel.setData(oData);
			 /*   var list =this.getView().byId("input");
			    list.bindElement("/results");*/
				this.getView().setModel(oModel,"Northwind");
				
				 sap.ui.core.BusyIndicator.hide();
				}.bind(this),
				error: function (oData) {
					sap.m.MessageToast.show("Connection not established");
					 sap.ui.core.BusyIndicator.hide();
				}
			});
          
		}
	});
});