<?php

class Users_RequestController extends MyIndo_Controller_Action
{
	public function init()
	{
		$this->_model = new users_Model_Users();
	}
	public function readAction()
	{
		try {
			$this->_data = array(
				'items' => $this->_model->getList($this->_limit, $this->_start, $this->_order),
				'totalCount' => $this->_model->count()
				);
		} catch(Exception $e) {
			$this->exception($e);
		}
	}

	public function createAction()
	{
		try {
			$this->_posts['CREATED_DATE'] = $this->_date;
			$this->_posts['PASSWORD'] = MyIndo_Plugins_Password::makePassword($this->_posts['PASSWORD']);
			$this->_model->insert($this->_posts);
		} catch(Exception $e) {
			$this->exception($e);
		}
	}

	public function updateAction()
	{
		try {
			if($this->_model->isExist('USERNAME', $this->_posts['USERNAME'])) {
				$this->_model->update(array(
					'PASSWORD' => MyIndo_Plugins_Password::makePassword($this->_posts['PASSWORD']),
					'FNAME' => $this->_posts['FNAME'],
					'LNAME' => $this->_posts['LNAME']
					), $this->_model->getAdapter()->quoteInto('USERNAME = ?', $this->_posts['USERNAME']));
			} else {
				$this->error(102);
			}
		} catch(Exception $e) {
			$this->exception($e);
		}
	}

	public function destroyAction()
	{
		try {
			$data = $this->getRequest()->getRawBody();
			$data = Zend_Json::decode($data);
			if($data['USERNAME'] != 'admin')
				$this->_model->delete($this->_model->getAdapter()->quoteInto('USERNAME = ?', $data['USERNAME']));
		} catch(Exception $e) {
			$this->exception($e);
		}
	}
}