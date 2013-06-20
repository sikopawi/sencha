Ext.define(MyIndo.getNameSpace('view.Master.CustomerView'), {
	extend: 'Ext.panel.Panel',
	alias: 'widget.customerview',
	border: false,

	initComponent: function() {
		Ext.apply(this, {
			items: [{
				xtype: 'gridpanel',
				border: false,
				columns: [{
					text: 'Name',
					flex: 1,
					dataIndex: 'NAME'
				},{
					text: 'Type',
					flex: 1,
					dataIndex: 'TYPE'
				}]
			}]
		})
		this.callParent(arguments);
	}
});