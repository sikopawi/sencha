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
		var values = record.valueModels[0].data;
		var form = Ext.getCmp('rekening-add-update-form').getForm();
		form.setValues({
			CUSTOMERS_ADDRESS: values.CUSTOMERS_ADDRESS,
			CUSTOMERS_PHONE: values.CUSTOMERS_PHONE,
			CUSTOMERS_BIRTHDATE: values.CUSTOMERS_BIRTHDATE,
			UNIT_KERJA_NAME: values.UNIT_KERJA_NAME,
			CABANG_NAME: values.CABANG_NAME
		});
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
	}
});