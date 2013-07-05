<?php

class IndexController extends Zend_Controller_Action
{
    public function indexAction(){}

    public function testAction() 
    {
    	$this->_helper->viewRenderer->setNoRender(true);
    	$this->_helper->layout()->disableLayout();

    	$year = date('Y');
    	$month = date('m');

    	
    }
}

