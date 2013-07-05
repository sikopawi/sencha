<?php

class Permohonankredit_RequestController extends MyIndo_Controller_Action
{
	public function readAction()
	{
		$model = new permohonankredit_Model_PermohonanKreditView();
		try {
			$where = array();
			if(isset($this->_posts['STATUS'])) {
				if($this->_posts['STATUS'] == 'Open') {
					$where[] = $model->getAdapter()->quoteInto('STATUS = ?', 'Open');
				} else if($this->_posts['STATUS'] == 'Disetujui') {
					$where[] = $model->getAdapter()->quoteInto('STATUS = ?', 'Disetujui');
				}
			}
			$this->_data = array(
				'items' => $model->getList($this->_limit, $this->_start, $this->_order, $where),
				'totalCount' => $model->count()
				);
		} catch(Exception $e) {
			$this->exception($e);
		}
	}

	public function addAction()
	{ 
		try {
			$model = new permohonankredit_Model_PermohonanKredit();
			$q = $model->select()
			->where('CUSTOMERS_ID = ?', $this->_posts['CUSTOMERS_ID'])
			->where('STATUS = ?', 'Berjalan')
			->orWhere('STATUS = ?', 'Open')
			->orWhere('STATUS = ?', 'Disetujui');

			if($q->query()->rowCount() == 0) {

				$newId = $model->getLastId('PERMOHONAN_KREDIT_ID')+1;
				$noReg = '';
				for($i=0;$i<(10-(strlen($newId)));$i++) {
					$noReg .= '0';
				}
				$noReg .= $newId;

				$pkId = $model->insert(array(
					'PERMOHONAN_KREDIT_NO' => $noReg,
					'CUSTOMERS_ID' => $this->_posts['CUSTOMERS_ID'],
					'PERMOHONAN_KREDIT_STATUS' => $this->_posts['PERMOHONAN_KREDIT_STATUS'],
					'PERMOHONAN_KREDIT_PENGHASILAN' => $this->_posts['PERMOHONAN_KREDIT_PENGHASILAN'],
					'PERMOHONAN_KREDIT_PLAFOND' => $this->_posts['PERMOHONAN_KREDIT_PLAFOND'],
					'PERMOHONAN_KREDIT_JWAKTU' => $this->_posts['PERMOHONAN_KREDIT_JWAKTU'],
					'PERMOHONAN_KREDIT_SIFAT_BUNGA' => $this->_posts['PERMOHONAN_KREDIT_SIFAT_BUNGA'],
					'PERMOHONAN_KREDIT_SUKU_BUNGA' => $this->_posts['PERMOHONAN_KREDIT_SUKU_BUNGA'],
					'PERMOHONAN_KREDIT_POKOK' => $this->_posts['PERMOHONAN_KREDIT_POKOK'],
					'PERMOHONAN_KREDIT_BUNGA' => $this->_posts['PERMOHONAN_KREDIT_BUNGA'],
					'PERMOHONAN_KREDIT_ANGSURAN' => $this->_posts['PERMOHONAN_KREDIT_ANGSURAN'],
					'PERMOHONAN_KREDIT_CATATAN' => $this->_posts['PERMOHONAN_KREDIT_CATATAN'],
					'KREDIT_CATEGORY_ID' => $this->_posts['KREDIT_CATEGORY_ID'],
					'DEBITUR_CATEGORY_ID' => $this->_posts['DEBITUR_CATEGORY_ID'],
					'PAYMENT_POINT_ID' => $this->_posts['PAYMENT_POINT_ID'],
					'UNIT_KERJA_ID' => $this->_posts['UNIT_KERJA_ID'],
					'CABANG_ID' => $this->_posts['CABANG_ID'],
					'PERMOHONAN_KREDIT_NO_BUKU' => $this->_posts['PERMOHONAN_KREDIT_NO_BUKU'],
					'CREATED_DATE' => $this->_date
					));

				

			} else {
				$this->error(10001, 'Customer masih memiliki kredit berjalan. Silahkan selesaikan terlebih dahulu.');
			}
		} catch(Exception $e) {
			$this->exception($e);
		}
	}
	
