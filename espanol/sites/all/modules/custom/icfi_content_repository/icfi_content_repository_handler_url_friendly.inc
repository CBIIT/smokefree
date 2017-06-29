<?php

class icfi_content_repository_handler_url_friendly extends views_handler_field {
  function option_definition() {
    $options = parent::option_definition();
    return $options;
  }

  function options_form(&$form, &$form_state) {
    parent::options_form($form, $form_state);
  }

  function query() {
    // do nothing -- to override the parent query.
  }

  function render($values) {
    $summary = '';
    foreach (array(
               'field_field_tip',
               'field_field_fact',
               'field_field_myth',
               'field_field_quote',
               'field_field_attribution',
               'field_field_promo_description',
             ) as $fieldname) {
      if (!empty($values->$fieldname)) {
        $fieldvalue = $values->$fieldname;
        if (!empty($fieldvalue[0]['rendered']['#markup'])) {

          switch ($fieldname) {
            case 'field_field_fact':
              $summary .= 'Fact: ' . $fieldvalue[0]['rendered']['#markup'];
              break;

            case 'field_field_myth':
              $summary .= ' Myth: ' . $fieldvalue[0]['rendered']['#markup'];
              break;

            case 'field_field_quote':
              $summary .= '"' . $fieldvalue[0]['rendered']['#markup'] . '"';
              break;

            case 'field_field_attribution':
              $summary .= ' -' . $fieldvalue[0]['rendered']['#markup'] . ' ';
              break;

            default:
              $summary .= $fieldvalue[0]['rendered']['#markup'];
              break;
          }
        }
      }
    }
    $output = rawurlencode($summary);
    return $output;
  }
}