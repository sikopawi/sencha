<?php

class Marketingofficer_RequestController extends MyIndo_Controller_Action
{
	public function readAction() {
		$model = new marketingofficer_Model_Marketingofficer();
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
			if(isset($this->_posts['MARKETING_OFFICER_NAME']) && isset($this->_posts['MARKETING_OFFICER_NAME'])) {
				$model = new marketingofficer_Model_Marketingofficer();
				$query = $model->select()
				->where('MARKETING_OFFICER_NAME = ?', $this->_posts['MARKETING_OFFICER_NAME']);
	
				if($query->query()->rowCount() == 0) {
					$model->insert(array(
							'MARKETING_OFFICER_NAME' => $this->_posts['MARKETING_OFFICER_NAME'],
							'CREATED_DATE' => $this->_date
					));
				} else {
					$this->error(101, 'Marketing officer sudah terdaftar, silahkan gunakan data lain.');
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
			if(isset($this->_posts['MARKETING_OFFICER_ID']) && isset($this->_posts['MARKETING_OFFICER_ID'])) {
				$model = new marketingofficer_Model_Marketingofficer();
				if($model->isExist('MARKETING_OFFICER_ID', $this->_posts['MARKETING_OFFICER_ID'])) {
					if(strlen($this->_posts['MARKETING_OFFICER_NAME']) > 0) {
						$model->update(array(
								'MARKETING_OFFICER_NAME' => $this->_posts['MARKETING_OFFICER_NAME']
						), $model->getAdapter()->quoteInto('MARKETING_OFFICER_ID = ?', $this->_posts['MARKETING_OFFICER_ID']));
					} else {
						$this->error(901);
					}
				} else {
					$this->error(102, 'Update data marketing officer gagal, marketing officer tidak terdaftar.');
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
			$model = new marketingofficer_Model_Marketingofficer();
			if(isset($this->_posts['MARKETING_OFFICER_ID'])) {
				if($model->isExist('MARKETING_OFFICER_ID', $this->_posts['MARKETING_OFFICER_ID'])) {
					$model->delete($model->getAdapter()->quoteInto('MARKETING_OFFICER_ID = ?', $this->_posts['MARKETING_OFFICER_ID']));
				} else {
					$this->error(102, 'Hapus data marketing officer gagal, marketing officer tidak terdaftar.');
				}
			} else {
				$this->error(901);
			}
		} catch(Exception $e) {
			$this->exception($e);
		}
	}
	
	

}