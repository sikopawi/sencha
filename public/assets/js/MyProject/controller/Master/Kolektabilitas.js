Ext.define(MyIndo.getNameSpace('controller.Master.Kolektabilitas'), {
	extend: 'MyIndo.app.Controller',

	requires: [
	MyIndo.getNameSpace('view.Master.Kolektabilitas.AddUpdateView')
	],

	init: function() {
		this.control({
			'KolektabilitasView button': { // onclick tombol add  
				click: this.onKolektabilitasViewButtonClicked
			},
			'Kolektabilitasaddwindow button': {
				click: this.onKolektabilitasAddButtonClicked
			}
		});
	},

	/* UnitKerja View */

	onKolektabilitasViewButtonClicked: function(record) {
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
		var addCbWindow = Ext.create(MyIndo.getNameSpace('view.Master.Kolektabilitas.AddUpdateView'));
		addCbWindow.show();
	},

	update: function(record) {
		var parent = record.up().up();
		var selected = parent.getSelectionModel().getSelection();
		if(selected.length > 0) {
			var updateCbWindow = Ext.create(MyIndo.getNameSpace('view.Master.Kolektabilitas.AddUpdateView'), {
				title: 'Update Kolektabilitas',
			});
			var form = updateCbWindow.items.get('kolektabilitas-add-update-form').getForm();
			var formFieldset = updateCbWindow.items.get('kolektabilitas-add-update-form').items.get('kolektabilitas-add-update-form-fieldset');
			formFieldset.add(new Ext.form.field.Hidden({
				name: 'KOLEKTIBILITAS_ID' 
			}));
			form.setValues({
				KOLEKTIBILITAS_ID: selected[0].data.KOLEKTIBILITAS_ID,
			 	KOLEKTIBILITAS_CODE: selected[0].data.KOLEKTIBILITAS_CODE,
			 	KOLEKTIBILITAS_URAIAN: selected[0].data.KOLEKTIBILITAS_URAIAN,
			 	KOLEKTIBILITAS_TUNGGAKAN_MIN: selected[0].data.KOLEKTIBILITAS_TUNGGAKAN_MIN,
			 	KOLEKTIBILITAS_TUNGGAKAN_MAX: selected[0].data.KOLEKTIBILITAS_TUNGGAKAN_MAX
			});
			updateCbWindow.show();
		} else {
			Ext.Msg.alert('Application Error', 'Anda tidak memilih data kolektabilitas.');
		}
	},

	delete: function(record) {
		var parent = record.up().up();
		var selected = parent.getSelectionModel().getSelection();
		var store = parent.getStore();
		if(selected.length > 0) {
			Ext.Msg.confirm('Konfirmasi hapus data kolektabilitas', 'Anda yakin ingin menghapus data ini ?', function(btn) {
				if(btn == 'yes') {
					store.remove(store.findRecord('KOLEKTIBILITAS_ID', selected[0].data.KOLEKTIBILITAS_ID));
					store.sync();
				}
			});
		} else {
			Ext.Msg.alert('Application Error', 'Anda tidak data kolektablitas.');
		}
	},

	/* End of : UnitKerja Main */

	/* UnitKerja Add Window : */

	onKolektabilitasAddButtonClicked: function(record) {
		var action = record.action; 
		switch(action) {
			case 'add-Kolektabilitas-save':
				if(record.up().up().title == 'Tambah Kolektabilitas') {
					this.saveKolektabilitas(record); 
					 
				} else {
					
					this.updateKolektabilitas(record);
				}
				break;
			case 'add-Kolektabilitas-cancel':
				record.up().up().close();
				break;
			default:
				console.log(record);
		}
	},

	saveKolektabilitas: function(record) {
		
		var form = Ext.getCmp('kolektabilitas-add-update-form').getForm();
		var mainContent = Ext.getCmp('main-content');
		var store = mainContent.getActiveTab().getStore();
		
		var me = this;
		if(form.isValid()) {
			if(Ext.Msg.confirm('Konfirmasi Tambah Kolektabilitas', 'Anda yakin ingin menyimpan data ini ?', function(btn) {
				if(btn == 'yes') {
					form.submit({
						url: MyIndo.siteUrl('kolektabilitas/request/add'),
						success: function(data, res) {
							var json = Ext.decode(res.response.responseText);
							if(me.isLogin(json)) {

								Ext.Msg.alert('Message', 'Data kolektabilitas berhasil disimpan.');
								
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
			Ext.Msg.alert('Application Error', 'Silahkan data kolektabilitas terlebih dahulu.');
		}
	},

	updateKolektabilitas: function(record) {
		var form = Ext.getCmp('kolektabilitas-add-update-form').getForm(); 
		var mainContent = Ext.getCmp('main-content');
		var store = mainContent.getActiveTab().getStore();
		var me = this;
		if(form.isValid()) {
			if(Ext.Msg.confirm('Konfirmasi update Kolektabilitas', 'Anda yakin ingin menyimpan data ini ?', function(btn) {
				if(btn == 'yes') {
					form.submit({
						url: MyIndo.siteUrl('kolektabilitas/request/update'),
						success: function(data, res) {
							var json = Ext.decode(res.response.responseText);
							if(me.isLogin(json)) {

								Ext.Msg.alert('Message', 'Data kolektabilitas berhasil diupdate.');

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
			Ext.Msg.alert('Application Error', 'Silahkan input data kolektabilitas terlebih dahuluuuu.');
		}
	}

	/* End of : UnitKerja Add Window */
});