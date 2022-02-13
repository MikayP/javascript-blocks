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
        // close the box
        wp_register_script('block-close-box', plugin_dir_url(__FILE__) . 'build/index.js', array('wp-blocks', 'wp-element'));
        register_block_type('plugin/block-close-box',array(
            'editor_script' => 'block-close-box',
            'render_callback' => array($this, 'block_close_box')
        ));

        // top div background image
        wp_register_script('top-card-bg', plugin_dir_url(__FILE__) . 'build/index.js', array('wp-blocks', 'wp-element'));
        register_block_type('plugin/top-card-bg',array(
            'editor_script' => 'top-card-bg',
            'render_callback' => array($this, 'top_card_bg')
        ));

        // full bg image card
        wp_register_script('background-card-block', plugin_dir_url(__FILE__) . 'build/index.js', array('wp-blocks', 'wp-element'));
        register_block_type('plugin/background-card-block',array(
            'editor_script' => 'background-card-block',
            'render_callback' => array($this, 'card_bg_block')
        ));
    }

    function top_card_bg($variable){
        ob_start(); ?>
        <div class="h-100 border-radius_global col-12 background_layer top_card_bg <?php echo $variable['className'] ?>" style="background-image:url('<?php echo $variable['top_card_bg'] ?>');" data-aos="<?php echo $variable['animation'] ?>" data-aos-duration="500">
        <div class="background_layer_dark_global background_layer_dark_global_z_index_1"></div>
        <?php return ob_get_clean(); 
    }

    function block_close_box( ){
        ob_start(); ?>
        </div>
        <?php return ob_get_clean(); 
    }

    function card_bg_block($variable){
        ob_start();  ?>
         <?php  if ($variable['url'] ) { ?>
           <a class="background-card-block_url <?php echo $block['className'] ?>" href="<?php echo ($variable['url'] )?>">
         <?php } ?>
         <div class="background-card-block <?php if ($variable['background_checkbox']) {?> background-card-block_light_bg <?php } ?> " data-aos="<?php echo $variable['animation'] ?>"
    style="background-image:url('<?php echo $variable['Background'] ?>')">
 
        <div class="background-card-block_img  border-radius"></div>
        <div class="background-card-block_content">
            <?php echo $variable['content'] ?>
         
</div>
<?php if ($variable['url'] ) { ?>
            <div class="url-row">
            <h4><?php echo ($variable['url_copy']) ?></h4>
      
            </div>
            <i class="fas fa-arrow-right"></i>
            <?php } ?>
</div>
<?php if ($variable['url'] ) { ?>

</a>
<?php } ?>
<?php return ob_get_clean(); 
    }
}

$payAttention = new payAttention;