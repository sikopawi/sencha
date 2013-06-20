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
			default:

		}
	},

	/* Payment Point View */

	add: function() {
		var addWindow = Ext.create(MyIndo.getNameSpace('view.Master.PaymentPoint.AddUpdateView'));
		addWindow.show();
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
			default:
				console.log(record);
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

	}

	/* End of : Add Update Window */
});