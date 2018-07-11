<div class="container-page">
    <nav class="scrollmenu">
        <div class="container">
            <a href="https://www.smokefree.gov" id="smokefree-gov"><img src="/sites/all/themes/smokefreeteen/dist/images/smokefree-gov.png" alt="smokefree-gov"></a>
            <a href="https://smokefree.gov/veterans" id="smokefree-vet"><img src="/sites/all/themes/smokefreeteen/dist/images/smokefree-vet.png" alt="smokefree-vet"></a>
            <a href="https://women.smokefree.gov" id="smokefree-women"><img src="/sites/all/themes/smokefreeteen/dist/images/smokefree-women.png" alt="smokefree-women"></a>
            <a href="/" id="smokefree-teen" class="active"><span><img src="/sites/all/themes/smokefreeteen/dist/images/smokefree-teen.png" alt="smokefree-teen"></span></a>
            <a href="https://espanol.smokefree.gov" id="smokefree-espanol"><img src="/sites/all/themes/smokefreeteen/dist/images/smokefree-espanol.png" alt="smokefree-espanol"></a>
            <a href="https://60plus.smokefree.gov" id="smokefree-60plus"><img src="/sites/all/themes/smokefreeteen/dist/images/smokefree-60+.png" alt="smokefree-60+"></a>
        </div>
    </nav>
  <?php if (is_teen_homepage()): ?>
      <div class="hero-img <?php print $random_hero_class ?>">
        <div class="container">
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
        <ul class="col-xs-11 teen-homepage-navigation">
          <div class="col-xs-4 left-nav"><a href="/become-smokefree" class="hvr-rectangle-out">BECOME SMOKEFREE</a></div>
          <div class="col-xs-4 mid-nav"><a href="/the-risks-of-tobacco" class="hvr-rectangle-out">THE RISKS OF TOBACCO</a></div>
          <div class="col-xs-4 right-nav"><a href="/tobacco-triggers" class="hvr-rectangle-out">TOBACCO TRIGGERS</a></div>
        </ul>
      </div>
        <div class="hidden-xs nav-bar-icon">
            <span class="glyphicon glyphicon-search nav-search" aria-hidden="true"></span>
        </div>
      <div class="visible-xs">
        <div class="dropdown">
          <button class="btn teen-navigation-btn" type="button" id="dropdownMenu" data-toggle="collapse" data-target="#dropdown-content">Explore Smokefree Teen &nbsp;&nbsp; <i class="fa fa-chevron-right rotate" aria-hidden="true"></i>
          </button>
          <div id="dropdown-content" class="collapse">
            <div class="dropdown-content-container">
              <a href="/become-smokefree"><button class="dropdown-item" type="button">Become Smokefree</button></a>
              <a href="/the-risks-of-tobacco"><button class="dropdown-item" type="button">The Risks of Tobacco</button></a>
              <a href="/tobacco-triggers"><button class="dropdown-item" type="button">Tobacco Triggers</button></a>
            </div>
          </div>
        </div>
      </div>
    <div class="header-col-12 search-bar" >
        <form class="search-bar-form" action="http://staging.websrch.cit.nih.gov/sps/SmokeFree/Results.html?" method="get" name="search" onsubmit="javascript:if (document.getElementById('searchbox-header').value=='Search'
                        || document.getElementById('searchbox-header').value=='')
                            return false;" _lpchecked="1">
            <input name="site" type="hidden" value="SMOKEFREE"> <input name="client" type="hidden" value="SMOKEFREE_frontend"> <input name="proxystylesheet" type="hidden" value="SMOKEFREE_frontend"> <input name="output" type="hidden" value="xml_no_dtd"> <input name="filter" type="hidden" value="0"> <input name="getfields" type="hidden" value="*">
            <div class="search-bar-group">
                <label for="teen-searchbox-header-input" class="sr-only">Search</label>
                <input maxlength="255" name="query" id="teen-searchbox-header-input" onblur="javascript:if (this.value == '') this.value ='Search';" onfocus="javascript:if (this.value=='Search') this.value='';" size="30" type="text" value="Search" class="search-bar-input" placeholder="Search">
                <button type="submit" value="Search" class="btn btn-default">Submit</button>
                <a class="closebtn">&times;</a>
            </div>
      </form>
  </div>
  </div>
  </div>
    <div class="visible-xs">
        <div class="header-col-12 mobile-search-bar" >
            <form class="search-bar-form" action="http://staging.websrch.cit.nih.gov/sps/SmokeFree/Results.html?" method="get" name="search" onsubmit="javascript:if (document.getElementById('searchbox-header').value=='Search'
                        || document.getElementById('searchbox-header').value=='')
                            return false;" _lpchecked="1">
                <input name="site" type="hidden" value="SMOKEFREE"> <input name="client" type="hidden" value="SMOKEFREE_frontend"> <input name="proxystylesheet" type="hidden" value="SMOKEFREE_frontend"> <input name="output" type="hidden" value="xml_no_dtd"> <input name="filter" type="hidden" value="0"> <input name="getfields" type="hidden" value="*">
                <div class="search-bar-group">
                    <label for="teen-searchbox-header-input" class="sr-only">Search</label>
                    <input maxlength="255" name="query" id="teen-searchbox-header-input" onblur="javascript:if (this.value == '') this.value ='Search';" onfocus="javascript:if (this.value=='Search') this.value='';" size="30" type="text" value="Search" class="search-bar-input" placeholder="Search">
                    <button type="submit" value="Search" class="btn btn-default">Submit</button>
                </div>
            </form>
        </div>
    </div>