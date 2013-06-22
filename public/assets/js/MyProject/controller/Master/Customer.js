Ext.define(MyIndo.getNameSpace('controller.Master.Customer'), {
	extend: 'MyIndo.app.Controller',

	requires: [
	MyIndo.getNameSpace('view.Master.Customer.AddUpdateView')
	],

	init: function() {
		this.control({
			'customerview button': {
				click: this.onButtonClicked
			},
			'customeraddupdateview button': {
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
		}
	},

	add: function() {
		var pptstore = Ext.create(MyIndo.getNameSpace('store.PaymentPoints'));
		var cbstore = Ext.create(MyIndo.getNameSpace('store.Cabangs'));
		var addWindow = Ext.create(MyIndo.getNameSpace('view.Master.Customer.AddUpdateView'), {
			pptstore: pptstore,
			cbstore: cbstore
		});
		addWindow.show();
	},

	doSave: function(record) {
		var form = Ext.getCmp('customer-add-update-form').getForm();
		var mainContent = Ext.getCmp('main-content');
		var store = mainContent.getActiveTab().getStore();
		var me = this;
		if(form.isValid()) {
			if(Ext.Msg.confirm('Konfirmasi Tambah Customer', 'Anda yakin ingin menyimpan data ini ?', function(btn) {
				if(btn == 'yes') {
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
});