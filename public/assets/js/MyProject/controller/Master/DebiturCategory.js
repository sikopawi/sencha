Ext.define(MyIndo.getNameSpace('controller.Master.DebiturCategory'), {
	extend: 'MyIndo.app.Controller',

	requires: [
	MyIndo.getNameSpace('view.Master.DebiturCategory.AddUpdateView')
	],

	init: function() {
		this.control({
			'debiturcategoryview button': {
				click: this.onButtonClicked
			},

			'debiturcategoryaddupdatewindow button': {
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
				if(record.up().up().title == 'Tambah Debitur Category') {
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
		var addWindow = Ext.create(MyIndo.getNameSpace('view.Master.DebiturCategory.AddUpdateView'));
		addWindow.show();
	},

	update: function(record) {
		var parent = record.up().up();
		var selected = parent.getSelectionModel().getSelection();
		if(selected.length > 0) {
			var updateWindow = Ext.create(MyIndo.getNameSpace('view.Master.DebiturCategory.AddUpdateView'), {
				title: 'Update Debitur Category',
			});
			var form = updateWindow.items.get('debiturcategory-add-update-form').getForm();
			var formFieldset = updateWindow.items.get('debiturcategory-add-update-form').items.get('debiturcategory-add-update-form-fieldset');
			formFieldset.add(new Ext.form.field.Hidden({
				name: 'DEBITUR_CATEGORY_ID'
			}));
			form.setValues({
				DEBITUR_CATEGORY_ID: selected[0].data.DEBITUR_CATEGORY_ID,
				DEBITUR_CATEGORY_NAME: selected[0].data.DEBITUR_CATEGORY_NAME
			});
			updateWindow.show();
		} else {
			Ext.Msg.alert('Application Error', 'Anda tidak memilih Debitur Category.');
		}
	},

	delete: function(record) {
		var parent = record.up().up();
		var selected = parent.getSelectionModel().getSelection();
		var store = parent.getStore();
		var me = this;
		if(selected.length > 0) {
			Ext.Msg.confirm('Konfirmasi Hapus Debitur Category', 'Anda yakin ingin menghapus data ini ?', function(btn) {
				if(btn == 'yes') {
					store.remove(store.findRecord('DEBITUR_CATEGORY_ID', selected[0].data.DEBITUR_CATEGORY_ID));
					store.sync({
						callback: function() {
							store.load(store.currentPage);
						}
					});
				}
			});
		} else {
			Ext.Msg.alert('Application Error', 'Anda tidak memilih Debitur Category.');
		}
	},

	doSave: function(record) {
		var form = Ext.getCmp('debiturcategory-add-update-form').getForm();
		var mainContent = Ext.getCmp('main-content');
		var store = mainContent.getActiveTab().getStore();
		var me = this;
		if(form.isValid()) {
			if(Ext.Msg.confirm('Konfirmasi Tambah Debitur Category', 'Anda yakin ingin menyimpan data ini ?', function(btn) {
				if(btn == 'yes') {
					form.submit({
						url: MyIndo.siteUrl('debiturcategory/request/add'),
						success: function(data, res) {
							var json = Ext.decode(res.response.responseText);
							if(me.isLogin(json)) {

								Ext.Msg.alert('Message', 'Debitur Category berhasil disimpan.');
								
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
		var form = Ext.getCmp('debiturcategory-add-update-form').getForm();
		var mainContent = Ext.getCmp('main-content');
		var store = mainContent.getActiveTab().getStore();
		var me = this;
		if(form.isValid()) {
			if(Ext.Msg.confirm('Konfirmasi Update Debitur Category', 'Anda yakin ingin menyimpan data ini ?', function(btn) {
				if(btn == 'yes') {
					form.submit({
						url: MyIndo.siteUrl('debiturcategory/request/update'),
						success: function(data, res) {
							var json = Ext.decode(res.response.responseText);
							if(me.isLogin(json)) {

								Ext.Msg.alert('Message', 'Debitur Category berhasil diupdate.');

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