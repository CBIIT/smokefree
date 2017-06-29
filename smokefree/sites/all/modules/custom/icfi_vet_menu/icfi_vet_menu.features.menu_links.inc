<?php
/**
 * @file
 * icfi_vet_menu.features.menu_links.inc
 */

/**
 * Implements hook_menu_default_menu_links().
 */
function icfi_vet_menu_menu_default_menu_links() {
  $menu_links = array();

  // Exported menu link: menu-veterans-menu_about-smokefreevet:node/667.
  $menu_links['menu-veterans-menu_about-smokefreevet:node/667'] = array(
    'menu_name' => 'menu-veterans-menu',
    'link_path' => 'node/667',
    'router_path' => 'node/%',
    'link_title' => 'About SmokefreeVET',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'menu-veterans-menu_about-smokefreevet:node/667',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -45,
    'customized' => 1,
  );
  // Exported menu link: menu-veterans-menu_build-your-quit-plan:node/163.
  $menu_links['menu-veterans-menu_build-your-quit-plan:node/163'] = array(
    'menu_name' => 'menu-veterans-menu',
    'link_path' => 'node/163',
    'router_path' => 'node/%',
    'link_title' => 'Build Your Quit Plan',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'menu-veterans-menu_build-your-quit-plan:node/163',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -50,
    'customized' => 1,
    'parent_identifier' => 'menu-veterans-menu_tools-to-help-you-quit:node/680',
  );
  // Exported menu link: menu-veterans-menu_celebrate-success:node/672.
  $menu_links['menu-veterans-menu_celebrate-success:node/672'] = array(
    'menu_name' => 'menu-veterans-menu',
    'link_path' => 'node/672',
    'router_path' => 'node/%',
    'link_title' => 'Celebrate Success',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'menu-veterans-menu_celebrate-success:node/672',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -47,
    'customized' => 1,
    'parent_identifier' => 'menu-veterans-menu_help-to-quit-smoking:node/678',
  );
  // Exported menu link: menu-veterans-menu_common-questions--answers:node/673.
  $menu_links['menu-veterans-menu_common-questions--answers:node/673'] = array(
    'menu_name' => 'menu-veterans-menu',
    'link_path' => 'node/673',
    'router_path' => 'node/%',
    'link_title' => 'Common Questions & Answers',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'menu-veterans-menu_common-questions--answers:node/673',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -46,
    'customized' => 1,
    'parent_identifier' => 'menu-veterans-menu_help-to-quit-smoking:node/678',
  );
  // Exported menu link: menu-veterans-menu_get-help-from-medications:node/668.
  $menu_links['menu-veterans-menu_get-help-from-medications:node/668'] = array(
    'menu_name' => 'menu-veterans-menu',
    'link_path' => 'node/668',
    'router_path' => 'node/%',
    'link_title' => 'Get Help from Medications',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'menu-veterans-menu_get-help-from-medications:node/668',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -50,
    'customized' => 1,
    'parent_identifier' => 'menu-veterans-menu_help-to-quit-smoking:node/678',
  );
  // Exported menu link: menu-veterans-menu_get-support:node/671.
  $menu_links['menu-veterans-menu_get-support:node/671'] = array(
    'menu_name' => 'menu-veterans-menu',
    'link_path' => 'node/671',
    'router_path' => 'node/%',
    'link_title' => 'Get Support',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'menu-veterans-menu_get-support:node/671',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -48,
    'customized' => 1,
    'parent_identifier' => 'menu-veterans-menu_help-to-quit-smoking:node/678',
  );
  // Exported menu link: menu-veterans-menu_help-to-quit-smoking:node/678.
  $menu_links['menu-veterans-menu_help-to-quit-smoking:node/678'] = array(
    'menu_name' => 'menu-veterans-menu',
    'link_path' => 'node/678',
    'router_path' => 'node/%',
    'link_title' => 'Help to Quit Smoking',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'menu-veterans-menu_help-to-quit-smoking:node/678',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 1,
    'expanded' => 0,
    'weight' => -48,
    'customized' => 1,
  );
  // Exported menu link: menu-veterans-menu_how-quitting-improves-your-health:node/665.
  $menu_links['menu-veterans-menu_how-quitting-improves-your-health:node/665'] = array(
    'menu_name' => 'menu-veterans-menu',
    'link_path' => 'node/665',
    'router_path' => 'node/%',
    'link_title' => 'How Quitting Improves Your Health',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'menu-veterans-menu_how-quitting-improves-your-health:node/665',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -48,
    'customized' => 1,
    'parent_identifier' => 'menu-veterans-menu_reasons-to-quit:node/677',
  );
  // Exported menu link: menu-veterans-menu_how-smoking-affects-your-health:node/664.
  $menu_links['menu-veterans-menu_how-smoking-affects-your-health:node/664'] = array(
    'menu_name' => 'menu-veterans-menu',
    'link_path' => 'node/664',
    'router_path' => 'node/%',
    'link_title' => 'How Smoking Affects Your Health',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'menu-veterans-menu_how-smoking-affects-your-health:node/664',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -49,
    'customized' => 1,
    'parent_identifier' => 'menu-veterans-menu_reasons-to-quit:node/677',
  );
  // Exported menu link: menu-veterans-menu_how-to-quit-smokeless-tobacco:node/675.
  $menu_links['menu-veterans-menu_how-to-quit-smokeless-tobacco:node/675'] = array(
    'menu_name' => 'menu-veterans-menu',
    'link_path' => 'node/675',
    'router_path' => 'node/%',
    'link_title' => 'How to Quit Smokeless Tobacco',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'menu-veterans-menu_how-to-quit-smokeless-tobacco:node/675',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -49,
    'customized' => 1,
    'parent_identifier' => 'menu-veterans-menu_quit-smokeless-tobacco:node/679',
  );
  // Exported menu link: menu-veterans-menu_manage-the-challenges-of-quitting:node/669.
  $menu_links['menu-veterans-menu_manage-the-challenges-of-quitting:node/669'] = array(
    'menu_name' => 'menu-veterans-menu',
    'link_path' => 'node/669',
    'router_path' => 'node/%',
    'link_title' => 'Manage the Challenges of Quitting',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'menu-veterans-menu_manage-the-challenges-of-quitting:node/669',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -49,
    'customized' => 1,
    'parent_identifier' => 'menu-veterans-menu_help-to-quit-smoking:node/678',
  );
  // Exported menu link: menu-veterans-menu_more-resources-to-help-you-quit:node/670.
  $menu_links['menu-veterans-menu_more-resources-to-help-you-quit:node/670'] = array(
    'menu_name' => 'menu-veterans-menu',
    'link_path' => 'node/670',
    'router_path' => 'node/%',
    'link_title' => 'More Resources to Help You Quit',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'menu-veterans-menu_more-resources-to-help-you-quit:node/670',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -47,
    'customized' => 1,
    'parent_identifier' => 'menu-veterans-menu_tools-to-help-you-quit:node/680',
  );
  // Exported menu link: menu-veterans-menu_nicotine-addiction:veterans/nicotine-addiction/.
  $menu_links['menu-veterans-menu_nicotine-addiction:veterans/nicotine-addiction/'] = array(
    'menu_name' => 'menu-veterans-menu',
    'link_path' => 'veterans/nicotine-addiction/',
    'router_path' => 'veterans',
    'link_title' => 'Nicotine Addiction',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'menu-veterans-menu_nicotine-addiction:veterans/nicotine-addiction/',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 1,
    'expanded' => 0,
    'weight' => -50,
    'customized' => 1,
  );
  // Exported menu link: menu-veterans-menu_quit-smokeless-tobacco:node/679.
  $menu_links['menu-veterans-menu_quit-smokeless-tobacco:node/679'] = array(
    'menu_name' => 'menu-veterans-menu',
    'link_path' => 'node/679',
    'router_path' => 'node/%',
    'link_title' => 'Quit Smokeless Tobacco',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'menu-veterans-menu_quit-smokeless-tobacco:node/679',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 1,
    'expanded' => 0,
    'weight' => -47,
    'customized' => 1,
  );
  // Exported menu link: menu-veterans-menu_quiz-why-i-use-tobacco:node/149.
  $menu_links['menu-veterans-menu_quiz-why-i-use-tobacco:node/149'] = array(
    'menu_name' => 'menu-veterans-menu',
    'link_path' => 'node/149',
    'router_path' => 'node/%',
    'link_title' => 'Quiz: Why I Use Tobacco',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'menu-veterans-menu_quiz-why-i-use-tobacco:node/149',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 1,
    'parent_identifier' => 'menu-veterans-menu_nicotine-addiction:veterans/nicotine-addiction/',
  );
  // Exported menu link: menu-veterans-menu_reasons-people-smoke:node/662.
  $menu_links['menu-veterans-menu_reasons-people-smoke:node/662'] = array(
    'menu_name' => 'menu-veterans-menu',
    'link_path' => 'node/662',
    'router_path' => 'node/%',
    'link_title' => 'Reasons People Smoke',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'menu-veterans-menu_reasons-people-smoke:node/662',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -50,
    'customized' => 1,
    'parent_identifier' => 'menu-veterans-menu_nicotine-addiction:veterans/nicotine-addiction/',
  );
  // Exported menu link: menu-veterans-menu_reasons-to-quit:node/677.
  $menu_links['menu-veterans-menu_reasons-to-quit:node/677'] = array(
    'menu_name' => 'menu-veterans-menu',
    'link_path' => 'node/677',
    'router_path' => 'node/%',
    'link_title' => 'Reasons to Quit',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'menu-veterans-menu_reasons-to-quit:node/677',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 1,
    'expanded' => 0,
    'weight' => -49,
    'customized' => 1,
  );
  // Exported menu link: menu-veterans-menu_smokefreevet-en-espaol:node/491.
  $menu_links['menu-veterans-menu_smokefreevet-en-espaol:node/491'] = array(
    'menu_name' => 'menu-veterans-menu',
    'link_path' => 'node/491',
    'router_path' => 'node/%',
    'link_title' => 'SmokefreeVET en Español',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'menu-veterans-menu_smokefreevet-en-espaol:node/491',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -48,
    'customized' => 1,
    'parent_identifier' => 'menu-veterans-menu_tools-to-help-you-quit:node/680',
  );
  // Exported menu link: menu-veterans-menu_smokefreevet:node/659.
  $menu_links['menu-veterans-menu_smokefreevet:node/659'] = array(
    'menu_name' => 'menu-veterans-menu',
    'link_path' => 'node/659',
    'router_path' => 'node/%',
    'link_title' => 'SmokefreeVET',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'menu-veterans-menu_smokefreevet:node/659',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -49,
    'customized' => 1,
    'parent_identifier' => 'menu-veterans-menu_tools-to-help-you-quit:node/680',
  );
  // Exported menu link: menu-veterans-menu_smokeless-tobacco-get-the-facts:node/674.
  $menu_links['menu-veterans-menu_smokeless-tobacco-get-the-facts:node/674'] = array(
    'menu_name' => 'menu-veterans-menu',
    'link_path' => 'node/674',
    'router_path' => 'node/%',
    'link_title' => 'Smokeless Tobacco: Get the Facts',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'menu-veterans-menu_smokeless-tobacco-get-the-facts:node/674',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -50,
    'customized' => 1,
    'parent_identifier' => 'menu-veterans-menu_quit-smokeless-tobacco:node/679',
  );
  // Exported menu link: menu-veterans-menu_tobacco-use--other-health-issues:node/666.
  $menu_links['menu-veterans-menu_tobacco-use--other-health-issues:node/666'] = array(
    'menu_name' => 'menu-veterans-menu',
    'link_path' => 'node/666',
    'router_path' => 'node/%',
    'link_title' => 'Tobacco Use & Other Health Issues',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'menu-veterans-menu_tobacco-use--other-health-issues:node/666',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -47,
    'customized' => 1,
    'parent_identifier' => 'menu-veterans-menu_reasons-to-quit:node/677',
  );
  // Exported menu link: menu-veterans-menu_tools-to-help-you-quit:node/680.
  $menu_links['menu-veterans-menu_tools-to-help-you-quit:node/680'] = array(
    'menu_name' => 'menu-veterans-menu',
    'link_path' => 'node/680',
    'router_path' => 'node/%',
    'link_title' => 'Tools to Help You Quit',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'menu-veterans-menu_tools-to-help-you-quit:node/680',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 1,
    'expanded' => 0,
    'weight' => -46,
    'customized' => 1,
  );
  // Exported menu link: menu-veterans-menu_your-reasons-to-quit:node/663.
  $menu_links['menu-veterans-menu_your-reasons-to-quit:node/663'] = array(
    'menu_name' => 'menu-veterans-menu',
    'link_path' => 'node/663',
    'router_path' => 'node/%',
    'link_title' => 'Your Reasons to Quit',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'menu-veterans-menu_your-reasons-to-quit:node/663',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -50,
    'customized' => 1,
    'parent_identifier' => 'menu-veterans-menu_reasons-to-quit:node/677',
  );

  // Translatables
  // Included for use with string extractors like potx.
  t('About SmokefreeVET');
  t('Build Your Quit Plan');
  t('Celebrate Success');
  t('Common Questions & Answers');
  t('Get Help from Medications');
  t('Get Support');
  t('Help to Quit Smoking');
  t('How Quitting Improves Your Health');
  t('How Smoking Affects Your Health');
  t('How to Quit Smokeless Tobacco');
  t('Manage the Challenges of Quitting');
  t('More Resources to Help You Quit');
  t('Nicotine Addiction');
  t('Quit Smokeless Tobacco');
  t('Quiz: Why I Use Tobacco');
  t('Reasons People Smoke');
  t('Reasons to Quit');
  t('SmokefreeVET');
  t('SmokefreeVET en Español');
  t('Smokeless Tobacco: Get the Facts');
  t('Tobacco Use & Other Health Issues');
  t('Tools to Help You Quit');
  t('Your Reasons to Quit');

  return $menu_links;
}
