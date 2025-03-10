<?php 

//ウィジェット(サイドバー)を表示する
if ( is_active_sidebar('profile') ){ //sidebar(function.phpのウィジェットの設定で記述したid名)が有効かどうか
  dynamic_sidebar('profile'); //sidebarを表示する
}

?>