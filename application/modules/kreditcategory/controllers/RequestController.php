<?php

class Kreditcategory_RequestController extends MyIndo_Controller_Action
{
	public function readAction()
	{
		$model = new kreditcategory_Model_KreditCategory();
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
			if(isset($this->_posts['KREDIT_CATEGORY_NAME'])) {
				$model = new kreditcategory_Model_KreditCategory();
				if(!$model->isExist('KREDIT_CATEGORY_NAME', $this->_posts['KREDIT_CATEGORY_NAME'])) {
					$model->insert(array(
						'KREDIT_CATEGORY_NAME' => $this->_posts['KREDIT_CATEGORY_NAME'],
						'CREATED_DATE' => $this->_date
						));
				} else {
					$this->error(101, 'Kredit Category sudah terdaftar, silahkan gunakan nama lain.');
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
			if(isset($this->_posts['KREDIT_CATEGORY_ID']) && isset($this->_posts['KREDIT_CATEGORY_NAME'])) {
				$model = new kreditcategory_Model_KreditCategory();
				if($model->isExist('KREDIT_CATEGORY_ID', $this->_posts['KREDIT_CATEGORY_ID'])) {
					if(strlen($this->_posts['KREDIT_CATEGORY_NAME']) > 0) {
						if($model->isExist('KREDIT_CATEGORY_NAME', $this->_posts['KREDIT_CATEGORY_NAME'])) {
							$this->error(101, 'Nama Kredit Category sudah terdaftar, silahkan gunakan nama lain.');
						} else {
							$model->update(array(
								'KREDIT_CATEGORY_NAME' => $this->_posts['KREDIT_CATEGORY_NAME']
								), $model->getAdapter()->quoteInto('KREDIT_CATEGORY_ID = ?', $this->_posts['KREDIT_CATEGORY_ID']));
						}
					} else {
						$this->error(901);
					}
				} else {
					$this->error(102, 'Update data Kredit Category gagal, data tidak terdaftar.');
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
			$model = new kreditcategory_Model_KreditCategory();
			if(isset($this->_posts['KREDIT_CATEGORY_ID'])) {
				if($model->isExist('KREDIT_CATEGORY_ID', $this->_posts['KREDIT_CATEGORY_ID'])) {
					$model->delete($model->getAdapter()->quoteInto('KREDIT_CATEGORY_ID = ?', $this->_posts['KREDIT_CATEGORY_ID']));
				} else {
					$this->error(102, 'Hapus data gagal, Kredit Category tidak terdaftar.');
				}
			} else {
				$this->error(901);
			}
		} catch(Exception $e) {
			$this->exception($e);
		}
	}
}