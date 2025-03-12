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
        <?php the_post_thumbnail('medium'); ?>
      </div>
      <p class="workHead_date"><?php the_time('Y.m.d') ?></p>
    </section>
    <section class="workDetail">
      <p class="workDetail_text">
        <?php the_field('about'); ?>
      </p>
      <a href="<?php the_field('URL'); ?>" class="workDetail_content">
        <?php the_field('URL'); ?>
      </a>
    </section>

  <?php endwhile; endif; ?>
  <ul class="worksPageTransition">
    <li class="transition_nextBtn">
      <a href="#">
        <img src="./assets/images/scrollDown.svg" alt="Nextの矢印">
        <p>Next</p>
      </a>
    </li>
    <li class="transition_allWorksBtn">
      <a href="works.html">
        <p>All Works</p>
        <img src="./assets/images/scrollDown.svg" alt="Nextの矢印">
      </a>
    </li>
    <li class="transition_prevBtn">
      <a href="#">
        <p>Prev</p>
        <img src="./assets/images/scrollDown.svg" alt="Nextの矢印">
      </a>
    </li>
  </ul>
</main>

<?php get_footer(); ?>