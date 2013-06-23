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
			if(isset($this->_posts['UNIT_KERJA_NAME']) && isset($this->_posts['UNIT_KERJA_ADDRESS'])) {
				$model = new unitkerja_Model_UnitKerja();
				$query = $model->select()
				->where('UNIT_KERJA_NAME = ?', $this->_posts['UNIT_KERJA_NAME'])
				->where('UNIT_KERJA_ADDRESS = ?', $this->_posts['UNIT_KERJA_ADDRESS']);

				if($query->query()->rowCount() == 0) {
					$model->insert(array(
						'UNIT_KERJA_NAME' => $this->_posts['UNIT_KERJA_NAME'],
						'UNIT_KERJA_ADDRESS' => $this->_posts['UNIT_KERJA_ADDRESS'],
						'UNIT_KERJA_PHONE' => $this->_posts['UNIT_KERJA_PHONE'],
						'UNIT_KERJA_PHONE' => $this->_posts['UNIT_KERJA_PHONE'],
						'UNIT_KERJA_FAX' => $this->_posts['UNIT_KERJA_FAX'],
						'UNIT_KERJA_CONTACT_PERSON' => $this->_posts['UNIT_KERJA_CONTACT_PERSON'],
						'CREATED_DATE' => $this->_date
						));
				} else {
					$this->error(101, 'Unit Kerja sudah terdaftar, silahkan gunakan data lain.');
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
			if(isset($this->_posts['UNIT_KERJA_ID']) && isset($this->_posts['UNIT_KERJA_ID'])) {
				$model = new unitkerja_Model_UnitKerja();
				if($model->isExist('UNIT_KERJA_ID', $this->_posts['UNIT_KERJA_ID'])) {
					if(strlen($this->_posts['UNIT_KERJA_NAME']) > 0) {
						$model->update(array(
								'UNIT_KERJA_NAME' => $this->_posts['UNIT_KERJA_NAME'],
								'UNIT_KERJA_ADDRESS' => $this->_posts['UNIT_KERJA_ADDRESS'],
								'UNIT_KERJA_PHONE' => $this->_posts['UNIT_KERJA_PHONE'],
								'UNIT_KERJA_FAX' => $this->_posts['UNIT_KERJA_FAX'],
								'UNIT_KERJA_CONTACT_PERSON' => $this->_posts['UNIT_KERJA_CONTACT_PERSON']
						), $model->getAdapter()->quoteInto('UNIT_KERJA_ID = ?', $this->_posts['UNIT_KERJA_ID']));
					} else {
						$this->error(901);
					}
				} else {
					$this->error(102, 'Update data unit kerja gagal, unit kerja tidak terdaftar.');
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
			$model = new unitkerja_Model_UnitKerja();
			if(isset($this->_posts['UNIT_KERJA_ID'])) {
				if($model->isExist('UNIT_KERJA_ID', $this->_posts['UNIT_KERJA_ID'])) {
					$model->delete($model->getAdapter()->quoteInto('UNIT_KERJA_ID = ?', $this->_posts['UNIT_KERJA_ID']));
				} else {
					$this->error(102, 'Hapus data unit kerja gagal, unit kerja tidak terdaftar.');
				}
			} else {
				$this->error(901);
			}
		} catch(Exception $e) {
			$this->exception($e);
		}
	}
	
	
}