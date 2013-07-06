Ext.define(MyIndo.getNameSpace('view.Master.Users.View'), {
	extend: 'Ext.grid.Panel',
	alias: 'widget.usersview',
	columns: [{
		text: 'Username',
		flex: 1,
		dataIndex: 'USERNAME'
	},{
		text: 'First Name',
		flex: 1,
		dataIndex: 'FNAME'
	},{
		text: 'Last Name',
		flex: 1,
		dataIndex: 'LNAME'
	},{
		text: 'Created Date',
		width: 150,
		align: 'center',
		dataIndex: 'CREATED_DATE'
	},{
		text: 'Modified Date',
		width: 150,
		align: 'center',
		dataIndex: 'MODIFIED_DATE'
	}],

	initComponent: function() {
		Ext.apply(this, {
			tbar: [{
				text: 'Tambah User',
				iconCls: 'icon-accept',
				action: 'add'
			},{
				text: 'Update User',
				iconCls: 'icon-pencil',
				action: 'update'
			},{
				text: 'Hapus User',
				iconCls: 'icon-delete',
				action: 'destroy'
			}],
			dockedItems: [{
				xtype: 'pagingtoolbar',
				displayInfo: true,
				dock: 'bottom',
				store: this.store
			}]
		});
		this.callParent(arguments);
	}
});