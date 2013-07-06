Ext.define(MyIndo.getNameSpace('view.Master.Users.Update'), {
	extend: 'Ext.Window',
	alias: 'widget.usersupdatewindow',
	modal: true,
	resizable: false,
	title: 'Update User',
	id: 'user-update-window',

	initComponent: function() {
		Ext.apply(this, {
			items: [{
				xtype: 'form',
				id: 'users-update-form',
				border: false,
				bodyPadding: 5,
				items: [{
					xtype: 'textfield',
					fieldLabel: 'Username',
					allowBlank: false,
					name: 'USERNAME',
					readOnly: true
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
				action: 'update-user-save'
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