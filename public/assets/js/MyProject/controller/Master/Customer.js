Ext.define(MyIndo.getNameSpace('controller.Master.Customer'), {
	extend: 'MyIndo.app.Controller',

	requires: [
	MyIndo.getNameSpace('view.Master.Customer.AddUpdateView'),
	MyIndo.getNameSpace('view.Master.Customer.Search')
	],

	init: function() {
		this.control({
			'customerview button': {
				click: this.onButtonClicked
			},
			'customeraddupdateview button': {
				click: this.onButtonClicked
			},
			'customersearch button': {
				click: this.onButtonClicked
			}
		});
	},

	onButtonClicked: function(record) {
		var action = record.action;
		switch(action) {
			/* View */
			case 'add':
				this.add()
				break;
			case 'update':
				this.update(record);
				break;
			case 'delete':
				this.delete(record);
				break;
			case 'detail':
				this.detail(record);
				break;
			case 'search':
				this.search(record);
				break;
			/* Window */
			case 'add-save':
				if(record.up().up().title == 'Tambah Customer') {
					this.doSave(record);
				} else {
					this.doUpdate(record);
				}
				break;
			case 'add-cancel':
				record.up().up().close();
				break;
			/* Search Window */
			case 'search-search':
				this.doSearch(record);
				break;
			case 'search-cancel':
				record.up().up().close();
				break;
		}
	},

	add: function() {
		var pptstore = Ext.create(MyIndo.getNameSpace('store.PaymentPoints'));
		var ukstore = Ext.create(MyIndo.getNameSpace('store.UnitKerjas'));
		var cbstore = Ext.create(MyIndo.getNameSpace('store.Cabangs'));
		var addWindow = Ext.create(MyIndo.getNameSpace('view.Master.Customer.AddUpdateView'), {
			pptstore: pptstore,
			ukstore: ukstore,
			cbstore: cbstore
		});
		addWindow.show();
	},

	update: function(record) {
		var parent = record.up().up();
		var selected = parent.getSelectionModel().getSelection();
		if(selected.length > 0) {
			var pptstore = Ext.create(MyIndo.getNameSpace('store.PaymentPoints'));
			pptstore.load();
			var ukstore = Ext.create(MyIndo.getNameSpace('store.UnitKerjas'));
			ukstore.load();
			var cbstore = Ext.create(MyIndo.getNameSpace('store.Cabangs'));
			cbstore.load();
			var updateWindow = Ext.create(MyIndo.getNameSpace('view.Master.Customer.AddUpdateView'), {
				title: 'Update Customer',
				pptstore: pptstore,
				ukstore: ukstore,
				cbstore: cbstore
			});
			var form = updateWindow.items.get('customer-add-update-form').getForm();
			var formFieldset = updateWindow.items.get('customer-add-update-form').items.get('customer-add-update-form-fieldset');
			formFieldset.add(new Ext.form.field.Hidden({
				name: 'CUSTOMERS_ID'
			}));
			form.setValues({
				CUSTOMERS_ID: selected[0].data.CUSTOMERS_ID,
				UNIT_KERJA_ID: selected[0].data.UNIT_KERJA_ID,
				CABANG_ID: selected[0].data.CABANG_ID,
				PAYMENT_POINT_ID: selected[0].data.PAYMENT_POINT_ID,
				//CUSTOMERS_NO_REG: selected[0].data.CUSTOMERS_NO_REG,
				CUSTOMERS_NAME: selected[0].data.CUSTOMERS_NAME,
				CUSTOMERS_ADDRESS: selected[0].data.CUSTOMERS_ADDRESS,
				CUSTOMERS_NO_KTP: selected[0].data.CUSTOMERS_NO_KTP,
				CUSTOMERS_PHONE: selected[0].data.CUSTOMERS_PHONE,
				CUSTOMERS_BIRTHDATE: selected[0].data.CUSTOMERS_BIRTHDATE,
				CUSTOMERS_NOPEN: selected[0].data.CUSTOMERS_NOPEN,
				CUSTOMERS_COMPANY: selected[0].data.CUSTOMERS_COMPANY,
				CUSTOMERS_COMPANY_ADDRESS: selected[0].data.CUSTOMERS_COMPANY_ADDRESS,
				CUSTOMERS_COMPANY_PHONE: selected[0].data.CUSTOMERS_COMPANY_PHONE,
				CUSTOMERS_COMPANY_POSITION: selected[0].data.CUSTOMERS_COMPANY_POSITION,
				CUSTOMERS_REFERENCE_NAME: selected[0].data.CUSTOMERS_REFERENCE_NAME,
				CUSTOMERS_REFERENCE_ADDRESS: selected[0].data.CUSTOMERS_REFERENCE_ADDRESS,
				CUSTOMERS_REFERENCE_PHONE: selected[0].data.CUSTOMERS_REFERENCE_PHONE,
				CUSTOMERS_REFERENCE_STATUS: selected[0].data.CUSTOMERS_REFERENCE_STATUS
			});
			updateWindow.show();
		} else {
			Ext.Msg.alert('Application Error', 'Anda tidak memilih Customer.');
		}
	},

	delete: function(record) {
		var parent = record.up().up();
		var selected = parent.getSelectionModel().getSelection();
		var store = parent.getStore();
		var me = this;
		if(selected.length > 0) {
			Ext.Msg.confirm('Konfirmasi Hapus Customer', 'Anda yakin ingin menghapus data ini ?', function(btn) {
				if(btn == 'yes') {
					store.remove(store.findRecord('CUSTOMERS_ID', selected[0].data.CUSTOMERS_ID));
					store.sync({
						callback: function() {
							store.load(store.currentPage);
						}
					});
				}
			});
		} else {
			Ext.Msg.alert('Application Error', 'Anda tidak memilih Customer.');
		}
	},

	detail: function(record) {
		Ext.Msg.alert('Application Error', 'Maaf, fungsi ini belum tersedia.');
	},

	search: function(record) {
		var searchWindow = Ext.create(MyIndo.getNameSpace('view.Master.Customer.Search'));
		searchWindow.show();
		// Ext.Msg.alert('Application Error', 'Maaf, fungsi ini belum tersedia.');
	},

	doSave: function(record) {
		var form = Ext.getCmp('customer-add-update-form').getForm();
		var mainContent = Ext.getCmp('main-content');
		var store = mainContent.getActiveTab().getStore();
		var me = this;

		if(form.isValid()) {
			if(Ext.Msg.confirm('Konfirmasi Tambah Customer', 'Anda yakin ingin menyimpan data ini ?', function(btn) {
				if(btn == 'yes') {
					var vals = form.getValues();
					form.submit({
						url: MyIndo.siteUrl('customer/request/add'),
						success: function(data, res) {
							var json = Ext.decode(res.response.responseText);
							if(me.isLogin(json)) {

								Ext.Msg.alert('Message', 'Customer berhasil disimpan.');
								
								/* Reset Form : */
								form.reset();

								/* Reload Store : */
								store.load(store.currentPage);
								noReg = parentInt(vals.CUSTOMERS_NO_REG);
								var t = '';
								for(var i=0;i<(10-noReg.length);i++) {
									t += '0';
								}
								MyIndo.data.customer.lastNoReg = t + noReg;
								console.log(MyIndo.data.customer.lastNoReg);
							}
						},
						failure: function(data, res) {
							var json = Ext.decode(res.response.responseText);
							Ext.Msg.alert('Application Error', '<strong>Error Code</strong>: ' + json.error_code + '<br/><strong>Message</strong>: ' + json.error_message);
						}
					})
				}
			}));
		} else {
			Ext.Msg.alert('Application Error', 'Tolong lengkapi form terlebih dahulu.');
		}
	},

	doUpdate: function(record) {
		var form = Ext.getCmp('customer-add-update-form').getForm();
		var mainContent = Ext.getCmp('main-content');
		var store = mainContent.getActiveTab().getStore();
		var me = this;
		if(form.isValid()) {
			if(Ext.Msg.confirm('Konfirmasi Update Customer', 'Anda yakin ingin menyimpan data ini ?', function(btn) {
				if(btn == 'yes') {
					form.submit({
						url: MyIndo.siteUrl('customer/request/update'),
						success: function(data, res) {
							var json = Ext.decode(res.response.responseText);
							if(me.isLogin(json)) {

								Ext.Msg.alert('Message', 'Customer berhasil diupdate.');

								/* Reload Store : */
								store.load(store.currentPage);
							}
						},
						failure: function(data, res) {
							var json = Ext.decode(res.response.responseText);
							Ext.Msg.alert('Application Error', '<strong>Error Code</strong>: ' + json.error_code + '<br/><strong>Message</strong>: ' + json.error_message);
						}
					})
				}
			}));
		} else {
			Ext.Msg.alert('Application Error', 'Tolong lengkapi form terlebih dahulu.');
		}
	},

	doSearch: function(record) {
		var form = Ext.getCmp('customer-search-form').getForm();
		var store = Ext.create(MyIndo.getNameSpace('store.Customers'));
		store.proxy.api.read = MyIndo.siteUrl('customer/request/search');
		store.proxy.extraParams = form.getValues();
		var LD = Ext.create('MyIndo.view.Loading');
		LD.show();
		store.load({
			callback: function(data) {
				LD.close();
				if(data.length > 0) {

				} else {
					Ext.Msg.alert('Search Result', 'Maaf, tidak ada data ditemukan.');
				}
			}
		});
		record.up().up().close();
	}
});