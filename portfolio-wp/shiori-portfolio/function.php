<?php

  function theme_enqueue_files() {
    //cssの読み込み
    wp_enqueue_style('theme-style', get_theme_file_uri('/assets/css/main.css'));
    wp_enqueue_style('theme-style', get_theme_file_uri('/aassets/css/base.css'));
    wp_enqueue_style('theme-style', get_theme_file_uri('/assets/css/loading.css'));
    wp_enqueue_style('theme-style', get_theme_file_uri('/assets/css/style.css'));
    
    //JSの読み込み
    wp_enqueue_script('fixmenu', get_theme_file_uri('/assets/js/main2.js'), array(), null, false);
  }
  add_action('wp_enqueue_scripts', 'theme_enqueue_files');

?>