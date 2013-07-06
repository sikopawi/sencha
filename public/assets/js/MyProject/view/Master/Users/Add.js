Ext.define(MyIndo.getNameSpace('view.Master.Users.Add'), {
	extend: 'Ext.Window',
	alias: 'widget.usersaddwindow',
	modal: true,
	resizable: false,
	title: 'Tambah User',
	id: 'user-add-window',

	initComponent: function() {
		Ext.apply(this, {
			items: [{
				xtype: 'form',
				id: 'users-add-form',
				border: false,
				bodyPadding: 5,
				items: [{
					xtype: 'textfield',
					fieldLabel: 'Username',
					allowBlank: false,
					name: 'USERNAME'
				},{
					xtype: 'textfield',
					fieldLabel: 'Password',
					allowBlank: false,
					inputType: 'password',
					name: 'PASSWORD'
				},{
					xtype: 'textfield',
					fieldLabel: 'FName',
					allowBlank: false,
					name: 'FNAME'
				},{
					xtype: 'textfield',
					fieldLabel: 'LName',
					allowBlank: false,
					name: 'LNAME'
				}]
			}],
			buttons: [{
				text: 'Simpan',
				iconCls: 'icon-accept',
				action: 'add-user-save'
			},{
				text: 'Batal',
				iconCls: 'icon-cross',
				listeners: {
					click: function() {
						this.up().up().close();
					}
				}
			}]
		});
		this.callParent(arguments);
	}
});