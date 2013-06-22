<?php

class Kolektabilitas_RequestController extends MyIndo_Controller_Action
{
	public function readAction() {
		$model = new kolektabilitas_Model_Kolektabilitas();
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
			if(isset($this->_posts['KOLEKTIBILITAS_CODE']) && isset($this->_posts['KOLEKTIBILITAS_CODE'])) {
				$model = new kolektabilitas_Model_Kolektabilitas();
				$query = $model->select()
				->where('KOLEKTIBILITAS_CODE = ?', $this->_posts['KOLEKTIBILITAS_CODE']);
	
				if($query->query()->rowCount() == 0) {
					$model->insert(array(
							'KOLEKTIBILITAS_CODE' => $this->_posts['KOLEKTIBILITAS_CODE'],
							'KOLEKTIBILITAS_URAIAN' => $this->_posts['KOLEKTIBILITAS_URAIAN'],
							'KOLEKTIBILITAS_TUNGGAKAN_MIN' => $this->_posts['KOLEKTIBILITAS_TUNGGAKAN_MIN'],
							'KOLEKTIBILITAS_TUNGGAKAN_MAX' => $this->_posts['KOLEKTIBILITAS_TUNGGAKAN_MAX'],
							'CREATED_DATE' => $this->_date
					));
				} else {
					$this->error(101, 'Kolektabilitas sudah terdaftar, silahkan gunakan data lain.');
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
			if(isset($this->_posts['KOLEKTIBILITAS_ID']) && isset($this->_posts['KOLEKTIBILITAS_ID'])) {
				$model = new kolektabilitas_Model_Kolektabilitas();
				if($model->isExist('KOLEKTIBILITAS_ID', $this->_posts['KOLEKTIBILITAS_ID'])) {
					if(strlen($this->_posts['KOLEKTIBILITAS_CODE']) > 0) {
						$model->update(array(
								'KOLEKTIBILITAS_CODE' => $this->_posts['KOLEKTIBILITAS_CODE'],
								'KOLEKTIBILITAS_URAIAN' => $this->_posts['KOLEKTIBILITAS_URAIAN'],
								'KOLEKTIBILITAS_TUNGGAKAN_MIN' => $this->_posts['KOLEKTIBILITAS_TUNGGAKAN_MIN'],
								'KOLEKTIBILITAS_TUNGGAKAN_MAX' => $this->_posts['KOLEKTIBILITAS_TUNGGAKAN_MAX']
						), $model->getAdapter()->quoteInto('KOLEKTIBILITAS_ID = ?', $this->_posts['KOLEKTIBILITAS_ID']));
					} else {
						$this->error(901);
					}
				} else {
					$this->error(102, 'Update data kolektabilitas gagal, kolektabilitas tidak terdaftar.');
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
			$model = new kolektabilitas_Model_Kolektabilitas();
			if(isset($this->_posts['KOLEKTIBILITAS_ID'])) {
				if($model->isExist('KOLEKTIBILITAS_ID', $this->_posts['KOLEKTIBILITAS_ID'])) {
					$model->delete($model->getAdapter()->quoteInto('KOLEKTIBILITAS_ID = ?', $this->_posts['KOLEKTIBILITAS_ID']));
				} else {
					$this->error(102, 'Hapus data kolektabilitas gagal, kolektabilitas tidak terdaftar.');
				}
			} else {
				$this->error(901);
			}
		} catch(Exception $e) {
			$this->exception($e);
		}
	}
}