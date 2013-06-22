Ext.define(MyIndo.getNameSpace('controller.Master.MarketingOfficer'), {
	extend: 'MyIndo.app.Controller',

	requires: [
	MyIndo.getNameSpace('view.Master.MarketingOfficer.AddUpdateView')
	],

	init: function() {
		this.control({ 
			'MarketingOfficerView button': { // onclick tombol add  
				click: this.onMarketingOfficerViewButtonClicked 
			},
			'MarketingOfficeraddwindow button': {
				click: this.onMarketingOfficerAddButtonClicked
			}
		});
	},

	/* Marketing Officer View */

	onMarketingOfficerViewButtonClicked: function(record) {
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
			default:
			console.log(record);
				
		}
	},

	add: function() { 
		var addCbWindow = Ext.create(MyIndo.getNameSpace('view.Master.MarketingOfficer.AddUpdateView'));
		addCbWindow.show();
	},

	update: function(record) {
		var parent = record.up().up();
		var selected = parent.getSelectionModel().getSelection();
		if(selected.length > 0) {
			var updateCbWindow = Ext.create(MyIndo.getNameSpace('view.Master.MarketingOfficer.AddUpdateView'), {
				title: 'Update Marketing Officer',
			});
			var form = updateCbWindow.items.get('marketingofficer-add-update-form').getForm();
			var formFieldset = updateCbWindow.items.get('marketingofficer-add-update-form').items.get('marketingofficer-add-update-form-fieldset');
			formFieldset.add(new Ext.form.field.Hidden({
				name: 'MARKETING_OFFICER_ID'
			}));
			form.setValues({
				MARKETING_OFFICER_ID: selected[0].data.MARKETING_OFFICER_ID,
				MARKETING_OFFICER_NAME: selected[0].data.MARKETING_OFFICER_NAME
			});
			updateCbWindow.show();
		} else {
			Ext.Msg.alert('Application Error', 'Anda tidak memilih marketing officer.');
		}
	},

	delete: function(record) {
		var parent = record.up().up();
		var selected = parent.getSelectionModel().getSelection();
		var store = parent.getStore();
		if(selected.length > 0) {
			Ext.Msg.confirm('Konfirmasi hapus marketing officer', 'Anda yakin ingin menghapus data ini ?', function(btn) {
				if(btn == 'yes') {
					store.remove(store.findRecord('MARKETING_OFFICER_ID', selected[0].data.MARKETING_OFFICER_ID));
					store.sync();
				}
			});
		} else {
			Ext.Msg.alert('Application Error', 'Anda tidak memilih marketing officer.');
		}
	},

	/* End of : Marketing Officer Main */

	/* Marketing Officer Add Window : */

	onMarketingOfficerAddButtonClicked: function(record) {
		var action = record.action;
		switch(action) {
			case 'add-marketingofficer-save':
				if(record.up().up().title == 'Tambah Marketing Officer') {
					this.saveMarketingOfficer(record); 
				} else {
					this.updateMarketingOfficer(record);
				}
				break;
				console.log(action);
			case 'add-marketingofficer-cancel':
				record.up().up().close();
				break;
			default:
				console.log(record);
		}
	},

	saveMarketingOfficer: function(record) {
		
		var form = Ext.getCmp('marketingofficer-add-update-form').getForm();
		var mainContent = Ext.getCmp('main-content');
		var store = mainContent.getActiveTab().getStore();
		
		var me = this;
		if(form.isValid()) {
			if(Ext.Msg.confirm('Konfirmasi Tambah Marketing Officer', 'Anda yakin ingin menyimpan data ini ?', function(btn) {
				if(btn == 'yes') {
					form.submit({
						url: MyIndo.siteUrl('marketingofficer/request/add'),
						success: function(data, res) {
							var json = Ext.decode(res.response.responseText);
							if(me.isLogin(json)) {

								Ext.Msg.alert('Message', 'Marketing officer berhasil disimpan.');
								
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
			Ext.Msg.alert('Application Error', 'Silahkan input nama marketing officer terlebih dahulu.');
		}
	},

	updateMarketingOfficer: function(record) {
		var form = Ext.getCmp('marketingofficer-add-update-form').getForm(); 
		var mainContent = Ext.getCmp('main-content');
		var store = mainContent.getActiveTab().getStore();
		var me = this;
		if(form.isValid()) {
			if(Ext.Msg.confirm('Konfirmasi update marketing officer', 'Anda yakin ingin menyimpan data ini ?', function(btn) {
				if(btn == 'yes') {
					form.submit({
						url: MyIndo.siteUrl('marketingofficer/request/update'),
						success: function(data, res) {
							var json = Ext.decode(res.response.responseText);
							if(me.isLogin(json)) {

								Ext.Msg.alert('Message', 'Marketing officer berhasil diupdate.');

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
			Ext.Msg.alert('Application Error', 'Silahkan input nama marketing officer terlebih dahuluuuu.');
		}
	}

	/* End of : MarketingOfficer Add Window */
});