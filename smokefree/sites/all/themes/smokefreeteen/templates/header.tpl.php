<div class="container-page">
  <?php if (is_teen_homepage()): ?>
      <div class="hero-img <?php print $random_hero_class ?>">
        <div class="cont
        ainer">
          <div class="col-xs-12 col-md-8 col-sm-8">
            <img src="/sites/all/themes/smokefreeteen/dist/images/smokefree-teen-logo.png" alt="" class="large-logo img-responsive" >
            <div>
              <h1>Today is a great day to quit.</h1>
            </div>
          </div>
        </div>
      </div>
  <?php endif;?>
  <div id="sticky-anchor"></div>
  <div id="sticky">
    <div class="container teen-navigation-container">
      <div class="hidden-xs">
        <ul class="teen-homepage-navigation">
          <div class="col-xs-4 left-nav"><a href="#" class="hvr-rectangle-out" target="_blank">BECOME SMOKEFREE</a></div>
          <div class="col-xs-4 mid-nav"><a href="#" class="hvr-rectangle-out" target="_blank">THE RISKS OF TOBACCO</a></div>
          <div class="col-xs-4 right-nav"><a href="#" class="hvr-rectangle-out" target="_blank">WHY DO YOU SMOKE?</a></div>
        </ul>
      </div>
      <div class="visible-xs">
        <div class="dropdown">
          <button class="btn teen-navigation-btn" type="button" id="dropdownMenu" data-toggle="collapse" data-target="#dropdown-content">Explore Smokefree Teen &nbsp;&nbsp; <i class="fa fa-chevron-right rotate" aria-hidden="true"></i>
          </button>
          <div id="dropdown-content" class="collapse">
            <div class="dropdown-content-container">
              <a href="#" target="_blank"><button class="dropdown-item" type="button">Become Smokefree</button></a>
              <a href="#" target="_blank"><button class="dropdown-item" type="button">The Risks of Tobacco</button></a>
              <a href="#" target="_blank"><button class="dropdown-item" type="button">Why Do You Smoke?</button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>