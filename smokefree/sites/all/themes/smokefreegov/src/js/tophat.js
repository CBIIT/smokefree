(function ($) {

  Drupal.behaviors.toggleTopHat = {
    attach: function(context) {
      // Clear/hide appropriate topHat items on collapse/expand
      $("nav.TopHat #toggle-btn").once().click(function() {
        if($("nav.TopHat #toggle-btn").hasClass('collapsed')){
          Drupal.behaviors.expandTopHat();
        }
        else {
          Drupal.behaviors.collapseTopHat();
        }
      });
    }
  };

  Drupal.behaviors.expandTopHat =
      function(context) {
        $("nav.TopHat .toggle-message.expanded").show();
        $("nav.TopHat .toggle-message.collapsed").hide();
        $("nav.TopHat .toggle-message.grid").show();
        $("nav.TopHat .navbar-brand.collapsed").hide();
      };

  Drupal.behaviors.collapseTopHat =
      function(context) {
        $("nav.TopHat .toggle-message.expanded").hide();
        $("nav.TopHat .toggle-message.collapsed").show();
        $("nav.TopHat .toggle-message.grid").hide();
        $("nav.TopHat .navbar-brand.collapsed").show();
      };

})(jQuery);