<?php
namespace Drupal\icfi_campaign_landing_page\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Provides route responses for the Example module.
 */
class CampaignLanding extends ControllerBase {

  /**
   * Returns a simple page.
   *
   * @return array
   *   A simple renderable array.
   */
  public function reactApp() {
    $element = array(
      '#markup' => '<div id="root"></div>',
    );
    return $element;
  }

}