	public function updateAction() {
		try {
			if(isset($this->_posts['PERMOHONAN_KREDIT_NO']) && isset($this->_posts['PERMOHONAN_KREDIT_NO'])) {
				$model = new permohonankredit_Model_PermohonanKredit();
				if($model->isExist('PERMOHONAN_KREDIT_ID', $this->_posts['PERMOHONAN_KREDIT_ID'])) {
					//if(strlen($this->_posts['PERMOHONAN_KREDIT_NO']) > 0) {
						$model->update(array(
								//'PERMOHONAN_KREDIT_NO' => $this->_posts['PERMOHONAN_KREDIT_NO'],
								'CUSTOMERS_ID' => $this->_posts['CUSTOMERS_ID'],
								'PERMOHONAN_KREDIT_STATUS' => $this->_posts['PERMOHONAN_KREDIT_STATUS'],
								'PERMOHONAN_KREDIT_PENGHASILAN' => $this->_posts['PERMOHONAN_KREDIT_PENGHASILAN'],
								'PERMOHONAN_KREDIT_PLAFOND' => $this->_posts['PERMOHONAN_KREDIT_PLAFOND'],
								'PERMOHONAN_KREDIT_JWAKTU' => $this->_posts['PERMOHONAN_KREDIT_JWAKTU'],
								'PERMOHONAN_KREDIT_SIFAT_BUNGA' => $this->_posts['PERMOHONAN_KREDIT_SIFAT_BUNGA'],
								'PERMOHONAN_KREDIT_SUKU_BUNGA' => $this->_posts['PERMOHONAN_KREDIT_SUKU_BUNGA'],
								'PERMOHONAN_KREDIT_POKOK' => $this->_posts['PERMOHONAN_KREDIT_POKOK'],
								'PERMOHONAN_KREDIT_BUNGA' => $this->_posts['PERMOHONAN_KREDIT_BUNGA'],
								'PERMOHONAN_KREDIT_ANGSURAN' => $this->_posts['PERMOHONAN_KREDIT_ANGSURAN'],
								'PERMOHONAN_KREDIT_CATATAN' => $this->_posts['PERMOHONAN_KREDIT_CATATAN'],
								'KREDIT_CATEGORY_ID' => $this->_posts['KREDIT_CATEGORY_ID'],
								'DEBITUR_CATEGORY_ID' => $this->_posts['DEBITUR_CATEGORY_ID'],
								'PAYMENT_POINT_ID' => $this->_posts['PAYMENT_POINT_ID'],
								'UNIT_KERJA_ID' => $this->_posts['UNIT_KERJA_ID'],
								'CABANG_ID' => $this->_posts['CABANG_ID'],
								'PERMOHONAN_KREDIT_NO_BUKU' => $this->_posts['PERMOHONAN_KREDIT_NO_BUKU'],
						), $model->getAdapter()->quoteInto('PERMOHONAN_KREDIT_ID = ?', $this->_posts['PERMOHONAN_KREDIT_ID']));
					//} else {
					//	$this->error(901);
					//}
				} else {
					$this->error(102, 'Update permohonan kredit gagal, permohonan kredit tidak terdaftar.');
				}
			} else {
				$this->error(901);
			}
		} catch(Exception $e) {
			$this->exception($e);
		}
	}
	
	
	public function destroyAction()
	{
		try {
			$this->_posts = Zend_Json::decode($this->getRequest()->getRawBody());
			$model = new permohonankredit_Model_PermohonanKredit();
			if(isset($this->_posts['PERMOHONAN_KREDIT_ID'])) {
				if($model->isExist('PERMOHONAN_KREDIT_ID', $this->_posts['PERMOHONAN_KREDIT_ID'])) {

					$q = $model->select()->where('PERMOHONAN_KREDIT_ID = ?', $this->_posts['PERMOHONAN_KREDIT_ID']);
					$detail = $q->query()->fetch();

					if($detail['STATUS'] == 'Open') {

						$model->delete($model->getAdapter()->quoteInto('PERMOHONAN_KREDIT_ID = ?', $this->_posts['PERMOHONAN_KREDIT_ID']));
					
					} else {

						$this->error(102, 'Anda tidak dapat menghapus data permohonan kredit yang sudah di proses');

					}
				} else {
					$this->error(102, 'Hapus data permohonan kredit gagal, permohonan kredit tidak terdaftar.');
				}
			} else {
				$this->error(901);
			}
		} catch(Exception $e) {
			$this->exception($e);
		}
	}
	
	public function statusAction()
	{
		try {
			if(isset($this->_posts['STATUS'])) {
				$model = new permohonankredit_Model_PermohonanKredit();
				$debiturModel = new debitur_Model_Debitur();
				$modelDueDate = new permohonankredit_Model_PermohonanKreditDueDate();
				$model->update(array('STATUS'=>$this->_posts['STATUS']), $model->getAdapter()->quoteInto('PERMOHONAN_KREDIT_ID = ?', $this->_posts['PERMOHONAN_KREDIT_ID']));
				if($this->_posts['STATUS'] == 'Berjalan') {
					$q = $model->select()->where('PERMOHONAN_KREDIT_ID = ?', $this->_posts['PERMOHONAN_KREDIT_ID']);
					$res = $q->query()->fetch();
					$cust_id = $res['CUSTOMERS_ID'];
					$q = $debiturModel->select()->order('DEBITUR_ID DESC');
					if($q->query()->rowCount() == 0) {
						$no_rek = '0000000001';
					} else {
						$res = $q->query()->fetch();
						$last_no_rek = (int)$res['DEBITUR_NO_REK'];
						$last_no_rek++;
						$no_rek = '';
						for($i=0;$i<(10 - strlen($last_no_rek));$i++) {
							$no_rek .= '0';
						}
						$no_rek .= $last_no_rek;
					}

					$debiturModel->insert(array(
						'CUSTOMERS_ID' => $cust_id,
						'PERMOHONAN_KREDIT_ID' => $this->_posts['PERMOHONAN_KREDIT_ID'],
						'DEBITUR_NO_REK' => $no_rek,
						'CREATED_DATE' => $this->_date
						));
					$modelDueDate->createDueDate($this->_posts['PERMOHONAN_KREDIT_ID']);
				}
			}
		} catch(Exception $e) {
			$this->exception($e);
		}
	}
}