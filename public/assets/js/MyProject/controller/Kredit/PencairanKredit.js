Ext.define(MyIndo.getNameSpace('controller.Kredit.PencairanKredit'), {
	extend: 'MyIndo.app.Controller',

	requires: [
	MyIndo.getNameSpace('view.Kredit.PencairanKredit.Detail')
	],

	init: function() {
		this.control({
			'pencairankreditview button': {
				click: this.onButtonClicked
			},
			'detailpencairankredit button': {
				click: this.onButtonClicked
			}
		});
	},

	onButtonClicked: function(record) {
		var action = record.action;
		switch(action) {
			case 'detail':
				this.detail(record);
				break;
			/* Detail Window */
			case 'pencairankredit-accept':
				this.accept(record);
				break;
			case 'pencairankredit-cancel':
				record.up().up().close();
				break;
		}
	},

	detail: function(record) {
		var parent = record.up().up();
		var selected = parent.getSelectionModel().getSelection();
		if(selected.length > 0) {
			var popWindow = Ext.create(MyIndo.getNameSpace('view.Kredit.PencairanKredit.Detail'));
			var form = popWindow.items.get('pencairankredit-add-update-form').getForm();
			form.setValues({
				PERMOHONAN_KREDIT_ID: selected[0].data.PERMOHONAN_KREDIT_ID,
				PERMOHONAN_KREDIT_NO: selected[0].data.PERMOHONAN_KREDIT_NO,
				CUSTOMERS_NAME: selected[0].data.CUSTOMERS_NAME,
				CUSTOMERS_NO_REG: selected[0].data.CUSTOMERS_NO_REG,
				CUSTOMERS_BIRTHDATE: selected[0].data.CUSTOMERS_BIRTHDATE,
				CUSTOMERS_ADDRESS: selected[0].data.CUSTOMERS_ADDRESS,
				CUSTOMERS_NO_KTP: selected[0].data.CUSTOMERS_NO_KTP,
				CUSTOMERS_PHONE: selected[0].data.CUSTOMERS_PHONE,
				CUSTOMERS_NOPEN: selected[0].data.CUSTOMERS_NOPEN,
				PERMOHONAN_KREDIT_STATUS: selected[0].data.PERMOHONAN_KREDIT_STATUS,
				PERMOHONAN_KREDIT_PENGHASILAN: selected[0].data.PERMOHONAN_KREDIT_PENGHASILAN,
				PERMOHONAN_KREDIT_PLAFOND: selected[0].data.PERMOHONAN_KREDIT_PLAFOND,
				PERMOHONAN_KREDIT_STATUS: selected[0].data.PERMOHONAN_KREDIT_STATUS,
				PERMOHONAN_KREDIT_JWAKTU: selected[0].data.PERMOHONAN_KREDIT_JWAKTU,
				PERMOHONAN_KREDIT_SIFAT_BUNGA: selected[0].data.PERMOHONAN_KREDIT_SIFAT_BUNGA,
				PERMOHONAN_KREDIT_SUKU_BUNGA: selected[0].data.PERMOHONAN_KREDIT_SUKU_BUNGA,
				PERMOHONAN_KREDIT_POKOK: selected[0].data.PERMOHONAN_KREDIT_POKOK,
				PERMOHONAN_KREDIT_BUNGA: selected[0].data.PERMOHONAN_KREDIT_BUNGA,
				PERMOHONAN_KREDIT_ANGSURAN: selected[0].data.PERMOHONAN_KREDIT_ANGSURAN,
				PERMOHONAN_KREDIT_CATATAN: selected[0].data.PERMOHONAN_KREDIT_CATATAN,
				KREDIT_CATEGORY_NAME: selected[0].data.KREDIT_CATEGORY_NAME,
				DEBITUR_CATEGORY_NAME: selected[0].data.DEBITUR_CATEGORY_NAME,
				PAYMENT_POINT_NAME: selected[0].data.PAYMENT_POINT_NAME,
				UNIT_KERJA_NAME: selected[0].data.UNIT_KERJA_NAME,
			 	CABANG_NAME: selected[0].data.CABANG_NAME,
			 	PERMOHONAN_KREDIT_NO_BUKU: selected[0].data.PERMOHONAN_KREDIT_NO_BUKU,
			});
			popWindow.show();
		} else {
			Ext.Msg.alert('Application Error', 'Anda tidak memilih Permohonan Kredit.');
		}
	},

	accept: function(record) {
		var form = Ext.getCmp('pencairankredit-add-update-form').getForm();
		var values = form.getValues();
		var me = this;
		Ext.Msg.confirm('Pencairan Kredit', 'Anda yakin ingin mencairkan Permohonan Kredit ini ?', function(btn) {
			if(btn == 'yes') {
				Ext.Ajax.request({
					url: MyIndo.siteUrl('permohonankredit/request/status'),
					params: {
						STATUS: 'Berjalan',
						PERMOHONAN_KREDIT_ID: values.PERMOHONAN_KREDIT_ID
					},
					success: function(data) {
						var json = Ext.decode(data.responseText);
						
						Ext.Msg.alert('Permohonan Kredit', 'Permohonan Kredit berhasil Dicairkan.');
						var mainContent = Ext.getCmp('main-content');
						var store = mainContent.getActiveTab().getStore();
						store.load();

						record.up().up().close();
					
					},
					failure: function(data) {
						var json = Ext.decode(data.responseText);
					}
				});
			}
		});
	}
	
});