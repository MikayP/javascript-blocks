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
        add_action('init', array($this, 'loadBlocks'));
    }
    function loadBlocks(){
        wp_register_script('card_block_block', plugin_dir_url(__FILE__) . 'build/index.js', array('wp-blocks', 'wp-element'));
        register_block_type('plugin/card-block',array(
            'editor_script' => 'card_block_block',
            'render_callback' => array($this, 'card_block')
        ));

        wp_register_script('background-card-block', plugin_dir_url(__FILE__) . 'build/index.js', array('wp-blocks', 'wp-element'));
        register_block_type('plugin/background-card-block',array(
            'editor_script' => 'background-card-block',
            'render_callback' => array($this, 'card_bg_block')
        ));
    }
    function card_block($variable){
        ob_start(); ?>
        <p>TOday the sky is <?php if($variable['skyColor']) {echo  $variable['skyColor'];} else {echo 'nothing';} ?> and the grass is <?php echo $variable['grassColor'] ?></p>
        <?php return ob_get_clean(); 
    }

    function card_bg_block($variable){
        ob_start(); ?>
        <div class="background-card-block" >
        <div class="background-card-block_img  border-radius" style="background-image:url('<?php echo $variable['Background'] ?>')"></div>
        <div class="background-card-block_content">
        <?php echo $variable['content'] ?>
        </div>
    
       </div>
        <?php return ob_get_clean(); 
    }
}

$payAttention = new payAttention;