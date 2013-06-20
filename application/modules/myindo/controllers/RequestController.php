<?php

class Myindo_RequestController extends MyIndo_Controller_Action
{
	public function indexAction()
	{
		echo Zend_Json::encode(array(
			'serviceName' => 'MyIndo'
			));
	}

	/**
	  * Function Name 	: getListMenu()
	  * Created Date 	: June, 17 2013
	  * Description 	: Get list menus.
	  */

	public function getListMenuAction()
	{
		if($this->isPost() && $this->isAjax()) {
			try {
				$MyIndo = new MyIndo_Api_Request();
				$data = $MyIndo->getListMenu();
				$this->_data = $data;
			} catch(Exception $e) {
				$this->ec($e);
			}
		}
	}
}