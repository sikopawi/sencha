Ext.define(MyIndo.getNameSpace('controller.Master.PermohonanKredit'), {
	extend: 'MyIndo.app.Controller',

	requires: [
	MyIndo.getNameSpace('view.Master.PermohonanKredit.AddUpdateView')
	],

	init: function() {
		this.control({
			'PermohonanKreditView button': { // onclick tombol add  
				click: this.onPermohonanKreditViewButtonClicked
			},
			'PermohonanKreditaddwindow button': {
				click: this.onPermohonanKreditAddButtonClicked
			}
		});
	},

	/* PermohonanKredit View */

	onPermohonanKreditViewButtonClicked: function(record) {
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
				
		}
	},

	add: function() { 
		
		var customerstore = Ext.create(MyIndo.getNameSpace('store.Customers'));
		var addCbWindow = Ext.create(MyIndo.getNameSpace('view.Master.PermohonanKredit.AddUpdateView'),{
				customerstore: customerstore,
		});
		
		addCbWindow.show();
	},

	update: function(record) {
		var parent = record.up().up();
		var selected = parent.getSelectionModel().getSelection();
		if(selected.length > 0) {
			var updateCbWindow = Ext.create(MyIndo.getNameSpace('view.Master.PermohonanKredit.AddUpdateView'), {
				title: 'Update Unit Kerja',
			});
			var form = updateCbWindow.items.get('PermohonanKredit-add-update-form').getForm();
			var formFieldset = updateCbWindow.items.get('PermohonanKredit-add-update-form').items.get('PermohonanKredit-add-update-form-fieldset');
			formFieldset.add(new Ext.form.field.Hidden({
				name: 'UNIT_KERJA_ID'
			}));
			form.setValues({
				UNIT_KERJA_ID: selected[0].data.UNIT_KERJA_ID,
				UNIT_KERJA_NAME: selected[0].data.UNIT_KERJA_NAME,
				UNIT_KERJA_ADDRESS: selected[0].data.UNIT_KERJA_ADDRESS,
				UNIT_KERJA_PHONE: selected[0].data.UNIT_KERJA_PHONE,
				UNIT_KERJA_FAX: selected[0].data.UNIT_KERJA_FAX,
				UNIT_KERJA_CONTACT_PERSON: selected[0].data.UNIT_KERJA_CONTACT_PERSON
			});
			updateCbWindow.show();
		} else {
			Ext.Msg.alert('Application Error', 'Anda tidak memilih unit kerja.');
		}
	},

	delete: function(record) {
		var parent = record.up().up();
		var selected = parent.getSelectionModel().getSelection();
		var store = parent.getStore();
		if(selected.length > 0) {
			Ext.Msg.confirm('Konfirmasi hapus unit kerja', 'Anda yakin ingin menghapus data ini ?', function(btn) {
				if(btn == 'yes') {
					store.remove(store.findRecord('UNIT_KERJA_ID', selected[0].data.UNIT_KERJA_ID));
					store.sync();
				}
			});
		} else {
			Ext.Msg.alert('Application Error', 'Anda tidak memilih unit kerja.');
		}
	},

	/* End of : PermohonanKredit Main */

	/* PermohonanKredit Add Window : */

	onPermohonanKreditAddButtonClicked: function(record) {
		var action = record.action;
		switch(action) {
			case 'add-PermohonanKredit-save':
				if(record.up().up().title == 'Tambah Unit Kerja') {
					this.savePermohonanKredit(record); 
				} else {
					this.updatePermohonanKredit(record);
				}
				break;
				console.log(action);
			case 'add-PermohonanKredit-cancel':
				record.up().up().close();
				break;
			default:
				console.log(record);
		}
	},

	savePermohonanKredit: function(record) {
		
		var form = Ext.getCmp('PermohonanKredit-add-update-form').getForm();
		var mainContent = Ext.getCmp('main-content');
		var store = mainContent.getActiveTab().getStore();
		
		var me = this;
		if(form.isValid()) {
			if(Ext.Msg.confirm('Konfirmasi Tambah Unit Kerja', 'Anda yakin ingin menyimpan data ini ?', function(btn) {
				if(btn == 'yes') {
					form.submit({
						url: MyIndo.siteUrl('permohonankredit/request/add'),
						success: function(data, res) {
							var json = Ext.decode(res.response.responseText);
							if(me.isLogin(json)) {

								Ext.Msg.alert('Message', 'Unit kerja berhasil disimpan.');
								
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
			Ext.Msg.alert('Application Error', 'Silahkan input nama unit kerja terlebih dahulu.');
		}
	},

	updatePermohonanKredit: function(record) {
		var form = Ext.getCmp('PermohonanKredit-add-update-form').getForm(); 
		var mainContent = Ext.getCmp('main-content');
		var store = mainContent.getActiveTab().getStore();
		var me = this;
		if(form.isValid()) {
			if(Ext.Msg.confirm('Konfirmasi update Unit kerja', 'Anda yakin ingin menyimpan data ini ?', function(btn) {
				if(btn == 'yes') {
					form.submit({
						url: MyIndo.siteUrl('PermohonanKredit/request/update'),
						success: function(data, res) {
							var json = Ext.decode(res.response.responseText);
							if(me.isLogin(json)) {

								Ext.Msg.alert('Message', 'Unit kerja berhasil diupdate.');

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
			Ext.Msg.alert('Application Error', 'Silahkan input nama unit kerja terlebih dahuluuuu.');
		}
	}

	/* End of : PermohonanKredit Add Window */
});