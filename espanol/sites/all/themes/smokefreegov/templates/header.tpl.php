<div class="tagline">
  <nav id="cl-effect-4" class="cl-effect-4">
    <p>It doesn't matter where you start. <a href="build-your-quit-plan#cl-effect-4"><strong>Just start.</strong></a>
  </nav>
</div>

<div id="search-header">
  <form method="get"
        action="https://websrch.cit.nih.gov/sps/Smokefree_Espanol/Results.html?"
        name="search"
        onsubmit="javascript:if (document.getElementById('searchbox-header').value=='Search'
							|| document.getElementById('searchbox-header').value=='')
								return false;">
    <input type="hidden" name="getfields"       value="*" />
    <label for="searchbox-header"
           class="hiddenSearch hidden">Search</label>
    <div id="search-header-container">
      <input id="searchbox-header"
             type="text"
             name="query"
             size="30"
             maxlength="255"
             value="Search"
             onfocus="javascript:if (this.value=='Search') this.value='';"
             onblur="javascript:if (this.value == '') this.value ='Search';"
        />&nbsp;&nbsp;
      <input type="submit"
             value="Search"
             alt="Search"
             class="search-button"
             src="/<?php echo drupal_get_path('theme', 'smokefreegov'); ?>/images/content/spacer.png" />
    </div>
  </form>
</div>

<div class="container-page">
  <div id="bg-container">
    <div id="bg-photo"></div>
  </div>
  <!-- begin logo -->
  <div class="logo-container">
    <a href="/" title="Smokefree.gov">
      <div class="logo">
        <div class="logo-image">
          <img src="/<?php echo drupal_get_path('theme', 'smokefreegov'); ?>/images/content/spacer.png"
               alt="Smokefree.gov"
            />
        </div>
      </div>
    </a>
  </div>
  <!-- end logo -->

  <?php if (!empty($primary_nav)
    || !empty($secondary_nav)
    || !empty($page['navigation'])): ?>
    <div class="navbar nav">
      <nav role="navigation">
        <?php
        if (!empty($primary_nav)) {
          print render($primary_nav);
        }
        if (!empty($page['navigation'])) {
          print render($page['navigation']);
        }
        if (!empty($secondary_nav)) {
          print render($secondary_nav);
        }
        ?>
      </nav>
    </div>
    <a href="#"
       class="mobile-btn collapsed"
       data-toggle="collapse"
      ><img src="/<?php echo drupal_get_path('theme', 'smokefreegov'); ?>/images/header/smokefree-hd3-menu-btn-mobile-46x44.png"
            alt="menu"
        /></a>
    <div class="nav-collapse collapse">
      <nav role="navigation">
        <?php
        if (!empty($primary_nav)) {
          print render($primary_nav);
        }
        if (!empty($page['navigation'])) {
          print render($page['navigation']);
        }
        if (!empty($secondary_nav)) {
          print render($secondary_nav);
        }
        ?>
      </nav>
    </div>
    <!-- end class navbar nav -->

  <?php endif; ?>

  <div class="nav-bottom-border"><!--<img src="/<?php echo drupal_get_path('theme', 'smokefreegov'); ?>/images/header/smokefree-hd6-tagline-bottomborder-mobile-4x1.png" alt="" />--></div>