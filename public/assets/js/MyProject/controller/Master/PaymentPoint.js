Ext.define(MyIndo.getNameSpace('controller.Master.PaymentPoint'), {
	extend: 'MyIndo.app.Controller',

	requires: [
	MyIndo.getNameSpace('view.Master.PaymentPoint.AddUpdateView')
	],

	init: function() {
		this.control({
			'paymentpointview button': {
				click: this.onPaymentPointViewButtonClicked
			},

			'paymentpointaddupdatewindow button': {
				click: this.onPaymentPointAddUpdateWindowButtonClicked
			}
		});
	},

	onPaymentPointViewButtonClicked: function(record) {
		var action = record.action;
		switch(action) {
			case 'add': 
				this.add();
				break;
			case 'update':
				this.update(record);
				break;
			case 'delete':
				this.delete(record);
				break;
		}
	},

	/* Payment Point View */

	add: function() {
		var addWindow = Ext.create(MyIndo.getNameSpace('view.Master.PaymentPoint.AddUpdateView'));
		addWindow.show();
	},

	update: function(record) {
		var parent = record.up().up();
		var selected = parent.getSelectionModel().getSelection();
		if(selected.length > 0) {
			var updateWindow = Ext.create(MyIndo.getNameSpace('view.Master.PaymentPoint.AddUpdateView'), {
				title: 'Update Payment Point',
			});
			var form = updateWindow.items.get('paymentpoint-add-update-form').getForm();
			var formFieldset = updateWindow.items.get('paymentpoint-add-update-form').items.get('paymentpoint-add-update-form-fieldset');
			formFieldset.add(new Ext.form.field.Hidden({
				name: 'PAYMENT_POINT_ID'
			}));
			form.setValues({
				PAYMENT_POINT_CODE: selected[0].data.PAYMENT_POINT_CODE,
				PAYMENT_POINT_NAME: selected[0].data.PAYMENT_POINT_NAME,
				PAYMENT_POINT_ID: selected[0].data.PAYMENT_POINT_ID
			});
			updateWindow.show();
		} else {
			Ext.Msg.alert('Application Error', 'Anda tidak memilih payment point.');
		}
	},

	delete: function(record) {
		var parent = record.up().up();
		var selected = parent.getSelectionModel().getSelection();
		var store = parent.getStore();
		var me = this;
		if(selected.length > 0) {
			Ext.Msg.confirm('Konfirmasi Hapus Payment Point', 'Anda yakin ingin menghapus data ini ?', function(btn) {
				if(btn == 'yes') {
					store.remove(store.findRecord('PAYMENT_POINT_ID', selected[0].data.PAYMENT_POINT_ID));
					store.sync({
						callback: function() {
							store.load(store.currentPage);
						}
					});
				}
			});
		} else {
			Ext.Msg.alert('Application Error', 'Anda tidak memilih Payment Point.');
		}
	},

	/* End of : Payment Point View */

	/* Add Update Window */

	onPaymentPointAddUpdateWindowButtonClicked: function(record) {
		var action = record.action;
		switch(action) {
			case 'add-paymentpoint-save':
				if(record.up().up().title == 'Tambah Payment Point') {
					this.savePaymentPoint(record);
				} else {
					this.updatePaymentPoint(record);
				}
				break;
			case 'add-paymentpoint-cancel':
				record.up().up().close();
				break;
		}
	},

	savePaymentPoint: function(record) {
		var form = Ext.getCmp('paymentpoint-add-update-form').getForm();
		var mainContent = Ext.getCmp('main-content');
		var store = mainContent.getActiveTab().getStore();
		var me = this;
		if(form.isValid()) {
			if(Ext.Msg.confirm('Konfirmasi Tambah Payment Point', 'Anda yakin ingin menyimpan data ini ?', function(btn) {
				if(btn == 'yes') {
					form.submit({
						url: MyIndo.siteUrl('paymentpoint/request/add'),
						success: function(data, res) {
							var json = Ext.decode(res.response.responseText);
							if(me.isLogin(json)) {

								Ext.Msg.alert('Message', 'Payment Point berhasil disimpan.');
								
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

	updatePaymentPoint: function(record) {
		var form = Ext.getCmp('paymentpoint-add-update-form').getForm();
		var mainContent = Ext.getCmp('main-content');
		var store = mainContent.getActiveTab().getStore();
		var me = this;
		if(form.isValid()) {
			if(Ext.Msg.confirm('Konfirmasi Update Payment Point', 'Anda yakin ingin menyimpan data ini ?', function(btn) {
				if(btn == 'yes') {
					form.submit({
						url: MyIndo.siteUrl('paymentpoint/request/update'),
						success: function(data, res) {
							var json = Ext.decode(res.response.responseText);
							if(me.isLogin(json)) {

								Ext.Msg.alert('Message', 'Payment Point berhasil diupdate.');

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

	/* End of : Add Update Window */
});