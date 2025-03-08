<?php

  function theme_enqueue_files() {
    //cssの読み込み
    wp_enqueue_style('main-style', get_theme_file_uri('assets/css/main.css'));
    wp_enqueue_style('base-style', get_theme_file_uri('assets/css/base.css'));
    wp_enqueue_style('loading-style', get_theme_file_uri('assets/css/loading.css'));
    wp_enqueue_style('styling-style', get_theme_file_uri('assets/css/style.css'));
  }
  add_action('wp_enqueue_scripts', 'theme_enqueue_files');

?>