Ext.define(MyIndo.getNameSpace('view.Master.Customer.Search'), {
	extend: 'Ext.Window',
	alias: 'widget.customersearch',
	modal: true,
	resizable: false,
	title: 'Cari Customer',

	initComponent: function() {
		Ext.apply(this, {
			items: [{
				xtype: 'form',
				id: 'customer-search-form',
				border: false,
				bodyPadding: '5 5 5 5',
				items: [{
					xtype: 'textfield',
					fieldLabel: 'No. Reg',
					name: 'CUSTOMERS_NO_REG',
					emptyText: 'All'
				},{
					xtype: 'textfield',
					fieldLabel: 'Nama',
					name: 'CUSTOMERS_NAME',
					emptyText: 'All'
				}]
			}],
			buttons: [{
				text: 'Cari',
				action: 'search-search'
			},{
				text: 'Batal',
				action: 'search-cancel'
			}]
		});
		this.callParent(arguments);
	}
});