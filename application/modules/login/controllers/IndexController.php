<?php

class Login_IndexController extends Zend_Controller_Action
{

	protected $_posts;

	public function init()
	{
		if($this->getRequest()->isPost()) {
			$this->_posts = $this->getRequest()->getPost();
		} else {
			$this->_posts = array();
		}
	}

	protected function _getAuthAdapter() {
    
    	$dbAdapter = Zend_Db_Table::getDefaultAdapter();
    	$authAdapter = new Zend_Auth_Adapter_DbTable($dbAdapter);
    
    	$authAdapter->setTableName('USERS')
    	->setIdentityColumn('USERNAME')
    	->setCredentialColumn('PASSWORD');
    	return $authAdapter;
    }

    protected function _loginProcess($data)
    {
		try {
 		   	$adapter = $this->_getAuthAdapter();
    		$adapter->setIdentity($data['USERNAME']);
    		$adapter->setCredential(MyIndo_Plugins_Password::makePassword($data['PASSWORD']));
    		// $select = $adapter->getDbSelect();
    		// $select->where('ACTIVE = 1');
    		$auth = Zend_Auth::getInstance();
    		$result = $auth->authenticate($adapter);
    
    		if($result->isValid()) {
    				return array(
    						'message' => 'Welcome back, ' . $data['USERNAME'] . '.',
    						'status' => true
    				);
    		} else {
    		    		
    			return array(
    					'message' => 'Invalid Username or Password',
    					'status' => false
    			);
    		}
    	}catch(Exception $e) {
    	    return array(
    	    		'message' => $e->getMessage(),
    	    		'status' => false
    	    );
    	}
    }

	public function indexAction()
	{
		$this->_helper->layout()->disableLayout();
		if($this->getRequest()->isXmlHttpRequest()) {
			$this->_helper->viewRenderer->setNoRender(true);

			$data['USERNAME'] = (isset($this->_posts['USERNAME'])) ? $this->_posts['USERNAME'] : '';
            $data['PASSWORD'] = (isset($this->_posts['PASSWORD'])) ? $this->_posts['PASSWORD'] : '';
            
            $result = $this->_loginProcess($data);
            $success = $result['status'];
            
            $return = array(
            		'data' => array(
            				'message' => $result['message']
            		),
            		'success' => $success
            );
            echo Zend_Json::encode($return);
		}
	}

	public function logoutAction()
    {
        $this->_helper->viewRenderer->setNoRender(true);
        $this->_helper->layout()->disableLayout();
        $objAuth = Zend_Auth::getInstance();
        if ($objAuth->hasIdentity()) {
        	$objAuth->clearIdentity();
        }
        $this->_redirect('login');
    }
}