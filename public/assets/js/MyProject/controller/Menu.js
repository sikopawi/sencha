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
	MyIndo.getNameSpace('view.Master.PermohonanKredit.PermohonanKreditView'),

	MyIndo.getNameSpace('view.Kredit.AnalisaKredit.View'),
	MyIndo.getNameSpace('view.Kredit.PencairanKredit.View'),

	MyIndo.getNameSpace('view.Administrasi.Debitur.View'),
	MyIndo.getNameSpace('view.Administrasi.Tagihan.View'),

	MyIndo.getNameSpace('view.Simpanan.Rekening.View'),
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
	'Customers',
	'PermohonanKredits',
	'Rekenings',
	'Debiturs',
	'Payments',
	'Cards'
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
	} ,
	
	onPermohonanKreditClicked: function(menuTitle, menuId, mainContent) {
		if(!mainContent.items.get(menuId)) {
			var store = Ext.create(MyIndo.getNameSpace('store.PermohonanKredits'));
			store.load();
			mainContent.add({
				xtype: 'PermohonanKreditView',
				title: menuTitle,
				id: menuId,
				closable: true,
				store: store
			});
		}
		mainContent.setActiveTab(menuId);
	},
	
	onRekeningClicked: function(menuTitle, menuId, mainContent) {
		if(!mainContent.items.get(menuId)) {
			var store = Ext.create(MyIndo.getNameSpace('store.Rekenings'));
			store.load();
			mainContent.add({
				xtype: 'rekeningview',
				title: menuTitle,
				id: menuId,
				closable: true,
				store: store
			});
		}
		mainContent.setActiveTab(menuId);
	},

	onAnalisaKreditClicked: function(menuTitle, menuId, mainContent) {
		if(!mainContent.items.get(menuId)) {
			var store = Ext.create(MyIndo.getNameSpace('store.PermohonanKredits'));
			store.proxy.extraParams = {
				STATUS: 'Open'
			};
			store.load();
			mainContent.add({
				xtype: 'analisakreditview',
				title: menuTitle,
				id: menuId,
				closable: true,
				store: store
			});
		}
		mainContent.setActiveTab(menuId);
	},

	onPencairanKreditClicked: function(menuTitle, menuId, mainContent) {
		if(!mainContent.items.get(menuId)) {
			var store = Ext.create(MyIndo.getNameSpace('store.PermohonanKredits'));
			store.proxy.extraParams = {
				STATUS: 'Disetujui'
			};
			store.load();
			mainContent.add({
				xtype: 'pencairankreditview',
				title: menuTitle,
				id: menuId,
				closable: true,
				store: store
			});
		}
		mainContent.setActiveTab(menuId);
	},

	onDebiturClicked: function(menuTitle, menuId, mainContent) {
		if(!mainContent.items.get(menuId)) {
			var store = Ext.create(MyIndo.getNameSpace('store.Debiturs'));
			store.load();
			mainContent.add({
				xtype: 'debiturview',
				title: menuTitle,
				id: menuId,
				closable: true,
				store: store
			});
		}
		mainContent.setActiveTab(menuId);
	},

	onTagihanClicked: function(menuTitle, menuId, mainContent) {
		if(!mainContent.items.get(menuId)) {
			var store = Ext.create(MyIndo.getNameSpace('store.Payments'));
			store.load();
			mainContent.add({
				xtype: 'tagihanview',
				title: menuTitle,
				id: menuId,
				closable: true,
				store: store
			});
		}
		mainContent.setActiveTab(menuId);
	}
});