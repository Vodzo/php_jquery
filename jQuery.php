<?php

class jQuery
        {
        private $_exec_tree = array();
        public function __construct($selector)
                {
                $this->selector = $selector;
                }


        public function __call($method, $arguments)
                {
                $this->method[] = $method;
                $this->arguments[] = $arguments;
                return $this;
                }

        public function compile()
                {
                return json_decode(json_encode($this), true);
                }
        public function get_instance()
                {
                return $this;
                }
        public function selector($selector)
                {
                $this->selector = $selector;
                }
        public function get_exec_tree()
                {
                return $this->_exec_tree;
                }
        }

function jQuery($selector)
        {
        return new jQuery($selector);
        }