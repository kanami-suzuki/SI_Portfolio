<?php get_header(); ?>

<main>
  <section class="worksContent_head">
    <h2 class="worksTitle">Works</h2>
  </section>

  <?php
    if(have_posts()) : while(have_posts()) : the_post();
  ?>

    <section class="workHead">
      <p class="workHead_title"><?php the_title(); ?></p>
      <div class="workHead_thumbnail">
        <?php if(has_post_thumbnail()) : ?>
          <?php the_post_thumbnail(); ?>
        <?php else: ?>
          <p>No Image</p>
          <img class="workThumbnail_noImage" src="<?php echo get_theme_file_uri('./assets/images/workThumbnail_noImage.webp') ?>" alt="NoImageの画像">
        <?php endif; ?>
      </div>
      <p class="workHead_date"><?php the_time('Y.m.d') ?></p>
    </section>

    <section class="workDetail">
      <?php if(get_field('about')) : ?>
        <p class="workDetail_text">
          <?php the_field('about'); ?>
        </p>
      <?php endif; ?>

      <?php if(get_field('URL')) : ?>
        <a href="<?php the_field('URL'); ?>" class="workDetail_content" target="_blank" rel="noopener, noreferrer">
          ・<?php the_field('URL'); ?>
          <img src="<?php  echo get_theme_file_uri('./assets/images/new_window.svg') ?>" alt="新しいタブを開く" class="new_window">
        </a>
      <?php endif ?>
    </section>

  <?php endwhile; endif; ?>


  <ul class="worksPageTransition">

    <?php
      $next_post = get_next_post();
      $next_class = $next_post ? 'workPost_show' : 'workPost_hide';
    ?>
    <li class="transition_nextBtn <?php echo $next_class; ?>">
      <a href="<?php echo $next_post ? get_permalink($next_post->ID) : '#'; ?>">
        <img src="<?php  echo get_theme_file_uri('./assets/images/scrollDown.svg') ?>" alt="Nextの矢印">
        <p>Next</p>
      </a>
    </li>


    <li class="transition_allWorksBtn">
      <a href="<?php echo get_permalink(9); ?>">
        <p>All Works</p>
        <img src="<?php echo get_theme_file_uri('./assets/images/scrollDown.svg') ?>" alt="Nextの矢印">
      </a>
    </li>

    <?php
      $prev_post = get_previous_post();
      $prev_class = $prev_post ? 'workPost_show' : 'workPost_hide';
    ?>
    <li class="transition_prevBtn <?php echo $prev_class; ?>">
      <a href="<?php echo $prev_post ? get_permalink($prev_post->ID) : '#'; ?>">
        <p>Prev</p>
        <img src="<?php echo get_theme_file_uri('./assets/images/scrollDown.svg') ?>" alt="Nextの矢印">
      </a>
    </li>
  </ul>
</main>

<?php get_footer(); ?>