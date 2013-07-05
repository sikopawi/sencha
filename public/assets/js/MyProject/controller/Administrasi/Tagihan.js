Ext.define(MyIndo.getNameSpace('controller.Administrasi.Tagihan'), {
	extend: 'MyIndo.app.Controller',

	requires: [
	MyIndo.getNameSpace('view.Administrasi.Tagihan.Reguler'),
	MyIndo.getNameSpace('view.Administrasi.Tagihan.Sisipan'),
	MyIndo.getNameSpace('view.Administrasi.Tagihan.Pelunasan')
	],

	init: function() {
		this.control({
			'tagihanview button': {
				click: this.onButtonClicked
			},
			'#reguler-no-rek': {
				change: this.onNoRekChanged
			},
			'#pel-no-rek': {
				change: this.onNoRekChanged2
			},
			'tagihanregulerwindow button': {
				click: this.onButtonClicked
			},
			'#ajt-bunga': {
				change: this.calculate
			},
			'tagihansisipanwindow button': {
				click: this.onButtonClicked
			},
			'#pel-bunga': {
				change: this.calculate
			},
			'tagihanpelunasanwindow button': {
				click: this.onButtonClicked
			}
		});
	},

	onButtonClicked: function(record) {
		var action = record.action;
		switch(action) {
			case 'tagihan-reguler':
				this.tagihanReguler();
				break;
			case 'tagihan-sisipan':
				this.tagihanSisipan();
				break;
			case 'tagihan-pelunasan':
				this.tagihanPelunasan();
				break;
			case 'reguler-save':
				this.regulerSave();
				break;
			case 'sisipan-save':
				this.sisipanSave();
				break;
		}
	},

	tagihanReguler: function() {
		var debiturStore = Ext.getStore('Debiturs');
		var paymentPointStore = Ext.getStore('PaymentPoints');
		var unitKerjaStore = Ext.getStore('UnitKerjas');
		var cabangStore = Ext.getStore('Cabangs');
		debiturStore.proxy.extraParams = {STATUS: 'Berjalan'};
		var windowTagihan = Ext.create(MyIndo.getNameSpace('view.Administrasi.Tagihan.Reguler'), {
			debiturStore: debiturStore,
			paymentPointStore: paymentPointStore,
			unitKerjaStore: unitKerjaStore,
			cabangStore: cabangStore
		});
		windowTagihan.show();
	},

	calculate: function () {
		//alert('xxxxxx');
		if(typeof(Ext.getCmp('sisipan-form')) !== 'undefined') {
			var form = Ext.getCmp('sisipan-form').getForm();
			var v = form.getValues();
			var bakiAwal = parseInt(v.BAKI_AWAL);
			var ajtPokok = parseInt(v.AJT_POKOK);
			var ajtBunga = parseInt(v.AJT_BUNGA);
			if(bakiAwal > 0 && ajtPokok > 0 && ajtBunga > 0) {
				var angsuran = ajtPokok + ajtBunga;
				form.setValues({
					AJT_JUMLAH: parseInt(angsuran)
				});
			}
		} else{
			var form = Ext.getCmp('pelunasan-form').getForm();
			var v = form.getValues();
			var bakiAwal = parseInt(v.BAKI_AWAL);
			var ajtPokok = parseInt(v.ATD_POKOK);
			var ajtBunga = parseInt(v.ATD_BUNGA);
			if(bakiAwal > 0 && ajtPokok > 0 && ajtBunga > 0) {
				var angsuran = ajtPokok + ajtBunga;
				setTimeout(function() {
					form.setValues({
						ATD_JUMLAH: angsuran
					});
				},10);
			}
		}
		
	},

	tagihanSisipan: function() {
		var debiturStore = Ext.getStore('Debiturs');
		var paymentPointStore = Ext.getStore('PaymentPoints');
		var unitKerjaStore = Ext.getStore('UnitKerjas');
		var cabangStore = Ext.getStore('Cabangs');
		debiturStore.proxy.extraParams = {STATUS: 'Berjalan'};
		var windowSisipan = Ext.create(MyIndo.getNameSpace('view.Administrasi.Tagihan.Sisipan'), {
			debiturStore: debiturStore,
			paymentPointStore: paymentPointStore,
			unitKerjaStore: unitKerjaStore,
			cabangStore: cabangStore
		});
		windowSisipan.show();
	},

	tagihanPelunasan: function() {
		var debiturStore = Ext.getStore('Debiturs');
		var paymentPointStore = Ext.getStore('PaymentPoints');
		var unitKerjaStore = Ext.getStore('UnitKerjas');
		var cabangStore = Ext.getStore('Cabangs');
		debiturStore.proxy.extraParams = {STATUS: 'Berjalan'};
		var windowPelunasan = Ext.create(MyIndo.getNameSpace('view.Administrasi.Tagihan.Pelunasan'), {
			debiturStore: debiturStore,
			paymentPointStore: paymentPointStore,
			unitKerjaStore: unitKerjaStore,
			cabangStore: cabangStore
		});
		windowPelunasan.show();
	},

	onNoRekChanged: function(obj, record) {
		var data = obj.store.data.items[0].data;
		if(typeof(Ext.getCmp('reguler-form')) !== 'undefined') {
			var form = Ext.getCmp('reguler-form').getForm();
		} else {
			if(typeof(Ext.getCmp('sisipan-form')) !== 'undefined') {
				var form = Ext.getCmp('sisipan-form').getForm();
			} else {
				var form = Ext.getCmp('pelunasan-form').getForm();
			}
		}
		var LD = Ext.create('MyIndo.view.Loading');
		LD.show();
		Ext.Ajax.request({
			url: MyIndo.siteUrl('payment/request/get-detail'),
			params: {
				DEBITUR_ID: data.DEBITUR_ID
			},
			success: function(data) {
				var json = Ext.decode(data.responseText);
				var sisa = parseInt(json.data.BAKI_AWAL) - parseInt(json.data.POKOK);
				if(sisa < 0) {
					sisa = 0;
				}
				form.setValues({
					BAKI_AWAL: json.data.BAKI_AWAL,
					ATD_POKOK: json.data.POKOK,
					ATD_BUNGA: json.data.BUNGA,
					ATD_JUMLAH: json.data.JUMLAH,
					AJT_POKOK: json.data.POKOK,
					AJT_BUNGA: json.data.BUNGA,
					AJT_JUMLAH: json.data.JUMLAH,
					BAKI_AKHIR: sisa
				});
				LD.close();
			},
			failure: function(data) {
				var json = Ext.decode(data.responseText);
				Ext.Msg.alert('Application Error', json.error_message);
				form.setValues({
					BAKI_AWAL: 0,
					ATD_POKOK: 0,
					ATD_BUNGA: 0,
					ATD_JUMLAH: 0,
					AJT_POKOK: 0,
					AJT_BUNGA: 0,
					AJT_JUMLAH: 0,
					BAKI_AKHIR: 0
				});
				LD.close();
			}
		});
	},

	onNoRekChanged2: function(obj, record) {
		var data = obj.store.data.items[0].data;
		if(typeof(Ext.getCmp('reguler-form')) !== 'undefined') {
			var form = Ext.getCmp('reguler-form').getForm();
		} else {
			if(typeof(Ext.getCmp('sisipan-form')) !== 'undefined') {
				var form = Ext.getCmp('sisipan-form').getForm();
			} else {
				var form = Ext.getCmp('pelunasan-form').getForm();
			}
		}
		var LD = Ext.create('MyIndo.view.Loading');
		LD.show();
		Ext.Ajax.request({
			url: MyIndo.siteUrl('payment/request/get-detail'),
			params: {
				DEBITUR_ID: data.DEBITUR_ID
			},
			success: function(data) {
				var json = Ext.decode(data.responseText);
				var sisa = parseInt(json.data.BAKI_AWAL) - parseInt(json.data.BAKI_AWAL);
				if(sisa < 0) {
					sisa = 0;
				}
				form.setValues({
					BAKI_AWAL: json.data.BAKI_AWAL,
					ATD_POKOK: json.data.BAKI_AWAL,
					ATD_BUNGA: json.data.BUNGA,
					ATD_JUMLAH: json.data.JUMLAH,
					BAKI_AKHIR: sisa
				});
				LD.close();
			},
			failure: function(data) {
				var json = Ext.decode(data.responseText);
				Ext.Msg.alert('Application Error', json.error_message);
				form.setValues({
					BAKI_AWAL: 0,
					ATD_POKOK: 0,
					ATD_BUNGA: 0,
					ATD_JUMLAH: 0,
					BAKI_AKHIR: 0
				});
				LD.close();
			}
		});
	},

	regulerSave: function() {
		if(typeof(Ext.getCmp('reguler-form')) !== 'undefined') {
			var form = Ext.getCmp('reguler-form').getForm();
		} else {
			if(typeof(Ext.getCmp('sisipan-form')) !== 'undefined') {
				var form = Ext.getCmp('sisipan-form').getForm();
			} else {
				var form = Ext.getCmp('pelunasan-form').getForm();
			}
		}
		var v = form.getValues();
		if(form.isValid() && v.BAKI_AWAL > 0 && v.ATD_POKOK > 0 && v.ATD_BUNGA > 0 && v.ATD_JUMLAH > 0) {
			Ext.Msg.confirm('Konfirmasi Pembayaran', 'Anda yakin ingin melakukan transaksi ini ?', function(btn) {
				if(btn == 'yes') {
					form.submit({
						url: MyIndo.siteUrl('payment/request/create'),
						success: function(data, res) {
							var json = Ext.decode(res.response.responseText);
							Ext.Msg.alert('Message', 'Pembayaran sukses.');
							if(typeof(Ext.getCmp('tagihan-reguler-window')) !== 'undefined') {
								Ext.getCmp('tagihan-reguler-window').close();
							} else{
								Ext.getCmp('tagihan-pelunasan-window').close();
							}
							var panel = Ext.getCmp('main-content');
							var store = panel.getActiveTab().getStore();
							store.load(store.currentPage);
						},
						failure: function(data, res) {
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

	sisipanSave: function() {
		var form = Ext.getCmp('sisipan-form').getForm();
		var v = form.getValues();
		if(form.isValid() && v.BAKI_AWAL > 0 && v.AJT_POKOK > 0 && v.AJT_BUNGA > 0 && v.AJT_JUMLAH > 0) {
			Ext.Msg.confirm('Konfirmasi Pembayaran', 'Anda yakin ingin melakukan transaksi ini ?', function(btn) {
				if(btn == 'yes') {
					form.submit({
						url: MyIndo.siteUrl('payment/request/create'),
						success: function(data, res) {
							var json = Ext.decode(res.response.responseText);
							Ext.Msg.alert('Message', 'Pembayaran sukses.');
							Ext.getCmp('tagihan-sisipan-window').close();
							var panel = Ext.getCmp('main-content');
							var store = panel.getActiveTab().getStore();
							store.load(store.currentPage);
						},
						failure: function(data, res) {
							var json = Ext.decode(res.response.responseText);
							Ext.Msg.alert('Application Error', json.error_message);
						}
					});
				}
			});
		} else {
			Ext.Msg.alert('Application Error', 'Silahkan lengkapi form terlebih dahulu.');
		}
	}
});