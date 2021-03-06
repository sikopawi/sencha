Ext.define(MyIndo.getNameSpace('controller.Master.PermohonanKredit'), {
	extend: 'MyIndo.app.Controller',

	requires: [
	MyIndo.getNameSpace('view.Master.PermohonanKredit.AddUpdateView')
	],

	init: function() {
		this.control({
			'PermohonanKreditView button': { // onclick tombol add  
				click: this.onPermohonanKreditViewButtonClicked
			},
			'permohonankreditaddupdateview button': {  // // call alias di permohonankreditaddupdateview alias dari on eventv click buttonaddUpdateView.js  
				click: this.onPermohonanKreditAddButtonClicked
			},
			'permohonankreditaddupdateview combobox': { // call alias di addUpdateView.js 
					change: this.onComboCustomerChange
			},
			'#pk-penghasilan': {
				change: this.calculate
			},
			'#pk-plafond': {
				change: this.calculate
			},
			'#pk-jwaktu': {
				change: this.calculate
			},
			'#pk-suku-bunga': {
				change: this.calculate
			},
			'#pk-pokok': {
				change: this.calculate2
			},
			'#pk-bunga': {
				change: this.calculate2
			}
		});
	},
	
	/* Calculate */

	calculate: function() {
		var penghasilan = Ext.getCmp('pk-penghasilan');
		var plafond = Ext.getCmp('pk-plafond');
		var jwaktu = Ext.getCmp('pk-jwaktu');
		var sbunga = Ext.getCmp('pk-suku-bunga');
		var pokok = Ext.getCmp('pk-pokok');
		var bunga = Ext.getCmp('pk-bunga');
		var angsuran = Ext.getCmp('pk-angsuran');

		pokok.setValue(0);
		bunga.setValue(0);
		angsuran.setValue(0);

		if(plafond.value > penghasilan.value && plafond.value > 0 && penghasilan.value > 0) {
			var temp = plafond.value;
			Ext.Msg.alert('Application Error', 'Plafond melebihi penghasilan.');
			plafond.setValue(temp);
		}

		if(penghasilan.value > 0 && plafond.value > 0 && plafond.value <= penghasilan.value && jwaktu.value > 0 && sbunga.value > 0) {
			pokok.setValue(Math.ceil(plafond.value / jwaktu.value));
			bunga.setValue(plafond.value * (sbunga.value / 100));
			angsuran.setValue(pokok.value + bunga.value);
		}
	},

	calculate2: function() {
		var pokok = Ext.getCmp('pk-pokok');
		var bunga = Ext.getCmp('pk-bunga');
		var angsuran = Ext.getCmp('pk-angsuran');

		if(pokok.value > 0 && bunga.value > 0) {
			angsuran.setValue(pokok.value + bunga.value);
		}
	},

	/* PermohonanKredit View */

	onPermohonanKreditViewButtonClicked: function(record) { 
		var action = record.action; 
		switch(action) {
			case 'add': 	
				this.add();
				break;
			case 'update':
				this.update(record);
				break;
			case 'delete':
				this.delete(record);
				break;
			default:
				
		}
	},
	
	onComboCustomerChange: function(record) {  
		if(record.name=='CUSTOMERS_ID') {
			if(record.valueModels.length > 0) { 
				
				var values = record.valueModels[0].data;
				var form = Ext.getCmp('permohonankredit-add-update-form').getForm();
					form.setValues({
						CUSTOMERS_NAME: values.CUSTOMERS_NAME,
						CUSTOMERS_ADDRESS: values.CUSTOMERS_ADDRESS,
						CUSTOMERS_PHONE: values.CUSTOMERS_PHONE,
						CUSTOMERS_BIRTHDATE: values.CUSTOMERS_BIRTHDATE,
						CUSTOMERS_NO_KTP: values.CUSTOMERS_NO_KTP,
						CUSTOMERS_NOPEN: values.CUSTOMERS_NOPEN
					});
			}
		}
	},
	
	add: function() { 
		
		var customerstore = Ext.create(MyIndo.getNameSpace('store.Customers'));
		var kreditkategorystore = Ext.create(MyIndo.getNameSpace('store.KreditCategorys')); // load dari store
		var debiturkategorystore = Ext.create(MyIndo.getNameSpace('store.DebiturCategorys')); // load dari store
		var unitkerjastore = Ext.create(MyIndo.getNameSpace('store.UnitKerjas')); // load dari store
		var cabangstore = Ext.create(MyIndo.getNameSpace('store.Cabangs')); // load dari store
		var paymentpointstore = Ext.create(MyIndo.getNameSpace('store.PaymentPoints')); // load dari store
		
		
		var addCbWindow = Ext.create(MyIndo.getNameSpace('view.Master.PermohonanKredit.AddUpdateView'),{
				customerstore: customerstore, // load data customers untuk combox customer
				kreditkategorystore: kreditkategorystore,
				debiturkategorystore: debiturkategorystore,
				unitkerjastore: unitkerjastore,
				cabangstore:cabangstore,
				paymentpointstore:paymentpointstore
		});
		
		addCbWindow.show();
	},

	update: function(record) {
		var parent = record.up().up();
		var selected = parent.getSelectionModel().getSelection();
		if(selected.length > 0) {
			if(selected[0].data.STATUS == 'Open') {
				var customerstore = Ext.create(MyIndo.getNameSpace('store.Customers'));
				var kreditkategorystore = Ext.create(MyIndo.getNameSpace('store.KreditCategorys')); // load dari store
				var debiturkategorystore = Ext.create(MyIndo.getNameSpace('store.DebiturCategorys')); // load dari store
				var unitkerjastore = Ext.create(MyIndo.getNameSpace('store.UnitKerjas')); // load dari store
				var cabangstore = Ext.create(MyIndo.getNameSpace('store.Cabangs')); // load dari store
				var paymentpointstore = Ext.create(MyIndo.getNameSpace('store.PaymentPoints')); // load dari store
				
				customerstore.load();
				kreditkategorystore.load();
				debiturkategorystore.load();
				unitkerjastore.load();
				cabangstore.load();
				paymentpointstore.load();
				
				var updateCbWindow = Ext.create(MyIndo.getNameSpace('view.Master.PermohonanKredit.AddUpdateView'), {
					title: 'Update Unit Kerja',
					customerstore: customerstore, // load data customers untuk combox customer
					kreditkategorystore: kreditkategorystore,
					debiturkategorystore: debiturkategorystore,
					unitkerjastore: unitkerjastore,
					cabangstore:cabangstore,
					paymentpointstore:paymentpointstore
				});
				var form = updateCbWindow.items.get('permohonankredit-add-update-form').getForm();
				var formFieldset = updateCbWindow.items.get('permohonankredit-add-update-form').items.get('permohonankredit-add-update-form-fieldset');
				formFieldset.add(new Ext.form.field.Hidden({
					name: 'PERMOHONAN_KREDIT_ID'
				}));
				form.setValues({
					PERMOHONAN_KREDIT_ID: selected[0].data.PERMOHONAN_KREDIT_ID,
					PERMOHONAN_KREDIT_NO: selected[0].data.PERMOHONAN_KREDIT_NO,
					CUSTOMERS_ID: selected[0].data.CUSTOMERS_ID,
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
					KREDIT_CATEGORY_ID: selected[0].data.KREDIT_CATEGORY_ID,
					DEBITUR_CATEGORY_ID: selected[0].data.DEBITUR_CATEGORY_ID,
					PAYMENT_POINT_ID: selected[0].data.PAYMENT_POINT_ID,
					UNIT_KERJA_ID: selected[0].data.UNIT_KERJA_ID,
				 	CABANG_ID: selected[0].data.CABANG_ID,
				 	PERMOHONAN_KREDIT_NO_BUKU: selected[0].data.PERMOHONAN_KREDIT_NO_BUKU,
				});
				updateCbWindow.show();
			} else {
				Ext.Msg.alert('Application Error', 'Permohonan kredit sudah berjalan, anda tidak diijinkan untuk merubah data.');
			}
		} else {
			Ext.Msg.alert('Application Error', 'Anda tidak memilih data permohonan kredit.');
		}
	},

	delete: function(record) {
		var parent = record.up().up();
		var selected = parent.getSelectionModel().getSelection();
		var store = parent.getStore();
		if(selected.length > 0) {
			if(selected[0].data.STATUS == 'Open') {
				Ext.Msg.confirm('Konfirmasi hapus permohonan kredit', 'Anda yakin ingin menghapus data ini ?', function(btn) {
					if(btn == 'yes') {
						store.remove(store.findRecord('PERMOHONAN_KREDIT_ID', selected[0].data.PERMOHONAN_KREDIT_ID));
						store.sync();
						store.load(store.currentPage);
					}
				});
			} else {
				Ext.Msg.alert('Application Error', 'Anda tidak dapat menghapus data permohonan kredit yang sudah di proses.');
			}
		} else {
			Ext.Msg.alert('Application Error', 'Anda tidak memilih unit kerja.');
		}
	},

	/* End of : PermohonanKredit Main */

	/* PermohonanKredit Add Window : */
	
	onPermohonanKreditAddButtonClicked: function(record) { //permohonankreditaddupdateview
		var action = record.action;
		switch(action) {
			case 'add-PermohonanKredit-save': 
				if(record.up().up().title == 'Tambah Permohonan Kredit') {
					this.savePermohonanKredit(record); 
				} else {
					this.updatePermohonanKredit(record);
				}
				break;
				console.log(action);
			case 'add-PermohonanKredit-cancel':
				record.up().up().close();
				break;
			default:
				console.log(record);
		}
	},

	savePermohonanKredit: function(record) {
		
		var form = Ext.getCmp('permohonankredit-add-update-form').getForm(); // diload dari id item dr AddUpdateView.js
		var mainContent = Ext.getCmp('main-content');
		var store = mainContent.getActiveTab().getStore();
		
		var me = this;
		if(form.isValid()) {
			var v = form.getValues();
			if(v.PERMOHONAN_KREDIT_PENGHASILAN > 0 && v.PERMOHONAN_KREDIT_PLAFOND > 0 && v.PERMOHONAN_KREDIT_JWAKTU > 0 && v.PERMOHONAN_KREDIT_SUKU_BUNGA > 0 && v.PERMOHONAN_KREDIT_POKOK > 0 && v.PERMOHONAN_KREDIT_BUNGA > 0) {
				if(Ext.Msg.confirm('Konfirmasi Tambah  Permohonan Kredit', 'Anda yakin ingin menyimpan data ini ?', function(btn) {
					if(btn == 'yes') {
						form.submit({
							url: MyIndo.siteUrl('permohonankredit/request/add'),
							success: function(data, res) {
								var json = Ext.decode(res.response.responseText);
								if(me.isLogin(json)) {

									Ext.Msg.alert('Message', 'Data  permohonan kredit berhasil disimpan.');
									
									/* Reset Form : */
									form.reset();

									/* Reload Store : */
									store.load(store.currentPage);
								}
							},
							failure: function(data, res) {
								var json = Ext.decode(res.response.responseText);
								Ext.Msg.alert('Application Error', '<strong>Error Code</strong>: ' + json.error_code + '<br/><strong>Message</strong>: ' + json.error_message);
							}
						})
					}
				}));//BISMILLAHIRAHMANIRRAHIM
			} else {//ARISTIA MAULIDYA STIASARI
				Ext.Msg.alert('Application Error', 'Silahkan lengkapi data permohonan kredit terlebih dahulu.');
			}
		} else {
			Ext.Msg.alert('Application Error', 'Silahkan lengkapi data permohonan kredit terlebih dahulu.');
		}
	},

	updatePermohonanKredit: function(record) {
		var form = Ext.getCmp('permohonankredit-add-update-form').getForm(); 
		var mainContent = Ext.getCmp('main-content');
		var store = mainContent.getActiveTab().getStore();
		var me = this;
		if(form.isValid()) {
			if(Ext.Msg.confirm('Konfirmasi update Permohonan Kredit', 'Anda yakin ingin menyimpan data ini ?', function(btn) {
				if(btn == 'yes') {
					form.submit({
						url: MyIndo.siteUrl('permohonankredit/request/update'),
						success: function(data, res) {
							var json = Ext.decode(res.response.responseText);
							if(me.isLogin(json)) {

								Ext.Msg.alert('Message', 'Data permohonan kredit berhasil diupdate.');

								/* Reload Store : */
								store.load(store.currentPage);
							}
						},
						failure: function(data, res) {
							var json = Ext.decode(res.response.responseText);
							Ext.Msg.alert('Application Error', '<strong>Error Code</strong>: ' + json.error_code + '<br/><strong>Message</strong>: ' + json.error_message);
						}
					})
				}
			}));
		} else {
			Ext.Msg.alert('Application Error', 'Silahkan input nama unit kerja terlebih dahuluuuu.');
		}
	}

	/* End of : PermohonanKredit Add Window */
});