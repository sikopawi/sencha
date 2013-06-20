Ext.define(MyIndo.getNameSpace('view.Master.PaymentPoint.AddUpdateView'), {
	extend: 'Ext.Window',
	alias: 'widget.paymentpointaddupdatewindow',
	modal: true,
	resizable: false,
	title: 'Tambah Payment Point',

	initComponent: function() {
		Ext.apply(this, {
			items: [{
				xtype: 'form',
				id: 'paymentpoint-add-update-form',
				border: false,
				bodyPadding: '5 0 0 0',
				margin: '0 0 -10 0',
				items: [{
					xtype: 'fieldset',
					width: '100%',
					id: 'paymentpoint-add-update-form-fieldset',
					border: false,
					items: [{
						xtype: 'textfield',
						fieldLabel: 'Pay. Point Code',
						emptyText: 'Payment Point Code..',
						allowBlank: false,
						name: 'PAYMENT_POINT_CODE'
					},{
						xtype: 'textfield',
						fieldLabel: 'Pay. Point Name',
						emptyText: 'Payment Point Name..',
						allowBlank: false,
						name: 'PAYMENT_POINT_NAME'
					}]
				}]
			}],
			buttons: [{
				text: 'Simpan',
				action: 'add-paymentpoint-save'
			},{
				text: 'Batal',
				action: 'add-paymentpoint-cancel'
			}]
		});
		this.callParent(arguments);
	}
});