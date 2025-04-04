<!DOCTYPE html>
<html lang="ja">

<head prefix="og:http://ogp.me/ns#">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <?php if ( is_home() || is_front_page() ) : ?>
    <meta name="description" content="作曲家として活動する井上栞のポートフォリオです。主に劇版音楽のジャンルで活動しています。個人のご依頼も随時承っておりますので、お気軽にご相談ください。">
    <title>Shiori Inoue -HOME-</title>

    <?php elseif ( is_page('works') ) : ?>
        <meta name="description" content="作曲家として活動する井上栞のポートフォリオです。これまで手掛けた作品を年別でご紹介しています。">
        <title>Shiori Inoue -Works-</title>

    <?php elseif ( is_singular('work-contents') ) : ?>
        <meta name="description" content="作曲家として活動する井上栞のポートフォリオです。<?php echo get_the_title() . ' ' . get_field('about'); ?>">
        <title>Shiori Inoue -Work-</title>

    <?php endif; ?>

    <link rel="apple-touch-icon" href="<?php echo get_theme_file_uri('./assets/images/favicon.ico') ?>" sizes="192x192">
    <link rel="shortcut icon" href="<?php echo get_theme_file_uri('./assets/images/favicon.ico') ?>" type="image/x-icon">

    <?php wp_head(); ?>
</head>

<body>
    <div class="loading">
        <div class="loading_wrap">
            <p><span>L</span><span>O</span><span>A</span><span>D</span><span>I</span><span>N</span><span>G</span></p>
        </div>
    </div>
    <div class="background_image"></div>
    <header class="topHeader">
        <h1 class="header_logo"><a href="<?php echo esc_url('/') ?>">Shiori Inoue</a></h1>
        <nav class="header_nav header_navPC">
        <?php if ( is_home() || is_front_page() ) : ?>
            <ul class="header_navList">
                <li class="header_navItem"> <a href="#works">works</a></li>
                <li class="header_navItem"> <a href="#profile">profile</a></li>
                <li class="header_navItem"> <a href="#contact">contact</a></li>
                <li class="header_navItem header_Xicom">
                    <a href="https://x.com/5_24heyaaa" target="_blank" rel="noopener, noreferrer">
                        <img src="<?php echo get_theme_file_uri('./assets/images/x_icon.svg') ?>" alt="Xのアイコン" width="24" height="24">
                    </a>
                </li>
                <li class="header_navItem header_instaIcom">
                    <a href="https://www.instagram.com/24_cha/" target="_blank" rel="noopener, noreferrer">
                        <img src="<?php echo get_theme_file_uri('./assets/images/Instagram.svg') ?>" alt="Instagramのアイコン" width="24" height="24">
                    </a>
                </li>
            </ul>
        <?php else : ?>
            <ul class="header_navList">
                <li class="header_navItem">
                    <a href="index.html#contact">
                        <img src="<?php echo get_theme_file_uri('./assets/images/headerContact_icon.svg') ?>" alt="コンタクトのアイコン" width="24" height="24">
                    </a>
                </li>
                <li class="header_navItem header_Xicom">
                    <a href="https://x.com/5_24heyaaa" target="_blank" rel="noopener, noreferrer">
                        <img src="<?php echo get_theme_file_uri('./assets/images/x_icon.svg') ?>" alt="Xのアイコン" width="24" height="24">
                    </a>
                </li>
            </ul>
        <?php endif; ?>
        </nav>

        <?php if ( is_home() || is_front_page() ) : ?>
        <nav class="header_nav header_navSP">
            <ul class="header_navList">
                <li class="header_navItem"> <a href="#works">works</a></li>
                <li class="header_navItem"> <a href="#profile">profile</a></li>
            </ul>
        </nav>
        <?php endif; ?>
    </header>
    <ul class="headerHover_nav">
        <li class="header_navItem header_Xicom">
            <a href="https://x.com/5_24heyaaa" target="_blank" rel="noopener, noreferrer">
                <img src="<?php echo get_theme_file_uri('./assets/images/x_icon.svg') ?>" alt="Xのアイコン" width="24" height="24">
            </a>
        </li>
        <li class="header_navItem header_instaIcom">
            <a href="https://www.instagram.com/24_cha/" target="_blank" rel="noopener, noreferrer">
                <img src="<?php echo get_theme_file_uri('./assets/images/Instagram.svg') ?>" alt="Instagramのアイコン" width="24" height="24">
            </a>
        </li>
        <li class="header_navItem">
            <a href="<?php echo esc_url('/#contact') ?>">
                <img src="<?php echo get_theme_file_uri('./assets/images/headerContact_icon.svg') ?>" alt="コンタクトのアイコン" width="24" height="24">
            </a>
        </li>
    </ul>