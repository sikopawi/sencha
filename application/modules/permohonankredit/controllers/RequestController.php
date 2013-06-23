<?php

class Permohonankredit_RequestController extends MyIndo_Controller_Action
{
	public function readAction()
	{
		$model = new permohonankredit_Model_Permohonankredit();
		try {
			$this->_data = array(
				'items' => $model->getList($this->_limit, $this->_start, $this->_order),
				'totalCount' => $model->count()
				);
		} catch(Exception $e) {
			$this->exception($e);
		}
	}

	public function addAction()
	{ 
		try {
			if(isset($this->_posts['PERMOHONAN_KREDIT_NO']) && isset($this->_posts['PERMOHONAN_KREDIT_NO'])) {
				$model = new permohonankredit_Model_Permohonankredit();
				$query = $model->select()
				->where('PERMOHONAN_KREDIT_NO = ?', $this->_posts['PERMOHONAN_KREDIT_NO']);
				if($query->query()->rowCount() == 0) {
					$model->insert(array(
						'PERMOHONAN_KREDIT_NO' => $this->_posts['PERMOHONAN_KREDIT_NO'],
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
					$this->error(101, 'Permohonan kredit sudah terdaftar, silahkan gunakan data lain.');
				}
			} else {
				$this->error(901);
			}
		} catch(Exception $e) {
			$this->exception($e);
		}
	}
	
	public function updateAction() {
		try {
			if(isset($this->_posts['PERMOHONAN_KREDIT_NO']) && isset($this->_posts['PERMOHONAN_KREDIT_NO'])) {
				$model = new permohonankredit_Model_Permohonankredit();
				if($model->isExist('PERMOHONAN_KREDIT_ID', $this->_posts['PERMOHONAN_KREDIT_ID'])) {
					if(strlen($this->_posts['PERMOHONAN_KREDIT_NO']) > 0) {
						$model->update(array(
								'PERMOHONAN_KREDIT_NO' => $this->_posts['PERMOHONAN_KREDIT_NO'],
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
					} else {
						$this->error(901);
					}
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
			$model = new permohonankredit_Model_Permohonankredit();
			if(isset($this->_posts['PERMOHONAN_KREDIT_ID'])) {
				if($model->isExist('PERMOHONAN_KREDIT_ID', $this->_posts['PERMOHONAN_KREDIT_ID'])) {
					$model->delete($model->getAdapter()->quoteInto('PERMOHONAN_KREDIT_ID = ?', $this->_posts['PERMOHONAN_KREDIT_ID']));
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
	
	
}