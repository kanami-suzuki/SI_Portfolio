<?php get_header(); ?>

<main>
    <section class="topVisual_container">
        <h2 class="topTitle">Shiori Inoue</h2>
        <div class="scrollDown"><span></span></div>
    </section>
    <section class="topWorks_container" id="works">
        <h3 class="topWorks_title topTitleLayout">Works</h3>
        <ul class="works_list topWorks_list">
            <li class="works_item" data-aos="fade" data-aos-duration="1000"><a href="workPages.html">
                    <h4 class="works_itemTitle">タイトル<span class="wrapping">テキスト</span></h4>
                    <p class="works_itemDate"><time datetime="2024-05-03">2024.05.03 </time></p>
                    <div class="works_thumbnailImg">
                        <picture>
                            <source srcset="<?php echo get_theme_file_uri('./assets/images/worksThumbnail_noImage_sp.webp" media="(max-width: 768px)') ?>" type="image/webp" width="194" height="128"><img src="<?php echo get_theme_file_uri('./assets/images/worksThumbnail_noImage.webp') ?>" alt="サムネイル画像" width="292" height="378">
                        </picture>
                    </div>
                </a></li>
            <li class="works_item" data-aos="fade" data-aos-duration="1000"><a href="workPages.html">
                    <h4 class="works_itemTitle">タイトル<span class="wrapping">テキスト</span></h4>
                    <p class="works_itemDate"><time datetime="2024-05-03">2024.05.03 </time></p>
                    <div class="works_thumbnailImg">
                        <picture>
                            <source srcset="<?php echo get_theme_file_uri('./assets/images/worksThumbnail_noImage_sp.webp" media="(max-width: 768px)') ?>" type="image/webp" width="194" height="128"><img src="<?php echo get_theme_file_uri('./assets/images/worksThumbnail_noImage.webp') ?>" alt="サムネイル画像" width="292" height="378">
                        </picture>
                    </div>
                </a></li>
            <li class="works_item" data-aos="fade" data-aos-duration="1000"><a href="workPages.html">
                    <h4 class="works_itemTitle">タイトル<span class="wrapping">テキスト</span></h4>
                    <p class="works_itemDate"><time datetime="2024-05-03">2024.05.03 </time></p>
                    <div class="works_thumbnailImg">
                        <picture>
                            <source srcset="<?php echo get_theme_file_uri('./assets/images/worksThumbnail_noImage_sp.webp" media="(max-width: 768px)') ?>" type="image/webp" width="194" height="128"><img src="<?php echo get_theme_file_uri('./assets/images/worksThumbnail_noImage.webp') ?>" alt="サムネイル画像" width="292" height="378">
                        </picture>
                    </div>
                </a></li>
            <li class="works_item" data-aos="fade" data-aos-duration="1000"><a href="workPages.html">
                    <h4 class="works_itemTitle">タイトル<span class="wrapping">テキスト</span></h4>
                    <p class="works_itemDate"><time datetime="2024-05-03">2024.05.03 </time></p>
                    <div class="works_thumbnailImg">
                        <picture>
                            <source srcset="<?php echo get_theme_file_uri('./assets/images/worksThumbnail_noImage_sp.webp" media="(max-width: 768px)') ?>" type="image/webp" width="194" height="128"><img src="<?php echo get_theme_file_uri('./assets/images/worksThumbnail_noImage.webp') ?>" alt="サムネイル画像" width="292" height="378">
                        </picture>
                    </div>
                </a></li>
        </ul>
        <div class="works_moreBtnWrap"><a class="works_moreBtn" href="works.html">
                <p class="works_moreBtnText">More Works</p><img src="<?php echo get_theme_file_uri('./assets/images/arrow_icon.svg') ?>" alt="右向きの矢印" width="26" height="16">
            </a></div>
    </section>
    <section class="topProfile_container" id="profile">
        <h3 class="topProfile_title topTitleLayout">Profile</h3>
        <div class="topProfile_content">
            <div class="topPrifile_icon"><img src="<?php echo get_theme_file_uri('./assets/images/topProfile_icon.webp') ?>" alt="アイコンの画像" width="396" height="396"></div>
            <div class="topPrifile_text">
                <h4 class="topPrifile_textName">井上 栞 <span class="lower-case">(Shiori Inoue)</span></h4>
                <?php get_sidebar(); ?>
            </div>
        </div>
    </section>
    <section class="topContact_container" id="contact">
        <h3 class="topContact_title topTitleLayout">Contact</h3>
        <div class="topContact_content">
            <p class="topContact_text">お仕事のご依頼やお問い合わせは下記リンク先よりお願いいたします。</p>
            <p class="topContact_btn"><a href="#" target="_blank" rel="noopener, noreferrer">お問い合わせはこちら</a></p>
        </div>
    </section>
</main>
<?php get_footer();?> 
