Ext.define(MyIndo.getNameSpace('controller.Administrasi.Debitur'), {
	extend: 'MyIndo.app.Controller',

	requires: [
	MyIndo.getNameSpace('view.Administrasi.Debitur.Card')
	],

	init: function() {
		this.control({
			'debiturview button': {
				click: this.onButtonClicked
			}
		});
	},

	onButtonClicked: function(record) {
		var action = record.action;
		switch(action) {
			case 'card':
				this.card(record);
				break;
		}
	},

	card: function(record) {
		var parent = record.up().up();
		var selected = parent.getSelectionModel().getSelection();
		var store = Ext.getStore('Cards');
		if(selected.length > 0) {
			var data = selected[0].data;
			store.proxy.extraParams = {DEBITUR_ID: data.DEBITUR_ID};
			store.load();
			var windowCard = Ext.create(MyIndo.getNameSpace('view.Administrasi.Debitur.Card'), {
				data: data,
				cardStore: store
			});
			windowCard.show();
		} else {
			Ext.Msg.alert('Application Error', 'Anda tidak memilih Debitur.');
		}
	}
});