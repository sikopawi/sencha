Ext.define(MyIndo.getNameSpace('controller.Menu'), {
	extend: 'MyIndo.controller.Menu',
	
	requires: [
	MyIndo.getNameSpace('view.Master.CustomerView'),
	MyIndo.getNameSpace('view.Master.Cabang.CabangView'),
	MyIndo.getNameSpace('view.Master.PaymentPoint.PaymentPointView'),
	MyIndo.getNameSpace('view.Master.KreditCategory.KreditCategoryView'),
	MyIndo.getNameSpace('view.Master.DebiturCategory.DebiturCategoryView'),

	MyIndo.getNameSpace('controller.Master.Cabang')
	],

	stores: [
	'Menus',
	'Cabangs',
	'PaymentPoints',
	'KreditCategorys',
	'DebiturCategorys'
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
			mainContent.add({
				xtype: 'customerview',
				title: menuTitle,
				id: menuId,
				closable: true,
				store: Ext.getStore('Cabangs')
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

});