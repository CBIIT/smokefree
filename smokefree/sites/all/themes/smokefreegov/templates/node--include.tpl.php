<?php
$label = 'Fact:';
switch ($content['field_type'][0]['#markup']){
  case 'Crave Tip':
      $description = $content['field_tip'][0]['#markup'];
      break;
  case 'Fact':
    $description = $content['field_fact'][0]['#markup'];
    break;
  case 'Motivational Quote':
    $description = $content['field_quote'][0]['#markup'];
    break;
  case 'Mythbuster':
    $description = $content['field_fact'][0]['#markup'];
    break;
  case 'Promo':
    $description = $content['field_promo_description'][0]['#markup'];
    break;
  case 'Quit Tip':
    $description = $content['field_tip'][0]['#markup'];
    break;
  case 'Testimonial':
    $description = $content['field_quote'][0]['#markup'];
    break;
  default:
      $description = '';
}

// create the og:description tag
$meta_description = array(
  '#tag' => 'meta',
  '#attributes' => array(
    'name' => 'description',
    'content' => $description,
  ),
);

drupal_add_html_head($meta_description, 'meta_description');
?>

<h2 class="quit-note-title">Quit Notes</h2>
<div class="quit-note-text col-lg-6 col-md-6 col-sm-6">
    <div class="fact"><h3><?php print $label; ?></h3></div>
    <div class="description"><p><?php print $description; ?></p></div>
</div>
<div class="quit-note-image col-lg-6 col-md-6 col-sm-6">
<?php
print render($content['field_featured_image_include']);
?>
</div>
