<?php

class Debiturcategory_RequestController extends MyIndo_Controller_Action
{
	public function readAction()
	{
		$model = new debiturcategory_Model_DebiturCategory();
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
			if(isset($this->_posts['DEBITUR_CATEGORY_NAME'])) {
				$model = new debiturcategory_Model_DebiturCategory();
				if(!$model->isExist('DEBITUR_CATEGORY_NAME', $this->_posts['DEBITUR_CATEGORY_NAME'])) {
					$model->insert(array(
						'DEBITUR_CATEGORY_NAME' => $this->_posts['DEBITUR_CATEGORY_NAME'],
						'CREATED_DATE' => $this->_date
						));
				} else {
					$this->error(101, 'Debitur Category sudah terdaftar, silahkan gunakan nama lain.');
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
			if(isset($this->_posts['DEBITUR_CATEGORY_ID']) && isset($this->_posts['DEBITUR_CATEGORY_ID'])) {
				$model = new debiturcategory_Model_DebiturCategory();
				if($model->isExist('DEBITUR_CATEGORY_ID', $this->_posts['DEBITUR_CATEGORY_ID'])) {
					if(strlen($this->_posts['DEBITUR_CATEGORY_NAME']) > 0) {
						if($model->isExist('DEBITUR_CATEGORY_NAME', $this->_posts['DEBITUR_CATEGORY_NAME'])) {
							$this->error(101, 'Debitur Category sudah terdaftar, silahkan gunakan nama lain.');
						} else {
							$model->update(array(
								'DEBITUR_CATEGORY_NAME' => $this->_posts['DEBITUR_CATEGORY_NAME']
								), $model->getAdapter()->quoteInto('DEBITUR_CATEGORY_ID = ?', $this->_posts['DEBITUR_CATEGORY_ID']));
						}
					} else {
						$this->error(901);
					}
				} else {
					$this->error(102, 'Update data Debitur Category gagal, data tidak terdaftar.');
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
			$model = new debiturcategory_Model_DebiturCategory();
			if(isset($this->_posts['DEBITUR_CATEGORY_ID'])) {
				if($model->isExist('DEBITUR_CATEGORY_ID', $this->_posts['DEBITUR_CATEGORY_ID'])) {
					$model->delete($model->getAdapter()->quoteInto('DEBITUR_CATEGORY_ID = ?', $this->_posts['DEBITUR_CATEGORY_ID']));
				} else {
					$this->error(102, 'Hapus data gagal, Debitur Category tidak terdaftar.');
				}
			} else {
				$this->error(901);
			}
		} catch(Exception $e) {
			$this->exception($e);
		}
	}
}