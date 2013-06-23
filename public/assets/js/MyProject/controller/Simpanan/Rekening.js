Ext.define(MyIndo.getNameSpace('controller.Simpanan.Rekening'), {
	extend: 'MyIndo.app.Controller',

	requires: [
	MyIndo.getNameSpace('view.Simpanan.Rekening.AddUpdateView')
	],

	init: function() {
		this.control({
			'rekeningview button': {
				click: this.onButtonClicked
			},
			'rekeningaddupdateview button': {
				click: this.onButtonClicked
			},
			'rekeningaddupdateview combobox': {
				change: this.onComboChange
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
				if(record.up().up().title == 'Tambah Rekening') {
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

	onComboChange: function(record) {
		if(record.valueModels.length > 0) {
			var values = record.valueModels[0].data;
			var form = Ext.getCmp('rekening-add-update-form').getForm();
			form.setValues({
				CUSTOMERS_NAME: values.CUSTOMERS_NAME,
				CUSTOMERS_ADDRESS: values.CUSTOMERS_ADDRESS,
				CUSTOMERS_PHONE: values.CUSTOMERS_PHONE,
				CUSTOMERS_BIRTHDATE: values.CUSTOMERS_BIRTHDATE,
				UNIT_KERJA_NAME: values.UNIT_KERJA_NAME,
				CABANG_NAME: values.CABANG_NAME
			});
		}
	},

	add: function() {
		var cusstore = Ext.create(MyIndo.getNameSpace('store.Customers'));
		var addWindow = Ext.create(MyIndo.getNameSpace('view.Simpanan.Rekening.AddUpdateView'), {
			cusstore: cusstore
		});
		var me = this;
		var form = addWindow.items.get('rekening-add-update-form').getForm();
		form.setValues({
			ENTRY_BY: this.getActiveUser()
		});
		addWindow.show();
	},

	update: function(record) {
		var parent = record.up().up();
		var selected = parent.getSelectionModel().getSelection();
		if(selected.length > 0) {
			var cusstore = Ext.create(MyIndo.getNameSpace('store.Customers'));
			cusstore.load();
			var updateWindow = Ext.create(MyIndo.getNameSpace('view.Simpanan.Rekening.AddUpdateView'), {
				title: 'Update Rekening',
				cusstore: cusstore
			});
			var form = updateWindow.items.get('rekening-add-update-form').getForm();
			var formFieldset = updateWindow.items.get('rekening-add-update-form').items.get('rekening-add-update-form-fieldset-1');
			formFieldset.add(new Ext.form.field.Hidden({
				name: 'REKENING_ID'
			}));
			form.setValues({
				REKENING_ID: selected[0].data.REKENING_ID,
				REKENING_NO: selected[0].data.REKENING_NO,
				CUSTOMERS_ID: selected[0].data.CUSTOMERS_ID,
				REKENING_NO_REF: selected[0].data.REKENING_NO_REF,
				REKENING_STATUS: selected[0].data.REKENING_STATUS,
				ENTRY_BY: selected[0].data.ENTRY_BY
			});
			updateWindow.show();
		} else {
			Ext.Msg.alert('Application Error', 'Anda tidak memilih Rekening.');
		}
	},

	delete: function(record) {
		var parent = record.up().up();
		var selected = parent.getSelectionModel().getSelection();
		var store = parent.getStore();
		var me = this;
		if(selected.length > 0) {
			Ext.Msg.confirm('Konfirmasi Hapus Rekening', 'Anda yakin ingin menghapus data ini ?', function(btn) {
				if(btn == 'yes') {
					store.remove(store.findRecord('REKENING_ID', selected[0].data.REKENING_ID));
					store.sync({
						callback: function() {
							store.load(store.currentPage);
						}
					});
				}
			});
		} else {
			Ext.Msg.alert('Application Error', 'Anda tidak memilih Rekening.');
		}
	},

	doSave: function(record) {
		var form = Ext.getCmp('rekening-add-update-form').getForm();
		var mainContent = Ext.getCmp('main-content');
		var store = mainContent.getActiveTab().getStore();
		var me = this;
		if(form.isValid()) {
			if(Ext.Msg.confirm('Konfirmasi Tambah Rekening', 'Anda yakin ingin menyimpan data ini ?', function(btn) {
				if(btn == 'yes') {
					form.submit({
						url: MyIndo.siteUrl('rekening/request/add'),
						success: function(data, res) {
							var json = Ext.decode(res.response.responseText);
							if(me.isLogin(json)) {

								Ext.Msg.alert('Message', 'Rekening berhasil disimpan.');
								
								/* Reset Form : */
								form.reset();

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

	doUpdate: function(record) {
		var form = Ext.getCmp('rekening-add-update-form').getForm();
		var mainContent = Ext.getCmp('main-content');
		var store = mainContent.getActiveTab().getStore();
		var me = this;
		if(form.isValid()) {
			if(Ext.Msg.confirm('Konfirmasi Update Rekening', 'Anda yakin ingin menyimpan data ini ?', function(btn) {
				if(btn == 'yes') {
					form.submit({
						url: MyIndo.siteUrl('rekening/request/update'),
						success: function(data, res) {
							var json = Ext.decode(res.response.responseText);
							if(me.isLogin(json)) {

								Ext.Msg.alert('Message', 'Rekening berhasil diupdate.');

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
	}
});