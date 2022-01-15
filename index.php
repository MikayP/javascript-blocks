<?php
/*
    Plugin Name: Custom Blocks
    Description: Custom blocks made by Mike Portman. Do not deactivate
    Version: 1.0
    Author: Mike Portman
*/

if( ! defined('ABSPATH')) exit; // exit if accessed directly

class payAttention{
    function __construct(){
        add_action('init', array($this, 'adminAssets'));
    }
    function adminAssets(){
        wp_register_script('newBlockType', plugin_dir_url(__FILE__) . 'build/index.js', array('wp-blocks', 'wp-element'));

        register_block_type('plugin/test-block',array(
            'editor_script' => 'newBlockType',
            'render_callback' => array($this, 'card_block')
        ));
    }
    function card_block($variable){
        ob_start(); ?>
        <p>TOday the sky is <?php if($variable['skyColor']) {echo  $variable['skyColor'];} else {echo 'nothing';} ?> and the grass is <?php echo $variable['grassColor'] ?></p>
        <?php return ob_get_clean(); 
    }

}

$payAttention = new payAttention;