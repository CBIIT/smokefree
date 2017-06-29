<?php
/**
 * @file
 * icfi_footer_menu.features.menu_links.inc
 */

/**
 * Implements hook_menu_default_menu_links().
 */
function icfi_footer_menu_menu_default_menu_links() {
  $menu_links = array();

  // Exported menu link: menu-footer_about-smokefreegov:node/1.
  $menu_links['menu-footer_about-smokefreegov:node/1'] = array(
    'menu_name' => 'menu-footer',
    'link_path' => 'node/1',
    'router_path' => 'node/%',
    'link_title' => 'About Smokefree.gov',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'menu-footer_about-smokefreegov:node/1',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 1,
    'expanded' => 0,
    'weight' => -45,
    'customized' => 1,
  );
  // Exported menu link: menu-footer_benefits-of-quitting:node/342.
  $menu_links['menu-footer_benefits-of-quitting:node/342'] = array(
    'menu_name' => 'menu-footer',
    'link_path' => 'node/342',
    'router_path' => 'node/%',
    'link_title' => 'Benefits of Quitting',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'menu-footer_benefits-of-quitting:node/342',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -45,
    'customized' => 1,
    'parent_identifier' => 'menu-footer_quitting-smoking:node/389',
  );
  // Exported menu link: menu-footer_cravings--triggers:node/396.
  $menu_links['menu-footer_cravings--triggers:node/396'] = array(
    'menu_name' => 'menu-footer',
    'link_path' => 'node/396',
    'router_path' => 'node/%',
    'link_title' => 'Cravings & Triggers',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'menu-footer_cravings--triggers:node/396',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -50,
    'customized' => 1,
    'parent_identifier' => 'menu-footer_challenges-when-quitting:node/397',
  );
  // Exported menu link: menu-footer_create-my-quit-plan:build-your-quit-plan.
  $menu_links['menu-footer_create-my-quit-plan:build-your-quit-plan'] = array(
    'menu_name' => 'menu-footer',
    'link_path' => 'build-your-quit-plan',
    'router_path' => 'build-your-quit-plan',
    'link_title' => 'Create My Quit Plan',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'menu-footer_create-my-quit-plan:build-your-quit-plan',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -50,
    'customized' => 1,
    'parent_identifier' => 'menu-footer_tools--tips:node/398',
  );
  // Exported menu link: menu-footer_e-cigs-dips--more:node/391.
  $menu_links['menu-footer_e-cigs-dips--more:node/391'] = array(
    'menu_name' => 'menu-footer',
    'link_path' => 'node/391',
    'router_path' => 'node/%',
    'link_title' => 'E-Cigs, Dips, & More',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'menu-footer_e-cigs-dips--more:node/391',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -48,
    'customized' => 1,
    'parent_identifier' => 'menu-footer_understanding-smoking:node/390',
  );
  // Exported menu link: menu-footer_eat-healthy:node/393.
  $menu_links['menu-footer_eat-healthy:node/393'] = array(
    'menu_name' => 'menu-footer',
    'link_path' => 'node/393',
    'router_path' => 'node/%',
    'link_title' => 'Eat Healthy',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'menu-footer_eat-healthy:node/393',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -47,
    'customized' => 1,
    'parent_identifier' => 'menu-footer_staying-smokefree-for-good:node/410',
  );
  // Exported menu link: menu-footer_explore-quit-methods:node/384.
  $menu_links['menu-footer_explore-quit-methods:node/384'] = array(
    'menu_name' => 'menu-footer',
    'link_path' => 'node/384',
    'router_path' => 'node/%',
    'link_title' => 'Explore Quit Methods',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'menu-footer_explore-quit-methods:node/384',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -49,
    'customized' => 1,
    'parent_identifier' => 'menu-footer_tools--tips:node/398',
  );
  // Exported menu link: menu-footer_get-active:node/394.
  $menu_links['menu-footer_get-active:node/394'] = array(
    'menu_name' => 'menu-footer',
    'link_path' => 'node/394',
    'router_path' => 'node/%',
    'link_title' => 'Get Active',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'menu-footer_get-active:node/394',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -48,
    'customized' => 1,
    'parent_identifier' => 'menu-footer_staying-smokefree-for-good:node/410',
  );
  // Exported menu link: menu-footer_help-others-quit:node/392.
  $menu_links['menu-footer_help-others-quit:node/392'] = array(
    'menu_name' => 'menu-footer',
    'link_path' => 'node/392',
    'router_path' => 'node/%',
    'link_title' => 'Help Others Quit',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'menu-footer_help-others-quit:node/392',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -47,
    'customized' => 1,
    'parent_identifier' => 'menu-footer_understanding-smoking:node/390',
  );
  // Exported menu link: menu-footer_managing-withdrawal:node/382.
  $menu_links['menu-footer_managing-withdrawal:node/382'] = array(
    'menu_name' => 'menu-footer',
    'link_path' => 'node/382',
    'router_path' => 'node/%',
    'link_title' => 'Managing Withdrawal',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'menu-footer_managing-withdrawal:node/382',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -49,
    'customized' => 1,
    'parent_identifier' => 'menu-footer_challenges-when-quitting:node/397',
  );
  // Exported menu link: menu-footer_phone-apps:node/162.
  $menu_links['menu-footer_phone-apps:node/162'] = array(
    'menu_name' => 'menu-footer',
    'link_path' => 'node/162',
    'router_path' => 'node/%',
    'link_title' => 'Phone Apps',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'menu-footer_phone-apps:node/162',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -48,
    'customized' => 1,
    'parent_identifier' => 'menu-footer_tools--tips:node/398',
  );
  // Exported menu link: menu-footer_prepare-to-quit:node/328.
  $menu_links['menu-footer_prepare-to-quit:node/328'] = array(
    'menu_name' => 'menu-footer',
    'link_path' => 'node/328',
    'router_path' => 'node/%',
    'link_title' => 'Prepare To Quit',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'menu-footer_prepare-to-quit:node/328',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -49,
    'customized' => 1,
    'parent_identifier' => 'menu-footer_quitting-smoking:node/389',
  );
  // Exported menu link: menu-footer_quitting-smoking:node/389.
  $menu_links['menu-footer_quitting-smoking:node/389'] = array(
    'menu_name' => 'menu-footer',
    'link_path' => 'node/389',
    'router_path' => 'node/%',
    'link_title' => 'Quitting Smoking',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'menu-footer_quitting-smoking:node/389',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 1,
    'expanded' => 0,
    'weight' => -48,
    'customized' => 1,
  );
  // Exported menu link: menu-footer_reasons-to-quit:node/339.
  $menu_links['menu-footer_reasons-to-quit:node/339'] = array(
    'menu_name' => 'menu-footer',
    'link_path' => 'node/339',
    'router_path' => 'node/%',
    'link_title' => 'Reasons To Quit',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'menu-footer_reasons-to-quit:node/339',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -50,
    'customized' => 1,
    'parent_identifier' => 'menu-footer_quitting-smoking:node/389',
  );
  // Exported menu link: menu-footer_secondhand-smoke:node/266.
  $menu_links['menu-footer_secondhand-smoke:node/266'] = array(
    'menu_name' => 'menu-footer',
    'link_path' => 'node/266',
    'router_path' => 'node/%',
    'link_title' => 'Secondhand Smoke',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'menu-footer_secondhand-smoke:node/266',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -50,
    'customized' => 1,
    'parent_identifier' => 'menu-footer_understanding-smoking:node/390',
  );
  // Exported menu link: menu-footer_slips-and-relapses:node/386.
  $menu_links['menu-footer_slips-and-relapses:node/386'] = array(
    'menu_name' => 'menu-footer',
    'link_path' => 'node/386',
    'router_path' => 'node/%',
    'link_title' => 'Slips and Relapses',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'menu-footer_slips-and-relapses:node/386',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -49,
    'customized' => 1,
    'parent_identifier' => 'menu-footer_staying-smokefree-for-good:node/410',
  );
  // Exported menu link: menu-footer_speak-to-an-expert:node/329.
  $menu_links['menu-footer_speak-to-an-expert:node/329'] = array(
    'menu_name' => 'menu-footer',
    'link_path' => 'node/329',
    'router_path' => 'node/%',
    'link_title' => 'Speak To An Expert',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'menu-footer_speak-to-an-expert:node/329',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -46,
    'customized' => 1,
    'parent_identifier' => 'menu-footer_tools--tips:node/398',
  );
  // Exported menu link: menu-footer_stress--mood:node/395.
  $menu_links['menu-footer_stress--mood:node/395'] = array(
    'menu_name' => 'menu-footer',
    'link_path' => 'node/395',
    'router_path' => 'node/%',
    'link_title' => 'Stress & Mood',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'menu-footer_stress--mood:node/395',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -48,
    'customized' => 1,
    'parent_identifier' => 'menu-footer_challenges-when-quitting:node/397',
  );
  // Exported menu link: menu-footer_tools--tips:node/398.
  $menu_links['menu-footer_tools--tips:node/398'] = array(
    'menu_name' => 'menu-footer',
    'link_path' => 'node/398',
    'router_path' => 'node/%',
    'link_title' => 'Tools & Tips',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'menu-footer_tools--tips:node/398',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 1,
    'expanded' => 0,
    'weight' => -50,
    'customized' => 1,
  );
  // Exported menu link: menu-footer_understanding-smoking:node/390.
  $menu_links['menu-footer_understanding-smoking:node/390'] = array(
    'menu_name' => 'menu-footer',
    'link_path' => 'node/390',
    'router_path' => 'node/%',
    'link_title' => 'Understanding Smoking',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'menu-footer_understanding-smoking:node/390',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 1,
    'expanded' => 0,
    'weight' => -46,
    'customized' => 1,
  );
  // Exported menu link: menu-footer_using-nicotine-replacement-therapy:node/352.
  $menu_links['menu-footer_using-nicotine-replacement-therapy:node/352'] = array(
    'menu_name' => 'menu-footer',
    'link_path' => 'node/352',
    'router_path' => 'node/%',
    'link_title' => 'Using Nicotine Replacement Therapy',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'menu-footer_using-nicotine-replacement-therapy:node/352',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -45,
    'customized' => 1,
    'parent_identifier' => 'menu-footer_tools--tips:node/398',
  );
  // Exported menu link: menu-footer_why-quitting-is-hard:node/247.
  $menu_links['menu-footer_why-quitting-is-hard:node/247'] = array(
    'menu_name' => 'menu-footer',
    'link_path' => 'node/247',
    'router_path' => 'node/%',
    'link_title' => 'Why Quitting Is Hard',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'menu-footer_why-quitting-is-hard:node/247',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -47,
    'customized' => 1,
    'parent_identifier' => 'menu-footer_quitting-smoking:node/389',
  );

  // Translatables
  // Included for use with string extractors like potx.
  t('About Smokefree.gov');
  t('Benefits of Quitting');
  t('Cravings & Triggers');
  t('Create My Quit Plan');
  t('E-Cigs, Dips, & More');
  t('Eat Healthy');
  t('Explore Quit Methods');
  t('Get Active');
  t('Help Others Quit');
  t('Managing Withdrawal');
  t('Phone Apps');
  t('Prepare To Quit');
  t('Quitting Smoking');
  t('Reasons To Quit');
  t('Secondhand Smoke');
  t('Slips and Relapses');
  t('Speak To An Expert');
  t('Stress & Mood');
  t('Tools & Tips');
  t('Understanding Smoking');
  t('Using Nicotine Replacement Therapy');
  t('Why Quitting Is Hard');

  return $menu_links;
}
