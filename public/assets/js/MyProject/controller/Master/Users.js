Ext.define(MyIndo.getNameSpace('controller.Master.Users'), {
	extend: 'MyIndo.controller.Users',

	requires: [
	MyIndo.getNameSpace('view.Master.Users.Add'),
	MyIndo.getNameSpace('view.Master.Users.Update')
	],

	init: function() {
		this.control({
			'usersview button': {
				click: this.onButtonClicked
			},
			'usersaddwindow button': {
				click: this.onButtonClicked
			},
			'usersupdatewindow button': {
				click: this.onButtonClicked
			}
		});
	},

	onButtonClicked: function(record) {
		var action = record.action;
		switch(action) {
			case 'add':
				this.add();
				break;
			case 'update':
				this.update();
				break;
			case 'destroy':
				this.destroy();
				break;
			case 'add-user-save':
				this.addSave();
				break;
			case 'update-user-save':
				this.updateSave();
				break;
		}
	},

	add: function() {
		var wAdd = Ext.create(MyIndo.getNameSpace('view.Master.Users.Add'));
		wAdd.show();
	},

	addSave: function() {
		var form = Ext.getCmp('users-add-form').getForm();
		if(form.isValid()) {
			Ext.Msg.confirm('Save confirmation', 'Apakah anda yakin ingin menyimpan data ini ?', function(btn) {
				if(btn == 'yes') {
					form.submit({
						url: MyIndo.siteUrl('users/request/create'),
						success: function(record, res) {
							var json = Ext.decode(res.response.responseText);
							Ext.Msg.alert('Message', 'Menyimpan data sukses.');
							Ext.getCmp('user-add-window').close();
							var panel = Ext.getCmp('main-content');
							var store = panel.getActiveTab().getStore();
							store.load(store.currentPage);
						},
						failure: function(record, res) {
							var json = Ext.decode(res.response.responseText);
							Ext.Msg.alert('Application Error', json.error_message);
						}
					});
				}
			});
		} else {
			Ext.Msg.alert('Application Error', 'Silahkan lengkapi form terlebih dahulu.');
		}
	},

	update: function() {
		var main = Ext.getCmp('main-content');
		var parent = main.getActiveTab();
		var selected = parent.getSelectionModel().getSelection();
		if(selected.length > 0) {
			var data = selected[0].data;
			var wUpdate = Ext.create(MyIndo.getNameSpace('view.Master.Users.Update'));
			wUpdate.show();
			var form = Ext.getCmp('users-update-form').getForm();
			form.setValues({
				USERNAME: data.USERNAME,
				FNAME: data.FNAME,
				LNAME: data.LNAME
			});
		} else {
			Ext.Msg.alert('Application Error', 'Anda tidak memilih user.');
		}
	},

	updateSave: function() {
		var form = Ext.getCmp('users-update-form').getForm();
		if(form.isValid()) {
			Ext.Msg.confirm('Save confirmation', 'Apakah anda yakin ingin menyimpan data ini ?', function(btn) {
				if(btn == 'yes') {
					form.submit({
						url: MyIndo.siteUrl('users/request/update'),
						success: function(record, res) {
							var json = Ext.decode(res.response.responseText);
							Ext.Msg.alert('Message', 'Menyimpan data sukses.');
							Ext.getCmp('user-update-window').close();
							var panel = Ext.getCmp('main-content');
							var store = panel.getActiveTab().getStore();
							store.load(store.currentPage);
						},
						failure: function(record, res) {
							var json = Ext.decode(res.response.responseText);
							Ext.Msg.alert('Application Error', json.error_message);
						}
					});
				}
			});
		} else {
			Ext.Msg.alert('Application Error', 'Silahkan lengkapi form terlebih dahulu.');
		}
	},

	destroy: function() {
		var main = Ext.getCmp('main-content');
		var parent = main.getActiveTab();
		var selected = parent.getSelectionModel().getSelection();
		var store = parent.getStore();
		if(selected.length > 0) {
			Ext.Msg.confirm('Delete Confirmation', 'Apakah anda yakin ingin menghapus data ini ?', function(btn) {
				if(btn == 'yes') {
					store.remove(store.findRecord('USERNAME', selected[0].data.USERNAME));
					store.sync({
						callback: function() {
							store.load(store.currentPage);
						}
					});
				}
			});
		} else {
			Ext.Msg.alert('Application Error', 'Anda tidak memilih user.');
		}
	}
});