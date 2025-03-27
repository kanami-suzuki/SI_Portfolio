<?php

function theme_enqueue_files() {
  // 遅延読み込みしないCSS
  wp_enqueue_style('base-style', get_theme_file_uri('assets/css/base.css'));
  wp_enqueue_style('loading-style', get_theme_file_uri('assets/css/loading.css'));

  // 遅延読み込み用のCSS（main.css & style.css）
  $main_css_url = get_theme_file_uri('assets/css/main.css');
  $style_css_url = get_theme_file_uri('assets/css/style.css');

  // 遅延読み込み用のスクリプトを footer に追加
  add_action('wp_footer', function() use ($main_css_url, $style_css_url) {
      echo <<<EOT
      <script>
          function loadCSS(href) {
              var link = document.createElement("link");
              link.rel = "stylesheet";
              link.href = href;
              document.head.appendChild(link);
          }
          window.addEventListener("load", function() {
              loadCSS("{$main_css_url}");
              loadCSS("{$style_css_url}");
          });
      </script>
      EOT;
  });
}
add_action('wp_enqueue_scripts', 'theme_enqueue_files');


  function my_widget_init() {
    register_sidebar( array(
      'name' => 'プロフィール文',
      'id'   => 'profile',
      'before_widget'  => '<div class="textwidget topPrifile_textOverview">',
      'after_widget'   => '</div>',
    ));
  }
  add_action('widgets_init', 'my_widget_init');

  function get_post_years() {
    global $wpdb;
    $query = "SELECT DISTINCT YEAR(post_date) AS year FROM {$wpdb->posts} WHERE post_status = %s AND post_type = %s ORDER BY post_date DESC";
    $prepared_query = $wpdb->prepare($query, 'publish', 'work-contents');

    $years = $wpdb->get_col($prepared_query);
    return $years;
}

?>