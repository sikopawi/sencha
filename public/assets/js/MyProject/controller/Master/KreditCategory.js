Ext.define(MyIndo.getNameSpace('controller.Master.KreditCategory'), {
	extend: 'MyIndo.app.Controller',

	requires: [
	MyIndo.getNameSpace('view.Master.KreditCategory.AddUpdateView')
	],

	init: function() {
		this.control({
			'kreditcategoryview button': {
				click: this.onButtonClicked
			},

			'kreditcategoryaddupdatewindow button': {
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
				if(record.up().up().title == 'Tambah Kredit Category') {
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
		var addWindow = Ext.create(MyIndo.getNameSpace('view.Master.KreditCategory.AddUpdateView'));
		addWindow.show();
	},

	update: function(record) {
		var parent = record.up().up();
		var selected = parent.getSelectionModel().getSelection();
		if(selected.length > 0) {
			var updateWindow = Ext.create(MyIndo.getNameSpace('view.Master.KreditCategory.AddUpdateView'), {
				title: 'Update Kredit Category',
			});
			var form = updateWindow.items.get('kreditcategory-add-update-form').getForm();
			var formFieldset = updateWindow.items.get('kreditcategory-add-update-form').items.get('kreditcategory-add-update-form-fieldset');
			formFieldset.add(new Ext.form.field.Hidden({
				name: 'KREDIT_CATEGORY_ID'
			}));
			form.setValues({
				KREDIT_CATEGORY_ID: selected[0].data.KREDIT_CATEGORY_ID,
				KREDIT_CATEGORY_NAME: selected[0].data.KREDIT_CATEGORY_NAME
			});
			updateWindow.show();
		} else {
			Ext.Msg.alert('Application Error', 'Anda tidak memilih Kredit Category.');
		}
	},

	delete: function(record) {
		var parent = record.up().up();
		var selected = parent.getSelectionModel().getSelection();
		var store = parent.getStore();
		var me = this;
		if(selected.length > 0) {
			Ext.Msg.confirm('Konfirmasi Hapus Kredit Category', 'Anda yakin ingin menghapus data ini ?', function(btn) {
				if(btn == 'yes') {
					store.remove(store.findRecord('KREDIT_CATEGORY_ID', selected[0].data.KREDIT_CATEGORY_ID));
					store.sync({
						callback: function() {
							store.load(store.currentPage);
						}
					});
				}
			});
		} else {
			Ext.Msg.alert('Application Error', 'Anda tidak memilih Kredit Category.');
		}
	},

	doSave: function(record) {
		var form = Ext.getCmp('kreditcategory-add-update-form').getForm();
		var mainContent = Ext.getCmp('main-content');
		var store = mainContent.getActiveTab().getStore();
		var me = this;
		if(form.isValid()) {
			if(Ext.Msg.confirm('Konfirmasi Tambah Kredit Category', 'Anda yakin ingin menyimpan data ini ?', function(btn) {
				if(btn == 'yes') {
					form.submit({
						url: MyIndo.siteUrl('kreditcategory/request/add'),
						success: function(data, res) {
							var json = Ext.decode(res.response.responseText);
							if(me.isLogin(json)) {

								Ext.Msg.alert('Message', 'Kredit Category berhasil disimpan.');
								
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
		var form = Ext.getCmp('kreditcategory-add-update-form').getForm();
		var mainContent = Ext.getCmp('main-content');
		var store = mainContent.getActiveTab().getStore();
		var me = this;
		if(form.isValid()) {
			if(Ext.Msg.confirm('Konfirmasi Update Kredit Category', 'Anda yakin ingin menyimpan data ini ?', function(btn) {
				if(btn == 'yes') {
					form.submit({
						url: MyIndo.siteUrl('kreditcategory/request/update'),
						success: function(data, res) {
							var json = Ext.decode(res.response.responseText);
							if(me.isLogin(json)) {

								Ext.Msg.alert('Message', 'Kredit Category berhasil diupdate.');

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