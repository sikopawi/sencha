<?php

class Cabang_RequestController extends MyIndo_Controller_Action
{
	public function readAction()
	{
		$model = new cabang_Model_Cabang();
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
			if(isset($this->_posts['CABANG_NAME'])) {
				$model = new cabang_Model_Cabang();
				if(!$model->isExist('CABANG_NAME', $this->_posts['CABANG_NAME'])) {
					$model->insert(array(
						'CABANG_NAME' => $this->_posts['CABANG_NAME'],
						'CREATED_DATE' => $this->_date
						));
				} else {
					$this->error(101, 'Nama cabang sudah terdaftar, silahkan gunakan nama lain.');
				}
			} else {
				$this->error(901);
			}
		} catch(Exception $e) {
			$this->exception($e);
		}
	}

	public function updateAction()
	{
		try {
			if(isset($this->_posts['CABANG_ID']) && isset($this->_posts['CABANG_NAME'])) {
				$model = new cabang_Model_Cabang();
				if($model->isExist('CABANG_ID', $this->_posts['CABANG_ID'])) {
					if(strlen($this->_posts['CABANG_NAME']) > 0) {
						$model->update(array(
							'CABANG_NAME' => $this->_posts['CABANG_NAME']
							), $model->getAdapter()->quoteInto('CABANG_ID = ?', $this->_posts['CABANG_ID']));
					} else {
						$this->error(901);
					}
				} else {
					$this->error(102, 'Update data cabang gagal, cabang tidak terdaftar.');
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
			$model = new cabang_Model_Cabang();
			if(isset($this->_posts['CABANG_ID'])) {
				if($model->isExist('CABANG_ID', $this->_posts['CABANG_ID'])) {
					$model->delete($model->getAdapter()->quoteInto('CABANG_ID = ?', $this->_posts['CABANG_ID']));
				} else {
					$this->error(102, 'Hapus data cabang gagal, cabang tidak terdaftar.');
				}
			} else {
				$this->error(901);
			}
		} catch(Exception $e) {
			$this->exception($e);
		}
	}
}