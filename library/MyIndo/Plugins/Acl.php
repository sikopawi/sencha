<?php 

class MyIndo_Plugins_Acl extends Zend_Controller_Plugin_Abstract
{
	protected $_objAuth;
	protected $_module;
	protected $_controller;
	protected $_action;

	public function preDispatch(Zend_Controller_Request_Abstract $request)
	{
		$this->_objAuth = Zend_Auth::getInstance();
		$this->_module = $request->getModuleName();
		$this->_controller = $request->getControllerName();
		$this->_action = $request->getActionName();

		$layout = Zend_Layout::getMvcInstance ();
		$view = $layout->getView();

		if(!$this->_objAuth->hasIdentity()) {
			$json = array(
				'login' 		=> false,
				'hasAccess' 	=> false,
				'success'		=> false,
				'error_code'	=> 10081,
				'error_message'	=> 'Access denied.',
				'data'			=> array()
			);
			if($this->getRequest()->isXmlHttpRequest()) {
				if($this->_module != 'login' && $this->_controller != 'index' && $this->_action != 'index') {
					echo Zend_Json::encode($json);
					die;
				}
			} else {
				$request->setModuleName('login');
				$request->setControllerName('index');
				$request->setActionName('index');
			}
		} else {
			$view->username = $this->_objAuth->getIdentity();
			$model = new login_Model_Users();
			$where = array();

			$where[] = $model->getAdapter()->quoteInto('USERNAME = ?', $view->username);
			$detail = $model->getDetail($where);
			
			$view->fname = $detail['FNAME'];
			$view->lname = $detail['LNAME'];

		}
	}
}