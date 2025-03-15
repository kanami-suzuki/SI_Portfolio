<?php get_header(); ?>

<main>
    <section class="worksContent_head">
        <h2 class="worksTitle">Works</h2>
        <div class="worksYear">
            <p class="worksYear_text">Year</p>
            <ul class="worksYear_list" id="year">
                <li class="worksYear_item" id="defaultValue"><button href="#"> </button></li>
                <li class="worksYear_item"><button href="#" data-year="all">All</button></li>
                <?php
                $years = get_post_years();
                foreach ($years as $year) {
                    echo '<li class="worksYear_item"><button href="#" data-year="'. $year .'">'. $year .'</button></li>';
                }
                ?>
            </ul>
        </div>
    </section>

    <section class="worksContent_list">
        <ul class="works_list worksPage_list" data-show="6" id="works_container">

        <?php
          $query_args = array(
            'post_type' => 'work-contents',
            'posts_per_page' => -1, // 全件取得
          );

          if(isset($_GET['year']) && $_GET['year'] !== 'all') {
              $query_args['date_query'] = array(
                  array(
                      'year' => intval($_GET['year']),
                  ),
              );
          }

          $query = new WP_Query($query_args);

          if($query->have_posts()) : while($query->have_posts()) : $query->the_post();
        ?>

        <li class="works_item" data-year="<?php the_time('Y'); ?>">
            <a href="<?php the_permalink(); ?>">
                <h4 class="works_itemTitle"><?php the_title(); ?></h4>
                <p class="works_itemDate"><?php the_time('Y.m.d') ?></p>
                <div class="works_thumbnailImg">
                  <?php if(has_post_thumbnail()) : ?>
                    <?php the_post_thumbnail(); ?>
                  <?php else: ?>
                    <p>No Image</p>
                    <img class="workThumbnail_noImage" src="<?php echo get_theme_file_uri('./assets/images/workThumbnail_noImage.webp') ?>" alt="NoImageの画像">
                  <?php endif; ?>
                </div>
            </a>
        </li>
        
        <?php endwhile; endif; wp_reset_postdata(); ?>

        </ul>
        <div class="works_moreBtnWrap worksContent_more">
            <button class="works_moreBtn" type="button" id="works_moreBtn">
                <p class="works_moreText worksContent_moreText">More Works</p>
                <img class="worksContent_moreArrow" src="<?php echo get_theme_file_uri('./assets/images/worksContent_moreArrow.svg')?>" alt="下向きの矢印" width="26" height="16">
            </button>
        </div>
    </section>
</main>
<?php get_footer(); ?>
