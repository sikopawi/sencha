Ext.define(MyIndo.getNameSpace('controller.Master.Cabang'), {
	extend: 'MyIndo.app.Controller',

	requires: [
	MyIndo.getNameSpace('view.Master.Cabang.AddUpdateView')
	],

	init: function() {
		this.control({
			'cabangview button': {
				click: this.onCabangViewButtonClicked
			},
			'cabangaddwindow button': {
				click: this.onCabangAddButtonClicked
			}
		});
	},

	/* Cabang View */

	onCabangViewButtonClicked: function(record) {
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

	add: function() {
		var addCbWindow = Ext.create(MyIndo.getNameSpace('view.Master.Cabang.AddUpdateView'));
		addCbWindow.show();
	},

	update: function(record) {
		var parent = record.up().up();
		var selected = parent.getSelectionModel().getSelection();
		if(selected.length > 0) {
			var updateCbWindow = Ext.create(MyIndo.getNameSpace('view.Master.Cabang.AddUpdateView'), {
				title: 'Update Cabang',
			});
			var form = updateCbWindow.items.get('cabang-add-update-form').getForm();
			var formFieldset = updateCbWindow.items.get('cabang-add-update-form').items.get('cabang-add-update-form-fieldset');
			formFieldset.add(new Ext.form.field.Hidden({
				name: 'CABANG_ID'
			}));
			form.setValues({
				CABANG_NAME: selected[0].data.CABANG_NAME,
				CABANG_ID: selected[0].data.CABANG_ID
			});
			updateCbWindow.show();
		} else {
			Ext.Msg.alert('Application Error', 'Anda tidak memilih cabang.');
		}
	},

	delete: function(record) {
		var parent = record.up().up();
		var selected = parent.getSelectionModel().getSelection();
		var store = parent.getStore();
		if(selected.length > 0) {
			Ext.Msg.confirm('Konfirmasi Hapus Cabang', 'Anda yakin ingin menghapus data ini ?', function(btn) {
				if(btn == 'yes') {
					store.remove(store.findRecord('CABANG_ID', selected[0].data.CABANG_ID));
					store.sync({
						callback: function() {
							store.load(store.currentPage);
						}
					});
				}
			});
		} else {
			Ext.Msg.alert('Application Error', 'Anda tidak memilih cabang.');
		}
	},

	/* End of : Cabang Main */

	/* Cabang Add Window : */

	onCabangAddButtonClicked: function(record) {
		var action = record.action;
		switch(action) {
			case 'add-cabang-save':
				if(record.up().up().title == 'Tambah Cabang') {
					this.saveCabang(record);
				} else {
					this.updateCabang(record);
				}
				break;
			case 'add-cabang-cancel':
				record.up().up().close();
				break;
		}
	},

	saveCabang: function(record) {
		var form = Ext.getCmp('cabang-add-update-form').getForm();
		var mainContent = Ext.getCmp('main-content');
		var store = mainContent.getActiveTab().getStore();
		var me = this;
		if(form.isValid()) {
			if(Ext.Msg.confirm('Konfirmasi Tambah Cabang', 'Anda yakin ingin menyimpan data ini ?', function(btn) {
				if(btn == 'yes') {
					form.submit({
						url: MyIndo.siteUrl('cabang/request/add'),
						success: function(data, res) {
							var json = Ext.decode(res.response.responseText);
							if(me.isLogin(json)) {

								Ext.Msg.alert('Message', 'Cabang berhasil disimpan.');
								
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
			Ext.Msg.alert('Application Error', 'Tolong input nama cabang terlebih dahulu.');
		}
	},

	updateCabang: function(record) {
		var form = Ext.getCmp('cabang-add-update-form').getForm();
		var mainContent = Ext.getCmp('main-content');
		var store = mainContent.getActiveTab().getStore();
		var me = this;
		if(form.isValid()) {
			if(Ext.Msg.confirm('Konfirmasi Update Cabang', 'Anda yakin ingin menyimpan data ini ?', function(btn) {
				if(btn == 'yes') {
					form.submit({
						url: MyIndo.siteUrl('cabang/request/update'),
						success: function(data, res) {
							var json = Ext.decode(res.response.responseText);
							if(me.isLogin(json)) {

								Ext.Msg.alert('Message', 'Cabang berhasil diupdate.');

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
			Ext.Msg.alert('Application Error', 'Tolong input nama cabang terlebih dahulu.');
		}
	}

	/* End of : Cabang Add Window */
});