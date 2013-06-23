Ext.define(MyIndo.getNameSpace('controller.Menu'), {
	extend: 'MyIndo.controller.Menu',
	
	requires: [
	MyIndo.getNameSpace('view.Master.Customer.CustomerView'),
	MyIndo.getNameSpace('view.Master.Cabang.CabangView'),
	MyIndo.getNameSpace('view.Master.PaymentPoint.PaymentPointView'),
	MyIndo.getNameSpace('view.Master.KreditCategory.KreditCategoryView'),
	MyIndo.getNameSpace('view.Master.DebiturCategory.DebiturCategoryView'),
	MyIndo.getNameSpace('view.Master.UnitKerja.UnitKerjaView'),
	MyIndo.getNameSpace('view.Master.MarketingOfficer.MarketingOfficerView'),
	MyIndo.getNameSpace('view.Master.Kolektabilitas.KolektabilitasView'),

	MyIndo.getNameSpace('controller.Master.Cabang')
	],

	stores: [
	'Menus',
	'Cabangs',
	'PaymentPoints',
	'KreditCategorys',
	'DebiturCategorys',
	'UnitKerjas',
	'MarketingOfficers',
	'Kolektabilitas',
	'Customers'
	],
	
	onCabangMenuClicked: function(menuTitle, menuId, mainContent) {
		if(!mainContent.items.get(menuId)) {
			var store = Ext.create(MyIndo.getNameSpace('store.Cabangs'));
			store.load();
			mainContent.add({
				xtype: 'cabangview',
				title: menuTitle,
				id: menuId,
				closable: true,
				store: store
			});
		}
		mainContent.setActiveTab(menuId);
	},

	onCustomerMenuClicked: function(menuTitle, menuId, mainContent) {
		if(!mainContent.items.get(menuId)) {
			var store = Ext.create(MyIndo.getNameSpace('store.Customers'));
			store.load();
			mainContent.add({
				xtype: 'customerview',
				title: menuTitle,
				id: menuId,
				closable: true,
				store: store
			});
		}
		mainContent.setActiveTab(menuId);
	},

	onPaymentPointClicked: function(menuTitle, menuId, mainContent) {
		if(!mainContent.items.get(menuId)) {
			var store = Ext.create(MyIndo.getNameSpace('store.PaymentPoints'));
			store.load();
			mainContent.add({
				xtype: 'paymentpointview',
				title: menuTitle,
				id: menuId,
				closable: true,
				store: store
			});
		}
		mainContent.setActiveTab(menuId);
	},

	onKreditCategoryClicked: function(menuTitle, menuId, mainContent) {
		if(!mainContent.items.get(menuId)) {
			var store = Ext.create(MyIndo.getNameSpace('store.KreditCategorys'));
			store.load();
			mainContent.add({
				xtype: 'kreditcategoryview',
				title: menuTitle,
				id: menuId,
				closable: true,
				store: store
			});
		}
		mainContent.setActiveTab(menuId);
	},

	onDebiturCategoryClicked: function(menuTitle, menuId, mainContent) {
		if(!mainContent.items.get(menuId)) {
			var store = Ext.create(MyIndo.getNameSpace('store.DebiturCategorys'));
			store.load();
			mainContent.add({
				xtype: 'debiturcategoryview',
				title: menuTitle,
				id: menuId,
				closable: true,
				store: store
			});
		}
		mainContent.setActiveTab(menuId);
	},
	onUnitKerjaClicked: function(menuTitle, menuId, mainContent) {
		if(!mainContent.items.get(menuId)) {
			var store = Ext.create(MyIndo.getNameSpace('store.UnitKerjas'));
			store.load();
			mainContent.add({
				xtype: 'UnitKerjaView',
				title: menuTitle,
				id: menuId,
				closable: true,
				store: store
			});
		}
		mainContent.setActiveTab(menuId);
	},
	
	onMarketingOfficerClicked: function(menuTitle, menuId, mainContent) {
		if(!mainContent.items.get(menuId)) {
			var store = Ext.create(MyIndo.getNameSpace('store.MarketingOfficers'));
			store.load();
			mainContent.add({
				xtype: 'MarketingOfficerView',
				title: menuTitle,
				id: menuId,
				closable: true,
				store: store
			});
		}
		mainContent.setActiveTab(menuId);
	} ,
	
	onKolektibilitasClicked: function(menuTitle, menuId, mainContent) {
		if(!mainContent.items.get(menuId)) {
			var store = Ext.create(MyIndo.getNameSpace('store.Kolektabilitas'));
			store.load();
			mainContent.add({
				xtype: 'KolektabilitasView',
				title: menuTitle,
				id: menuId,
				closable: true,
				store: store
			});
		}
		mainContent.setActiveTab(menuId);
	}
	

});