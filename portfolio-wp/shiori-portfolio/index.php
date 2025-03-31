<?php get_header(); ?>

<main>
    <section class="topVisual_container">
        <h2 class="topTitle">Shiori Inoue</h2>
        <div class="scrollDown"><span></span></div>
    </section>
    <section class="topWorks_container" id="works">
        <h3 class="topWorks_title topTitleLayout">Works</h3>
        <ul class="works_list topWorks_list">

          <?php
          $argc = array(
            'post_type' => 'work-contents',
            'posts_per_page' => 6,
            'orderby'        => 'date',
            'order'          => 'DESC',
          );

          $query = new WP_Query($argc);

          if($query->have_posts()) : while($query->have_posts()) : $query->the_post();
          ?>

            <li class="works_item" data-aos="fade" data-aos-duration="1000">
                <a href="<?php the_permalink(); ?>">
                    <h4 class="works_itemTitle"><?php the_title(); ?></h4>
                    <p class="works_itemDate"><?php the_time('Y.m.d') ?></p>
                    <div class="works_thumbnailImg">
                      <?php if(has_post_thumbnail()) : ?>
                        <?php the_post_thumbnail(); ?>
                      <?php else: ?>
                        <p class="home_noImage_text">N<span class="lower-case">o</span> I<span class="lower-case">mage</span></p>
                        <img class="workThumbnail_noImage home_noImage" src="<?php echo get_theme_file_uri('./assets/images/workThumbnail_noImage.webp') ?>" alt="NoImageの画像">
                      <?php endif; ?>
                    </div>
                </a>
            </li>
          
          <?php endwhile; endif; wp_reset_postdata(); ?>
        </ul>
        <div class="works_moreBtnWrap">
          <a class="works_moreBtn" href="<?php echo get_permalink(9); ?>">
            <p class="works_moreBtnText">More Works</p>
            <img src="<?php echo get_theme_file_uri('./assets/images/arrow_icon.svg') ?>" alt="右向きの矢印" width="26" height="16">
          </a>
        </div>
    </section>
    <section class="topProfile_container" id="profile">
        <h3 class="topProfile_title topTitleLayout">Profile</h3>
        <div class="topProfile_content">
            <div class="topPrifile_icon">
              <img src="<?php echo get_theme_file_uri('./assets/images/topProfile_icon.webp') ?>" alt="アイコンの画像" width="396" height="396">
            </div>
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
            <p class="topContact_btn">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfbEtEoI1Wux71TwK2NDXAwtkfLVW6r9N8qvC2VMV_HwW8SoQ/viewform" target="_blank" rel="noopener, noreferrer">お問い合わせはこちら</a>
            </p>
        </div>
    </section>
</main>
<?php get_footer();?> 
